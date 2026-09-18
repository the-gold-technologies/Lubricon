import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

export default function HomeAboutStrip() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── Left Column: Clean, Bold Typography & Key Narrative ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-extrabold text-xs uppercase px-3.5 py-1 rounded-full mb-4 w-fit tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>About Lubricon Specialities India</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[1.15] mb-6">
              Redefining <span className="underline decoration-[#ffe000] decoration-4 underline-offset-4">Lubrication</span> for Indian Industry
            </h2>

            {/* Primary Paragraph */}
            <p className="text-base sm:text-lg font-semibold text-zinc-900 leading-relaxed mb-4">
              At Lubricon Specialities India, we are redefining performance, reliability, and innovation in lubrication solutions. Backed by advanced Australian technology, Lubricon brings to the Indian market a comprehensive range of speciality and conventional lubricants engineered for modern industrial and automotive demands.
            </p>

            {/* Secondary Paragraph */}
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
              With exclusive rights to represent the Lubricon brand in India, Lubricon Specialities India operates independently, delivering international-quality products tailored for Indian operating conditions. Our formulations are driven by deep technical know-how, field-tested performance, and a commitment to operational efficiency.
            </p>

            {/* Key Bulleted Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-sm text-zinc-800 font-medium">
                <CheckCircle2 size={18} className="text-[#ffe000] fill-black flex-shrink-0" />
                <span>Australian Formulation Science</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-zinc-800 font-medium">
                <CheckCircle2 size={18} className="text-[#ffe000] fill-black flex-shrink-0" />
                <span>Engineered for Extreme Temperatures</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-zinc-800 font-medium">
                <CheckCircle2 size={18} className="text-[#ffe000] fill-black flex-shrink-0" />
                <span>Pan-India Industrial Distribution</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-zinc-800 font-medium">
                <CheckCircle2 size={18} className="text-[#ffe000] fill-black flex-shrink-0" />
                <span>API, ISO &amp; OEM Standards</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="bg-black hover:bg-zinc-800 text-white font-extrabold px-7 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 transform hover:scale-105"
              >
                <span>Read Full Company Story</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:18005696363"
                className="bg-[#ffe000] hover:bg-[#fff04d] text-black font-extrabold px-7 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 transform hover:scale-105"
              >
                <Phone size={14} />
                <span>Speak With an Engineer</span>
              </a>
            </div>
          </div>

          {/* ── Right Column: Clean Modern Full Photo Card ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-100">
                <Image
                  src="/images/aboutlubricon.jpeg"
                  alt="Lubricon Specialities India Official Profile"
                  fill
                  priority
                  className="object-cover object-center"
                />

                {/* Subtle bottom vignette to support the badge */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                {/* Clean Bottom Floater Badge */}
                <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between p-4 bg-black/85 backdrop-blur-md rounded-2xl border border-white/15 text-white shadow-xl">
                  <div>
                    <div className="text-xs font-black uppercase text-[#ffe000] tracking-wider">
                      Australian Technology
                    </div>
                    <div className="text-[11px] text-zinc-300 mt-0.5">
                      Engineered for Indian Conditions
                    </div>
                  </div>
                  <span className="text-2xl">🇦🇺</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
