import React from "react";
import Script from "next/script";

interface CustomCodeProps {
  content?: string | null;
}

interface ParsedTag {
  tag: string;
  attrs: Record<string, any>;
  content: string | null;
}

function parseHeadTags(html?: string | null): ParsedTag[] {
  if (!html || typeof html !== "string") return [];
  const trimmed = html.trim();
  if (!trimmed) return [];

  // If raw JS without any HTML tag
  if (!trimmed.includes("<") && !trimmed.includes(">")) {
    return [{ tag: "script", attrs: {}, content: trimmed }];
  }

  const tags: ParsedTag[] = [];
  const regex = /<(script|meta|link|style|noscript)([^>]*)>(?:([\s\S]*?)<\/\1>)?/gi;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(trimmed)) !== null) {
    const [, tagName, attrString, tagContent] = match;
    const attrs: Record<string, any> = {};
    const attrRegex = /([a-zA-Z0-9_:-]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
    let attrMatch: RegExpExecArray | null;

    while ((attrMatch = attrRegex.exec(attrString)) !== null) {
      const name = attrMatch[1];
      const val = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? true;
      attrs[name] = val;
    }

    tags.push({
      tag: tagName.toLowerCase(),
      attrs,
      content: tagContent || null,
    });
  }

  return tags;
}

/**
 * Injects Custom Header Scripts cleanly into <head> without wrapping in a <div>.
 * Supports <script>, <meta>, <link>, <style>, <noscript>, and plain JS.
 */
export function CustomHeaderScripts({ content }: CustomCodeProps) {
  if (!content || !content.trim()) return null;

  const parsed = parseHeadTags(content);

  // If couldn't parse standard tags but content exists, render as raw script or safe fragment
  if (parsed.length === 0) {
    const trimmed = content.trim();
    if (trimmed.startsWith("<")) {
      return (
        <script
          id="custom-header-html-snippet"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `/* Custom Header Injection */\n(function(){ try { var d = document.createElement('div'); d.innerHTML = ${JSON.stringify(
              trimmed
            )}; while (d.firstChild) { document.head.appendChild(d.firstChild); } } catch(e){ console.error(e); } })();`,
          }}
        />
      );
    }
    return (
      <script
        id="custom-header-inline-js"
        dangerouslySetInnerHTML={{ __html: trimmed }}
      />
    );
  }

  return (
    <>
      {parsed.map((item, idx) => {
        const key = `custom-head-${item.tag}-${idx}`;

        if (item.tag === "script") {
          if (item.attrs.src) {
            return (
              <script
                key={key}
                src={item.attrs.src}
                async={item.attrs.async !== undefined}
                defer={item.attrs.defer !== undefined}
                type={item.attrs.type}
                crossOrigin={item.attrs.crossorigin}
              />
            );
          }
          return (
            <script
              key={key}
              type={item.attrs.type}
              dangerouslySetInnerHTML={item.content ? { __html: item.content } : undefined}
            />
          );
        }

        if (item.tag === "meta") {
          return <meta key={key} {...item.attrs} />;
        }

        if (item.tag === "link") {
          return <link key={key} {...item.attrs} />;
        }

        if (item.tag === "style") {
          return (
            <style
              key={key}
              {...item.attrs}
              dangerouslySetInnerHTML={item.content ? { __html: item.content } : undefined}
            />
          );
        }

        if (item.tag === "noscript") {
          return (
            <noscript
              key={key}
              dangerouslySetInnerHTML={item.content ? { __html: item.content } : undefined}
            />
          );
        }

        return null;
      })}
    </>
  );
}

/**
 * Injects Custom Footer Scripts right before </body>.
 * Handles chat widgets, tracking pixels, and dynamic script tags.
 */
export function CustomFooterScripts({ content }: CustomCodeProps) {
  if (!content || !content.trim()) return null;

  const trimmed = content.trim();

  // If plain JavaScript without <script> tag
  if (!trimmed.includes("<") && !trimmed.includes(">")) {
    return (
      <Script
        id="custom-footer-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: trimmed }}
      />
    );
  }

  // Parse tags
  const parsed = parseHeadTags(trimmed);
  if (parsed.length > 0) {
    return (
      <>
        {parsed.map((item, idx) => {
          const key = `custom-foot-${item.tag}-${idx}`;
          if (item.tag === "script") {
            if (item.attrs.src) {
              return (
                <Script
                  key={key}
                  id={key}
                  src={item.attrs.src}
                  strategy="lazyOnload"
                />
              );
            }
            return (
              <Script
                key={key}
                id={key}
                strategy="lazyOnload"
                dangerouslySetInnerHTML={item.content ? { __html: item.content } : undefined}
              />
            );
          }
          return null;
        })}
        {/* Render any non-script HTML elements */}
        <div
          id="custom-footer-html-container"
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{ __html: trimmed.replace(/<script[\s\S]*?<\/script>/gi, "") }}
        />
      </>
    );
  }

  return (
    <div
      id="custom-footer-container"
      dangerouslySetInnerHTML={{ __html: trimmed }}
    />
  );
}
