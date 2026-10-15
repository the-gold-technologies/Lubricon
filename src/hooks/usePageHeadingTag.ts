"use client";

import { useEffect, type ElementType } from "react";
import { useCMSStore, getHeadingTag } from "@/store/useCMSStore";

export function usePageHeadingTag(
  pageSlug: string,
  initialTag?: string | null,
): ElementType {
  const pageState = useCMSStore((state) => state.pages[pageSlug]);
  const pageSEO = useCMSStore((state) => state.pageSEO[pageSlug]);
  const globalConfig = useCMSStore((state) => state.globalConfig);
  const fetchGlobalConfig = useCMSStore((state) => state.fetchGlobalConfig);
  const homeData = useCMSStore((state) => state.homeData);
  const aboutData = useCMSStore((state) => state.aboutData);
  const contactData = useCMSStore((state) => state.contactData);
  const industriesData = useCMSStore((state) => state.industriesData);

  useEffect(() => {
    fetchGlobalConfig();
  }, [fetchGlobalConfig]);

  if (pageSlug === "home") {
    const raw =
      globalConfig?.headingOptions ||
      homeData?.seo?.headingOptions ||
      initialTag ||
      "h1";
    return getHeadingTag(raw, "h1");
  }

  const raw =
    pageState?.seo?.headingOptions ||
    pageSEO?.headingOptions ||
    (pageSlug === "about" ? aboutData?.seo?.headingOptions : null) ||
    (pageSlug === "contact" ? contactData?.seo?.headingOptions : null) ||
    (pageSlug === "industries" ? industriesData?.seo?.headingOptions : null) ||
    initialTag ||
    "h1";
  return getHeadingTag(raw, "h1");
}
