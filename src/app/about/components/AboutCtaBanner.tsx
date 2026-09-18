import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCtaBanner() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Banner Card precisely mirroring the reference design in brand colors */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-black via-[#111318] to-black border border-zinc-800 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Subtle Ambient Brand Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#ffe000]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-zinc-800/40 blur-3xl pointer-events-none" />

          {/* Left Side: Headline & Descriptive Text */}
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
              Ready to Upgrade Your Industrial Lubrication?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              Get customized quotation lists, bulk drum price rates, and
              engineering estimates for your machinery specifications. Request a
              quote or get product technical sheets directly from our
              lubrication specialists.
            </p>
          </div>

          {/* Right Side: Clean White Pill Button */}
          <div className="shrink-0 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-[#ffe000] text-black font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              <span>Get Custom Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
