'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import { ChevronRight, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

const categoryImageMap: Record<string, string> = {
  'engine-oil': '/images/prod-engine-oil.jpg',
  'gear-oil': '/images/prod-gear-oil.jpg',
  atf: '/images/prod-atf.jpg',
  industrial: '/images/prod-industrial.jpg',
  fluids: '/images/prod-industrial.jpg',
};

const badgeClassMap: Record<string | 'default', string> = {
  'Latest Grade': 'badge-amber',
  'Best Seller': 'badge-amber',
  ATF: 'badge-blue',
  Specialty: 'badge-amber',
  'Corrosion Shield': 'badge-blue',
  Precision: 'badge-amber',
  'Industrial Grade': 'badge-amber',
  'Eco Compliance': 'badge-amber',
  default: 'badge-amber',
};

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const router = useRouter();
  const imgSrc = categoryImageMap[product.category] || '/images/prod-engine-oil.jpg';
  const badgeClass = product.badge
    ? badgeClassMap[product.badge] || badgeClassMap.default
    : '';

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
      className="product-card group cursor-pointer flex flex-col justify-between"
      onClick={handleCardClick}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      aria-label={`View details for ${product.name}`}
    >
      <div>
        {/* Clean Studio Drum Header */}
        <div className="relative h-48 w-full bg-[#f4f5f7] overflow-hidden border-b border-zinc-100 flex items-center justify-center">
          <Image
            src="/images/lubricon-drum-clean.jpg"
            alt={product.name}
            fill
            className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {product.featured && (
            <div className="absolute top-3 left-3 z-10 bg-black text-[#ffe000] px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <Star size={11} className="fill-[#ffe000]" />
              <span className="text-[10px] font-black uppercase tracking-wider">Featured</span>
            </div>
          )}
          {product.badge && (
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-[#ffe000] text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-5">
          {product.subcategory && (
            <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-1.5">
              {product.subcategory}
            </p>
          )}
          <h3 className="text-black font-extrabold text-base leading-snug mb-2 group-hover:text-zinc-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-zinc-600 text-xs leading-relaxed line-clamp-2 mb-4 font-medium">
            {product.description}
          </p>

          {/* Specs pills */}
          {(product.specifications.viscosity || product.specifications.grade) && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.specifications.viscosity && (
                <span className="text-[11px] font-bold bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-md border border-zinc-200">
                  {product.specifications.viscosity}
                </span>
              )}
              {product.specifications.grade && (
                <span className="text-[11px] font-bold bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-md border border-zinc-200">
                  {product.specifications.grade}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer link */}
      <div className="px-5 pb-5 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
        <span className="text-zinc-400 font-semibold">
          {product.specifications.packaging
            ? `${product.specifications.packaging.length} pack sizes`
            : 'Standard packs'}
        </span>
        <span className="text-black group-hover:text-[#d4af37] font-extrabold uppercase tracking-wider flex items-center gap-1.5 transition-colors">
          View Details <ChevronRight size={14} className="text-black" />
        </span>
      </div>
    </div>
  );
}
