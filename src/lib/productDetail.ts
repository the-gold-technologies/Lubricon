import type { Product } from "@/types";

const DEFAULT_TABLE_HEADERS = ["Property", "Test Method", "Typical Value"];

/**
 * Normalizes the CMS properties table into { headers, rows }. Supports legacy object rows
 * ({ property, testMethod, value }) and array rows with admin-defined `tableHeaders`.
 * Keep in sync with normalizePropertiesTable in the CMS.
 */
export function normalizePropertiesTable(
  rawRows: unknown,
  rawHeaders: unknown,
): { headers: string[]; rows: string[][] } {
  const rowsIn = Array.isArray(rawRows) ? rawRows : [];
  const headersIn = Array.isArray(rawHeaders)
    ? rawHeaders.map((h) => (typeof h === "string" ? h : String(h ?? "")))
    : [];

  const hasObjectRows = rowsIn.some((r) => r && !Array.isArray(r) && typeof r === "object");
  const headers = hasObjectRows || headersIn.length === 0 ? [...DEFAULT_TABLE_HEADERS] : headersIn;

  const rows: string[][] = rowsIn
    .map((r: unknown) => {
      if (Array.isArray(r)) return r.map((c) => (c == null ? "" : String(c)));
      if (r && typeof r === "object") {
        const o = r as { property?: unknown; testMethod?: unknown; value?: unknown };
        return [o.property ?? "", o.testMethod ?? "-", o.value ?? ""].map(String);
      }
      return [];
    })
    .filter((r) => r.some((c) => c.trim() !== ""));

  const columnCount = Math.max(headers.length, ...rows.map((r) => r.length), 1);
  while (headers.length < columnCount) headers.push("");

  return {
    headers,
    rows: rows.map((r) => [...r, ...Array(columnCount - r.length).fill("")]),
  };
}

const DEFAULT_SPEC_LABELS = {
  grade: "Performance Grade",
  viscosity: "Viscosity Rating",
  standard: "Testing Standard",
  packaging: "Standard Packaging",
} as const;

/** Label/value rows for the "Engineering Standards" card, using CMS-defined labels. */
export function getSpecificationRows(
  specs: Product["specifications"] | undefined,
): { label: string; value: string }[] {
  if (!specs) return [];
  const labels = specs.labels ?? {};
  const rows: { label: string; value: string }[] = [];

  (Object.keys(DEFAULT_SPEC_LABELS) as (keyof typeof DEFAULT_SPEC_LABELS)[]).forEach((key) => {
    const raw = specs[key];
    const value = Array.isArray(raw) ? raw.join(", ") : (raw ?? "");
    if (value.trim()) {
      rows.push({ label: labels[key]?.trim() || DEFAULT_SPEC_LABELS[key], value });
    }
  });

  if (Array.isArray(specs.extra)) {
    for (const item of specs.extra) {
      if (item?.label?.trim() && item?.value?.trim()) {
        rows.push({ label: item.label, value: item.value });
      }
    }
  }

  return rows;
}
