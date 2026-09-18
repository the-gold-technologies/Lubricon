'use client';

import { useState } from 'react';
import { Product } from '@/types';
import { X, ChevronRight, Package, Zap, Shield, Phone, Mail } from 'lucide-react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const categoryColorMap: Record<string, string> = {
  'engine-oil': 'amber',
  'gear-oil': 'blue',
  atf: 'orange',
  industrial: 'green',
  fluids: 'amber',
};

const badgeStyleMap: Record<string, string> = {
  amber: 'badge-amber',
  blue: 'badge-blue',
  orange: 'badge-orange',
  green: 'badge-green',
};

const categoryIconMap: Record<string, string> = {
  'engine-oil': '🛢️',
  'gear-oil': '⚙️',
  atf: '🔄',
  industrial: '🏭',
  fluids: '💧',
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', qty: '' });
  const [submitted, setSubmitted] = useState(false);

  const color = categoryColorMap[product.category] || 'amber';
  const badgeClass = badgeStyleMap[color];
  const icon = categoryIconMap[product.category];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-start gap-4">
          <div className="text-4xl flex-shrink-0">{icon}</div>
          <div className="flex-1 min-w-0">
            {product.badge && (
              <span className={`badge ${badgeClass} mb-2`}>{product.badge}</span>
            )}
            <h2 className="text-white font-display font-bold text-xl leading-tight">
              {product.name}
            </h2>
            {product.subcategory && (
              <p className="text-slate-400 text-sm mt-0.5">{product.subcategory}</p>
            )}
          </div>
          <button
            id="product-modal-close"
            onClick={onClose}
            className="flex-shrink-0 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed">{product.description}</p>

          {/* Specs */}
          {(product.specifications.viscosity ||
            product.specifications.grade ||
            product.specifications.standard) && (
            <div className="glass rounded-xl p-4">
              <h3 className="text-amber-400 font-semibold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <Zap size={12} /> Technical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {product.specifications.viscosity && (
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Viscosity Grade</p>
                    <p className="text-white text-sm font-semibold">{product.specifications.viscosity}</p>
                  </div>
                )}
                {product.specifications.grade && (
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Performance Grade</p>
                    <p className="text-white text-sm font-semibold">{product.specifications.grade}</p>
                  </div>
                )}
                {product.specifications.standard && (
                  <div className="col-span-2">
                    <p className="text-slate-500 text-xs mb-0.5">Standard</p>
                    <p className="text-white text-sm font-semibold">{product.specifications.standard}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Features */}
          <div>
            <h3 className="text-amber-400 font-semibold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
              <Shield size={12} /> Key Features
            </h3>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <ChevronRight size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-amber-400 font-semibold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
              <Zap size={12} /> Applications
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-xs"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Packaging */}
          {product.specifications.packaging && (
            <div>
              <h3 className="text-amber-400 font-semibold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <Package size={12} /> Available Pack Sizes
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.specifications.packaging.map((p, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-300 text-xs font-semibold"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quote Form */}
          {!showQuoteForm && !submitted && (
            <div className="flex gap-3 pt-2">
              <button
                id="product-request-quote"
                onClick={() => setShowQuoteForm(true)}
                className="btn-primary flex-1 justify-center py-3 text-sm"
              >
                Request a Quote
              </button>
              <a
                href="tel:18005696363"
                className="btn-outline px-4 py-3 text-sm"
              >
                <Phone size={14} />
              </a>
            </div>
          )}

          {/* Quote form */}
          {showQuoteForm && !submitted && (
            <form onSubmit={handleSubmit} className="space-y-3 pt-2 border-t border-white/10">
              <h3 className="text-white font-semibold text-sm">Request a Quote for {product.name}</h3>
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
                  placeholder="e.g. 200L per month"
                  value={formData.qty}
                  onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-3 text-sm">
                <Mail size={15} />
                Submit Enquiry
              </button>
            </form>
          )}

          {/* Success */}
          {submitted && (
            <div className="text-center py-6 space-y-3 border-t border-white/10 pt-4 animate-scale-in">
              <div className="text-5xl">✅</div>
              <h3 className="text-white font-bold text-lg">Enquiry Received!</h3>
              <p className="text-slate-400 text-sm">
                Thank you, {formData.name}! Our team will contact you within 24 hours.
              </p>
              <a href="tel:18005696363" className="btn-primary justify-center py-2.5 text-sm">
                <Phone size={14} /> Call for Faster Response
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
