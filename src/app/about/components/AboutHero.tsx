import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Brand Narrative */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-extrabold text-xs uppercase px-3.5 py-1 rounded-full mb-4 tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>About Us</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight mb-6">
              Redefining <span className="underline decoration-[#ffe000] decoration-4 underline-offset-4">Lubrication</span> for Indian Industry
            </h1>

            <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-black">
                At Lubricon Specialities India, we are redefining performance, reliability, and innovation in lubrication solutions. Backed by advanced Australian technology, Lubricon brings to the Indian industry a comprehensive range of speciality and conventional lubricants engineered for modern industrial and automotive demands.
              </p>

              <p>
                With exclusive rights to represent the Lubricon brand in India, Lubricon Specialities India operates independently, delivering international-quality products tailored for Indian operating conditions. Our formulations are driven by deep technical know-how, field-tested performance, and a commitment to operational efficiency.
              </p>

              <p>
                Whether it&apos;s High-performance Greases, Metalworking Fluids, or Industrial-grade Oils, our solutions are trusted by leading Manufacturers, Workshops, and Engineering units across the country. At Lubricon, we don&apos;t just sell lubricants — we enable uptime, protect assets, and help you run smoother.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="bg-[#ffe000] hover:bg-[#fff04d] text-black font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
              >
                <span>Explore Products</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="bg-black hover:bg-zinc-800 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow transition-all"
              >
                Request Technical Data
              </Link>
            </div>
          </div>

          {/* Right Column: Framed Official Photo with 9px Yellow Border */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-[9px] border-[#ffe000] bg-zinc-900">
              <Image
                src="/images/aboutlubricon.jpeg"
                alt="Lubricon Specialities India Official Profile"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Badge Floater */}
            <div className="absolute -bottom-4 sm:-bottom-6 right-2 sm:right-6 bg-black text-white px-5 py-3 rounded-xl border-2 border-[#ffe000] shadow-xl">
              <div className="text-xl sm:text-2xl font-black text-[#ffe000] tracking-tight">
                🇦🇺 Australian Tech
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-300 font-medium">
                Engineered for Indian Conditions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
