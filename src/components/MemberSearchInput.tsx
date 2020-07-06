import * as rpcTypes from "../rpc-types";

import { Input, useInput } from "@zeit-ui/react";

import React from "react";
import Watcher from "../models/watcher";
import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";

const searchMember = useExecutionRPC().stub<rpcTypes.SearchMember>(
  rpcTypes.searchMember
);

export default function MemberSearchInput({
  projectKey,
  onSearch,
}: {
  projectKey: string;
  onSearch: (watcher: Watcher[]) => void;
}) {
  const { reset, bindings } = useInput("");

  function search(query: string) {
    searchMember(projectKey, query).then((watchers) => {
      onSearch(watchers);
      reset();
    });
  }

  function onKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    const query = (event.target as HTMLInputElement).value;
    if (!projectKey) {
      return;
    }
    if (event.key === "enter") {
      search(query);
    }
  }

  return (
    <Input
      {...bindings}
      placeholder="Enter here"
      label="유저검색"
      width="100%"
      onKeyPress={onKeyPress}
    />
  );
}
