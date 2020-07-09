import Watcher from "./watcher";

export default interface WatcherGroup {
  id: string;
  groupName: string;
  watchers: Watcher[];
}
