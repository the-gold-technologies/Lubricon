"use client";

import Image from "next/image";
import { useCMSStore } from "@/store/useCMSStore";
import { usePageHeadingTag } from "@/hooks/usePageHeadingTag";

interface IndustriesHeroProps {
  headingTag?: string | null;
}

export default function IndustriesHero({ headingTag }: IndustriesHeroProps) {
  const { industriesData } = useCMSStore();
  const Tag = usePageHeadingTag("industries", headingTag);
  const hero = industriesData?.IndustriesHero;

  if (!hero) return null;

  const badge = hero.badge;
  const heading = hero.heading;
  const description = hero.description;
  const bannerImage = hero.bannerImage;
  const stats = hero.stats;

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
            {badge && (
              <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-black text-xs uppercase px-3.5 py-1.5 rounded-full mb-4 w-fit tracking-wider shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>{badge}</span>
              </div>
            )}

            {/* Main Headline */}
            {heading && (
              <Tag className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
                {heading}
              </Tag>
            )}

            {/* Narrative Description */}
            {description && (
              <p className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-8">
                {description}
              </p>
            )}

            {/* Industry Stats / Highlights */}
            {stats && Array.isArray(stats) && stats.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stats.map((st: any, i: number) => (
                  <div key={i} className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <div className="text-lg font-black text-[#ffe000] mb-1">{st.value}</div>
                    <div className="text-xs font-bold text-white">{st.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Visual */}
          {bannerImage && (
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ffe000]/30 to-zinc-700/20 rounded-[28px] blur-xl opacity-75 pointer-events-none" />

              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 group">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/11]">
                  <Image
                    src={bannerImage}
                    alt={heading ?? ""}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
