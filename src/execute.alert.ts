import * as rpcTypes from "./rpc-types";

import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";

useExecutionRPC().serve<rpcTypes.Alert>(
  rpcTypes.alert,
  async (message: string): Promise<void> => {
    if (message) {
      alert(message);
    }
  }
);
