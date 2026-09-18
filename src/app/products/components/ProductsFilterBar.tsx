import { Search, Filter, X, SlidersHorizontal } from "lucide-react";
import { productCategories, products } from "@/data/products";

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
  // Dynamically compute item count per category
  const getCategoryCount = (catId: string) => {
    if (catId === "all") return products.length;
    return products.filter((p) => p.category === catId).length;
  };

  return (
    <section className="relative bg-white border-b border-zinc-200/90 py-3.5 sm:py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-3.5 lg:gap-6 items-stretch lg:items-center justify-between">
          {/* Enhanced Search Input */}
          <div className="relative w-full lg:w-80 shrink-0">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#ffe000] flex items-center justify-center text-black pointer-events-none shadow-xs">
              <Search size={12} className="stroke-[3]" />
            </div>
            <input
              className="w-full bg-zinc-100/90 focus:bg-white border-2 border-zinc-200/90 focus:border-black rounded-full pl-11 pr-10 py-2 text-xs sm:text-sm text-black font-semibold placeholder:text-zinc-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#ffe000]/40 transition-all shadow-inner"
              placeholder="Search grades, 15W40, ISO..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="product-search"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-zinc-200 hover:bg-black hover:text-white text-zinc-600 flex items-center justify-center transition-colors"
                aria-label="Clear search"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Category Filter Pills - Smooth Left-Right Scroll with Zero Vertical Wobble */}
          <div
            className="flex items-center gap-2 overflow-x-auto overflow-y-hidden flex-nowrap scrollbar-none scroll-smooth py-2.5"
            style={{ overflowY: "hidden", overflowX: "auto" }}
          >
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-black uppercase tracking-wider pr-1 shrink-0">
              <SlidersHorizontal size={13} className="text-black" />
              <span className="text-zinc-600">Filter:</span>
            </div>

            {productCategories.map((cat) => {
              const count = getCategoryCount(cat.id);
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  id={`cat-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#ffe000] text-black border-2 border-black shadow-sm"
                      : "bg-white hover:bg-zinc-50 text-zinc-700 hover:text-black border-2 border-zinc-200 hover:border-zinc-400 shadow-xs"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold leading-none transition-colors ${
                      isActive
                        ? "bg-black text-[#ffe000]"
                        : "bg-zinc-100 group-hover:bg-zinc-200 text-zinc-600 group-hover:text-black"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
