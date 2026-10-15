import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Zap, CheckCircle2, ArrowLeft, Wrench, Cpu, Check } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductCtaButtons from "./components/ProductCtaButtons";
import JsonLd from "@/components/JsonLd";
import { normalizeProduct, ExtendedProduct, getApiBaseUrl } from "@/store/useCMSStore";

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

                  {/* Top-Left: Australian Tech Badge */}
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow">
                    <span className="text-xs">🇦🇺</span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-white">
                      Australian Tech
                    </span>
                  </div>

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
              {(product.specifications?.grade ||
                product.specifications?.viscosity ||
                product.specifications?.standard ||
                (product.specifications?.packaging &&
                  product.specifications.packaging.length > 0)) && (
                <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-sm font-black text-black mb-5 pb-3 border-b border-zinc-100">
                    <Zap size={16} className="text-[#ffe000] fill-black" />
                    <span>Engineering Standards</span>
                  </div>

                  <div className="divide-y divide-zinc-100 text-xs sm:text-sm">
                    {product.specifications?.grade && (
                      <div className="py-3 flex items-center justify-between">
                        <span className="text-zinc-500 font-medium">Performance Grade</span>
                        <span className="text-black font-extrabold text-right">
                          {product.specifications.grade}
                        </span>
                      </div>
                    )}

                    {product.specifications?.viscosity && (
                      <div className="py-3 flex items-center justify-between">
                        <span className="text-zinc-500 font-medium">Viscosity Rating</span>
                        <span className="text-black font-extrabold text-right">
                          {product.specifications.viscosity}
                        </span>
                      </div>
                    )}

                    {product.specifications?.standard && (
                      <div className="py-3 flex items-center justify-between">
                        <span className="text-zinc-500 font-medium">Testing Standard</span>
                        <span className="text-black font-extrabold text-right">
                          {product.specifications.standard}
                        </span>
                      </div>
                    )}

                    {product.specifications?.packaging &&
                      product.specifications.packaging.length > 0 && (
                        <div className="py-3 flex items-center justify-between">
                          <span className="text-zinc-500 font-medium">Standard Packaging</span>
                          <span className="text-black font-extrabold text-right">
                            {product.specifications.packaging.join(", ")}
                          </span>
                        </div>
                      )}
                  </div>
                </div>
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
                  <span className="bg-zinc-100 text-zinc-700 text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                    Commercial Supply
                  </span>
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
                    <Tag className="text-2xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[1.15] mb-4">
                      {product.name}
                    </Tag>
                  );
                })()}

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {product.description}
                </p>

                {/* Interactive Action Buttons */}
                <ProductCtaButtons product={product as any} />
              </div>

              {/* Performance Benefits Card */}
              {product.features && product.features.length > 0 && (
                <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-9">
                  <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-zinc-100">
                    <div className="w-8 h-8 rounded-lg bg-[#ffe000] text-black flex items-center justify-center font-bold text-xs">
                      <CheckCircle2 size={16} />
                    </div>
                    <h2 className="text-lg font-black text-black">
                      Key Performance Features &amp; Benefits
                    </h2>
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
                    <h2 className="text-lg font-black text-black">Recommended Application Areas</h2>
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

              {/* Physico-Chemical Properties Table (from CMS) */}
              {product.propertiesTable && product.propertiesTable.length > 0 && (
                <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-9 overflow-x-auto">
                  <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-zinc-100">
                    <div className="w-8 h-8 rounded-lg bg-[#ffe000] text-black flex items-center justify-center font-bold text-xs">
                      <Cpu size={16} />
                    </div>
                    <h2 className="text-lg font-black text-black">Physico-Chemical Properties</h2>
                  </div>

                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 text-zinc-500 font-extrabold uppercase text-[11px]">
                        <th className="py-2.5 px-3">Property</th>
                        <th className="py-2.5 px-3">Test Method</th>
                        <th className="py-2.5 px-3">Typical Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 font-medium">
                      {product.propertiesTable.map((row: any, rIdx: number) => {
                        const property =
                          typeof row?.property === "string"
                            ? row.property
                            : Array.isArray(row)
                              ? row[0]
                              : "";
                        const testMethod =
                          typeof row?.testMethod === "string"
                            ? row.testMethod
                            : Array.isArray(row) && row.length > 2
                              ? row[1]
                              : "-";
                        const value =
                          typeof row?.value === "string"
                            ? row.value
                            : Array.isArray(row)
                              ? row[row.length - 1]
                              : "";
                        return (
                          <tr key={rIdx} className="hover:bg-zinc-50 transition-colors">
                            <td className="py-2.5 px-3 font-bold text-black">{property}</td>
                            <td className="py-2.5 px-3 text-zinc-500">{testMethod}</td>
                            <td className="py-2.5 px-3 font-extrabold text-black">{value}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
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
