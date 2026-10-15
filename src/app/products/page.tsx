import { Metadata } from "next";
import ProductsClientWrapper from "./components/ProductsClientWrapper";
import JsonLd from "@/components/JsonLd";
import { getPageSEO, buildMetadata, sanitizeHeadingTag } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("products");
  return buildMetadata(
    seo,
    "All Lubricant Formulations & Products | Lubricon Specialities India",
    "Explore our comprehensive range of industrial and automotive lubricants — powered by advanced Australian additive technology.",
  );
}

export default async function ProductsPage() {
  const seo = await getPageSEO("products");

  return (
    <main className="bg-white text-zinc-900 min-h-screen">
      {seo?.schema && <JsonLd schema={seo.schema} />}
      <ProductsClientWrapper headingTag={sanitizeHeadingTag(seo?.headingOptions, "h1")} />
    </main>
  );
}
