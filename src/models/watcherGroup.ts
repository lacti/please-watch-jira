import Watcher from "./watcher";

export default interface WatcherGroup {
  id: string;
  projectKey: string;
  groupName: string;
  watchers: Watcher[];
}
