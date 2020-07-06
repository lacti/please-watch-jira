/* eslint-disable @typescript-eslint/no-explicit-any */
import useLogger, { Logger } from "../logger/useLogger";

import Unpromisify from "./unpromisify";
import { nanoid } from "nanoid";
import once from "./once";
import usePromise from "./usePromise";

interface Call {
  callId: string;
}

interface Invoke extends Call {
  functionName: string;
  payload: unknown[];
}

interface Return extends Call {
  callId: string;
  payload?: unknown;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useMessageRPC({
  logger = useLogger(),
}: { logger?: Logger } = {}) {
  const functionMap: {
    [functionName: string]: <Args extends unknown[], ReturnType>(
      ...payload: Args
    ) => Promise<ReturnType>;
  } = {};
  const promiseMap: {
    [callId: string]: {
      resolve: (value: any) => void;
      reject: (error?: Error) => void;
    };
  } = {};

  function listen() {
    chrome.runtime.onMessage.addListener(async (request) => {
      logger.debug(`Receive message`, request);
      const { callId } = request as Call;
      if (!callId) {
        return;
      }

      const { functionName } = request as Invoke;
      if (functionName) {
        const { payload } = request as Invoke;
        logger.debug(callId, `Call function`, functionName, `with`, payload);
        try {
          const result = await functionMap[functionName](...payload);
          logger.debug(`Return function`, functionName, `with`, result);
          chrome.runtime.sendMessage({ callId, payload: result });
        } catch (error) {
          chrome.runtime.sendMessage({ callId, error });
          logger.debug(`Error function`, functionName, `with`, error);
        }
      } else if (callId in promiseMap) {
        const { payload } = request as Return;
        logger.debug(`Receive return`, callId, payload);
        if (payload instanceof Error) {
          promiseMap[callId].reject(payload);
        } else {
          promiseMap[callId].resolve(payload);
          delete promiseMap[callId];
        }
      }
    });
  }

  const listenOnce = once(listen);

  function serve<F extends (...args: any) => Promise<any>>(
    functionName: string,
    fn: F
  ) {
    listenOnce();
    functionMap[functionName] = fn;
  }

  function stub<F extends (...args: any) => Promise<any>>(
    functionName: string
  ) {
    listenOnce();
    return async function delegate(
      ...args: Parameters<F>
    ): Promise<Unpromisify<ReturnType<F>>> {
      const callId = nanoid();
      const { promise, resolve, reject } = usePromise<
        Unpromisify<ReturnType<F>>
      >();
      promiseMap[callId] = { resolve, reject };
      logger.debug(`Request call`, callId, functionName, args);
      chrome.runtime.sendMessage({
        functionName: functionName,
        callId,
        payload: args,
      });
      return promise;
    };
  }

  return { serve, stub };
}
