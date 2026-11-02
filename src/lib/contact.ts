// Shown only until the CMS settings load (or if they are empty)
const FALLBACK_PHONE = "1800 569 6363";
const FALLBACK_EMAIL = "info@lubriconindia.com";

export interface ContactInfo {
  /** Display form, e.g. "1800 569 6363" */
  phone: string;
  /** tel: link target, digits only */
  phoneHref: string;
  email: string;
}

/** Contact details from CMS → SEO / Global settings (same source as the header and footer) */
export function getContactInfo(
  config:
    | {
        phone?: string | null;
        email?: string | null;
        socialLinks?: { tollFree?: string } | Record<string, string> | null;
      }
    | null
    | undefined,
): ContactInfo {
  const phone = (
    (config?.socialLinks as { tollFree?: string } | null | undefined)?.tollFree ||
    config?.phone ||
    FALLBACK_PHONE
  ).trim();
  const email = (config?.email || FALLBACK_EMAIL).trim();
  return { phone, phoneHref: `tel:${phone.replace(/[^\d+]/g, "")}`, email };
}
