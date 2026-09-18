import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function HomeAboutStrip() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Authentic Text Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-block bg-[#ffe000]/30 text-black text-xs font-black uppercase px-3 py-1 rounded-md mb-3">
              About Lubricon Specialities India
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 leading-tight mb-6">
              Redefining Performance, Reliability & Innovation in{' '}
              <span className="underline decoration-[#ffe000] decoration-4">Lubrication Solutions</span>
            </h2>

            <div className="space-y-4 text-zinc-700 text-base leading-relaxed">
              <p>
                <strong>At Lubricon Specialities India</strong>, we are redefining performance, reliability, and innovation in lubrication solutions. Backed by advanced Australian technology, Lubricon brings to the Indian industry a comprehensive range of speciality and conventional lubricants engineered for modern industrial and automotive demands.
              </p>
              <p>
                With exclusive rights to represent the Lubricon brand in India, Lubricon Specialities India operates independently, delivering international-quality products tailored for Indian operating conditions. Our formulations are driven by deep technical know-how, field-tested performance, and a commitment to operational efficiency.
              </p>
              <p>
                Whether it&apos;s High-performance Greases, Metalworking Fluids, or Industrial-grade Oils, our solutions are trusted by leading Manufacturers, Workshops, and Engineering units across the country.
              </p>
              <p className="text-lg font-bold text-black border-l-4 border-[#ffe000] pl-4 py-1 bg-amber-50 rounded-r">
                &ldquo;At Lubricon, we don&apos;t just sell lubricants — we enable uptime, protect assets, and help you run smoother.&rdquo;
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="bg-black hover:bg-zinc-800 text-white font-bold px-7 py-3 rounded-full text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
              >
                <span>Read Full Company Story</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:18005696363"
                className="border-2 border-black hover:bg-black hover:text-white text-black font-bold px-7 py-3 rounded-full text-xs uppercase tracking-wider transition flex items-center gap-2"
              >
                <Phone size={14} />
                <span>Speak With an Engineer</span>
              </a>
            </div>
          </div>

          {/* Right: Authentic Framed Image (9px Yellow border & unique border radius) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{
                  border: '9px solid #ffe000',
                  borderRadius: '35px 0px 35px 0px',
                  width: '340px',
                  height: '420px',
                }}
              >
                <Image
                  src="/images/aboutlubricon.jpeg"
                  alt="About Lubricon Specialities India"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Australian Tech Badge Overlay */}
              <div className="absolute -bottom-4 -right-4 bg-zinc-950 text-white p-4 rounded-xl shadow-2xl border-2 border-[#ffe000] max-w-[200px]">
                <div className="text-2xl mb-1">🇦🇺 ⚙️ 🇮🇳</div>
                <div className="text-xs font-black text-[#ffe000] uppercase">Australian Tech</div>
                <div className="text-[11px] text-zinc-400">Made for Indian Extremes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
