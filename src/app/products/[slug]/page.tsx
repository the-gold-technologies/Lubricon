import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { 
  ChevronRight, 
  Zap, 
  Shield, 
  Package, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  ArrowLeft,
  Truck,
  Award
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

const categoryImageMap: Record<string, string> = {
  'engine-oil': '/images/prod-engine-oil.jpg',
  'gear-oil': '/images/prod-gear-oil.jpg',
  atf: '/images/prod-atf.jpg',
  industrial: '/images/prod-industrial.jpg',
  fluids: '/images/prod-industrial.jpg',
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const imgSrc = categoryImageMap[product.category] || '/images/prod-engine-oil.jpg';
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <main className="bg-white text-zinc-900 min-h-screen">
      {/* ── BREADCRUMB & BACK LINK ── */}
      <div className="bg-black border-b border-zinc-900 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Link href="/" className="hover:text-[#ffe000] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-zinc-600" />
            <Link href="/products" className="hover:text-[#ffe000] transition-colors">
              Products
            </Link>
            <ChevronRight size={12} className="text-zinc-600" />
            <Link
              href={`/products?cat=${product.category}`}
              className="hover:text-[#ffe000] transition-colors capitalize"
            >
              {product.category.replace('-', ' ')}
            </Link>
            <ChevronRight size={12} className="text-zinc-600" />
            <span className="text-[#ffe000] font-bold truncate max-w-[200px] sm:max-w-xs">
              {product.name}
            </span>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-[#ffe000] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Products</span>
          </Link>
        </div>
      </div>

      {/* ── HERO PRODUCT DETAIL SECTION ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Product Image & Drum Presentation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-black border-2 border-zinc-800 shadow-2xl aspect-square">
                <Image
                  src={imgSrc}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Australian Tech Badge Overlay */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#ffe000]/40 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#ffe000] animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    Australian Tech <span className="text-[#ffe000]">• LSI</span>
                  </span>
                </div>

                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="badge badge-amber shadow-lg">{product.badge}</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md rounded-2xl p-4 border border-zinc-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase tracking-wider font-semibold">
                      Performance Standard
                    </span>
                    <span className="text-white font-extrabold text-sm">
                      {product.specifications.grade || product.specifications.standard || 'API Certified'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-400 block text-[10px] uppercase tracking-wider font-semibold">
                      Formulation Code
                    </span>
                    <span className="text-[#ffe000] font-black text-sm">
                      {product.specifications.viscosity || 'HD SPEC'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Trust Strip */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-black text-[#ffe000] flex items-center justify-center flex-shrink-0">
                    <Award size={18} />
                  </div>
                  <div className="text-xs">
                    <div className="font-extrabold text-black">ISO 9001:2015</div>
                    <div className="text-zinc-500 text-[11px]">Factory Certified</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ffe000] text-black flex items-center justify-center flex-shrink-0">
                    <Truck size={18} />
                  </div>
                  <div className="text-xs">
                    <div className="font-extrabold text-black">Pan-India Supply</div>
                    <div className="text-zinc-500 text-[11px]">Direct Bulk Shipments</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Specs & Enquiry Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                {product.subcategory && (
                  <span className="inline-block bg-black text-[#ffe000] text-[11px] font-black uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
                    {product.subcategory}
                  </span>
                )}
                <h1 className="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-zinc-600 font-medium leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm">
                <h2 className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-2 mb-6 pb-3 border-b border-zinc-100">
                  <Zap size={16} className="text-[#ffe000]" />
                  <span>Technical Specifications</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {product.specifications.viscosity && (
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-500 block mb-1">
                        Viscosity Grade
                      </span>
                      <span className="text-base font-black text-black">
                        {product.specifications.viscosity}
                      </span>
                    </div>
                  )}

                  {product.specifications.grade && (
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-500 block mb-1">
                        Performance Grade
                      </span>
                      <span className="text-base font-black text-black">
                        {product.specifications.grade}
                      </span>
                    </div>
                  )}

                  {product.specifications.standard && (
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-500 block mb-1">
                        Testing Standard
                      </span>
                      <span className="text-base font-black text-black">
                        {product.specifications.standard}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Engineering Features */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm">
                <h2 className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-2 mb-6 pb-3 border-b border-zinc-100">
                  <Shield size={16} className="text-[#ffe000]" />
                  <span>Performance Benefits & Features</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-black fill-[#ffe000] mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-semibold text-zinc-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Applications & Packaging */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
                  <h3 className="text-xs font-black uppercase tracking-wider text-black mb-4">
                    Operating Domains
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-zinc-100 text-black text-xs font-bold border border-zinc-200"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
                  <h3 className="text-xs font-black uppercase tracking-wider text-black mb-4 flex items-center gap-1.5">
                    <Package size={14} className="text-[#ffe000]" />
                    <span>Available Packaging Sizes</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.specifications.packaging?.map((p, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl bg-[#ffe000] text-black text-xs font-black shadow-sm"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Commercial & Technical Action Strip */}
              <div className="p-6 sm:p-8 rounded-3xl bg-black text-white border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    Need Bulk Pricing or Full TDS Sheet?
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
                    Talk directly to our Lubrication Engineers for batch specs & custom blending.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(product.name)}`}
                    className="flex-1 sm:flex-none text-center bg-[#ffe000] hover:bg-white text-black font-extrabold px-7 py-3 rounded-full text-xs uppercase tracking-wider transition shadow-md whitespace-nowrap"
                  >
                    Request TDS & Quote
                  </Link>
                  <a
                    href="tel:18005696363"
                    className="w-11 h-11 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-[#ffe000] hover:text-black text-[#ffe000] flex items-center justify-center transition flex-shrink-0"
                    aria-label="Call Lubricon Toll Free"
                  >
                    <Phone size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS SECTION ── */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white border-t border-zinc-900">
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
