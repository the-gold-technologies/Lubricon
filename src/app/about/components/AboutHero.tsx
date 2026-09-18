import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Factory, PhoneCall } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/60 border-b border-zinc-200 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffe000]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-zinc-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Architectural Photo Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            {/* Ambient Shadow glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#ffe000]/25 to-zinc-900/10 rounded-[34px] blur-xl opacity-80 pointer-events-none" />

            {/* Seamless Showcase Frame */}
            <div className="relative w-full max-w-md sm:max-w-lg bg-white p-2.5 sm:p-3 rounded-[30px] shadow-2xl border border-zinc-200/90 group">
              {/* Photo */}
              <div className="relative w-full aspect-[4/3.2] sm:aspect-[4/3.4] rounded-[22px] overflow-hidden bg-zinc-900 shadow-inner">
                <Image
                  src="/images/aboutlubricon.jpeg"
                  alt="Lubricon Specialities India Official Profile"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette at bottom for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Top Badge: Office identification */}
                <div className="absolute top-3.5 left-3.5 bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-extrabold uppercase px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ffe000] shadow-[0_0_8px_#ffe000]" />
                  <span>Lubricon India HQ</span>
                </div>

                {/* Bottom Overlay Credibility Bar directly inside image */}
                <div className="absolute inset-x-3.5 bottom-3.5 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between gap-3 text-white">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🇦🇺</span>
                    <div>
                      <div className="text-xs font-black tracking-tight text-white">
                        Australian Technology
                      </div>
                      <div className="text-[11px] text-zinc-300 font-medium">
                        Tailored for Indian Operations
                      </div>
                    </div>
                  </div>

                  <div className="text-right border-l border-white/20 pl-3">
                    <div className="text-[#ffe000] text-xs font-black">
                      ISO &amp; API
                    </div>
                    <div className="text-[10px] uppercase font-bold text-zinc-300">
                      Certified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Key Value Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black text-xs font-black uppercase px-4 py-1.5 rounded-full mb-4 w-fit shadow-sm tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>Australian Formulation Heritage • Indian Leadership</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-black text-black tracking-tight leading-[1.12] mb-5">
              Redefining{" "}
              <span className="underline decoration-[#ffe000] decoration-[6px] underline-offset-[8px]">
                Lubrication
              </span>{" "}
              for Indian Industry
            </h1>

            {/* Primary Narrative */}
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 font-normal">
              At{" "}
              <strong className="text-black font-extrabold">
                Lubricon Specialities India
              </strong>
              , we engineer high-performance lubrication solutions that
              withstand extreme heat, high pressures, and punishing duty cycles.
              Powered by cutting-edge Australian formulations, we empower Indian
              manufacturers, fleet operators, and heavy industries to achieve
              peak uptime.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-7">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-sm hover:border-[#ffe000] hover:shadow-md transition-all group">
                <div className="w-9 h-9 rounded-xl bg-[#ffe000] flex items-center justify-center text-black mb-2.5 group-hover:scale-105 transition-transform shadow-xs">
                  <Cpu size={18} className="stroke-[2.5]" />
                </div>
                <div className="font-extrabold text-sm text-black">
                  Australian R&amp;D
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-500 mt-1 leading-snug">
                  International additive science tailored for local conditions.
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-sm hover:border-[#ffe000] hover:shadow-md transition-all group">
                <div className="w-9 h-9 rounded-xl bg-[#ffe000] flex items-center justify-center text-black mb-2.5 group-hover:scale-105 transition-transform shadow-xs">
                  <ShieldCheck size={18} className="stroke-[2.5]" />
                </div>
                <div className="font-extrabold text-sm text-black">
                  Zero-Wear Film
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-500 mt-1 leading-snug">
                  Anti-wear barrier extending severe-duty machine life.
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-sm hover:border-[#ffe000] hover:shadow-md transition-all group">
                <div className="w-9 h-9 rounded-xl bg-[#ffe000] flex items-center justify-center text-black mb-2.5 group-hover:scale-105 transition-transform shadow-xs">
                  <Factory size={18} className="stroke-[2.5]" />
                </div>
                <div className="font-extrabold text-sm text-black">
                  40+ Formulations
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-500 mt-1 leading-snug">
                  Speciality oils, greases, coolants, and neat fluids.
                </div>
              </div>
            </div>

            {/* Action Buttons & Direct Helpline */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/products"
                className="bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
              >
                <span>Explore Products</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/contact"
                className="bg-black hover:bg-zinc-800 text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform hover:scale-105"
              >
                <span>Request TDS &amp; Quote</span>
              </Link>

              <a
                href="tel:18005696363"
                className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 hover:text-black transition-colors sm:ml-2"
              >
                <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-black">
                  <PhoneCall size={12} />
                </div>
                <span>
                  Toll-Free: <strong>1800 569 6363</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
