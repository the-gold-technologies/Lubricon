import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Zap, CheckCircle2, ArrowLeft, Wrench, Cpu, BadgeCheck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductCtaButtons from "./components/ProductCtaButtons";
import ProductDatasheetButton from "./components/ProductDatasheetButton";
import SpecTable from "./components/SpecTable";
import ProductCustomSections from "./components/ProductCustomSections";
import JsonLd from "@/components/JsonLd";
import { normalizeProduct, ExtendedProduct, getApiBaseUrl } from "@/store/useCMSStore";
import {
  normalizePropertiesTable,
  getSpecificationRows,
  getSectionTitles,
  normalizeCustomSections,
} from "@/lib/productDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const baseUrl = getApiBaseUrl();
    const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      const list = json.data?.products;
      if (Array.isArray(list)) {
        return list.map((p: any) => ({ slug: p.slug }));
      }
    }
  } catch {
    // ignore
  }
  return [];
}

import { Metadata } from "next";
import type { Product } from "@/types";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = getApiBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/products?slug=${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        const p = json.data;
        const title = p.metaTitle ? p.metaTitle : `${p.name} | Lubricon Specialities India`;
        const description = p.metaDescription ? p.metaDescription : p.description;
        return {
          title,
          description,
          keywords: p.targetKeywords
            ? p.targetKeywords.split(",").map((s: string) => s.trim())
            : undefined,
          alternates: p.canonicalUrl ? { canonical: p.canonicalUrl } : undefined,
          openGraph: {
            title,
            description,
            images: p.containerImage ? [{ url: p.containerImage }] : undefined,
          },
        };
      }
    }
  } catch {
    // ignore
  }
  return {
    title: "Product Detail | Lubricon Specialities India",
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const baseUrl = getApiBaseUrl();

  let product: ExtendedProduct | null = null;
  let relatedProducts: ExtendedProduct[] = [];

  try {
    const res = await fetch(`${baseUrl}/api/products?slug=${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        product = normalizeProduct(json.data);
      }
    }
  } catch (err) {
    console.error("Error loading product detail from CMS:", err);
  }

  if (!product) {
    notFound();
  }

  try {
    const relRes = await fetch(
      `${baseUrl}/api/products?category=${encodeURIComponent(product.category)}`,
      { cache: "no-store" },
    );
    if (relRes.ok) {
      const relJson = await relRes.json();
      const rawList = relJson.data?.products;
      if (Array.isArray(rawList)) {
        relatedProducts = rawList
          .map(normalizeProduct)
          .filter((p: ExtendedProduct) => p.slug !== product!.slug)
          .slice(0, 4);
      }
    }
  } catch (err) {
    console.error("Error loading related products from CMS:", err);
  }

  const imgSrc = product.raw?.containerImage;
  const specRows = getSpecificationRows(product.specifications);
  const propertiesTable = normalizePropertiesTable(product.propertiesTable, product.tableHeaders);
  const hasDatasheet = Boolean(product.pdfUrl && product.pdfUrl !== "#");
  const titles = getSectionTitles(product.raw);
  const customSections = normalizeCustomSections(product.raw?.customSections);
  // Client components get only the public card fields — never `raw`, which holds the full
  // CMS record (including hidden sections) and would otherwise be embedded in the page source.
  const ctaProduct: Product = {
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.category,
    subcategory: product.subcategory,
    description: product.description,
    features: product.features,
    applications: product.applications,
    specifications: product.specifications,
    badge: product.badge,
    featured: product.featured,
  };
  const subtitle = typeof product.raw?.subtitle === "string" ? product.raw.subtitle.trim() : "";
  const specsText = typeof product.raw?.specsText === "string" ? product.raw.specsText.trim() : "";

  return (
    <main className="bg-[#f8f9fa] text-zinc-900 min-h-screen">
      {product.raw?.schema && <JsonLd schema={product.raw.schema} />}
      {/* ── BREADCRUMB & BACK LINK ── */}
      <div className="bg-white border-b border-zinc-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-zinc-400" />
            <Link href="/products" className="hover:text-black transition-colors">
              Products
            </Link>
            <ChevronRight size={13} className="text-zinc-400" />
            <Link
              href={`/products?cat=${product.category}`}
              className="capitalize hover:text-black transition-colors"
            >
              {product.subcategory}
            </Link>
            <ChevronRight size={13} className="text-zinc-400" />
            <span className="text-black font-extrabold truncate max-w-[200px]">{product.name}</span>
          </nav>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 hover:text-black transition-colors bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-full"
          >
            <ArrowLeft size={13} />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>

      {/* ── HERO BANNER: PRODUCT SPOTLIGHT ── */}
      <div className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ── LEFT COLUMN: IMAGERY & CERTIFICATIONS ── */}
            <div className="lg:col-span-5 space-y-6">
              {/* Top Card: Product Image Stage */}
              <div className="relative rounded-[28px] overflow-hidden bg-white border border-zinc-200/90 shadow-sm p-4 sm:p-6 group">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#fafafa] flex items-center justify-center p-4">
                  {imgSrc && (
                    <Image
                      src={imgSrc}
                      alt={product.name}
                      fill
                      priority
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Top-Left: Origin Badge (CMS-editable; blank hides it) */}
                  {titles.originBadge && (
                    <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow">
                      <span className="text-xs">🇦🇺</span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-white">
                        {titles.originBadge}
                      </span>
                    </div>
                  )}

                  {/* Top-Right Optional Badge */}
                  {product.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#ffe000] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Bottom-Left Pill Tag */}
                  {product.specifications?.viscosity && (
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block bg-black text-[#ffe000] text-[10px] font-black uppercase px-3 py-1 rounded-md tracking-wider shadow">
                        {product.specifications.viscosity}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card: Engineering Standards */}
              {specRows.length > 0 && (
                <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-sm font-black text-black mb-5 pb-3 border-b border-zinc-100">
                    <Zap size={16} className="text-[#ffe000] fill-black" />
                    <span>{titles.specifications}</span>
                  </div>

                  <div className="divide-y divide-zinc-100 text-xs sm:text-sm">
                    {specRows.map((row, i) => (
                      <div key={i} className="py-3 flex items-center justify-between gap-4">
                        <span className="text-zinc-500 font-medium">{row.label}</span>
                        <span className="text-black font-extrabold text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Datasheet Download Card */}
              {hasDatasheet && (
                <ProductDatasheetButton
                  productName={product.name}
                  productSlug={product.slug}
                  title={titles.datasheet}
                />
              )}
            </div>

            {/* ── RIGHT COLUMN: OVERVIEW, BENEFITS & ACTIONS ── */}
            <div className="lg:col-span-7 space-y-6">
              {/* Product Header Card */}
              <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-9">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {product.subcategory && (
                    <span className="bg-[#ffe000] text-black text-[11px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-xs">
                      {product.subcategory}
                    </span>
                  )}
                </div>

                {(() => {
                  const headingTag = product.raw?.headingOptions
                    ? product.raw.headingOptions
                    : "h1";
                  const validTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
                  const clean = headingTag ? headingTag.toLowerCase().trim() : "h1";
                  const Tag = (validTags.includes(clean) ? clean : "h1") as
                    "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
                  return (
                    <Tag
                      className={`text-2xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[1.15] ${subtitle ? "mb-2" : "mb-4"}`}
                    >
                      {product.name}
                    </Tag>
                  );
                })()}

                {subtitle && (
                  <p className="text-base sm:text-lg font-bold text-zinc-500 leading-snug mb-4">
                    {subtitle}
                  </p>
                )}

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {product.description}
                </p>

                {/* Meets Specifications (only when set in the CMS) */}
                {specsText && (
                  <div className="flex items-start gap-3 mb-6 p-4 rounded-2xl bg-[#fffbd6] border border-[#ffe000]/70">
                    <div className="w-8 h-8 rounded-lg bg-black text-[#ffe000] flex items-center justify-center shrink-0">
                      <BadgeCheck size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-black uppercase tracking-wider text-zinc-500 mb-0.5">
                        Meets Specifications
                      </div>
                      <p className="text-sm font-extrabold text-black leading-snug whitespace-pre-line">
                        {specsText}
                      </p>
                    </div>
                  </div>
                )}

                {/* Interactive Action Buttons */}
                <ProductCtaButtons product={ctaProduct} />
              </div>

              {/* Performance Benefits Card */}
              {product.features && product.features.length > 0 && (
                <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-9">
                  <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-zinc-100">
                    <div className="w-8 h-8 rounded-lg bg-[#ffe000] text-black flex items-center justify-center font-bold text-xs">
                      <CheckCircle2 size={16} />
                    </div>
                    <h2 className="text-lg font-black text-black">{titles.performanceBenefits}</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8f9fa] border border-zinc-200/70"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#ffe000] fill-black shrink-0 mt-0.5"
                        />
                        <span className="text-xs sm:text-sm font-semibold text-zinc-800 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Applications Card */}
              {product.applications && product.applications.length > 0 && (
                <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-9">
                  <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-zinc-100">
                    <div className="w-8 h-8 rounded-lg bg-black text-[#ffe000] flex items-center justify-center font-bold text-xs">
                      <Wrench size={16} />
                    </div>
                    <h2 className="text-lg font-black text-black">{titles.applicationAreas}</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {product.applications.map((app, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-bold text-zinc-900"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#ffe000]" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── FULL-WIDTH: PROPERTIES TABLE & ADDITIONAL SECTIONS ──
              Kept outside the two columns so long content doesn't leave the left side empty */}
          {(propertiesTable.rows.length > 0 || customSections.length > 0) && (
            <div className="mt-6 lg:mt-8 space-y-6">
              {/* Physico-Chemical Properties Table (from CMS) */}
              {propertiesTable.rows.length > 0 && (
                <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-9">
                  <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-zinc-100">
                    <div className="w-8 h-8 rounded-lg bg-[#ffe000] text-black flex items-center justify-center font-bold text-xs">
                      <Cpu size={16} />
                    </div>
                    <h2 className="text-lg font-black text-black">{titles.propertiesTable}</h2>
                  </div>

                  <SpecTable headers={propertiesTable.headers} rows={propertiesTable.rows} />
                </div>
              )}

              {/* Additional sections defined in the CMS */}
              {customSections.length > 0 && <ProductCustomSections sections={customSections} />}
            </div>
          )}
        </div>
      </div>

      {/* ── RELATED PRODUCTS SECTION ── */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-black uppercase text-[#d4af37] tracking-wider">
                  Similar Formulations
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-1">
                  Related Lubricants
                </h2>
              </div>
              <Link
                href={`/products?cat=${product.category}`}
                className="text-xs font-black uppercase tracking-wider text-black hover:text-[#d4af37] transition-colors"
              >
                View all in this category →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
