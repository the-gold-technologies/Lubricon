"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/types";
import { ChevronRight, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

const categoryImageMap: Record<string, string> = {
  "engine-oil": "/images/lubricon-can-5l.jpg",
  "gear-oil": "/images/lubricon-drum-clean.jpg",
  atf: "/images/lubricon-can-5l.jpg",
  industrial: "/images/lubricon-pail-20l.jpg",
  fluids: "/images/lubricon-can-5l.jpg",
};

const badgeClassMap: Record<string | "default", string> = {
  "Latest Grade": "badge-amber",
  "Best Seller": "badge-amber",
  ATF: "badge-blue",
  Specialty: "badge-amber",
  "Corrosion Shield": "badge-blue",
  Precision: "badge-amber",
  "Industrial Grade": "badge-amber",
  "Eco Compliance": "badge-amber",
  default: "badge-amber",
};

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const router = useRouter();
  const imgSrc =
    categoryImageMap[product.category] || "/images/prod-engine-oil.jpg";
  const badgeClass = product.badge
    ? badgeClassMap[product.badge] || badgeClassMap.default
    : "";

  const handleCardClick = () => {
    if (onClick) {
      onClick(product);
    } else {
      router.push(`/products/${product.slug}`);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-zinc-600 bg-[#12141a] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between"
      onClick={handleCardClick}
      onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
      aria-label={`View details for ${product.name}`}
    >
      <div>
        {/* Crisp White Studio Packshot Bay */}
        <div className="relative h-52 w-full bg-white overflow-hidden border-b border-zinc-800/80 flex items-center justify-center p-3">
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            className="object-contain p-3 group-hover:scale-108 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {product.featured && (
            <div className="absolute top-3 left-3 z-10 bg-black text-[#ffe000] px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
              <Star size={11} className="fill-[#ffe000]" />
              <span className="text-[10px] font-black uppercase tracking-wider">
                Featured
              </span>
            </div>
          )}
          {product.badge && (
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-[#ffe000] text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content Details: Sleek Dark Chassis with Crisp White Typography */}
        <div className="p-5">
          {product.subcategory && (
            <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider mb-1.5">
              {product.subcategory}
            </p>
          )}
          <h3 className="text-white font-extrabold text-base leading-snug mb-2 group-hover:text-[#ffe000] transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 mb-4 font-normal">
            {product.description}
          </p>

          {/* Specs pills */}
          {(product.specifications.viscosity ||
            product.specifications.grade) && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.specifications.viscosity && (
                <span className="text-[11px] font-semibold bg-zinc-900 text-zinc-200 px-2.5 py-1 rounded-md border border-zinc-700/80">
                  {product.specifications.viscosity}
                </span>
              )}
              {product.specifications.grade && (
                <span className="text-[11px] font-semibold bg-zinc-900 text-zinc-200 px-2.5 py-1 rounded-md border border-zinc-700/80">
                  {product.specifications.grade}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer link */}
      <div className="px-5 pb-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
        <span className="text-zinc-400 font-medium">
          {product.specifications.packaging
            ? `${product.specifications.packaging.length} pack sizes`
            : "Standard packs"}
        </span>
        <span className="text-white group-hover:text-[#ffe000] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors">
          <span>View Details</span>
          <ChevronRight
            size={14}
            className="text-[#ffe000] group-hover:translate-x-1 transition-transform"
          />
        </span>
      </div>
    </div>
  );
}
