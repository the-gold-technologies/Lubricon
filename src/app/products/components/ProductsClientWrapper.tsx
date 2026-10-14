"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductsHero from "./ProductsHero";
import ProductsFilterBar from "./ProductsFilterBar";
import ProductsGrid from "./ProductsGrid";
import { useCMSStore } from "@/store/useCMSStore";
import LoadingIndicator from "@/components/LoadingIndicator";

function ProductsContent({ headingTag }: { headingTag?: string | null }) {
  const searchParams = useSearchParams();
  const { products, isProductsLoading, fetchProducts } = useCMSStore();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const cat = searchParams.get("cat");
    const search = searchParams.get("search");
    setActiveCategory(cat ?? "all");
    setSearchQuery(search ?? "");
  }, [searchParams]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setSearchQuery("");
  };

  const filtered = products.filter((p) => {
    const matchesCategory =
      activeCategory === "all" || p.category === activeCategory;
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
      />

      <ProductsGrid
        products={filtered}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        isLoading={isProductsLoading && products.length === 0}
        onSelectProduct={() => {}}
        onReset={() => {
          setActiveCategory("all");
          setSearchQuery("");
        }}
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
