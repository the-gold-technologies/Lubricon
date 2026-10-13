"use client";

import { useState } from "react";
import {
  ClipboardCheck,
  FlaskConical,
  Layers,
  Fuel,
  ArrowRight,
  PhoneCall,
  Headphones,
} from "lucide-react";
import PlantAuditDrawer from "@/components/PlantAuditDrawer";
import CallbackModal from "@/components/CallbackModal";
import { useCMSStore } from "@/store/useCMSStore";

export default function IndustriesPlantSupport() {
  const { industriesData } = useCMSStore();
  const support = industriesData?.IndustriesPlantSupport;

  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  if (!support) return null;

  const badge = support.badge;
  const heading = support.heading;
  const description = support.description;
  const services = support.services;

  const consultationBadge = support.consultationBadge;
  const consultationTitle = support.consultationTitle;
  const consultationDesc = support.consultationDesc;
  const callbackBtnText = support.callbackBtnText;
  const callNumber = support.callNumber;

  const renderServiceIcon = (index: number) => {
    switch (index % 4) {
      case 0:
        return <ClipboardCheck size={22} className="stroke-[2.5]" />;
      case 1:
        return <FlaskConical size={22} className="stroke-[2.5]" />;
      case 2:
        return <Layers size={22} className="stroke-[2.5]" />;
      default:
        return <Fuel size={22} className="stroke-[2.5]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-zinc-200 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-black text-[#ffe000] text-xs font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-sm tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffe000] animate-pulse" />
              <span>{badge}</span>
            </div>
          )}
          {heading && (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight mb-4">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>

        {/* ── Plant Engineering Services Grid ── */}
        {services && Array.isArray(services) && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((s: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-[26px] p-6 sm:p-7 border-2 border-zinc-200/90 hover:border-black shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Top Accent Strip in Brand Yellow */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-transparent group-hover:bg-[#ffe000] transition-colors duration-300" />

                <div>
                  {/* Header Row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#ffe000] text-black flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-black group-hover:text-[#ffe000] transition-all">
                      {renderServiceIcon(i)}
                    </div>
                    {s.tag && (
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#ffe000] bg-black px-3 py-1 rounded-full shadow-xs">
                        {s.tag}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  {s.title && (
                    <h3 className="text-base sm:text-lg font-black text-black tracking-tight leading-snug mb-2">
                      {s.title}
                    </h3>
                  )}

                  {/* Deliverable Badge */}
                  {s.deliverable && (
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-black bg-zinc-100 px-2.5 py-1 rounded-lg mb-3 border border-zinc-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffe000]" />
                      <span>{s.deliverable}</span>
                    </div>
                  )}

                  {/* Description */}
                  {s.desc && (
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {s.desc}
                    </p>
                  )}
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 mt-6 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedService(s.title);
                      setIsAuditModalOpen(true);
                    }}
                    className="w-full py-2.5 rounded-xl bg-zinc-100 group-hover:bg-[#ffe000] text-black font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-zinc-200 group-hover:border-black shadow-2xs cursor-pointer"
                  >
                    <span>Request Service</span>
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── High-Conversion Plant Engineering Consultation Banner ── */}
        {(consultationTitle || consultationDesc) && (
          <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-black via-[#111318] to-black border border-zinc-800 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Subtle Ambient Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#ffe000]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-zinc-800/40 blur-3xl pointer-events-none" />

            {/* Left Narrative */}
            <div className="max-w-2xl relative z-10">
              {consultationBadge && (
                <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#ffe000] mb-2.5">
                  <span>{consultationBadge}</span>
                </div>
              )}
              {consultationTitle && (
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.18] mb-3">
                  {consultationTitle}
                </h3>
              )}
              {consultationDesc && (
                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                  {consultationDesc}
                </p>
              )}
            </div>

            {/* Right Action Buttons */}
            <div className="shrink-0 relative z-10 flex flex-wrap items-center gap-3">
              {callbackBtnText && (
                <button
                  type="button"
                  onClick={() => setIsCallbackOpen(true)}
                  className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-[#ffe000] border border-zinc-700 font-black px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <Headphones size={14} />
                  <span>{callbackBtnText}</span>
                </button>
              )}

              {callNumber && (
                <a
                  href={`tel:${callNumber.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-bold px-5 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all"
                >
                  <PhoneCall size={14} className="text-[#ffe000]" />
                  <span>{callNumber}</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Plant Audit Slide-over Drawer */}
      <PlantAuditDrawer
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        initialService={selectedService}
      />

      {/* Callback Modal */}
      <CallbackModal
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
      />
    </section>
  );
}
