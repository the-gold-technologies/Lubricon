import { NextResponse } from "next/server";
import { getApiBaseUrl } from "@/store/useCMSStore";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cmsUrl = getApiBaseUrl();
    const res = await fetch(`${cmsUrl}/sitemap.xml`, {
      cache: "no-store",
    });
    if (res.ok) {
      const xmlContent = await res.text();
      return new NextResponse(xmlContent, {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
      });
    }
  } catch (err) {
    console.error("Error fetching sitemap.xml from CMS:", err);
  }

  const now = new Date().toISOString();
  const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lubriconindia.com</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://lubriconindia.com/about</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://lubriconindia.com/products</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://lubriconindia.com/industries</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://lubriconindia.com/contact</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  return new NextResponse(fallback, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
