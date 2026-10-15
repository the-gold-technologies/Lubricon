"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Factory, PhoneCall } from "lucide-react";
import { useCMSStore } from "@/store/useCMSStore";
import { usePageHeadingTag } from "@/hooks/usePageHeadingTag";

interface AboutHeroProps {
  headingTag?: string | null;
}

export default function AboutHero({ headingTag }: AboutHeroProps) {
  const { aboutData } = useCMSStore();
  const HeadingTag = usePageHeadingTag("about", headingTag);
  const hero = aboutData?.AboutHero;

  if (!hero) return null;

  const badge = hero.badge;
  const heading = hero.heading;
  const narrative = hero.narrative;
  const secondaryText = hero.secondaryText;
  const image = hero.image;
  const officeBadge = hero.officeBadge;
  const cardTag = hero.cardTag;
  const cardSubtag = hero.cardSubtag;
  const isoBadgeTitle = hero.isoBadgeTitle;
  const isoBadgeSub = hero.isoBadgeSub;
  const valuePillars = hero.valuePillars;
  const primaryBtnText = hero.primaryBtnText;
  const primaryBtnLink = hero.primaryBtnLink;
  const secondaryBtnText = hero.secondaryBtnText;
  const secondaryBtnLink = hero.secondaryBtnLink;
  const tollFree = hero.tollFree;

  const renderIcon = (iconName?: string) => {
    switch (iconName?.toLowerCase()) {
      case "cpu":
        return <Cpu size={18} className="stroke-[2.5]" />;
      case "shield":
        return <ShieldCheck size={18} className="stroke-[2.5]" />;
      case "factory":
        return <Factory size={18} className="stroke-[2.5]" />;
      default:
        return <ShieldCheck size={18} className="stroke-[2.5]" />;
    }
  };

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/60 border-b border-zinc-200 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffe000]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-zinc-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Architectural Photo Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#ffe000]/25 to-zinc-900/10 rounded-[34px] blur-xl opacity-80 pointer-events-none" />

            <div className="relative w-full max-w-md sm:max-w-lg bg-white p-2.5 sm:p-3 rounded-[30px] shadow-2xl border border-zinc-200/90 group">
              <div className="relative w-full aspect-[4/3.2] sm:aspect-[4/3.4] rounded-[22px] overflow-hidden bg-zinc-900 shadow-inner">
                {image && (
                  <Image
                    src={image}
                    alt={heading ?? ""}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {officeBadge && (
                  <div className="absolute top-3.5 left-3.5 bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-extrabold uppercase px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ffe000] shadow-[0_0_8px_#ffe000]" />
                    <span>{officeBadge}</span>
                  </div>
                )}

                {(cardTag || isoBadgeTitle) && (
                  <div className="absolute inset-x-3.5 bottom-3.5 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between gap-3 text-white">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">🇦🇺</span>
                      <div>
                        {cardTag && (
                          <div className="text-xs font-black tracking-tight text-white">
                            {cardTag}
                          </div>
                        )}
                        {cardSubtag && (
                          <div className="text-[11px] text-zinc-300 font-medium">
                            {cardSubtag}
                          </div>
                        )}
                      </div>
                    </div>

                    {(isoBadgeTitle || isoBadgeSub) && (
                      <div className="text-right border-l border-white/20 pl-3">
                        {isoBadgeTitle && (
                          <div className="text-[#ffe000] text-xs font-black">
                            {isoBadgeTitle}
                          </div>
                        )}
                        {isoBadgeSub && (
                          <div className="text-[10px] uppercase font-bold text-zinc-300">
                            {isoBadgeSub}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Key Value Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            {badge && (
              <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black text-xs font-black uppercase px-4 py-1.5 rounded-full mb-4 w-fit shadow-sm tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>{badge}</span>
              </div>
            )}

            {heading && (
              <HeadingTag className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-black text-black tracking-tight leading-[1.12] mb-5">
                {heading}
              </HeadingTag>
            )}

            {narrative && (
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-4 font-normal">
                {narrative}
              </p>
            )}

            {secondaryText && (
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-6 font-normal">
                {secondaryText}
              </p>
            )}

            {/* Value Pillars strictly from CMS */}
            {valuePillars && valuePillars.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-7">
                {valuePillars.map((pillar: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-sm hover:border-[#ffe000] hover:shadow-md transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#ffe000] flex items-center justify-center text-black mb-2.5 group-hover:scale-105 transition-transform shadow-xs">
                      {renderIcon(pillar.icon)}
                    </div>
                    {pillar.title && (
                      <div className="font-extrabold text-sm text-black">
                        {pillar.title}
                      </div>
                    )}
                    {pillar.desc && (
                      <div className="text-[11px] sm:text-xs text-zinc-500 mt-1 leading-snug">
                        {pillar.desc}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons & Direct Helpline */}
            <div className="flex flex-wrap items-center gap-3.5">
              {primaryBtnText && primaryBtnLink && (
                <Link
                  href={primaryBtnLink}
                  className="bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
                >
                  <span>{primaryBtnText}</span>
                  <ArrowRight size={14} />
                </Link>
              )}

              {secondaryBtnText && secondaryBtnLink && (
                <Link
                  href={secondaryBtnLink}
                  className="bg-black hover:bg-zinc-800 text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform hover:scale-105"
                >
                  <span>{secondaryBtnText}</span>
                </Link>
              )}

              {tollFree && (
                <a
                  href={`tel:${tollFree.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 hover:text-black transition-colors sm:ml-2"
                >
                  <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-black">
                    <PhoneCall size={12} />
                  </div>
                  <span>
                    Toll-Free: <strong>{tollFree}</strong>
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
