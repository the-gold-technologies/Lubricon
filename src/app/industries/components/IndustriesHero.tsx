import Image from "next/image";
import { ShieldCheck, Flame, Factory, Cpu } from "lucide-react";

export default function IndustriesHero() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black via-[#0c0d12] to-black text-white border-b-4 border-[#ffe000] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffe000]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-zinc-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-black text-xs uppercase px-3.5 py-1.5 rounded-full mb-4 w-fit tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>Heavy Industry &amp; Precision Manufacturing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
              Industries We <span className="text-[#ffe000]">Serve</span>
            </h1>

            {/* Narrative Description */}
            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-8">
              From extreme heat in steel rolling mills to high-pressure
              precision plastic injection molding and wet paper mills, Lubricon
              formulations are powered by Australian lubrication technology for
              seamless, continuous machine uptime.
            </p>

            {/* 3 Industry Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-[#ffe000] text-black flex items-center justify-center font-bold text-xs shrink-0 mb-2">
                  <Factory size={16} />
                </div>
                <div className="text-xs font-black text-white">
                  Plastic Injection
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                  High-temp hydraulic oils &amp; mold greases.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 text-[#ffe000] flex items-center justify-center shrink-0 mb-2">
                  <Flame size={16} />
                </div>
                <div className="text-xs font-black text-white">
                  Steel Plants
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                  Extreme-load EP gear oils &amp; mill greases.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 text-[#ffe000] flex items-center justify-center shrink-0 mb-2">
                  <Cpu size={16} />
                </div>
                <div className="text-xs font-black text-white">
                  Paper &amp; CNC Units
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                  Water-washout resistance &amp; neat fluids.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Heavy Industry Visual (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient gold aura behind the image card */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ffe000]/30 to-zinc-700/20 rounded-[28px] blur-xl opacity-75 pointer-events-none" />

            {/* Image Frame Card */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 group">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11]">
                <Image
                  src="/images/industries-hero-banner.jpg"
                  alt="Lubricon Heavy Industry Machinery and Operations"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge: Australian tech marker */}
                <div className="absolute top-3.5 left-3.5 bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ffe000] shadow-[0_0_6px_#ffe000]" />
                  <span>Severe-Duty Operating Conditions</span>
                </div>

                {/* Bottom Floating Bar */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🇦🇺</span>
                    <div>
                      <div className="font-extrabold text-white text-xs">
                        Australian Formulations
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        Extreme Heat &amp; Load Protection
                      </div>
                    </div>
                  </div>
                  <span className="text-[#ffe000] font-black uppercase text-[10px] border-l border-white/20 pl-2.5">
                    Zero Downtime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
