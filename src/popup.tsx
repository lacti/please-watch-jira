import "./popup.css";

import * as React from "react";
import * as rpcTypes from "./rpc-types";

import { Card, Code, CssBaseline, ZeitProvider } from "@zeit-ui/react";

import { render } from "react-dom";
import useExecutionRPC from "./rpc/useExecutionRPC";
import useMessageRPC from "./rpc/useMessageRPC";
import useStorage from "./chrome/useStorage";

const mrpc = useMessageRPC();
mrpc.serve<rpcTypes.RepeatString>(
  rpcTypes.repeatString,
  async (t: string, u: number) => {
    console.info(`Called popup!`, t, u);
    return Array(u)
      .fill(0)
      .map(() => t)
      .join("");
  }
);

const hello = mrpc.stub<rpcTypes.SayHello>(rpcTypes.sayHello);

const erpc = useExecutionRPC();

const run = erpc.stub<rpcTypes.AddTwoNumber>(rpcTypes.addTwoNumber);

const { get, put } = useStorage();

interface Context {
  name: string;
}

function App() {
  const [code, setCode] = React.useState<string>("");

  function testExecuteScript() {
    put("context", { name: "lacti/" + new Date().toISOString() });
    run(100, 200).then((result) => setCode(`Execution result: ${result}`));
  }

  function testSendMessage() {
    get<Context>("context")
      .then((ctx) => hello(ctx?.name ?? "lacti"))
      .then((result) => setCode(`MessageRPC result: ${result}`));
  }

  return (
    <Card>
      <h1>Hello, popup</h1>
      <button onClick={testExecuteScript}>Click me!</button>
      <button onClick={testSendMessage}>Broadcast</button>
      <Code block>{code}</Code>
    </Card>
  );
}

render(
  <ZeitProvider>
    <CssBaseline />
    <App />
  </ZeitProvider>,
  document.getElementById("App")
);
