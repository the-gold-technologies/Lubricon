import { Metadata } from "next";
import ContactClientWrapper from "./components/ContactClientWrapper";
import JsonLd from "@/components/JsonLd";
import { getPageSEO, buildMetadata, sanitizeHeadingTag } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("contact");
  return buildMetadata(
    seo,
    "Contact Us | Lubricon Specialities India",
    "Contact Lubricon Specialities India for industrial lubrication quotes, bulk orders, and technical support. Toll-free 1800 569 6363.",
  );
}

export default async function ContactPage() {
  const seo = await getPageSEO("contact");

  return (
    <main className="bg-white text-zinc-900 min-h-screen">
      {seo?.schema && <JsonLd schema={seo.schema} />}
      <ContactClientWrapper headingTag={sanitizeHeadingTag(seo?.headingOptions, "h1")} />
    </main>
  );
}
