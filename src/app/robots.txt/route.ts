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
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
      });
    }

    return new NextResponse(null, { status: res.status });
  } catch (err) {
    console.error("Error fetching robots.txt from CMS:", err);
    return new NextResponse(null, { status: 502 });
  }
}
