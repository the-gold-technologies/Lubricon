"use client";

import { useCMSStore } from "@/store/useCMSStore";

export default function AboutTimeline() {
  const { aboutData } = useCMSStore();
  const timeline = aboutData?.AboutTimeline;

  if (!timeline) return null;

  const badge = timeline.badge;
  const title = timeline.title;
  const subtitle = timeline.subtitle;
  const milestones = timeline.milestones;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-extrabold text-xs uppercase px-3.5 py-1 rounded-full mb-3 shadow-sm tracking-wider">
              <span>{badge}</span>
            </div>
          )}
          {title && (
            <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">{title}</h2>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base text-zinc-600 font-medium mt-2">{subtitle}</p>
          )}
        </div>

        {milestones && milestones.length > 0 && (
          <div className="relative">
            {/* Vertical Track */}
            <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 -translate-x-1/2 w-0.5 bg-zinc-200" />

            <div className="space-y-12">
              {milestones.map((m: any, i: number) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Content Column */}
                    <div
                      className={`ml-10 sm:ml-0 sm:w-1/2 ${
                        isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"
                      }`}
                    >
                      <span className="inline-block bg-[#ffe000] text-black font-black text-xs px-2.5 py-1 rounded-md mb-2 shadow-xs">
                        {m.year}
                      </span>
                      <h3 className="text-lg font-black text-black mb-1">{m.title}</h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {m.description}
                      </p>
                    </div>

                    {/* Timeline Node Point */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-7 h-7 rounded-full bg-white border-4 border-[#ffe000] shadow-md flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-black" />
                    </div>

                    {/* Spacer for symmetry */}
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
