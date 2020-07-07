import * as rpcTypes from "./rpc-types";

import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";
import useLogger from "chrome-extension-support/lib/logger/useLogger";

const logger = useLogger();

useExecutionRPC().serve<rpcTypes.AddServicedeskWatchers>(
  rpcTypes.addServicedeskWatchers,
  async (accountIds: string[]): Promise<boolean> => {
    const issueKey = findIssueKeyFromUrl();
    if (!issueKey) {
      throw new Error("Cannot find Issue-key from URL.");
    }
    logger.debug("Add servicedesk watcher", accountIds, "to", issueKey);

    try {
      await fetch(`/rest/servicedesk/1/customer/participants/${issueKey}/add`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ accountIds, emails: [], organisationIds: [] }),
      }).then((r) => r.text());
    } catch (error) {
      logger.error("Cannot add watcher", accountIds, issueKey, error);
    }
    return true;
  }
);

function findIssueKeyFromUrl() {
  const pathname = window.location.pathname;
  return pathname.split(/\//).slice(-1)[0] ?? null;
}
