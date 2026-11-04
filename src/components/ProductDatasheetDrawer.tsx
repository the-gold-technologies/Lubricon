"use client";

import { useEffect, useState } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  Download,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { useCMSStore } from "@/store/useCMSStore";
import CaptchaField, { useCaptcha, handleCaptchaResult } from "@/components/CaptchaField";

interface ProductDatasheetDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productSlug: string;
}

const EMPTY_FORM = { name: "", email: "", phone: "", company: "", city: "" };

const inputClass =
  "w-full pl-10 pr-3.5 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium placeholder:text-zinc-400 transition";

function triggerDownload(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function ProductDatasheetDrawer({
  isOpen,
  onClose,
  productName,
  productSlug,
}: ProductDatasheetDrawerProps) {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const captcha = useCaptcha(isOpen);

  // Smooth enter & exit animation state
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animateIn, setAnimateIn] = useState(false);

  // Mount as soon as the drawer opens (state adjustment during render, no effect needed)
  if (isOpen && !shouldRender) setShouldRender(true);

  useEffect(() => {
    if (isOpen) {
      let inner = 0;
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setAnimateIn(true));
      });
      return () => {
        cancelAnimationFrame(outer);
        cancelAnimationFrame(inner);
      };
    }
    const frame = requestAnimationFrame(() => setAnimateIn(false));
    const timer = setTimeout(() => setShouldRender(false), 320);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [isOpen]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);
    const result = await useCMSStore.getState().submitEnquiry({
      type: "Datasheet Download",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      location: formData.city,
      product: productName,
      productSlug,
      message: `City/State: ${formData.city}`,
      ...captcha.payload,
    });
    setIsSubmitting(false);
    if (!handleCaptchaResult(captcha, result, setFormError)) return;

    if (!result.downloadUrl) {
      setFormError("The datasheet is not available right now. Please contact us.");
      return;
    }
    // Download straight away and close the form — no extra confirmation screen
    triggerDownload(result.downloadUrl);
    setFormData(EMPTY_FORM);
    captcha.refresh();
    onClose();
  };

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
          animateIn ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Download product datasheet"
        className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-md md:max-w-lg bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          animateIn ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-start justify-between shrink-0">
          <div>
            <div className="text-[11px] font-black uppercase tracking-wider text-[#d4af37] mb-1">
              TECHNICAL DOCUMENTATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight leading-tight">
              Download Datasheet
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

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Selected product */}
            <div className="rounded-2xl bg-zinc-50/80 border border-zinc-200/90 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ffe000] text-black flex items-center justify-center shrink-0">
                <FileText size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                  PRODUCT DATASHEET (PDF)
                </div>
                <div className="text-sm font-black text-zinc-950 tracking-tight truncate">
                  {productName}
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-500 leading-relaxed">
              Please share your details to download the datasheet. Our technical team may follow up
              with product recommendations.
            </p>

            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-zinc-800 mb-1.5">Your Name *</label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Amit Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email & phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">Email *</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit mobile number"
                    maxLength={10}
                    required
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                      })
                    }
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Company & city */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Company / Organisation *
                </label>
                <div className="relative">
                  <Building2 size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Verma Auto Spares"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  City / State *
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmedabad, Gujarat"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <CaptchaField captcha={captcha} />

            {formError && (
              <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                {formError}
              </p>
            )}

            <div className="flex items-center gap-2 text-[11px] text-zinc-500 py-1">
              <ShieldCheck size={14} className="text-emerald-600 shrink-0 stroke-[2.5]" />
              <span>Your details are kept confidential and never shared.</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-black hover:bg-[#ffe000] hover:text-black text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Preparing Download...</span>
                ) : (
                  <>
                    <span>Download Datasheet</span>
                    <Download size={14} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
