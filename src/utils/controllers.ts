import sanitizeHtml from "sanitize-html";

export function sanitizeHtmlContent(rawHtml: string): string {
  return sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "b",
      "i",
      "em",
      "strong",
    ]),
    allowedAttributes: {
      "*": ["class", "style"],
    },
  });
}
