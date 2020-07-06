export async function executeScript(
  tabId: number,
  target: { code: string } | { file: string }
): Promise<unknown[]> {
  return new Promise<unknown[]>((resolve) =>
    chrome.tabs.executeScript(tabId, target, resolve)
  );
}
