"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCMSStore } from "@/store/useCMSStore";

export default function AboutCtaBanner() {
  const { aboutData } = useCMSStore();
  const cta = aboutData?.AboutCtaBanner;

  if (!cta) return null;

  const heading = cta.heading;
  const subtext = cta.subtext;
  const buttonText = cta.buttonText;
  const buttonLink = cta.buttonLink;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-black via-[#111318] to-black border border-zinc-800 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#ffe000]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-zinc-800/40 blur-3xl pointer-events-none" />

          {/* Left Side: Headline & Descriptive Text */}
          <div className="max-w-2xl relative z-10">
            {heading && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
                {heading}
              </h2>
            )}
            {subtext && (
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                {subtext}
              </p>
            )}
          </div>

          {/* Right Side: Clean White Pill Button */}
          {buttonText && buttonLink && (
            <div className="shrink-0 relative z-10">
              <Link
                href={buttonLink}
                className="inline-flex items-center gap-2.5 bg-white hover:bg-[#ffe000] text-black font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-xl transform hover:scale-105"
              >
                <span>{buttonText}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
