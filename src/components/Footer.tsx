import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/components/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-[#0b0d13] text-gray-300 border-t-4 border-[#ffe000] font-sans">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile with Logo */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Lubricon Specialities India"
                width={220}
                height={45}
                className="h-11 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Lubricon Specialities India delivers premium industrial and automotive lubricants
              powered by Australian technology. Engineered for Indian conditions to maximize
              performance, reduce downtime, and extend equipment life.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://m.facebook.com/LubriconIndia"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#ffe000] hover:text-black text-gray-300 flex items-center justify-center transition"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#ffe000] hover:text-black text-gray-300 flex items-center justify-center transition"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/lubriconindia"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#ffe000] hover:text-black text-gray-300 flex items-center justify-center transition"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#ffe000] hover:text-black text-gray-300 flex items-center justify-center transition"
              >
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: About & Direct Contact */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-4 border-[#ffe000] pl-2.5">
              Contact Us
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Offers advanced Australian technology lubricants, engineered for peak industrial and
              automotive performance.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#ffe000] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase">Helpline (Toll Free)</div>
                  <a
                    href="tel:18005696363"
                    className="font-bold text-white hover:text-[#ffe000] transition"
                  >
                    1800 569 6363
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#ffe000] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase">Email Support</div>
                  <a
                    href="mailto:info@lubriconindia.com"
                    className="font-bold text-white hover:text-[#ffe000] transition"
                  >
                    info@lubriconindia.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Industries We Serve */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-4 border-[#ffe000] pl-2.5">
              Industries We Serve
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/industries#plastic-injection-molding"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-[#ffe000] transition"
                >
                  <ChevronRight size={14} className="text-[#ffe000]" /> Plastic Injection Molding
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#paper-mills"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-[#ffe000] transition"
                >
                  <ChevronRight size={14} className="text-[#ffe000]" /> Paper Mills
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#steel-plants"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-[#ffe000] transition"
                >
                  <ChevronRight size={14} className="text-[#ffe000]" /> Steel Plants
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#automotive-fleet"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-[#ffe000] transition"
                >
                  <ChevronRight size={14} className="text-[#ffe000]" /> Automotive & Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#mining-heavy-equipment"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-[#ffe000] transition"
                >
                  <ChevronRight size={14} className="text-[#ffe000]" /> Mining & Heavy Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-4 border-[#ffe000] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-[#ffe000] transition"
                >
                  <ChevronRight size={14} className="text-[#ffe000]" /> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-[#ffe000] transition"
                >
                  <ChevronRight size={14} className="text-[#ffe000]" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-[#ffe000] transition"
                >
                  <ChevronRight size={14} className="text-[#ffe000]" /> Products Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-[#ffe000] transition"
                >
                  <ChevronRight size={14} className="text-[#ffe000]" /> Industries We Serve
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-[#ffe000] transition"
                >
                  <ChevronRight size={14} className="text-[#ffe000]" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#050608] border-t border-zinc-800/80 py-4 px-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Lubricon Specialities India. All rights reserved.
          </div>
          <div className="text-gray-400">
            Engineered with Australian Technology for Indian Conditions
          </div>
        </div>
      </div>
    </footer>
  );
}
