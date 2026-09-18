'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { products, productCategories } from '@/data/products';
import { Product } from '@/types';
import { Search, Filter, X } from 'lucide-react';
import CallbackSection from '@/components/CallbackSection';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const cat = searchParams.get('cat');
    const search = searchParams.get('search');
    if (cat) setActiveCategory(cat);
    if (search) setSearchQuery(search);
  }, [searchParams]);

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.subcategory || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.specifications.grade || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.specifications.viscosity || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="orb orb-amber w-96 h-96 -top-48 -right-32 opacity-[0.10]" />
        <div className="orb orb-blue w-64 h-64 -bottom-24 -left-16 opacity-[0.08]" />
        <div className="container-custom relative z-10 text-center">
          <div className="section-tag">Product Catalog</div>
          <h1 className="section-heading text-white mb-5">
            All <span className="gradient-text">Lubricon</span> Products
          </h1>
          <p className="section-subheading mx-auto">
            Explore our comprehensive range of industrial and automotive lubricants —
            engineered for peak performance across every application.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[64px] z-30 bg-navy-900/95 backdrop-blur-lg border-b border-white/10 py-4">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-0 max-w-md">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                className="form-input pl-10 pr-10 py-2.5 text-sm"
                placeholder="Search products, grades, viscosity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="product-search"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <Filter size={13} className="text-slate-400 mr-1 flex-shrink-0" />
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  id={`cat-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-amber-500 text-navy-950'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-gradient py-16">
        <div className="container-custom">
          {/* Result count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-slate-400 text-sm">
              Showing{' '}
              <span className="text-amber-400 font-semibold">{filtered.length}</span>{' '}
              product{filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'all' && (
                <> in {productCategories.find((c) => c.id === activeCategory)?.label}</>
              )}
              {searchQuery && <> matching &quot;{searchQuery}&quot;</>}
            </p>
            {(activeCategory !== 'all' || searchQuery) && (
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="text-amber-400 text-xs hover:underline flex items-center gap-1"
              >
                <X size={11} /> Clear filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-white font-semibold text-xl mb-2">No products found</h3>
              <p className="text-slate-400 text-sm">Try adjusting your search or category filter.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="btn-primary mt-5 text-sm py-2.5 px-6"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-navy-900 border-t border-white/10">
        <div className="container-custom text-center">
          <h2 className="text-white font-display font-bold text-2xl md:text-3xl mb-3">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Our technical team can recommend the right lubricant for any application.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:18005696363" className="btn-primary py-3 px-7">
              Call 1800 569 6363 (Free)
            </a>
            <a href="mailto:info@lubriconindia.com" className="btn-outline py-3 px-7">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {/* Callback Section */}
      <CallbackSection />
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading Products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
