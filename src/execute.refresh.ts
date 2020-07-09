import * as rpcTypes from "./rpc-types";

import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";

useExecutionRPC().serve<rpcTypes.Refresh>(
  rpcTypes.refresh,
  async (message, { confirm = false }): Promise<void> => {
    if (confirm) {
      if (window.confirm(message)) {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  }
);
