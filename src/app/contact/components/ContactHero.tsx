import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black via-[#0c0d12] to-black text-white border-b-4 border-[#ffe000] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffe000]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-zinc-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-black text-xs uppercase px-3.5 py-1.5 rounded-full mb-4 w-fit tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>Get In Touch</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
              Contact <span className="text-[#ffe000]">Lubricon</span> India
            </h1>

            {/* Description */}
            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-8">
              Whether you need an industrial product recommendation, a custom
              bulk quote, or technical application support — our Australian
              lubrication engineers are ready to assist you.
            </p>

            {/* Quick Contact Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:18005696363"
                className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-[#ffe000]/60 transition-colors group flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#ffe000] text-black flex items-center justify-center shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Toll Free</div>
                  <div className="text-sm font-black text-white group-hover:text-[#ffe000] transition-colors">1800 569 6363</div>
                </div>
              </a>

              <a
                href="mailto:info@lubriconindia.com"
                className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-[#ffe000]/60 transition-colors group flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-800 text-[#ffe000] flex items-center justify-center shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Email</div>
                  <div className="text-sm font-black text-white group-hover:text-[#ffe000] transition-colors">info@lubriconindia.com</div>
                </div>
              </a>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-800 text-[#ffe000] flex items-center justify-center shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-black text-white">New Delhi, India</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-800 text-[#ffe000] flex items-center justify-center shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Hours</div>
                  <div className="text-sm font-black text-white">Mon – Sat, 9AM – 6PM IST</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Image */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Ambient gold aura */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ffe000]/30 to-zinc-700/20 rounded-[28px] blur-xl opacity-75 pointer-events-none" />

            {/* Image Card */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl bg-zinc-950 group">
              <div className="relative w-full aspect-[16/11]">
                <Image
                  src="/images/contact-hero.jpg"
                  alt="Lubricon Technical Support Engineer"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ffe000] shadow-[0_0_6px_#ffe000] animate-pulse" />
                  <span>Expert Technical Support</span>
                </div>

                {/* Bottom Floating Bar */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🇮🇳</span>
                    <div>
                      <div className="font-extrabold text-white text-xs">Lubricon Specialities India</div>
                      <div className="text-[10px] text-zinc-400">Australian Technology · Certified Engineers</div>
                    </div>
                  </div>
                  <a
                    href="tel:18005696363"
                    className="text-[#ffe000] font-black uppercase text-[10px] border-l border-white/20 pl-2.5 hover:underline"
                  >
                    Call Now ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
