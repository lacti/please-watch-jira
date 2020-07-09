import * as rpcTypes from "./rpc-types";

import Watcher from "./models/watcher";
import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";
import useLogger from "chrome-extension-support/lib/logger/useLogger";

const logger = useLogger();

useExecutionRPC().serve<rpcTypes.SearchMember>(
  rpcTypes.searchMember,
  async (keyword: string): Promise<Watcher[]> => {
    const result = await searchByGraphql(keyword, 20);
    logger.debug("Fetch users from search", result);

    return result.data.AccountCentricUserSearch.map((u) => ({
      accountId: u.id,
      userName: u.fullName,
    }));
  }
);

interface AccountCentricUserSearchResult {
  data: {
    AccountCentricUserSearch: {
      id: string;
      fullName: string;
      avatarUrl: string;
      title: null;
      nickname: string;
      email: string;
      __typename: string;
    }[];
  };
  extensions: {
    errorNumber: number;
  };
}

async function searchByGraphql(keyword: string, count: number) {
  const cloudId = findCloudId();
  if (!cloudId) {
    throw new Error("Cannot find cloud id");
  }

  const payload = {
    operationName: "Search",
    variables: {
      displayName: keyword,
      count,
      cloudId: cloudId,
    },
    query: `query Search($cloudId: String!, $displayName: String!, $count: Int) {
  AccountCentricUserSearch(displayName: $displayName, cloudId: $cloudId, count: $count, filter: {excludeInactive: true, excludeBots: true}) {
    id
    fullName
    avatarUrl
    title
    nickname
    email
    __typename
  }
}
`,
  };
  const result: AccountCentricUserSearchResult = await fetch(
    `/gateway/api/directory/graphql?q=Search`,
    {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      method: "POST",
    }
  ).then((r) => r.json());
  return result;
}

function findCloudId(): string | null {
  const allMetas = document.querySelectorAll("meta");
  for (let index = 0; index < allMetas.length; ++index) {
    const meta = allMetas.item(index);
    if (meta.name === "ajs-cloud-id" || meta.name === "tenant-id") {
      return meta.content ?? null;
    }
  }
  return null;
}
