import * as rpcTypes from "../rpc-types";

import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";

const { stub } = useExecutionRPC();
const windowRefresh = stub<rpcTypes.Refresh>(rpcTypes.refresh);

export default windowRefresh;
