'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, productCategories } from '@/data/products';

export default function HomeProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products.slice(0, 8)
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-t border-b border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black text-xs font-black uppercase px-3 py-1 rounded-full mb-2 tracking-wider shadow-sm">
              <span>Full Product Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Engineered for Peak Performance
            </h2>
            <p className="text-sm text-zinc-600 font-medium mt-1">
              Field-tested formulations powered by Australian lubrication technology.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-black hover:bg-[#ffe000] text-white hover:text-black font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
          >
            <span>View All 40+ Products</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-zinc-200">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition ${
                activeCategory === cat.id
                  ? 'bg-black text-[#ffe000] shadow-md scale-105'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid - direct detail navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
