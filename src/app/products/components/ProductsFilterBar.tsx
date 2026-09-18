import { Search, Filter, X } from 'lucide-react';
import { productCategories } from '@/data/products';

interface ProductsFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function ProductsFilterBar({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
}: ProductsFilterBarProps) {
  return (
    <section className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              className="w-full bg-zinc-50 border border-zinc-300 rounded-full pl-11 pr-10 py-2.5 text-sm text-black focus:outline-none focus:border-[#ffe000] focus:ring-2 focus:ring-[#ffe000]/20 transition-all font-medium placeholder-zinc-400"
              placeholder="Search products, grades, viscosity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="product-search"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black transition-colors"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={14} className="text-zinc-400 mr-1 hidden sm:inline" />
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all tracking-wider ${
                  activeCategory === cat.id
                    ? 'bg-[#ffe000] text-black shadow-sm scale-105'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
