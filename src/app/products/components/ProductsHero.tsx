import Image from "next/image";
import { ShieldCheck, Award, Layers } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black via-[#0c0d12] to-black text-white border-b-4 border-[#ffe000] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#ffe000]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-zinc-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Catalog Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-black text-xs uppercase px-3.5 py-1.5 rounded-full mb-4 w-fit tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>Complete Product Portfolio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
              All Lubricon <span className="text-[#ffe000]">Formulations</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-8">
              Explore our comprehensive range of industrial and automotive
              lubricants — powered by advanced Australian additive technology
              and engineered for severe heat, high load, and maximum operational
              uptime.
            </p>

            {/* Specification Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-[#ffe000] text-black flex items-center justify-center font-bold text-xs shrink-0">
                  🇦🇺
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">
                    Australian Tech
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Tested for Indian Ops
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 text-[#ffe000] flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">
                    API &amp; ISO Certified
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Strict Quality Audit
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 text-[#ffe000] flex items-center justify-center shrink-0">
                  <Layers size={16} />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">
                    Pack Sizes
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    5L, 20L &amp; 210L Drums
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact 3D Product Lineup Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient gold aura behind the image card */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ffe000]/25 to-zinc-700/20 rounded-[28px] blur-xl opacity-75 pointer-events-none" />

            {/* Image Frame Card */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 group">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11]">
                <Image
                  src="/images/products-hero-banner.jpg"
                  alt="Lubricon Industrial Lubricant Products Lineup"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Badge on image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffe000] shadow-[0_0_6px_#ffe000]" />
                    <span className="font-extrabold text-white">
                      Commercial &amp; Industrial Packaging
                    </span>
                  </div>
                  <span className="text-[#ffe000] font-black uppercase text-[10px]">
                    210L • 20L • 5L
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
