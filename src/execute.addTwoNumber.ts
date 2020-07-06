import * as rpcTypes from "./rpc-types";

import useExecutionRPC from "./rpc/useExecutionRPC";

useExecutionRPC().serve(
  rpcTypes.addTwoNumber,
  async (a: number, b: number): Promise<number> => {
    return a * 11 + b * 3;
  }
);
