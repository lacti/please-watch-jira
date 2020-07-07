import * as rpcTypes from "./rpc-types";

import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";

useExecutionRPC().serve<rpcTypes.Refresh>(
  rpcTypes.refresh,
  async ({ confirm = false }): Promise<void> => {
    if (confirm) {
      if (window.confirm("Do you want to refresh this page?")) {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  }
);
