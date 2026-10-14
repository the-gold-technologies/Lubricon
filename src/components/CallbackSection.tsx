"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { useCMSStore } from "@/store/useCMSStore";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";

interface CallbackSectionProps {
  compact?: boolean;
}

export default function CallbackSection({
  compact = false,
}: CallbackSectionProps) {
  const { globalConfig, fetchGlobalConfig } = useCMSStore();

  useEffect(() => {
    fetchGlobalConfig();
  }, [fetchGlobalConfig]);

  const phone = globalConfig?.socialLinks?.tollFree ?? globalConfig?.phone;
  const email = globalConfig?.email;
  const facebook = globalConfig?.socialLinks?.facebook;
  const instagram = globalConfig?.socialLinks?.instagram;
  const linkedin = globalConfig?.socialLinks?.linkedin;
  const youtube = globalConfig?.socialLinks?.youtube;

  const hasSocials = Boolean(facebook || instagram || linkedin || youtube);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    location: "",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await useCMSStore.getState().submitEnquiry({
      type: "Callback Request",
      name: formData.username,
      email: formData.email,
      phone: formData.mobile,
      location: formData.location,
      product: formData.requirement,
      message: `Location: ${formData.location}, Requirement: ${formData.requirement}`,
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-[#ffe109] py-14 px-4 font-sans border-y-4 border-black/10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-zinc-200">
        {/* Left Side: Contact Information & Socials */}
        <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-200 bg-white">
          <div>
            <span className="inline-block bg-black text-[#ffe000] text-xs font-black uppercase px-3 py-1 rounded-full mb-4">
              Get Instant Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 leading-tight mb-4">
              You are <br />
              <span className="text-black bg-[#ffe000]/40 px-1 rounded">
                a few minutes away
              </span>{" "}
              from the help you need.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
              At Lubricon Specialities India, we redefine performance,
              reliability, and innovation in lubrication solutions. Powered by
              cutting-edge Australian technology, we deliver products that
              enhance efficiency and protect your machinery.
            </p>

            {/* Direct Contact Info */}
            {(phone || email) && (
              <div className="space-y-4 mb-8">
                {phone && (
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-zinc-900 font-bold hover:text-amber-600 transition"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#ffe109]/30 flex items-center justify-center text-black">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase font-semibold">
                        Toll Free Helpline
                      </div>
                      <span className="text-lg font-black">{phone}</span>
                    </div>
                  </a>
                )}

                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-zinc-900 font-bold hover:text-amber-600 transition"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#ffe109]/30 flex items-center justify-center text-black">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase font-semibold">
                        Official Inquiry Email
                      </div>
                      <span className="text-base font-bold">{email}</span>
                    </div>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Social Links */}
          {hasSocials && (
            <div className="pt-6 border-t border-zinc-100 flex items-center gap-4">
              <span className="text-xs font-bold uppercase text-zinc-400">
                Connect:
              </span>
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-[#ffe000] text-zinc-800 flex items-center justify-center transition"
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
                  className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-[#ffe000] text-zinc-800 flex items-center justify-center transition"
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
                  className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-[#ffe000] text-zinc-800 flex items-center justify-center transition"
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
                  className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-[#ffe000] text-zinc-800 flex items-center justify-center transition"
                >
                  <YoutubeIcon size={16} />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-8 sm:p-12 bg-zinc-50 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-xl font-black text-black uppercase tracking-wide border-b-2 border-black pb-2 inline-block">
              GET A CALLBACK
            </h3>
            <p className="text-xs text-zinc-500 mt-2">
              Share your requirements and our technical engineer will call you
              back shortly.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-8 text-center animate-fade-in">
              <CheckCircle2
                size={48}
                className="text-emerald-500 mx-auto mb-3"
              />
              <h4 className="text-lg font-bold text-zinc-900">Thank You!</h4>
              <p className="text-sm text-zinc-600 mt-1">
                Your request has been received. Our team will contact you on{" "}
                <strong>{formData.mobile}</strong> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-5 text-xs font-bold text-zinc-600 hover:underline uppercase"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Your Email *"
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  required
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      mobile: e.target.value.replace(/\D/g, "").slice(0, 10),
                    })
                  }
                  placeholder="Your Mobile Number (10 digits) *"
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="Your City / Location *"
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  value={formData.requirement}
                  onChange={(e) =>
                    setFormData({ ...formData, requirement: e.target.value })
                  }
                  placeholder="Tell us your lubricant requirement / equipment type..."
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#ffd400] hover:bg-[#ffe000] text-black font-extrabold uppercase text-sm tracking-wider rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
