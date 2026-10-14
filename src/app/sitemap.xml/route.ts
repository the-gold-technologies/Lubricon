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
        status: 200,
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
      });
    }

    return new NextResponse(null, { status: res.status });
  } catch (err) {
    console.error("Error fetching sitemap.xml from CMS:", err);
    return new NextResponse(null, { status: 502 });
  }
}
