'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { X, ChevronRight, Package, Zap, Shield, Phone, Mail, ExternalLink } from 'lucide-react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const categoryImageMap: Record<string, string> = {
  'engine-oil': '/images/prod-engine-oil.jpg',
  'gear-oil': '/images/prod-gear-oil.jpg',
  atf: '/images/prod-atf.jpg',
  industrial: '/images/prod-industrial.jpg',
  fluids: '/images/prod-industrial.jpg',
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', qty: '' });
  const [submitted, setSubmitted] = useState(false);

  const imgSrc = categoryImageMap[product.category] || '/images/prod-engine-oil.jpg';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        {/* Header with Product Render */}
        <div className="relative p-6 border-b border-zinc-800 flex items-start gap-5">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-black flex-shrink-0 border border-zinc-800 shadow-md">
            <Image
              src={imgSrc}
              alt={product.name}
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="flex-1 min-w-0 pr-8">
            {product.badge && (
              <span className="badge badge-amber mb-2">{product.badge}</span>
            )}
            <h2 className="text-white font-black text-lg sm:text-xl leading-tight">
              {product.name}
            </h2>
            {product.subcategory && (
              <p className="text-[#ffe000] text-xs font-extrabold uppercase tracking-wider mt-1">{product.subcategory}</p>
            )}
          </div>
          <button
            id="product-modal-close"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-black hover:bg-[#ffe000] transition-all"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-zinc-300 text-sm leading-relaxed">{product.description}</p>

          {/* Specs */}
          {(product.specifications.viscosity ||
            product.specifications.grade ||
            product.specifications.standard) && (
            <div className="bg-[#14151b] border border-zinc-800 rounded-2xl p-4">
              <h3 className="text-[#ffe000] font-black text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                <Zap size={14} className="text-[#ffe000]" /> Technical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {product.specifications.viscosity && (
                  <div>
                    <p className="text-zinc-500 text-xs font-semibold mb-0.5">Viscosity Grade</p>
                    <p className="text-white text-sm font-black">{product.specifications.viscosity}</p>
                  </div>
                )}
                {product.specifications.grade && (
                  <div>
                    <p className="text-zinc-500 text-xs font-semibold mb-0.5">Performance Grade</p>
                    <p className="text-white text-sm font-black">{product.specifications.grade}</p>
                  </div>
                )}
                {product.specifications.standard && (
                  <div className="col-span-2">
                    <p className="text-zinc-500 text-xs font-semibold mb-0.5">Standard</p>
                    <p className="text-white text-sm font-black">{product.specifications.standard}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Features */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
              <Shield size={14} className="text-[#ffe000]" /> Key Engineering Features
            </h3>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm font-medium">
                  <ChevronRight size={14} className="text-[#ffe000] mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
              <Zap size={14} className="text-[#ffe000]" /> Recommended Applications
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 text-xs font-semibold"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Packaging */}
          {product.specifications.packaging && (
            <div>
              <h3 className="text-white font-black text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                <Package size={14} className="text-[#ffe000]" /> Available Pack Sizes
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.specifications.packaging.map((p, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[#ffe000]/15 border border-[#ffe000]/30 rounded-lg text-[#ffe000] text-xs font-black"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Direct Product Dedicated Page Link */}
          <div className="pt-2">
            <Link
              href={`/products/${product.slug}`}
              className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold py-3 px-4 rounded-xl border border-zinc-800 text-xs uppercase tracking-wider transition-colors"
            >
              <span>Open Full Dedicated Product Page</span>
              <ExternalLink size={14} className="text-[#ffe000]" />
            </Link>
          </div>

          {/* Quote CTA */}
          {!showQuoteForm && !submitted && (
            <div className="flex gap-3 pt-2">
              <button
                id="product-request-quote"
                onClick={() => setShowQuoteForm(true)}
                className="btn-primary flex-1 justify-center py-3 text-xs"
              >
                Request Official Technical Quote
              </button>
              <a
                href="tel:18005696363"
                className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-[#ffe000] hover:text-black text-[#ffe000] flex items-center justify-center transition-all flex-shrink-0"
                aria-label="Call Lubricon"
              >
                <Phone size={16} />
              </a>
            </div>
          )}

          {/* Quote form */}
          {showQuoteForm && !submitted && (
            <form onSubmit={handleSubmit} className="space-y-3 pt-4 border-t border-zinc-800">
              <h3 className="text-white font-black text-sm">Request Price & TDS Quote for {product.name}</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="form-label">Your Name *</label>
                  <input
                    className="form-input"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">Company</label>
                  <input
                    className="form-input"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">Phone *</label>
                  <input
                    className="form-input"
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="form-label">Quantity Required</label>
                <input
                  className="form-input"
                  placeholder="e.g. 210L Barrel / 500L monthly"
                  value={formData.qty}
                  onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-3 text-xs">
                <Mail size={15} />
                Submit Enquiry
              </button>
            </form>
          )}

          {/* Success */}
          {submitted && (
            <div className="text-center py-6 space-y-3 border-t border-zinc-800 pt-4 animate-scale-in">
              <div className="text-4xl">✅</div>
              <h3 className="text-white font-black text-lg">Enquiry Received!</h3>
              <p className="text-zinc-400 text-xs font-medium">
                Thank you, {formData.name}! A Lubricon Technical Support Engineer will contact you within 24 hours.
              </p>
              <a href="tel:18005696363" className="btn-primary justify-center py-2.5 text-xs">
                <Phone size={14} /> Call 1800 569 6363
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
