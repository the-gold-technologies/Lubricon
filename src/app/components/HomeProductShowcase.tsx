'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { products, productCategories } from '@/data/products';
import { Product } from '@/types';

export default function HomeProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products.slice(0, 8)
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
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
              <span>View All 40+ Products</span>
              <ArrowRight size={14} />
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

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
