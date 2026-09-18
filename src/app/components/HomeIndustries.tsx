import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomeIndustries() {
  return (
    <section className="py-16 px-4 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Industries We Serve
          </h2>
          <div className="w-20 h-1 bg-[#ffe000] mx-auto mt-3 rounded-full" />
          <p className="text-zinc-600 text-sm mt-3 max-w-xl mx-auto">
            Engineered lubrication solutions delivering extreme heat resistance, high-pressure stability, and continuous uptime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plastic Injection Molding */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-zinc-200 group flex flex-col">
            <div className="relative h-72 bg-zinc-100 overflow-hidden">
              <Image
                src="/images/ind-plastic.png"
                alt="Plastic Injection Molding - Lubricon Specialities"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/80 text-[#ffe000] text-xs font-bold px-3 py-1 rounded-full uppercase">
                Injection Molding
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-amber-600 transition">
                  Plastic Injection Molding
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  High-temperature hydraulic oils, anti-wear tie-bar greases, and non-staining mold protectants for uninterrupted cycle times.
                </p>
              </div>
              <Link
                href="/industries#plastic-injection-molding"
                className="w-full py-2.5 bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg text-center transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Explore Industry Solutions</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Paper Mills */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-zinc-200 group flex flex-col">
            <div className="relative h-72 bg-zinc-100 overflow-hidden">
              <Image
                src="/images/ind-paper.png"
                alt="Paper Mills Lubrication - Lubricon"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/80 text-[#ffe000] text-xs font-bold px-3 py-1 rounded-full uppercase">
                Pulp & Paper
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-amber-600 transition">
                  Paper Mills
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Water-resistant EP gear oils, high-speed dryer bearing lubricants, and rust preventives engineered for 24/7 moisture environments.
                </p>
              </div>
              <Link
                href="/industries#paper-mills"
                className="w-full py-2.5 bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg text-center transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Explore Industry Solutions</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Steel Plants */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-zinc-200 group flex flex-col">
            <div className="relative h-72 bg-zinc-100 overflow-hidden">
              <Image
                src="/images/ind-steel.png"
                alt="Steel Plants Lubrication - Lubricon"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/80 text-[#ffe000] text-xs font-bold px-3 py-1 rounded-full uppercase">
                Heavy Metallurgy
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-amber-600 transition">
                  Steel Plants
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Ultra-high load EP gear lubricants, fire-resistant hydraulic fluids, and roll bearing greases surviving extreme furnace temperatures.
                </p>
              </div>
              <Link
                href="/industries#steel-plants"
                className="w-full py-2.5 bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg text-center transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Explore Industry Solutions</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
