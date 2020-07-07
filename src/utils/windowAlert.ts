import * as rpcTypes from "../rpc-types";

import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";
import useLogger from "chrome-extension-support/lib/logger/useLogger";

const { stub } = useExecutionRPC();
const alert = stub<rpcTypes.Alert>(rpcTypes.alert);

const logger = useLogger();

export default function windowAlert(message: string) {
  logger.info("WindowAlert", message);
  alert(message);
}

export function errorAlert(error: Error) {
  logger.info("Error", error);
  alert(error.message);
}
