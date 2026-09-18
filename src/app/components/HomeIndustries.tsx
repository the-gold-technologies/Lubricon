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
          <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group min-h-[480px] flex flex-col justify-between border border-zinc-200">
            {/* Background Image: 100% natural, clear and bright */}
            <Image
              src="/images/ind-plastic.png"
              alt="Plastic Injection Molding - Lubricon Specialities"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Bottom-Only Gradient Overlay: Starts transparent in the middle, darkens smoothly toward the bottom */}
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />

            {/* Top Category Badge */}
            <div className="relative z-10 p-5 sm:p-6">
              <span className="inline-flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-lg tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#ffe000] shadow-[0_0_8px_#ffe000]" />
                <span>Injection Molding</span>
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end">
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-[#ffe000] transition-colors">
                Plastic Injection Molding
              </h3>
              <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed mb-6 font-normal drop-shadow">
                High-temperature hydraulic oils, anti-wear tie-bar greases, and non-staining mold protectants for uninterrupted cycle times.
              </p>

              <Link
                href="/industries#plastic-injection-molding"
                className="w-full py-3 bg-[#ffe000] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-full text-center transition-all flex items-center justify-center gap-2 shadow-lg transform group-hover:scale-[1.02]"
              >
                <span>Explore Industry Solutions</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Paper Mills */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group min-h-[480px] flex flex-col justify-between border border-zinc-200">
            {/* Background Image: 100% natural, clear and bright */}
            <Image
              src="/images/ind-paper.png"
              alt="Paper Mills Lubrication - Lubricon"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Bottom-Only Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />

            {/* Top Category Badge */}
            <div className="relative z-10 p-5 sm:p-6">
              <span className="inline-flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-lg tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#ffe000] shadow-[0_0_8px_#ffe000]" />
                <span>Pulp & Paper</span>
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end">
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-[#ffe000] transition-colors">
                Paper Mills
              </h3>
              <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed mb-6 font-normal drop-shadow">
                Water-resistant EP gear oils, high-speed dryer bearing lubricants, and rust preventives engineered for 24/7 moisture environments.
              </p>

              <Link
                href="/industries#paper-mills"
                className="w-full py-3 bg-[#ffe000] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-full text-center transition-all flex items-center justify-center gap-2 shadow-lg transform group-hover:scale-[1.02]"
              >
                <span>Explore Industry Solutions</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Steel Plants */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group min-h-[480px] flex flex-col justify-between border border-zinc-200">
            {/* Background Image: 100% natural, clear and bright */}
            <Image
              src="/images/ind-steel.png"
              alt="Steel Plants Lubrication - Lubricon"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Bottom-Only Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />

            {/* Top Category Badge */}
            <div className="relative z-10 p-5 sm:p-6">
              <span className="inline-flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-lg tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#ffe000] shadow-[0_0_8px_#ffe000]" />
                <span>Heavy Metallurgy</span>
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end">
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-[#ffe000] transition-colors">
                Steel Plants
              </h3>
              <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed mb-6 font-normal drop-shadow">
                Ultra-high load EP gear lubricants, fire-resistant hydraulic fluids, and heavy roll bearing greases surviving extreme furnace temperatures.
              </p>

              <Link
                href="/industries#steel-plants"
                className="w-full py-3 bg-[#ffe000] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-full text-center transition-all flex items-center justify-center gap-2 shadow-lg transform group-hover:scale-[1.02]"
              >
                <span>Explore Industry Solutions</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
