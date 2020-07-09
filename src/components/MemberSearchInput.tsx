import * as rpcTypes from "../rpc-types";

import { Input, Tooltip, useInput } from "@zeit-ui/react";

import React from "react";
import Watcher from "../models/watcher";
import { errorAlert } from "../utils/windowAlert";
import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";

const searchMember = useExecutionRPC().stub<rpcTypes.SearchMember>(
  rpcTypes.searchMember
);

export default function MemberSearchInput({
  onSearch,
  searchable,
}: {
  onSearch: (watcher: Watcher[]) => void;
  searchable: boolean;
}) {
  const { reset, bindings } = useInput("");

  function search(keyword: string) {
    searchMember(keyword)
      .then((watchers) => {
        onSearch(watchers);
        reset();
      })
      .catch(errorAlert);
  }

  function onKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    const query = (event.target as HTMLInputElement).value;
    if (event.key === "Enter") {
      search(query);
    }
  }

  return (
    <Tooltip
      placement="bottom"
      text={
        searchable
          ? "Please enter query to search members."
          : "Please use this extension at atlassian page."
      }
      type={searchable ? "dark" : "error"}
    >
      <Input
        {...bindings}
        placeholder="Enter here"
        label="Keyword"
        width="100%"
        onKeyPress={onKeyPress}
        disabled={!searchable}
      />
    </Tooltip>
  );
}
