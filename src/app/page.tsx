import { Metadata } from "next";
import HomeClientWrapper from "./components/HomeClientWrapper";
import { getGlobalSEO, sanitizeHeadingTag } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const globalSeo = await getGlobalSEO();

  const title = globalSeo?.siteTitle || "Lubricon Specialities India – Premium Industrial & Automotive Lubricants";
  const description = globalSeo?.siteDescription || "Lubricon Specialities India delivers premium industrial and automotive lubricants powered by Australian technology. Engineered for Indian conditions.";
  const icons = globalSeo?.favicon ? { icon: globalSeo.favicon } : undefined;

  return {
    title,
    description,
    icons,
    openGraph: {
      title,
      description,
      images: globalSeo?.logo ? [{ url: globalSeo.logo }] : undefined,
    },
  };
}

export default async function HomePage() {
  const globalSeo = await getGlobalSEO();

  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      {globalSeo?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: globalSeo.schema }}
        />
      )}
      {globalSeo?.customHeaderScripts && (
        <div
          dangerouslySetInnerHTML={{ __html: globalSeo.customHeaderScripts }}
        />
      )}
      <HomeClientWrapper headingTag={sanitizeHeadingTag(globalSeo?.headingOptions, "h1")} />
      {globalSeo?.customFooterScripts && (
        <div
          dangerouslySetInnerHTML={{ __html: globalSeo.customFooterScripts }}
        />
      )}
    </div>
  );
}
