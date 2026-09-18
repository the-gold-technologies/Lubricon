'use client';

import { Product } from '@/types';
import { ChevronRight, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const categoryIconMap: Record<string, string> = {
  'engine-oil': '🛢️',
  'gear-oil': '⚙️',
  atf: '🔄',
  industrial: '🏭',
  fluids: '💧',
};

const badgeClassMap: Record<string | 'default', string> = {
  'Latest Grade': 'badge-amber',
  'Best Seller': 'badge-orange',
  ATF: 'badge-blue',
  Specialty: 'badge-green',
  'Corrosion Shield': 'badge-blue',
  Precision: 'badge-green',
  'Industrial Grade': 'badge-amber',
  'Eco Compliance': 'badge-green',
  default: 'badge-amber',
};

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const icon = categoryIconMap[product.category] || '🔧';
  const badgeClass = product.badge
    ? badgeClassMap[product.badge] || badgeClassMap.default
    : '';

  return (
    <div
      role="button"
      tabIndex={0}
      className="product-card card-shine group cursor-pointer"
      onClick={() => onClick(product)}
      onKeyDown={(e) => e.key === 'Enter' && onClick(product)}
      aria-label={`View details for ${product.name}`}
    >
      {/* Icon header */}
      <div className="h-28 bg-gradient-to-br from-navy-800/70 to-navy-700/40 flex items-center justify-center relative overflow-hidden">
        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        {product.featured && (
          <div className="absolute top-3 left-3">
            <Star size={12} className="text-amber-400 fill-amber-400" />
          </div>
        )}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span className={`badge ${badgeClass}`}>{product.badge}</span>
          </div>
        )}
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        {product.subcategory && (
          <p className="text-amber-500 text-xs font-semibold uppercase tracking-wider mb-1">
            {product.subcategory}
          </p>
        )}
        <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-amber-200 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Specs pills */}
        {(product.specifications.viscosity || product.specifications.grade) && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.specifications.viscosity && (
              <span className="text-xs bg-navy-700/60 text-slate-300 px-2 py-0.5 rounded-md border border-white/5">
                {product.specifications.viscosity}
              </span>
            )}
            {product.specifications.grade && (
              <span className="text-xs bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded-md border border-amber-500/20">
                {product.specifications.grade}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-slate-500 text-xs">
            {product.specifications.packaging
              ? `${product.specifications.packaging.length} pack sizes`
              : 'Custom sizes'}
          </span>
          <span className="text-amber-400 text-xs font-semibold flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
            View Details <ChevronRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}
