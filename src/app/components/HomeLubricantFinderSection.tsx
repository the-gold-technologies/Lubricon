"use client";

import LubricantFinder from "@/components/LubricantFinder";
import { useCMSStore } from "@/store/useCMSStore";

export default function HomeLubricantFinderSection() {
  const { homeData } = useCMSStore();
  const finder = homeData?.HomeLubricantFinderSection;

  if (!finder) return null;

  const badgeText = finder.badgeText;
  const title = finder.title;
  const subtitle = finder.subtitle;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-b border-zinc-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {badgeText && (
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black text-xs font-extrabold uppercase px-4 py-1.5 rounded-full mb-3 shadow-sm tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>{badgeText}</span>
            </div>
          )}
          {title && (
            <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base text-zinc-600 font-medium mt-3 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-zinc-200">
          <LubricantFinder />
        </div>
      </div>
    </section>
  );
}
