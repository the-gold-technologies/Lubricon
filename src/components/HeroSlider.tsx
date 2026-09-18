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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full bg-black overflow-hidden shadow-2xl group select-none">
      {/* Aspect Ratio Container for Responsive Display */}
      <div className="relative w-full min-h-[360px] sm:min-h-[460px] md:min-h-[540px] lg:h-[580px]">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Slide Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-contain md:object-cover object-center bg-black"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                <div className="max-w-7xl mx-auto px-6 pb-12 w-full">
                  <div className="max-w-xl">
                    <span className="inline-block bg-[#ffe000] text-black font-extrabold text-xs uppercase px-3 py-1 rounded-full mb-3 shadow-md">
                      {slide.badge}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black text-white drop-shadow-md tracking-tight mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-gray-200 text-sm sm:text-base font-medium drop-shadow mb-5 line-clamp-2">
                      {slide.subtitle}
                    </p>
                    <div className="flex items-center gap-3">
                      <Link
                        href={slide.link}
                        className="bg-[#ffe000] hover:bg-amber-400 text-black font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 transition transform hover:scale-105"
                      >
                        Explore Product <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/contact"
                        className="bg-black/60 hover:bg-black text-white border-2 border-white/60 font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider backdrop-blur-sm transition"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#ffe000] hover:text-black text-white flex items-center justify-center border border-white/20 transition-all opacity-80 group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#ffe000] hover:text-black text-white flex items-center justify-center border border-white/20 transition-all opacity-80 group-hover:opacity-100"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-[#ffe000]' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
