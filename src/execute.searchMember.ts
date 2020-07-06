import * as rpcTypes from "./rpc-types";

import Watcher from "./models/watcher";
import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";

interface ConfluentMemberSearch {
  accountId: string;
  displayName: string;
}

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

    console.debug("Fetch users from search", result);
    return result;
  }
);
