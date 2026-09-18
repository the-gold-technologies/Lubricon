'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What product grades do you offer for heavy diesel engines?',
    a: 'We offer the full range from API CF-4 through to the latest API CK-4 (ACEA E9) specification. For modern Euro 6 engines with DPF and SCR, we recommend our Lubricon XtremeX CK-4 15W40.',
  },
  {
    q: 'Do you supply AdBlue / DEF for Euro 6 compliance?',
    a: 'Yes! Lubricon AdBlue is ISO 22241-compliant 32.5% urea solution (AUS32/DEF), available in 10L, 20L, and 1000L IBC. It is fully compatible with all SCR emission control systems.',
  },
  {
    q: 'Can you supply lubricants for plastic injection molding machines?',
    a: 'Absolutely. We provide non-staining hydraulic oils, tie-bar greases, gear oils, and rust preventives specifically suited to the high-pressure, high-temperature demands of injection molding.',
  },
  {
    q: 'Do you offer technical support for lubrication selection?',
    a: 'Yes — our technical team provides free lubrication audits and product recommendations. Call our toll-free number or use the callback form and we will connect you with an expert.',
  },
  {
    q: 'What are your minimum order quantities?',
    a: 'We have flexible ordering from retail sizes (500ml, 1L) to bulk industrial supplies (210L drums, 1000L IBCs). Contact us for bulk pricing and custom packing.',
  },
  {
    q: 'Are your products compatible with major OEM equipment?',
    a: 'Yes, our products meet or exceed the API, ACEA, and DIN specifications required by major OEM equipment manufacturers. Specific OEM approval lists are available on request.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        className="w-full flex items-center justify-between gap-3 p-5 text-left text-black font-bold hover:bg-zinc-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm">{q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-black transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ContactFaq() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-extrabold text-xs uppercase px-3.5 py-1 rounded-full mb-3 tracking-wider shadow-sm">
            <span>Help Center</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 text-sm mt-2">
            Answers to common questions regarding technical specs, delivery logistics, and commercial supply.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
