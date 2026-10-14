import { Metadata } from "next";
import HomeClientWrapper from "./components/HomeClientWrapper";
import { getGlobalSEO, sanitizeHeadingTag } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const globalSeo = await getGlobalSEO();

  return {
    title: globalSeo?.siteTitle ?? undefined,
    description: globalSeo?.siteDescription ?? undefined,
    openGraph: {
      title: globalSeo?.siteTitle ?? undefined,
      description: globalSeo?.siteDescription ?? undefined,
      images: globalSeo?.logo ? [{ url: globalSeo.logo }] : undefined,
    },
  };
}

export default async function HomePage() {
  const globalSeo = await getGlobalSEO();

  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      <HomeClientWrapper
        headingTag={sanitizeHeadingTag(globalSeo?.headingOptions, "h1")}
      />
    </div>
  );
}
