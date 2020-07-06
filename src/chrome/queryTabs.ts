export default async function queryTabs(
  queryInfo: chrome.tabs.QueryInfo
): Promise<chrome.tabs.Tab[]> {
  return new Promise<chrome.tabs.Tab[]>((resolve) =>
    chrome.tabs.query(queryInfo, resolve)
  );
}
