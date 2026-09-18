import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Award } from "lucide-react";

export default function HomeCtaBanner() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Rounded Banner Card with Warm Dull-White / Beige Tone */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#f8f9fa] border border-zinc-200/80 p-6 sm:p-8 lg:p-10 shadow-lg overflow-hidden">
          {/* Subtle Decorative Background Blob/Arc */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#ffe000]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            {/* ── Left Column: Headline, Description & Dual Pill Buttons ── */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Category Sub-Tag */}
              <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-black mb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#ffe000]" />
                <span>Engineered for Maximum Machine Uptime</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-[1.18] mb-3">
                Your machinery deserves peak protection. So does your business.
              </h2>

              {/* Subtitle Description */}
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5 max-w-xl">
                Whether you operate heavy plastic injection presses, high-speed
                paper mills, or automotive fleets, Lubricon delivers precision
                Australian formulations designed to reduce friction and
                eliminate costly downtime.
              </p>

              {/* Action Buttons: Dark Primary Pill + Yellow Secondary Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/products"
                  className="bg-black hover:bg-zinc-800 text-white font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 transform hover:scale-105"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={13} />
                </Link>

                <Link
                  href="/contact"
                  className="bg-white hover:bg-[#ffe000] text-black border-2 border-zinc-200 hover:border-[#ffe000] font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 transform hover:scale-105"
                >
                  <Phone size={13} />
                  <span>Get in Touch</span>
                </Link>
              </div>

              {/* Footer Trust Markers */}
              <div className="mt-5 pt-4 border-t border-zinc-200/60 flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                <span>Australian Formulation</span>
                <span>•</span>
                <span>API &amp; ISO Certified</span>
                <span>•</span>
                <span>Pan-India Dispatch</span>
              </div>
            </div>

            {/* ── Right Column: Rounded Organic Arch Visual & Floater Card ── */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* Background Yellow Decorative Semi-Circle Arch */}
              <div className="absolute -top-4 left-4 w-44 h-44 rounded-full bg-[#ffe000] opacity-85 -z-0" />

              {/* Main Arch Cutout Image */}
              <div className="relative z-10 w-full max-w-[300px] h-[220px] sm:h-[240px] rounded-t-[120px] rounded-b-[32px] overflow-hidden shadow-xl border-4 border-white bg-black">
                <Image
                  src="/images/ind-steel.png"
                  alt="Lubricon High Performance Industrial Lubrication"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Floating "Lubricon Standards" Card */}
              <div className="absolute -bottom-3 right-2 sm:right-6 z-20 bg-white rounded-xl p-3 sm:p-3.5 shadow-xl border border-zinc-200/90 text-center max-w-[130px] transform rotate-2 hover:rotate-0 transition-transform">
                <div className="w-7 h-7 rounded-full bg-[#ffe000] text-black flex items-center justify-center mx-auto mb-1.5 font-black text-xs">
                  <Award size={14} />
                </div>
                <div className="text-[11px] font-black text-black leading-tight">
                  Australian Precision
                </div>
                <div className="text-[9px] text-zinc-500 font-medium mt-0.5">
                  100% Quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
