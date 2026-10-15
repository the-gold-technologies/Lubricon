"use client";

import { useCMSStore } from "@/store/useCMSStore";

export default function AboutStats() {
  const { aboutData } = useCMSStore();
  const statsSection = aboutData?.AboutStats;
  const stats = statsSection?.stats;

  if (!stats || stats.length === 0) return null;

  const heading = statsSection?.heading;
  const subtitle = statsSection?.subtitle;

  return (
    <section className="bg-[#f8f9fa] border-b border-zinc-200/80 py-10 sm:py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
        {(heading || subtitle) && (
          <div className="lg:max-w-xs shrink-0">
            {heading && (
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                {heading}
              </h2>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-2 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 flex-1">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight flex items-baseline">
                <span>{stat.value}</span>
                <span className="text-[#ffe000] ml-0.5 font-bold">{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
