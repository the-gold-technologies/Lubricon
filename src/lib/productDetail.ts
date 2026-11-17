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

const DEFAULT_SECTION_TITLES = {
  performanceBenefits: "Key Performance Features & Benefits",
  applicationAreas: "Recommended Application Areas",
  specifications: "Engineering Standards",
  propertiesTable: "Physico-Chemical Properties",
  datasheet: "Product Datasheet",
  originBadge: "Australian Tech",
};

export type ProductSectionTitles = typeof DEFAULT_SECTION_TITLES;

/**
 * Product detail page headings/labels as set in the CMS, falling back to the defaults.
 * A blank origin badge stays blank (the page hides it); blank headings use the default.
 */
export function getSectionTitles(raw: Record<string, unknown> | undefined): ProductSectionTitles {
  const text = (key: string) => (typeof raw?.[key] === "string" ? (raw[key] as string).trim() : "");
  const origin = raw?.originBadge;

  return {
    performanceBenefits:
      text("performanceBenefitsTitle") || DEFAULT_SECTION_TITLES.performanceBenefits,
    applicationAreas: text("applicationAreasTitle") || DEFAULT_SECTION_TITLES.applicationAreas,
    specifications: text("specificationsTitle") || DEFAULT_SECTION_TITLES.specifications,
    propertiesTable: text("propertiesTableTitle") || DEFAULT_SECTION_TITLES.propertiesTable,
    datasheet: text("datasheetTitle") || DEFAULT_SECTION_TITLES.datasheet,
    // Older CMS APIs don't send the field at all → keep the default badge
    originBadge: typeof origin === "string" ? origin.trim() : DEFAULT_SECTION_TITLES.originBadge,
  };
}

export type ProductCustomSection =
  | { id: string; type: "text"; title: string; text: string }
  | { id: string; type: "list"; title: string; items: string[] }
  | { id: string; type: "table"; title: string; headers: string[]; rows: string[][] };

const str = (v: unknown) => (typeof v === "string" ? v : v == null ? "" : String(v));

/**
 * Visible, non-empty extra sections from the CMS (Product.customSections), in admin order.
 * Keep in sync with src/lib/productSections.ts in the CMS.
 */
export function normalizeCustomSections(raw: unknown): ProductCustomSection[] {
  if (!Array.isArray(raw)) return [];
  const out: ProductCustomSection[] = [];

  raw.forEach((s, i) => {
    if (!s || typeof s !== "object") return;
    const o = s as Record<string, unknown>;
    if (o.hidden) return;
    const id = str(o.id) || `section-${i}`;
    const title = str(o.title).trim();

    if (o.type === "text") {
      const text = str(o.text).trim();
      if (text) out.push({ id, type: "text", title, text });
    } else if (o.type === "list") {
      const items = (Array.isArray(o.items) ? o.items : [])
        .map(str)
        .map((t) => t.trim())
        .filter(Boolean);
      if (items.length) out.push({ id, type: "list", title, items });
    } else if (o.type === "table") {
      const table = normalizePropertiesTable(o.rows, o.headers);
      if (table.rows.length) out.push({ id, type: "table", title, ...table });
    }
  });

  return out;
}
