"use client";

import { Globe, Shield, Zap, Award } from "lucide-react";
import { useCMSStore } from "@/store/useCMSStore";

const icons = [
  <Globe key="globe" size={26} className="text-black" />,
  <Shield key="shield" size={26} className="text-black" />,
  <Zap key="zap" size={26} className="text-black" />,
  <Award key="award" size={26} className="text-black" />,
];

export default function AboutValues() {
  const { aboutData } = useCMSStore();
  const valuesSection = aboutData?.AboutValues;
  const values = valuesSection?.values;

  if (!values || values.length === 0) return null;

  const badge = valuesSection?.badge;
  const title = valuesSection?.title;
  const subtitle = valuesSection?.subtitle;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-extrabold text-xs uppercase px-3.5 py-1 rounded-full mb-3 shadow-sm tracking-wider">
              <span>{badge}</span>
            </div>
          )}
          {title && (
            <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">{title}</h2>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base text-zinc-600 font-medium mt-3">{subtitle}</p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-[#ffe000] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#ffe000] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm">
                {icons[i % icons.length]}
              </div>
              {v.title && (
                <h3 className="text-lg font-black text-black mb-2 tracking-tight">{v.title}</h3>
              )}
              {v.desc && (
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
