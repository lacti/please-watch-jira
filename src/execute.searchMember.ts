import * as rpcTypes from "./rpc-types";

import Watcher from "./models/watcher";
import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";
import useLogger from "chrome-extension-support/lib/logger/useLogger";

interface ConfluentMemberSearch {
  accountId: string;
  displayName: string;
}

const logger = useLogger();

useExecutionRPC().serve<rpcTypes.SearchMember>(
  rpcTypes.searchMember,
  async (projectKey: string, query: string): Promise<Watcher[]> => {
    const result = await fetch(
      `/rest/api/2/user/viewissue/search?projectKey=${projectKey}&query=${encodeURIComponent(
        query
      )}&maxResults=10`
    )
      .then((r) => r.json())
      .then((users: ConfluentMemberSearch[]) =>
        users.map(({ accountId, displayName }) => ({
          accountId: accountId,
          userName: displayName,
        }))
      );

    logger.debug("Fetch users from search", result);
    return result;
  }
);
