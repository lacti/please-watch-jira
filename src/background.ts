import * as rpcTypes from "./rpc-types";

import WatcherGroup from "./models/watcherGroup";
import documentUrlPatterns from "./models/documentUrlPatterns";
import { errorAlert } from "./utils/windowAlert";
import queryTabs from "chrome-extension-support/lib/chrome/queryTabs";
import useExecutionRPC from "chrome-extension-support/lib/rpc/useExecutionRPC";
import useLogger from "chrome-extension-support/lib/logger/useLogger";
import useMessageRPC from "chrome-extension-support/lib/rpc/useMessageRPC";
import useWatcherGroups from "./state/useWatcherGroups";
import windowRefresh from "./utils/windowRefresh";

const logger = useLogger();

async function inBackground() {
  const { getAllWatcherGroups } = useWatcherGroups();
  const { stub } = useExecutionRPC();
  const addWatchers = stub<rpcTypes.AddWatchers>(rpcTypes.addWatchers);
  const addServicedeskWatchers = stub<rpcTypes.AddServicedeskWatchers>(
    rpcTypes.addServicedeskWatchers
  );

  const rootMenuId = "please-watch-jira";
  async function onMenuClick(watcherGroup: WatcherGroup) {
    logger.debug(watcherGroup);
    if (watcherGroup.watchers.length === 0) {
      return;
    }
    const currentTab = (
      await queryTabs({ active: true, currentWindow: true })
    )[0];
    const url = currentTab?.url;
    const adder = url?.includes("servicedesk")
      ? addServicedeskWatchers
      : addWatchers;
    try {
      await adder(watcherGroup.watchers.map((w) => w.accountId));
      await windowRefresh({ confirm: true });
    } catch (error) {
      errorAlert(error);
    }
  }

  async function updateContextMenu() {
    await new Promise<void>((resolve) =>
      chrome.contextMenus.removeAll(resolve)
    );

    chrome.contextMenus.create({
      id: rootMenuId,
      title: "Please watch",
      documentUrlPatterns,
    });
    const allWatcherGroups = await getAllWatcherGroups();
    for (const watcherGroup of allWatcherGroups) {
      chrome.contextMenus.create({
        parentId: rootMenuId,
        id: watcherGroup.id,
        title: `${watcherGroup.groupName} (${watcherGroup.watchers.length})`,
        onclick: () => onMenuClick(watcherGroup),
      });
    }
  }
  updateContextMenu();

  useMessageRPC().serve<rpcTypes.UpdateContextMenu>(
    rpcTypes.updateContextMenu,
    updateContextMenu
  );
}

inBackground();
