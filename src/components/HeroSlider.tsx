"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useCMSStore } from "@/store/useCMSStore";
import { usePageHeadingTag } from "@/hooks/usePageHeadingTag";

interface HeroSliderProps {
  headingTag?: string | null;
}

export default function HeroSlider({ headingTag }: HeroSliderProps) {
  const { homeData } = useCMSStore();
  const HeadingTag = usePageHeadingTag("home", headingTag);
  const [current, setCurrent] = useState(0);

  const slides = homeData?.HeroSlider?.slides;

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full bg-[#0a0c10] overflow-hidden shadow-2xl group select-none">
      <div className="relative w-full h-[480px] sm:h-[540px] md:h-[600px] lg:h-[640px]">
        {slides.map((slide, index) => {
          const isActive = index === current;
          const title = slide.heading;
          const subtitle = slide.description;
          const badge = slide.tagline;
          const ctaText = slide.ctaText;
          const ctaLink = slide.ctaLink;
          const secondaryCtaText = slide.secondaryCtaText;
          const secondaryCtaLink = slide.secondaryCtaLink;

          return (
            <div
              key={slide.id ?? index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="relative w-full h-full">
                {slide.image && (
                  <Image
                    src={slide.image}
                    alt={title ?? ""}
                    fill
                    priority={index === 0}
                    unoptimized
                    className={`object-cover object-center transition-transform duration-1000 ease-out ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                  />
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />

              <div className="absolute inset-0 flex items-end">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full pb-[78px] sm:pb-[86px] relative z-10">
                  <div className="max-w-xl">
                    {badge && (
                      <div className="inline-flex items-center gap-2 bg-[#fffde6] text-black border border-[#ffe000] font-bold text-xs uppercase px-3.5 py-1 rounded-full mb-3.5 shadow-sm tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffe000]" />
                        <span>{badge}</span>
                      </div>
                    )}

                    {title && (
                      <HeadingTag className="text-2xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-md tracking-tight leading-tight mb-2.5">
                        {title}
                      </HeadingTag>
                    )}

                    {subtitle && (
                      <p className="text-white/90 text-sm sm:text-base font-normal drop-shadow mb-6 max-w-lg line-clamp-2">
                        {subtitle}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-3.5">
                      {ctaText && ctaLink && (
                        <Link
                          href={ctaLink}
                          className="bg-[#ffe000] hover:bg-[#fff04d] text-black font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg flex items-center gap-1.5 transition-all transform hover:scale-105"
                        >
                          <span>{ctaText}</span>
                          <ArrowRight size={14} />
                        </Link>
                      )}
                      {secondaryCtaText && secondaryCtaLink && (
                        <Link
                          href={secondaryCtaLink}
                          className="bg-black/60 hover:bg-black text-white border-2 border-white/80 hover:border-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider backdrop-blur-md transition-all"
                        >
                          {secondaryCtaText}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ffe000] hover:text-black text-white flex items-center justify-center border border-white/30 transition-all opacity-80 hover:opacity-100 backdrop-blur-sm cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ffe000] hover:text-black text-white flex items-center justify-center border border-white/30 transition-all opacity-80 hover:opacity-100 backdrop-blur-sm cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === current ? "w-8 bg-[#ffe000]" : "w-2 bg-white/50 hover:bg-white"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
