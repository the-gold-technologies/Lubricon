"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ChevronRight } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";
import { useCMSStore } from "@/store/useCMSStore";

export default function Footer() {
  const { globalConfig, fetchGlobalConfig, industries, fetchIndustries } =
    useCMSStore();

  useEffect(() => {
    fetchGlobalConfig();
    fetchIndustries();
  }, [fetchGlobalConfig, fetchIndustries]);

  const logo = globalConfig?.logo;
  const description = globalConfig?.siteDescription;
  const facebook = globalConfig?.socialLinks?.facebook;
  const instagram = globalConfig?.socialLinks?.instagram;
  const linkedin = globalConfig?.socialLinks?.linkedin;
  const youtube = globalConfig?.socialLinks?.youtube;
  const phone = globalConfig?.socialLinks?.tollFree ?? globalConfig?.phone;
  const email = globalConfig?.email;
  const copyrightText = globalConfig?.socialLinks?.copyrightText;

  return (
    <footer className="bg-black text-gray-300 border-t-4 border-[#ffe000] font-sans">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile with Logo */}
          <div>
            <Link href="/" className="inline-block mb-4">
              {logo ? (
                <Image
                  src={logo}
                  alt="Lubricon Specialities India"
                  width={220}
                  height={45}
                  className="h-11 w-auto object-contain brightness-110"
                />
              ) : (
                <span className="text-xl font-black text-white">LUBRICON</span>
              )}
            </Link>

            {description && (
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {description}
              </p>
            )}

            <div className="flex items-center gap-3">
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-[#ffe000] hover:text-black text-gray-300 flex items-center justify-center transition border border-zinc-800"
                >
                  <FacebookIcon size={16} />
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-[#ffe000] hover:text-black text-gray-300 flex items-center justify-center transition border border-zinc-800"
                >
                  <InstagramIcon size={16} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-[#ffe000] hover:text-black text-gray-300 flex items-center justify-center transition border border-zinc-800"
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
              {youtube && (
                <a
                  href={youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-[#ffe000] hover:text-black text-gray-300 flex items-center justify-center transition border border-zinc-800"
                >
                  <YoutubeIcon size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Direct Contact */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-4 border-[#ffe000] pl-2.5">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              {phone && (
                <div className="flex items-start gap-3">
                  <Phone
                    size={16}
                    className="text-[#ffe000] mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">
                      Helpline (Toll Free)
                    </div>
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="font-bold text-white hover:text-[#ffe000] transition"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              )}

              {email && (
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-[#ffe000] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">
                      Email Support
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="font-bold text-white hover:text-[#ffe000] transition"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Column 3: Industries We Serve */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-4 border-[#ffe000] pl-2.5">
              Industries We Serve
            </h4>
            {industries && industries.length > 0 && (
              <ul className="space-y-2.5 text-sm">
                {industries.map((ind) => (
                  <li key={ind.id}>
                    <Link
                      href={`/industries#${ind.id}`}
                      className="flex items-center gap-1.5 text-gray-400 hover:text-[#ffe000] transition"
                    >
                      <ChevronRight size={14} className="text-[#ffe000]" />
                      <span>{ind.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
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
      <div className="bg-black border-t border-zinc-900 py-4 px-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            {copyrightText ?? `© ${new Date().getFullYear()} Lubricon Specialities India. All rights reserved.`}
          </div>
          <div className="text-gray-400">
            Engineered with Australian Technology for Indian Conditions
          </div>
        </div>
      </div>
    </footer>
  );
}
