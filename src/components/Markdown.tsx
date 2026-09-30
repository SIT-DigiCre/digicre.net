import DOMPurify from "isomorphic-dompurify";
import type { Tokens } from "marked";
import { Marked, Renderer } from "marked";
import type React from "react";

interface MarkdownProps {
  content: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  const renderer = new Renderer();
  const marked = new Marked({
    renderer: {
      link(tokens: Tokens.Link) {
        const { href, text } = tokens;
        const isExternalLink = !href.startsWith("/");
        const target = isExternalLink
          ? ` target="_blank" rel="noopener noreferrer"`
          : "";

        return `<a href="${href}"${target}>${text}</a>`;
      },
      table(...args) {
        return `<figure>${renderer.table.apply(this, args)}</figure>`;
      },
    },
  });

  const rawHtml = marked.parse(content, { async: false });
  const safeHtmlString = DOMPurify.sanitize(rawHtml, { ADD_ATTR: ["target"] });

  return (
    <div
      className="markdown"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Markdown content
      dangerouslySetInnerHTML={{ __html: safeHtmlString }}
    />
  );
};
