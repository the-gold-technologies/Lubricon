"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types";
import {
  X,
  User,
  Mail,
  Phone,
  CheckCircle2,
  Building2,
  MapPin,
  Send,
  ShieldCheck,
} from "lucide-react";

interface ProductQuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function ProductQuoteDrawer({
  isOpen,
  onClose,
  product,
}: ProductQuoteDrawerProps) {
  const defaultPackaging =
    product.specifications.packaging && product.specifications.packaging.length > 0
      ? product.specifications.packaging[0]
      : "210L Drum";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    volume: "1 - 5 Barrels (210L)",
    packaging: defaultPackaging,
    destination: "",
    specs: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth enter & exit animation state
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimateIn(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    } else {
      setAnimateIn(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 320);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape & lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      volume: "1 - 5 Barrels (210L)",
      packaging: defaultPackaging,
      destination: "",
      specs: "",
    });
    onClose();
  };

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dim Backdrop with Smooth Fade */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
          animateIn ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Right Slide-over Sheet with Deceleration Spring Curve */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-md md:max-w-lg bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          animateIn ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-start justify-between shrink-0">
          <div>
            <div className="text-[11px] font-black uppercase tracking-wider text-[#d4af37] mb-1">
              RFQ PORTAL
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight leading-tight">
              Get Price Quotation
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-black hover:text-white text-zinc-500 flex items-center justify-center transition cursor-pointer shrink-0 ml-4"
            aria-label="Close panel"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#ffe000] text-black mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 size={36} className="stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                  Ref: LUB-QTE-{Math.floor(10000 + Math.random() * 90000)}
                </span>
                <h3 className="text-2xl font-black text-black tracking-tight mt-1">
                  Quotation Request Sent!
                </h3>
                <p className="text-zinc-600 text-sm max-w-sm mx-auto mt-2 leading-relaxed">
                  Thank you, <strong className="text-black">{formData.name}</strong>. Our industrial desk will contact
                  you with commercial pricing and batch availability for{" "}
                  <strong className="text-black">{product.name}</strong> within 2 hours.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 text-left text-xs space-y-2 max-w-sm mx-auto mt-4">
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-semibold">Product:</span>
                  <span className="font-extrabold text-black">{product.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-semibold">Target Volume:</span>
                  <span className="font-extrabold text-black">{formData.volume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-semibold">Contact:</span>
                  <span className="font-extrabold text-black">{formData.phone}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-3 rounded-xl bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-black text-xs uppercase tracking-wider transition shadow-sm cursor-pointer"
                >
                  Done
                </button>
                <a
                  href="tel:18005696363"
                  className="w-full py-3 rounded-xl bg-black text-white hover:bg-zinc-800 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
                >
                  <Phone size={14} className="text-[#ffe000]" />
                  <span>Call 1800 569 6363 (Direct Support)</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected Product Card matching user reference */}
              <div className="rounded-2xl bg-zinc-50/80 border border-zinc-200/90 p-4">
                <div className="text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-1.5">
                  SELECTED PRODUCT
                </div>
                <div className="text-base font-black text-zinc-950 tracking-tight mb-3">
                  {product.name}
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs pt-2 border-t border-zinc-200/70">
                  <div>
                    <span className="text-zinc-500 block text-[11px] mb-0.5">Viscosity / Grade:</span>
                    <span className="font-extrabold text-zinc-900">
                      {product.specifications.viscosity || product.specifications.grade || "Industrial Certified"}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[11px] mb-0.5">Category:</span>
                    <span className="font-extrabold text-zinc-900 capitalize">
                      {product.subcategory || product.category.replace("-", " ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Your Name */}
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Your Name *
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium placeholder:text-zinc-400 transition"
                  />
                </div>
              </div>

              {/* Corporate Email & Phone / WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium placeholder:text-zinc-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium placeholder:text-zinc-400 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Company & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                    Company / Firm Name *
                  </label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Precision Works"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium placeholder:text-zinc-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                    Delivery City / State *
                  </label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune, Maharashtra"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium placeholder:text-zinc-400 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Target Volume */}
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Target Volume (Volume / Packaging) *
                </label>
                <select
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium text-zinc-900 transition"
                  required
                >
                  <option value="1 - 5 Units (Trial Batch)">1 - 5 Units (Trial Batch)</option>
                  <option value="10 - 25 Units (Commercial)">10 - 25 Units (Commercial)</option>
                  <option value="1 - 5 Barrels (210L Drum)">1 - 5 Barrels (210L Drum)</option>
                  <option value="10+ Barrels / Full Truckload">10+ Barrels / Full Truckload</option>
                  <option value="1,000L - 5,000L Monthly Contract">1,000L - 5,000L Monthly Contract</option>
                </select>
              </div>

              {/* Specific Technical Specs (optional) */}
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Specific Technical Specs (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. ISO VG 68, OEM hydraulic pump compatibility, customized batch certificate..."
                  value={formData.specs}
                  onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium placeholder:text-zinc-400 transition resize-none"
                />
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-[11px] text-zinc-500 py-1">
                <ShieldCheck size={14} className="text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>Confidential B2B Wholesale Pricing • Batch Tested Quality</span>
              </div>

              {/* Big Solid Submit Button matching reference */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-black hover:bg-[#ffe000] hover:text-black text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Quotation...</span>
                  ) : (
                    <>
                      <span>Submit Quotation Request</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
