const documentUrlPatterns = [
  "*://*.atlassian.net/browse/*",
  "*://*.atlassian.net/jira/software/projects/*/boards/*?selectedIssue/*",
  "*://*.atlassian.net/servicedesk/*",
];

export default documentUrlPatterns;

const candidates = [
  "atlassian.net/browse",
  "atlassian.net/jira",
  "atlassian.net/servicedesk",
];

export function isAcceptableDocumentUrl(url?: string) {
  if (!url) {
    return false;
  }
  return candidates.some((part) => url.toLowerCase().includes(part));
}
