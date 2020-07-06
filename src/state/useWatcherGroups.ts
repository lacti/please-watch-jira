import WatcherGroup from "../models/watcherGroup";
import { nanoid } from "nanoid";
import useStorage from "chrome-extension-support/lib/chrome/useStorage";

const storage = useStorage();
const storageKey = "watcher-groups";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useWatcherGroups() {
  async function getAllWatcherGroups(): Promise<WatcherGroup[]> {
    const maybe = await storage.get<WatcherGroup[]>(storageKey);
    return maybe ?? [];
  }

  async function addWatcherGroup(
    newWatcherGroup: Omit<WatcherGroup, "id">
  ): Promise<WatcherGroup[]> {
    const next = [
      ...(await getAllWatcherGroups()),
      { ...newWatcherGroup, id: nanoid() },
    ];
    await storage.put<WatcherGroup[]>(storageKey, next);
    return next;
  }

  async function updateWatcherGroup(
    watcherGroup: WatcherGroup
  ): Promise<WatcherGroup[]> {
    const all = await getAllWatcherGroups();
    const next = all.map((each) =>
      each.id !== watcherGroup.id ? each : watcherGroup
    );
    await storage.put(storageKey, next);
    return next;
  }

  async function deleteWatcherGroup(
    watcherGroupId: string
  ): Promise<WatcherGroup[]> {
    const all = await getAllWatcherGroups();
    const next = [...all.filter((each) => each.id !== watcherGroupId)];
    await storage.put(storageKey, next);
    return next;
  }

  return {
    getAllWatcherGroups,
    addWatcherGroup,
    updateWatcherGroup,
    deleteWatcherGroup,
  };
}
