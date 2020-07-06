/* eslint-disable @typescript-eslint/no-explicit-any */
import useLogger, { Logger } from "../logger/useLogger";

import { executeScript } from "../chrome/executeScript";
import { nanoid } from "nanoid";
import once from "./once";
import queryTabs from "../chrome/queryTabs";
import usePromise from "./usePromise";

type Unpromisify<T> = T extends Promise<infer U> ? U : T;

declare let _executionId: string;
declare let _executionContext: string;

interface Executed {
  executionId: string;
  payload: unknown;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useExecutionRPC({
  logger = useLogger(),
}: { logger?: Logger } = {}) {
  async function serve<F extends (...args: any) => Promise<any>>(
    functionName: string,
    fn: F
  ) {
    const args = JSON.parse(_executionContext) as Parameters<F>;
    logger.debug(_executionId, `Call delegate`, functionName, `with`, args);
    try {
      const result = await fn(...args);
      logger.debug(_executionId, functionName, result);

      chrome.runtime.sendMessage({
        executionId: _executionId,
        payload: result,
      });
    } catch (error) {
      logger.debug(_executionId, functionName, error);
      chrome.runtime.sendMessage({ executionId: _executionId, payload: error });
    }
  }

  const promiseMap: {
    [executionId: string]: {
      resolve: (value: any) => void;
      reject: (error?: Error) => void;
    };
  } = {};

  function listen() {
    chrome.runtime.onMessage.addListener(async (request) => {
      const { executionId, payload } = request as Executed;
      logger.debug(`Listen from execution`, request);
      if (executionId && executionId in promiseMap) {
        if (payload instanceof Error) {
          promiseMap[executionId].reject(payload);
        } else {
          promiseMap[executionId].resolve(payload);
        }
        delete promiseMap[executionId];
      }
    });
  }

  const listenOnce = once(listen);

  function stub<F extends (...args: any) => Promise<any>>(
    functionName: string
  ) {
    listenOnce();
    return async function delegate(
      ...args: Parameters<F>
    ): Promise<Unpromisify<ReturnType<F>>> {
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      const tabId = (await queryTabs({ active: true, currentWindow: true }))[0]
        ?.id!;

      const thisExecutionId = nanoid();
      logger.debug(`Run query on tab`, tabId, `with`, thisExecutionId);

      const { promise, resolve, reject } = usePromise<
        Unpromisify<ReturnType<F>>
      >();
      promiseMap[thisExecutionId] = { resolve, reject };

      logger.debug({ tabId, thisExecutionId }, `Setup context`);
      await executeScript(tabId, {
        code: `var _executionId = "${thisExecutionId}"; var _executionContext = "${JSON.stringify(
          args
        )}";`,
      });

      logger.debug({ tabId, thisExecutionId, functionName }, `Run function`);
      await executeScript(tabId, { file: `execute.${functionName}.js` });
      return promise;
    };
  }
  return { serve, stub };
}
