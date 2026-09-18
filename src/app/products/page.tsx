'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductsHero from './components/ProductsHero';
import ProductsFilterBar from './components/ProductsFilterBar';
import ProductsGrid from './components/ProductsGrid';
import ProductModal from '@/components/ProductModal';
import CallbackSection from '@/components/CallbackSection';
import { products } from '@/data/products';
import { Product } from '@/types';

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
      <ProductsHero />

      <ProductsFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <ProductsGrid
        products={filtered}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onSelectProduct={setSelectedProduct}
        onReset={() => {
          setActiveCategory('all');
          setSearchQuery('');
        }}
      />

      <CallbackSection />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default function ProductsPage() {
  return (
    <main className="bg-white text-zinc-900 min-h-screen">
      <Suspense fallback={<div className="py-20 text-center text-zinc-500">Loading catalog...</div>}>
        <ProductsContent />
      </Suspense>
    </main>
  );
}
