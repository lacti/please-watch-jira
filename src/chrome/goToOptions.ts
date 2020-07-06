export default function goToOptions({
  optionsPageFile = "options.html",
}: { optionsPageFile?: string } = {}): void {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL(optionsPageFile));
  }
}
