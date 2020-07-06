import * as rpcTypes from "./rpc-types";

import goToOptions from "./chrome/goToOptions";
import useExecutionRPC from "./rpc/useExecutionRPC";
import useMessageRPC from "./rpc/useMessageRPC";

console.log("I am background!");

const mrpc = useMessageRPC();

const popup = mrpc.stub<rpcTypes.RepeatString>(rpcTypes.repeatString);

mrpc.serve<rpcTypes.SayHello>(
  rpcTypes.sayHello,
  async (name: string): Promise<string> => {
    return `Hi, there! ${name}! ` + (await popup("Go!", 10));
  }
);

const addTwoNumber = useExecutionRPC().stub<rpcTypes.AddTwoNumber>(
  rpcTypes.addTwoNumber
);

chrome.contextMenus.create({
  title: "foobar",
  onclick: async (click) => {
    console.log(click);
    console.log(await addTwoNumber(100, 300));
    goToOptions();
  },
  documentUrlPatterns: ["*://*/*"],
});
