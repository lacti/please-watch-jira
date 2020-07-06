import * as rpcTypes from "./rpc-types";

import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";
import useLogger from "chrome-extension-support/lib/logger/useLogger";

const logger = useLogger();

useExecutionRPC().serve<rpcTypes.AddWatchers>(
  rpcTypes.addWatchers,
  async (accountIds: string[]): Promise<boolean> => {
    const issueKey = findIssueKeyFromUrl();
    if (!issueKey) {
      throw new Error("IssueKey를 찾을 수 없습니다.");
    }
    logger.debug("Issue key", issueKey);

    for (const accountId of accountIds) {
      logger.debug("Add watcher", accountId, "to", issueKey);
      try {
        await fetch(`/rest/api/2/issue/${issueKey}/watchers`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(accountId),
        }).then((r) => r.text());
      } catch (error) {
        logger.error("Cannot add watcher", accountId, issueKey, error);
      }
    }
    return true;
  }
);

function findIssueKeyFromUrl() {
  const pathname = window.location.pathname;
  if (pathname.startsWith("/browse/")) {
    return pathname.substring("/browse/".length);
  }
  if (pathname.startsWith("/jira/software/projects")) {
    return (location.search
      .split(/[?&]/g)
      .filter(Boolean)
      .map((each) => each.split("="))
      .find((kv) => kv[0] === "selectedIssue") || [])[1];
  }
  return null;
}
