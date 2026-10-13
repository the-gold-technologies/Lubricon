import { Metadata } from "next";
import { getApiBaseUrl } from "@/store/useCMSStore";

export interface PageSEO {
  metaTitle?: string | null;
  metaDescription?: string | null;
  targetKeywords?: string | null;
  canonicalUrl?: string | null;
  noIndex?: boolean;
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogImage?: string | null;
  headingOptions?: string | null;
  schema?: string | null;
}

export function sanitizeHeadingTag(
  tag?: string | null,
  fallback: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h1"
): "h1" | "h2" | "h3" | "h4" | "h5" | "h6" {
  if (!tag) return fallback;
  const clean = String(tag).toLowerCase().trim();
  const valid = ["h1", "h2", "h3", "h4", "h5", "h6"];
  return (valid.includes(clean) ? clean : fallback) as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export async function getPageSEO(slug: string): Promise<PageSEO | null> {
  try {
    const baseUrl = getApiBaseUrl();
    const res = await fetch(`${baseUrl}/api/seo/pages/${slug}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return json.data;
      }
    }
  } catch (err) {
    console.error(`Failed to load SEO for ${slug}:`, err);
  }
  return null;
}

export function buildMetadata(
  seo: PageSEO | null,
  fallbackTitle: string,
  fallbackDesc: string
): Metadata {
  const title = seo?.metaTitle ? seo.metaTitle : fallbackTitle;
  const description = seo?.metaDescription ? seo.metaDescription : fallbackDesc;
  const keywords = seo?.targetKeywords
    ? seo.targetKeywords.split(",").map((k) => k.trim()).filter(Boolean)
    : undefined;

  return {
    title,
    description,
    keywords,
    alternates: seo?.canonicalUrl ? { canonical: seo.canonicalUrl } : undefined,
    robots: seo?.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: seo?.ogTitle ? seo.ogTitle : title,
      description: seo?.ogDescription ? seo.ogDescription : description,
      images: seo?.ogImage ? [{ url: seo.ogImage }] : undefined,
    },
  };
}
