const documentUrlPatterns = ["*://*.atlassian.net/*"];

export default documentUrlPatterns;

const candidates = ["atlassian.net"];

export function isAcceptableDocumentUrl(url?: string) {
  if (!url) {
    return false;
  }
  return candidates.some((part) => url.toLowerCase().includes(part));
}
