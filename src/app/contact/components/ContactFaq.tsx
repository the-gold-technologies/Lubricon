"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { useCMSStore } from "@/store/useCMSStore";

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
          <span className="text-sm sm:text-base font-black tracking-tight leading-snug text-black">
            {q}
          </span>
        </div>

        {/* Right: Tag + Icon */}
        <div className="flex items-center gap-3 shrink-0 ml-2">
          {tag && (
            <span
              className={`hidden sm:inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full transition-all ${
                isOpen
                  ? "bg-[#ffe000] text-black"
                  : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"
              }`}
            >
              {tag}
            </span>
          )}
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
  const { contactData } = useCMSStore();
  const faqSection = contactData?.ContactFaq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqSection) return null;

  const badge = faqSection.badge;
  const heading = faqSection.heading;
  const subtitle = faqSection.subtitle;
  const faqs = faqSection.faqs;

  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return null;

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-black text-[#ffe000] text-xs font-black uppercase px-4 py-1.5 rounded-full mb-4 tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffe000] animate-pulse" />
              <span>{badge}</span>
            </div>
          )}
          {heading && (
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-tight mb-3">
              {heading}
            </h2>
          )}
          {subtitle && (
            <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq: any, i: number) => (
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
