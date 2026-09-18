import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { productCategories } from "@/data/products";

interface ProductsGridProps {
  products: Product[];
  activeCategory: string;
  searchQuery: string;
  onSelectProduct: (product: Product) => void;
  onReset: () => void;
}

export default function ProductsGrid({
  products,
  activeCategory,
  searchQuery,
  onSelectProduct,
  onReset,
}: ProductsGridProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50 min-h-[500px]">
      <div className="max-w-7xl mx-auto">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
          <p className="text-zinc-600 text-sm">
            Showing{" "}
            <span className="text-black font-extrabold">{products.length}</span>{" "}
            product{products.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && (
              <>
                {" "}
                in{" "}
                <span className="font-bold text-black">
                  {
                    productCategories.find((c) => c.id === activeCategory)
                      ?.label
                  }
                </span>
              </>
            )}
            {searchQuery && (
              <>
                {" "}
                matching &quot;
                <span className="font-bold text-black">{searchQuery}</span>
                &quot;
              </>
            )}
          </p>
          {(activeCategory !== "all" || searchQuery) && (
            <button
              onClick={onReset}
              className="text-xs font-bold text-black hover:text-[#d4af37] underline transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {products.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-black text-black mb-2">
              No lubricants found
            </h3>
            <p className="text-zinc-500 text-sm max-w-sm mx-auto mb-6">
              We couldn&apos;t find any products matching your search criteria.
              Try another keyword or browse all categories.
            </p>
            <button
              onClick={onReset}
              className="bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
