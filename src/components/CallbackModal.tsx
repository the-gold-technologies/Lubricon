"use client";

import { useState, useEffect } from "react";
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Send,
  ShieldCheck,
  Headphones,
} from "lucide-react";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIndustry?: string;
}

export default function CallbackModal({
  isOpen,
  onClose,
  defaultIndustry = "Paper Mills",
}: CallbackModalProps) {
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    location: "",
    industry: defaultIndustry,
    requirement: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth enter & exit animation state — same as PlantAuditDrawer
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

  useEffect(() => {
    if (defaultIndustry) {
      setFormData((prev) => ({ ...prev, industry: defaultIndustry }));
    }
  }, [defaultIndustry]);

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
      username: "",
      mobile: "",
      email: "",
      location: "",
      industry: defaultIndustry,
      requirement: "",
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

      {/* Right Slide-over Sheet — same spring curve as PlantAuditDrawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-md md:max-w-lg bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          animateIn ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header — matches PlantAuditDrawer */}
        <div className="px-6 pt-6 pb-4 flex items-start justify-between shrink-0">
          <div>
            <div className="text-[11px] font-black uppercase tracking-wider text-[#d4af37] mb-1">
              LUBRICON SUPPORT PORTAL
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight leading-tight">
              Get A Callback
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

        {/* Body Content — scrollable, matches PlantAuditDrawer */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#ffe000] text-black mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 size={36} className="stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                  Inquiry Ref: LUB-CB-{Math.floor(10000 + Math.random() * 90000)}
                </span>
                <h3 className="text-2xl font-black text-black tracking-tight mt-1">
                  Callback Request Received!
                </h3>
                <p className="text-zinc-600 text-sm max-w-sm mx-auto mt-2 leading-relaxed">
                  Thank you,{" "}
                  <strong className="text-black">{formData.username}</strong>. A
                  technical advisor will call you back on{" "}
                  <strong className="text-black">{formData.mobile}</strong>{" "}
                  shortly.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 text-left text-xs space-y-2 max-w-sm mx-auto mt-4">
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-semibold">Industry Focus:</span>
                  <span className="font-extrabold text-black">{formData.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-semibold">Location:</span>
                  <span className="font-extrabold text-black">{formData.location || "India"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-semibold">Contact:</span>
                  <span className="font-extrabold text-black">{formData.mobile}</span>
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
                  <span>Call 1800 569 6363 (Immediate Support)</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium placeholder:text-zinc-400 transition"
                  />
                </div>
              </div>

              {/* Mobile & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium placeholder:text-zinc-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                    Email Address *
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
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Location / City *
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3.5 top-3.5 text-zinc-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Surat, Gujarat"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium placeholder:text-zinc-400 transition"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Industry / Category *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium text-zinc-900 transition"
                  required
                >
                  <option value="Plastic Injection Molding">Plastic Injection Molding</option>
                  <option value="Paper Mills">Paper Mills</option>
                  <option value="Steel Plants">Steel Plants</option>
                  <option value="Automotive Fleet & Transport">Automotive Fleet &amp; Transport</option>
                  <option value="Precision Engineering / CNC">Precision Engineering / CNC</option>
                  <option value="General Industrial Inquiry">General Industrial Lubricants</option>
                </select>
              </div>

              {/* Requirement */}
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1.5">
                  Your Requirement (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need high-viscosity gear oil recommendation for paper mill presses..."
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black bg-white text-xs sm:text-sm font-medium placeholder:text-zinc-400 transition resize-none"
                />
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-[11px] text-zinc-500 py-1">
                <ShieldCheck size={14} className="text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>Pan-India technical assistance • Toll-Free: 1800 569 6363</span>
              </div>

              {/* Submit Button — matches PlantAuditDrawer */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-black hover:bg-[#ffe000] hover:text-black text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Request Callback</span>
                      <Headphones size={14} />
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
