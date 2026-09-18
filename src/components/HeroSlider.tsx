'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Neat Cutting Oil',
    subtitle: 'High Performance Metalworking Fluid for Heavy Duty Machining',
    image: '/images/slider-1.png',
    link: '/products?cat=industrial&search=cutting',
    badge: 'Industrial Cutting Fluid',
  },
  {
    id: 2,
    title: 'Soluble Cutting Oil',
    subtitle: 'Superior Cooling & Lubricity for Precision CNC & Grinding',
    image: '/images/slider-2.png',
    link: '/products?cat=industrial&search=soluble',
    badge: 'Coolant & Emulsion',
  },
  {
    id: 3,
    title: 'Hydraulic Oil & Industrial Fluids',
    subtitle: 'Anti-Wear EP Protection for Plastic Molding & Heavy Presses',
    image: '/images/slider-3.png',
    link: '/products?cat=industrial',
    badge: 'High Pressure Anti-Wear',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full bg-[#0a0c10] overflow-hidden shadow-2xl group select-none">
      {/* Container with ample height */}
      <div className="relative w-full h-[480px] sm:h-[540px] md:h-[600px] lg:h-[640px]">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Slide Image with subtle smooth scale effect */}
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className={`object-cover object-center transition-transform duration-10000 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>

              {/* Strict Theme Overlay: Black gradients with subtle yellow accent reflection */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />

              {/* Text content aligned at bottom, shifted 30px higher */}
              <div className="absolute inset-0 flex items-end">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full pb-[78px] sm:pb-[86px] relative z-10">
                  <div className="max-w-xl">
                    {/* Badge: Light yellow background with bold black text & border */}
                    <div className="inline-flex items-center gap-2 bg-[#fffde6] text-black border border-[#ffe000] font-bold text-xs uppercase px-3.5 py-1 rounded-full mb-3.5 shadow-sm tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffe000]" />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Title: Pure White */}
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-md tracking-tight leading-tight mb-2.5">
                      {slide.title}
                    </h2>

                    {/* Subtitle: Crisp White */}
                    <p className="text-white/90 text-sm sm:text-base font-normal drop-shadow mb-6 max-w-lg line-clamp-2">
                      {slide.subtitle}
                    </p>

                    {/* Action Buttons: Strictly Yellow & Black, Black & White */}
                    <div className="flex flex-wrap items-center gap-3.5">
                      <Link
                        href={slide.link}
                        className="bg-[#ffe000] hover:bg-[#fff04d] text-black font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg flex items-center gap-1.5 transition-all transform hover:scale-105"
                      >
                        <span>Explore Product</span>
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/contact"
                        className="bg-black/60 hover:bg-black text-white border-2 border-white/80 hover:border-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider backdrop-blur-md transition-all"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ffe000] hover:text-black text-white flex items-center justify-center border border-white/30 transition-all opacity-80 hover:opacity-100 backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ffe000] hover:text-black text-white flex items-center justify-center border border-white/30 transition-all opacity-80 hover:opacity-100 backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
