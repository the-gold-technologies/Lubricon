"use client";

import { useState, useEffect, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductsHero from "./ProductsHero";
import ProductsFilterBar from "./ProductsFilterBar";
import ProductsGrid from "./ProductsGrid";
import { useCMSStore } from "@/store/useCMSStore";
import LoadingIndicator from "@/components/LoadingIndicator";

function ProductsContent({ headingTag }: { headingTag?: string | null }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { products, isProductsLoading, fetchProducts, industries, fetchIndustries } = useCMSStore();
  // Category & industry live in the URL (?cat= / ?industry=) so they survive refresh and
  // back-forward, and can be linked to (e.g. "View Products" on the Industries page).
  const activeCategory = searchParams.get("cat") || "all";
  const activeIndustry = searchParams.get("industry") || "all";
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchIndustries();
  }, [fetchProducts, fetchIndustries]);

  useEffect(() => {
    setSearchQuery(searchParams.get("search") ?? "");
  }, [searchParams]);

  /** Write filters to the URL; any filter not passed keeps its current value. */
  const updateFilters = (next: { cat?: string; industry?: string; search?: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    const values = { cat: activeCategory, industry: activeIndustry, search: searchQuery, ...next };
    for (const [key, value] of Object.entries(values)) {
      if (!value || value === "all") params.delete(key);
      else params.set(key, value.trim());
    }
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  // Category and industry filters are exclusive: picking one resets the other to "all".
  // Picking a category also clears the search box (existing behaviour).
  const handleCategoryChange = (cat: string) => updateFilters({ cat, industry: "all", search: "" });
  const setActiveIndustry = (industry: string) => updateFilters({ industry, cat: "all" });

  // Products for the selected industry (tagged in the CMS); "All Products" pill counts these
  const industryProducts =
    activeIndustry === "all"
      ? products
      : products.filter((p) => p.industrySlugs.includes(activeIndustry));
  const activeIndustryLabel = industries.find((i) => i.id === activeIndustry)?.name ?? "";

  const filtered = industryProducts.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.subcategory ?? "").toLowerCase().includes(q) ||
      (p.raw?.categoryName ?? "").toLowerCase().includes(q) ||
      (p.raw?.specsText ?? "").toLowerCase().includes(q) ||
      (p.specifications?.grade ?? "").toLowerCase().includes(q) ||
      (p.specifications?.viscosity ?? "").toLowerCase().includes(q) ||
      (p.features ?? []).join(" ").toLowerCase().includes(q) ||
      (p.applications ?? []).join(" ").toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <ProductsHero headingTag={headingTag} />

      <ProductsFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
        activeIndustry={activeIndustry}
        setActiveIndustry={setActiveIndustry}
        countBase={industryProducts}
      />

      <ProductsGrid
        products={filtered}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        activeIndustryLabel={activeIndustry !== "all" ? activeIndustryLabel || activeIndustry : ""}
        isLoading={isProductsLoading && products.length === 0}
        onSelectProduct={() => {}}
        onReset={() => updateFilters({ cat: "all", industry: "all", search: "" })}
      />
    </>
  );
}

interface ProductsClientWrapperProps {
  headingTag?: string | null;
}

export default function ProductsClientWrapper({ headingTag }: ProductsClientWrapperProps) {
  return (
    <Suspense
      fallback={
        <LoadingIndicator
          fullScreen
          message="Loading Lubricants Catalog..."
          subMessage="Australian Technology Formulations"
        />
      }
    >
      <ProductsContent headingTag={headingTag} />
    </Suspense>
  );
}
