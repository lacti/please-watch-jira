import Watcher from "../models/watcher";

export const searchMember = "searchMember";
export type SearchMember = (keyword: string) => Promise<Watcher[]>;

export const addWatchers = "addWatchers";
export type AddWatchers = (accountIds: string[]) => Promise<boolean>;

export const addServicedeskWatchers = "addServicedeskWatchers";
export type AddServicedeskWatchers = (accountIds: string[]) => Promise<boolean>;

export const alert = "alert";
export type Alert = (message: string) => Promise<void>;

export const refresh = "refresh";
export type Refresh = (
  message: string,
  options: { confirm?: boolean }
) => Promise<void>;
