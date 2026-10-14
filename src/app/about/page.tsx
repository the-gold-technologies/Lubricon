import { Metadata } from "next";
import AboutClientWrapper from "./components/AboutClientWrapper";
import JsonLd from "@/components/JsonLd";
import { getPageSEO, buildMetadata, sanitizeHeadingTag } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("about");
  return buildMetadata(
    seo,
    "About Us | Lubricon Specialities India",
    "Learn about Lubricon Specialities India — our Australian technology roots, high-performance formulations, quality standards, and commitment to Indian industry."
  );
}

export default async function AboutPage() {
  const seo = await getPageSEO("about");

  return (
    <main className="bg-white text-zinc-900 min-h-screen">
      {seo?.schema && <JsonLd schema={seo.schema} />}
      <AboutClientWrapper headingTag={sanitizeHeadingTag(seo?.headingOptions, "h1")} />
    </main>
  );
}
