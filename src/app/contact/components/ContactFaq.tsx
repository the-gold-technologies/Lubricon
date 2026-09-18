"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What product grades do you offer for heavy diesel engines?",
    a: "We offer the full range from API CF-4 through to the latest API CK-4 (ACEA E9) specification. For modern Euro 6 engines with DPF and SCR, we recommend our Lubricon XtremeX CK-4 15W40.",
    tag: "Engine Oils",
  },
  {
    q: "Do you supply AdBlue / DEF for Euro 6 compliance?",
    a: "Yes! Lubricon AdBlue is ISO 22241-compliant 32.5% urea solution (AUS32/DEF), available in 10L, 20L, and 1000L IBC. It is fully compatible with all SCR emission control systems.",
    tag: "AdBlue / DEF",
  },
  {
    q: "Can you supply lubricants for plastic injection molding machines?",
    a: "Absolutely. We provide non-staining hydraulic oils, tie-bar greases, gear oils, and rust preventives specifically suited to the high-pressure, high-temperature demands of injection molding.",
    tag: "Industrial",
  },
  {
    q: "Do you offer technical support for lubrication selection?",
    a: "Yes — our technical team provides free lubrication audits and product recommendations. Call our toll-free number or use the callback form and we will connect you with an expert.",
    tag: "Support",
  },
  {
    q: "What are your minimum order quantities?",
    a: "We have flexible ordering from retail sizes (500ml, 1L) to bulk industrial supplies (210L drums, 1000L IBCs). Contact us for bulk pricing and custom packing.",
    tag: "Orders",
  },
  {
    q: "Are your products compatible with major OEM equipment?",
    a: "Yes, our products meet or exceed the API, ACEA, and DIN specifications required by major OEM equipment manufacturers. Specific OEM approval lists are available on request.",
    tag: "Compatibility",
  },
];

function FaqItem({
  q,
  a,
  tag,
  index,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  tag: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-[#ffe000] bg-white shadow-xl shadow-[#ffe000]/10"
          : "border-zinc-200 bg-white hover:border-zinc-400 shadow-sm hover:shadow-md"
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {/* Left: Number + Question */}
        <div className="flex items-center gap-4 min-w-0">
          <span
            className={`text-xs font-black tabular-nums shrink-0 w-6 transition-colors ${
              isOpen ? "text-[#d4af37]" : "text-zinc-400 group-hover:text-zinc-600"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-sm sm:text-base font-black tracking-tight leading-snug transition-colors ${
              isOpen ? "text-black" : "text-black"
            }`}
          >
            {q}
          </span>
        </div>

        {/* Right: Tag + Icon */}
        <div className="flex items-center gap-3 shrink-0 ml-2">
          <span
            className={`hidden sm:inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full transition-all ${
              isOpen
                ? "bg-[#ffe000] text-black"
                : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"
            }`}
          >
            {tag}
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
              isOpen
                ? "bg-[#ffe000] text-black"
                : "bg-zinc-100 text-zinc-600 group-hover:bg-black group-hover:text-[#ffe000]"
            }`}
          >
            {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
          </div>
        </div>
      </button>

      {/* Smooth animated body */}
      <div
        style={{ height, transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}
        className="overflow-hidden"
      >
        <div ref={bodyRef}>
          <div className="px-6 pb-6 pt-0">
            <div className="ml-10 border-l-2 border-[#ffe000] pl-4">
              <p className="text-sm text-zinc-600 leading-relaxed">{a}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-black text-[#ffe000] text-xs font-black uppercase px-4 py-1.5 rounded-full mb-4 tracking-wider shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffe000] animate-pulse" />
            <span>Help Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-tight mb-3">
            Frequently Asked{" "}
            <span className="underline decoration-[#ffe000] decoration-[5px] underline-offset-[6px]">
              Questions
            </span>
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Answers to common questions regarding technical specs, delivery
            logistics, and commercial supply.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              index={i}
              q={faq.q}
              a={faq.a}
              tag={faq.tag}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
