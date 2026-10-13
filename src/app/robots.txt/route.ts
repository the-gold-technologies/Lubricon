import { NextResponse } from "next/server";
import { getApiBaseUrl } from "@/store/useCMSStore";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cmsUrl = getApiBaseUrl();
    const res = await fetch(`${cmsUrl}/robots.txt`, {
      cache: "no-store",
    });
    if (res.ok) {
      const robotsContent = await res.text();
      return new NextResponse(robotsContent, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
      });
    }
  } catch (err) {
    console.error("Error fetching robots.txt from CMS:", err);
  }

  const fallback = "User-agent: *\nAllow: /\n\nSitemap: https://lubriconindia.com/sitemap.xml";
  return new NextResponse(fallback, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
