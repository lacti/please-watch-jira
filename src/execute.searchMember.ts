import * as rpcTypes from "./rpc-types";

import Watcher from "./models/watcher";
import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";
import useLogger from "chrome-extension-support/lib/logger/useLogger";

interface AtlassianMemberSearch {
  accountId: string;
  accountType: string;
  active: boolean;
  avatarUrls: { [size: string]: string };
  displayName: string;
  emailAddress: string;
  locale: string;
  self: string;
  timeZone: string;
}

interface AtlassianError {
  errorMessages: string[];
}

const logger = useLogger();

useExecutionRPC().serve<rpcTypes.SearchMember>(
  rpcTypes.searchMember,
  async (projectKey: string, query: string): Promise<Watcher[]> => {
    const result = await fetch(
      `/rest/api/2/user/viewissue/search?projectKey=${projectKey}&query=${encodeURIComponent(
        query
      )}&maxResults=20`
    )
      .then((r) => r.json())
      .then((result: AtlassianMemberSearch[] | AtlassianError) => {
        console.log(result);
        if ("errorMessages" in result) {
          throw new Error(result.errorMessages.join("\n"));
        }
        return result.map(({ accountId, displayName }) => ({
          accountId: accountId,
          userName: displayName,
        }));
      });

    logger.debug("Fetch users from search", result);
    return result;
  }
);
