'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Phone,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Zap,
  Award,
  ChevronRight,
  Clock,
  Sparkles,
  Search,
} from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import CallbackSection from '@/components/CallbackSection';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import LubricantFinder from '@/components/LubricantFinder';
import { products, featuredProducts, productCategories } from '@/data/products';
import { industries } from '@/data/industries';
import { Product } from '@/types';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products.slice(0, 8)
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      {/* ── 1. AUTHENTIC HERO CAROUSEL ── */}
      <HeroSlider />

      {/* ── 2. KEY VALUE STRIP (Under Hero) ── */}
      <div className="bg-zinc-950 text-white border-b-2 border-[#ffe000] py-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 border-r border-zinc-800 last:border-0">
            <span className="text-xl">🇦🇺</span>
            <div className="text-left">
              <div className="text-xs font-bold text-[#ffe000] uppercase">Australian Formula</div>
              <div className="text-[11px] text-zinc-400">World-Class Tech</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 border-r border-zinc-800 last:border-0">
            <Award className="text-[#ffe000]" size={20} />
            <div className="text-left">
              <div className="text-xs font-bold text-[#ffe000] uppercase">API & ISO Certified</div>
              <div className="text-[11px] text-zinc-400">100% Quality Assured</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 border-r border-zinc-800 last:border-0">
            <Shield className="text-[#ffe000]" size={20} />
            <div className="text-left">
              <div className="text-xs font-bold text-[#ffe000] uppercase">Equipment Protection</div>
              <div className="text-[11px] text-zinc-400">Lowers Maintenance</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="text-[#ffe000]" size={20} />
            <div className="text-left">
              <div className="text-xs font-bold text-[#ffe000] uppercase">Toll Free 1800 569 6363</div>
              <div className="text-[11px] text-zinc-400">Pan-India Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. SIGNATURE SECTION: "INDUSTRIES WE SERVE" (Exact Cards from lubriconindia.com) ── */}
      <section className="py-16 px-4 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Industries We Serve
            </h2>
            <div className="w-20 h-1 bg-[#ffe000] mx-auto mt-3 rounded-full" />
            <p className="text-zinc-600 text-sm mt-3 max-w-xl mx-auto">
              Engineered lubrication solutions delivering extreme heat resistance, high-pressure stability, and continuous uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plastic Injection Molding */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-zinc-200 group flex flex-col">
              <div className="relative h-72 bg-zinc-100 overflow-hidden">
                <Image
                  src="/images/ind-plastic.png"
                  alt="Plastic Injection Molding - Lubricon Specialities"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/80 text-[#ffe000] text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Injection Molding
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-amber-600 transition">
                    Plastic Injection Molding
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                    High-temperature hydraulic oils, anti-wear tie-bar greases, and non-staining mold protectants for uninterrupted cycle times.
                  </p>
                </div>
                <Link
                  href="/industries#plastic-injection-molding"
                  className="w-full py-2.5 bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg text-center transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Explore Industry Solutions <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Paper Mills */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-zinc-200 group flex flex-col">
              <div className="relative h-72 bg-zinc-100 overflow-hidden">
                <Image
                  src="/images/ind-paper.png"
                  alt="Paper Mills Lubrication - Lubricon"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/80 text-[#ffe000] text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Pulp & Paper
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-amber-600 transition">
                    Paper Mills
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                    Water-resistant EP gear oils, high-speed dryer bearing lubricants, and rust preventives engineered for 24/7 moisture environments.
                  </p>
                </div>
                <Link
                  href="/industries#paper-mills"
                  className="w-full py-2.5 bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg text-center transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Explore Industry Solutions <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Steel Plants */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-zinc-200 group flex flex-col">
              <div className="relative h-72 bg-zinc-100 overflow-hidden">
                <Image
                  src="/images/ind-steel.png"
                  alt="Steel Plants Lubrication - Lubricon"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/80 text-[#ffe000] text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Heavy Metallurgy
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-amber-600 transition">
                    Steel Plants
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                    Ultra-high load EP gear lubricants, fire-resistant hydraulic fluids, and roll bearing greases surviving extreme furnace temperatures.
                  </p>
                </div>
                <Link
                  href="/industries#steel-plants"
                  className="w-full py-2.5 bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg text-center transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Explore Industry Solutions <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT LUBRICON SECTION (Original Text & Authentic Image) ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Original Text */}
            <div className="lg:col-span-7">
              <div className="inline-block bg-[#ffe000]/30 text-black text-xs font-black uppercase px-3 py-1 rounded-md mb-3">
                About Lubricon Specialities India
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 leading-tight mb-6">
                Redefining Performance, Reliability & Innovation in{' '}
                <span className="underline decoration-[#ffe000] decoration-4">Lubrication Solutions</span>
              </h2>

              <div className="space-y-4 text-zinc-700 text-base leading-relaxed">
                <p>
                  <strong>At Lubricon Specialities India</strong>, we are redefining performance, reliability, and innovation in lubrication solutions. Backed by advanced Australian technology, Lubricon brings to the Indian industry a comprehensive range of speciality and conventional lubricants engineered for modern industrial and automotive demands.
                </p>
                <p>
                  With exclusive rights to represent the Lubricon brand in India, Lubricon Specialities India operates independently, delivering international-quality products tailored for Indian operating conditions. Our formulations are driven by deep technical know-how, field-tested performance, and a commitment to operational efficiency.
                </p>
                <p>
                  Whether it&apos;s High-performance Greases, Metalworking Fluids, or Industrial-grade Oils, our solutions are trusted by leading Manufacturers, Workshops, and Engineering units across the country.
                </p>
                <p className="text-lg font-bold text-black border-l-4 border-[#ffe000] pl-4 py-1 bg-amber-50 rounded-r">
                  &ldquo;At Lubricon, we don&apos;t just sell lubricants — we enable uptime, protect assets, and help you run smoother.&rdquo;
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="bg-black hover:bg-zinc-800 text-white font-bold px-7 py-3 rounded-full text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
                >
                  Read Full Company Story <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:18005696363"
                  className="border-2 border-black hover:bg-black hover:text-white text-black font-bold px-7 py-3 rounded-full text-xs uppercase tracking-wider transition flex items-center gap-2"
                >
                  <Phone size={14} /> Speak With an Engineer
                </a>
              </div>
            </div>

            {/* Right: Authentic Framed Image (9px Yellow border & unique border radius) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div
                  className="relative overflow-hidden shadow-2xl"
                  style={{
                    border: '9px solid #ffe000',
                    borderRadius: '35px 0px 35px 0px',
                    width: '340px',
                    height: '420px',
                  }}
                >
                  <Image
                    src="/images/aboutlubricon.jpeg"
                    alt="About Lubricon Specialities India"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Australian Tech Badge Overlay */}
                <div className="absolute -bottom-4 -right-4 bg-zinc-950 text-white p-4 rounded-xl shadow-2xl border-2 border-[#ffe000] max-w-[200px]">
                  <div className="text-2xl mb-1">🇦🇺 ⚙️ 🇮🇳</div>
                  <div className="text-xs font-black text-[#ffe000] uppercase">Australian Tech</div>
                  <div className="text-[11px] text-zinc-400">Made for Indian Extremes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. INTERACTIVE PRODUCT CATALOG SHOWCASE ── */}
      <section className="py-20 px-4 bg-zinc-900 text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[#ffe000] text-xs font-black uppercase tracking-wider">
                Full Product Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
                Engineered for Peak <span className="text-[#ffe000]">Performance</span>
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#ffe000] hover:bg-white text-black font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition shadow-md"
            >
              View All 40+ Products <ArrowRight size={14} />
            </Link>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-zinc-800 pb-4">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition ${
                  activeCategory === cat.id
                    ? 'bg-[#ffe000] text-black shadow-md scale-105'
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. LUBRICANT FINDER WIZARD ── */}
      <section className="py-16 px-4 bg-zinc-100 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="bg-black text-[#ffe000] text-xs font-bold uppercase px-3 py-1 rounded-full">
              Automated Lubricant Advisor
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900 mt-2">
              Find the Right Lubricon Lubricant
            </h2>
            <p className="text-zinc-600 text-sm mt-1">
              Select your machinery or vehicle requirements for instant recommended grades.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-zinc-200">
            <LubricantFinder />
          </div>
        </div>
      </section>

      {/* ── 7. SIGNATURE YELLOW CALLBACK SECTION (Exact GET A CALLBACK component) ── */}
      <CallbackSection />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
