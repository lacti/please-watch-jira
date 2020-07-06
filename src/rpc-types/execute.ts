import Watcher from "../models/watcher";

export const searchMember = "searchMember";
export type SearchMember = (
  projectKey: string,
  query: string
) => Promise<Watcher[]>;

export const addWatchers = "addWatchers";
export type AddWatchers = (accountIds: string[]) => Promise<boolean>;

export const addServicedeskWatchers = "addServicedeskWatchers";
export type AddServicedeskWatchers = (accountIds: string[]) => Promise<boolean>;
