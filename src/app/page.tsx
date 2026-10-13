import { Metadata } from "next";
import HomeClientWrapper from "./components/HomeClientWrapper";
import { getPageSEO, buildMetadata, sanitizeHeadingTag } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("home");
  return buildMetadata(
    seo,
    "Lubricon Specialities India – Premium Industrial & Automotive Lubricants",
    "Lubricon Specialities India delivers premium industrial and automotive lubricants powered by Australian technology. Engineered for Indian conditions."
  );
}

export default async function HomePage() {
  const seo = await getPageSEO("home");

  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      {seo?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: seo.schema }}
        />
      )}
      <HomeClientWrapper headingTag={sanitizeHeadingTag(seo?.headingOptions, "h1")} />
    </div>
  );
}
