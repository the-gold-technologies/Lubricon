import React from "react";

interface JsonLdProps {
  schema?: string | object | null;
  id?: string;
}

/**
 * Renders JSON-LD Structured Data cleanly.
 * Handles both raw JSON strings/objects and strings wrapped in <script> tags.
 * Strips duplicate script tags to prevent invalid nested script tags.
 */
export default function JsonLd({ schema, id }: JsonLdProps) {
  if (!schema) return null;

  let rawJson = "";

  if (typeof schema === "object") {
    try {
      rawJson = JSON.stringify(schema);
    } catch {
      return null;
    }
  } else if (typeof schema === "string") {
    const trimmed = schema.trim();
    if (!trimmed) return null;

    // If the input includes wrapping <script ...> ... </script> tags, extract the inner JSON
    if (trimmed.toLowerCase().includes("<script")) {
      const match = trimmed.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
      rawJson = match ? match[1].trim() : trimmed.replace(/<\/?script[^>]*>/gi, "").trim();
    } else {
      rawJson = trimmed;
    }
  }

  if (!rawJson) return null;

  return (
    <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: rawJson }} />
  );
}
