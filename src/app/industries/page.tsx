import { Metadata } from "next";
import IndustriesClientWrapper from "./components/IndustriesClientWrapper";
import JsonLd from "@/components/JsonLd";
import { getPageSEO, buildMetadata, sanitizeHeadingTag } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("industries");
  return buildMetadata(
    seo,
    "Industries We Serve | Lubricon Specialities India",
    "Lubricon provides specialized lubrication solutions for plastic injection molding, paper mills, and steel plants. Australian technology for maximum uptime."
  );
}

export default async function IndustriesPage() {
  const seo = await getPageSEO("industries");

  return (
    <main className="bg-white text-zinc-900 min-h-screen font-sans">
      {seo?.schema && <JsonLd schema={seo.schema} />}
      <IndustriesClientWrapper headingTag={sanitizeHeadingTag(seo?.headingOptions, "h1")} />
    </main>
  );
}
