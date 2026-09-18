"use client";

import { useState } from "react";
import {
  ClipboardCheck,
  FlaskConical,
  Layers,
  Fuel,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Clock,
  TrendingUp,
  Truck,
  Headphones,
} from "lucide-react";
import PlantAuditDrawer from "@/components/PlantAuditDrawer";
import CallbackModal from "@/components/CallbackModal";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
  deliverable: string;
}

export default function IndustriesPlantSupport() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(
    "On-Site Plant Lubrication Audits",
  );
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const services: ServiceItem[] = [
    {
      icon: <ClipboardCheck size={22} className="stroke-[2.5]" />,
      title: "On-Site Plant Lubrication Audits",
      desc: "Our technical field engineers conduct comprehensive machine-by-machine surveys, mapping thermal loads, cycle pressures, and friction points across your entire facility.",
      tag: "Site Survey",
      deliverable: "Machine Audit & Friction Map Report",
    },
    {
      icon: <FlaskConical size={22} className="stroke-[2.5]" />,
      title: "Used Oil Laboratory Analysis",
      desc: "Regular laboratory spectrographic testing tracking elemental wear metals (Fe, Cu, Cr), water contamination, viscosity drift, and TAN/TBN depletion to prevent sudden failure.",
      tag: "Preventive Lab",
      deliverable: "Spectrographic Lab Wear Certificate",
    },
    {
      icon: <Layers size={22} className="stroke-[2.5]" />,
      title: "SKU Rationalization & Consolidation",
      desc: "Streamline dozens of legacy oils down to a core set of Australian high-performance Lubricon formulations, cutting inventory holding capital by up to 30%.",
      tag: "Cost Reduction",
      deliverable: "Consolidated SKU Reduction Matrix",
    },
    {
      icon: <Fuel size={22} className="stroke-[2.5]" />,
      title: "Bulk Storage & Dispensing Solutions",
      desc: "Turnkey supply of 1,000L IBCs, high-flow pneumatic dispensing stations, and contamination-free color-coded transfer systems for spotless plant maintenance.",
      tag: "Turnkey Setup",
      deliverable: "Turnkey Storage & Dispensing Blueprint",
    },
  ];

  const stats = [
    {
      icon: <Clock size={20} className="text-[#ffe000]" />,
      val: "99.8%",
      label: "Operational Machine Uptime",
    },
    {
      icon: <TrendingUp size={20} className="text-[#ffe000]" />,
      val: "+35%",
      label: "Extended Drain Intervals",
    },
    {
      icon: <ShieldCheck size={20} className="text-[#ffe000]" />,
      val: "30%",
      label: "Lower Lubricant Inventory Cost",
    },
    {
      icon: <Truck size={20} className="text-[#ffe000]" />,
      val: "24h",
      label: "Direct Industrial Dispatch",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-zinc-200 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-black text-[#ffe000] text-xs font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-sm tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffe000] animate-pulse" />
            <span>Industrial Engineering Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight mb-4">
            Beyond Lubricants: Complete{" "}
            <span className="underline decoration-[#ffe000] decoration-[6px] underline-offset-[8px]">
              Plant Support
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            We don&apos;t just deliver barrels — our Australian formulation
            specialists partner directly with your plant managers to reduce
            unscheduled maintenance, optimize drain cycles, and eliminate costly
            downtime.
          </p>
        </div>

        {/* ── 4-Card Plant Engineering Services Grid (Strict Yellow/Black/White Theme) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((s, i) => (
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
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#ffe000] bg-black px-3 py-1 rounded-full shadow-xs">
                    {s.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-black text-black tracking-tight leading-snug mb-2">
                  {s.title}
                </h3>

                {/* Deliverable Badge */}
                <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-black bg-zinc-100 px-2.5 py-1 rounded-lg mb-3 border border-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffe000]" />
                  <span>{s.deliverable}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {s.desc}
                </p>
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

        {/* ── Plant Metrics & Performance Strip ── */}
        <div className="bg-black text-white rounded-3xl p-8 sm:p-10 mb-16 shadow-2xl border border-zinc-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((st, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-1">
                  {st.icon}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {st.val}
                  </div>
                  <div className="text-xs font-medium text-zinc-400 mt-1">
                    {st.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── High-Conversion Plant Engineering Consultation Banner ── */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-black via-[#111318] to-black border border-zinc-800 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#ffe000]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-zinc-800/40 blur-3xl pointer-events-none" />

          {/* Left Narrative */}
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#ffe000] mb-2.5">
              <span>● Get Instant Support</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.18] mb-3">
              You are{" "}
              <span className="bg-[#ffe000] text-black px-2 py-0.5 rounded-lg">
                a few minutes away
              </span>{" "}
              from the help you need.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
              At Lubricon Specialities India, we redefine performance,
              reliability, and innovation in lubrication solutions. Powered by
              cutting-edge Australian technology, we deliver products that
              enhance efficiency and protect your machinery.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="shrink-0 relative z-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsCallbackOpen(true)}
              className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-[#ffe000] border border-zinc-700 font-black px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer"
            >
              <Headphones size={14} />
              <span>Get A Callback</span>
            </button>

            <a
              href="tel:18005696363"
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-bold px-5 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all"
            >
              <PhoneCall size={14} className="text-[#ffe000]" />
              <span>1800 569 6363</span>
            </a>
          </div>
        </div>
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
