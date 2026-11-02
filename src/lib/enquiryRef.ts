/**
 * Customer-facing reference code derived from the CMS enquiry ID.
 * The CMS enquiries page shows and searches the same code (keep in sync).
 */
export function enquiryRefCode(id: unknown): string {
  return typeof id === "string" && id.length >= 6 ? id.slice(-6).toUpperCase() : "";
}
