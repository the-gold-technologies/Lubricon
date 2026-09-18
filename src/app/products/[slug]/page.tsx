import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import {
  ChevronRight,
  Zap,
  CheckCircle2,
  ArrowLeft,
  Wrench,
  Cpu,
  Check,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

const categoryImageMap: Record<string, string> = {
  "engine-oil": "/images/lubricon-can-5l.jpg",
  "gear-oil": "/images/lubricon-pail-20l.jpg",
  atf: "/images/prod-atf.jpg",
  industrial: "/images/lubricon-drum-clean.jpg",
  fluids: "/images/lubricon-can-5l.jpg",
  coolants: "/images/lubricon-pail-20l.jpg",
  greases: "/images/lubricon-pail-20l.jpg",
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const imgSrc =
    categoryImageMap[product.category] || "/images/lubricon-drum-clean.jpg";
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <main className="bg-[#f8f9fa] text-zinc-900 min-h-screen">
      {/* ── BREADCRUMB & BACK LINK ── */}
      <div className="bg-white border-b border-zinc-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-zinc-400" />
            <Link
              href="/products"
              className="hover:text-black transition-colors"
            >
              Products
            </Link>
            <ChevronRight size={12} className="text-zinc-400" />
            <Link
              href={`/products?cat=${product.category}`}
              className="hover:text-black transition-colors capitalize"
            >
              {product.category.replace("-", " ")}
            </Link>
            <ChevronRight size={12} className="text-zinc-400" />
            <span className="text-black font-extrabold truncate max-w-[200px] sm:max-w-xs">
              {product.name}
            </span>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-black hover:text-[#d4af37] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Catalog</span>
          </Link>
        </div>
      </div>

      {/* ── 2-COLUMN ARCHITECTURAL PRODUCT DETAIL SECTION ── */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* ════════ LEFT COLUMN: Product Image & Engineering Standards Table (5 cols) ════════ */}
            <div className="lg:col-span-5 space-y-6">
              {/* Top Card: Product Image Stage */}
              <div className="relative rounded-[28px] overflow-hidden bg-white border border-zinc-200/90 shadow-sm p-4 sm:p-6 group">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#fafafa] flex items-center justify-center p-4">
                  <Image
                    src={imgSrc}
                    alt={product.name}
                    fill
                    priority
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />

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

                  {/* Bottom-Left Pill Tag matching user reference */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block bg-black text-[#ffe000] text-[10px] font-black uppercase px-3 py-1 rounded-md tracking-wider shadow">
                      {product.specifications.viscosity ||
                        product.specifications.grade ||
                        "COMMERCIAL GRADE"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Card: Engineering Standards Table matching user reference */}
              <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-7">
                <div className="flex items-center gap-2 text-sm font-black text-black mb-5 pb-3 border-b border-zinc-100">
                  <Zap size={16} className="text-[#ffe000] fill-black" />
                  <span>Engineering Standards</span>
                </div>

                <div className="divide-y divide-zinc-100 text-xs sm:text-sm">
                  <div className="py-3 flex items-center justify-between">
                    <span className="text-zinc-500 font-medium">
                      Performance Grade
                    </span>
                    <span className="text-black font-extrabold text-right">
                      {product.specifications.grade || "API Certified"}
                    </span>
                  </div>

                  <div className="py-3 flex items-center justify-between">
                    <span className="text-zinc-500 font-medium">
                      Viscosity Rating
                    </span>
                    <span className="text-black font-extrabold text-right">
                      {product.specifications.viscosity ||
                        "ISO Multi-Viscosity"}
                    </span>
                  </div>

                  {product.specifications.standard && (
                    <div className="py-3 flex items-center justify-between">
                      <span className="text-zinc-500 font-medium">
                        Testing Standard
                      </span>
                      <span className="text-black font-extrabold text-right">
                        {product.specifications.standard}
                      </span>
                    </div>
                  )}

                  <div className="py-3 flex items-center justify-between">
                    <span className="text-zinc-500 font-medium">
                      Australian Chemistry
                    </span>
                    <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                      <Check size={14} className="stroke-[3]" />
                      <span>Certified Formulation</span>
                    </span>
                  </div>

                  <div className="py-3 flex items-center justify-between">
                    <span className="text-zinc-500 font-medium">
                      Thermal Stability
                    </span>
                    <span className="text-black font-extrabold text-right">
                      High Viscosity Index (HVI)
                    </span>
                  </div>

                  <div className="py-3 flex items-center justify-between">
                    <span className="text-zinc-500 font-medium">
                      Standard Packaging
                    </span>
                    <span className="text-black font-extrabold text-right">
                      {product.specifications.packaging?.join(", ") ||
                        "5L, 20L, 210L Drum"}
                    </span>
                  </div>

                  <div className="py-3 flex items-center justify-between">
                    <span className="text-zinc-500 font-medium">
                      Quality Assurance
                    </span>
                    <span className="text-black font-extrabold text-right">
                      100% Batch Tested
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ════════ RIGHT COLUMN: Content, Features, Applications & Quote Box (7 cols) ════════ */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header Info Block */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-zinc-800 mb-2">
                  <Cpu size={14} className="text-[#ffe000] fill-black" />
                  <span>
                    Lubricon{" "}
                    {product.subcategory || product.category.replace("-", " ")}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[1.15] mb-3">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Card 1: Performance Features (2-column bullet checklist) */}
              <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-7">
                <h2 className="text-base sm:text-lg font-black text-black tracking-tight mb-5">
                  Performance Features
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#ffe000] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-black stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-zinc-700 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Typical Applications */}
              <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-7">
                <div className="flex items-center gap-2 text-base font-black text-black mb-3">
                  <Wrench size={16} className="text-zinc-800" />
                  <span>Typical Applications</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {product.applications.join(", ")}. Designed for continuous
                  operation in severe Indian industrial and automotive
                  environments.
                </p>
              </div>

              {/* Card 3: Enquiry & CTA Box matching user reference */}
              <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="text-center sm:text-left">
                  <div className="text-sm sm:text-base font-black text-black">
                    Need pricing or technical data sheets?
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">
                    Get custom estimates and TDS spec sheets within 24 hours.
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(product.name)}`}
                    className="bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-black px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md text-center flex-1 sm:flex-none"
                  >
                    Get Custom Quote
                  </Link>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(product.name + " Price List")}`}
                    className="bg-white hover:bg-zinc-100 text-black border-2 border-zinc-200 hover:border-black font-extrabold px-5 py-3 rounded-full text-xs uppercase tracking-wider transition-all text-center flex-1 sm:flex-none"
                  >
                    Request Price List
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS SECTION ── */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white border-t border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
              <div>
                <span className="text-[#ffe000] text-xs font-black uppercase tracking-wider">
                  Engineered Formulations
                </span>
                <h2 className="text-2xl font-black text-white mt-1">
                  Related Lubricon Products
                </h2>
              </div>
              <Link
                href={`/products?cat=${product.category}`}
                className="text-xs font-bold text-[#ffe000] hover:text-white uppercase tracking-wider transition flex items-center gap-1"
              >
                <span>View All In Category</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
