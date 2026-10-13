"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useCMSStore } from "@/store/useCMSStore";

export default function HomeProductShowcase() {
  const { products, categories, homeData } = useCMSStore();
  const [activeCategory, setActiveCategory] = useState("all");

  const showcase = homeData?.HomeProductShowcase;
  if (!showcase && products.length === 0) return null;

  const badgeText = showcase?.badgeText;
  const title = showcase?.title;
  const subtitle = showcase?.subtitle;
  const ctaText = showcase?.ctaText;
  const ctaLink = showcase?.ctaLink;

  const allCategories = [
    { id: "all", label: "All Products" },
    ...categories.map((c: any) => ({
      id: c.slug ?? c.id,
      label: c.name ?? c.label,
    })),
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products.slice(0, 8)
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0c0d12] text-white border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            {badgeText && (
              <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black text-xs font-black uppercase px-3.5 py-1 rounded-full mb-3 tracking-wider shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>{badgeText}</span>
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm sm:text-base text-zinc-400 font-medium mt-2 max-w-xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 bg-[#ffe000] hover:bg-white text-black font-extrabold px-7 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md transform hover:scale-105"
            >
              <span>{ctaText}</span>
              <ArrowRight size={14} />
            </Link>
          )}
        </div>

        {/* Category Tabs */}
        {allCategories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-zinc-800">
            {allCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#ffe000] text-black shadow-md scale-105"
                    : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
