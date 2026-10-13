"use client";

import { useCMSStore } from "@/store/useCMSStore";

export default function AboutStats() {
  const { aboutData } = useCMSStore();
  const stats = aboutData?.AboutStats?.stats;

  if (!stats || stats.length === 0) return null;

  return (
    <section className="bg-[#f8f9fa] border-b border-zinc-200/80 py-10 sm:py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
        <div className="lg:max-w-xs shrink-0">
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            Our Stats
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-2 leading-relaxed">
            We help you to unleash the power within your machinery and industrial operations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 flex-1">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight flex items-baseline">
                <span>{stat.value}</span>
                <span className="text-[#ffe000] ml-0.5 font-bold">{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-600 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
