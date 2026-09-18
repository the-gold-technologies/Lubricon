'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/components/SocialIcons';

export default function ContactFormAndCards() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    product: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffe000] text-black flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                <Phone size={22} />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-500 uppercase">Toll Free Support</div>
                <a
                  href="tel:18005696363"
                  className="text-lg font-black text-black hover:text-[#d4af37] transition"
                >
                  1800 569 6363
                </a>
                <div className="text-xs text-zinc-500 mt-0.5">Free calls from all Indian networks</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffe000] text-black flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                <Mail size={22} />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-500 uppercase">Official Email</div>
                <a
                  href="mailto:info@lubriconindia.com"
                  className="text-base font-black text-black hover:text-[#d4af37] transition break-all"
                >
                  info@lubriconindia.com
                </a>
                <div className="text-xs text-zinc-500 mt-0.5">Quick response within 24 hours</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffe000] text-black flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                <MapPin size={22} />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-500 uppercase">Corporate Presence</div>
                <div className="text-base font-black text-black">New Delhi, India</div>
                <div className="text-xs text-zinc-500 mt-0.5">Pan-India distribution & warehouse hubs</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffe000] text-black flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                <Clock size={22} />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-500 uppercase">Operating Hours</div>
                <div className="text-base font-black text-black">Mon – Sat: 9:00 AM – 6:00 PM</div>
                <div className="text-xs text-zinc-500 mt-0.5">Indian Standard Time (IST)</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black text-white p-5 rounded-2xl border-2 border-[#ffe000] flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-[#ffe000]">
                Connect With Us
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://m.facebook.com/LubriconIndia"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#ffe000] hover:text-black flex items-center justify-center transition"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={16} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#ffe000] hover:text-black flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/lubriconindia"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#ffe000] hover:text-black flex items-center justify-center transition"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#ffe000] hover:text-black flex items-center justify-center transition"
                  aria-label="YouTube"
                >
                  <YoutubeIcon size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-xl">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-black tracking-tight">
                  Send an Inquiry
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm mt-1">
                  Fill out the form below and an application engineer will review your machinery requirements.
                </p>
              </div>

              {sent ? (
                <div className="text-center py-12 bg-[#ffe000]/10 border-2 border-[#ffe000] rounded-xl p-8">
                  <CheckCircle2 size={48} className="text-black mx-auto mb-3" />
                  <h3 className="text-xl font-black text-black">Inquiry Submitted!</h3>
                  <p className="text-zinc-700 text-sm mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-black">{form.name}</strong>. Our technical lubrication team will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', company: '', phone: '', email: '', message: '', product: '' });
                    }}
                    className="mt-6 bg-black text-[#ffe000] font-bold text-xs uppercase px-6 py-2.5 rounded-full hover:bg-zinc-800 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#ffe000] focus:ring-2 focus:ring-[#ffe000]/20 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Precision Components Ltd"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#ffe000] focus:ring-2 focus:ring-[#ffe000]/20 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#ffe000] focus:ring-2 focus:ring-[#ffe000]/20 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#ffe000] focus:ring-2 focus:ring-[#ffe000]/20 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      Product / Application Interest
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Cutting Fluid for CNC, Heavy Gear Oil, AdBlue Bulk"
                      value={form.product}
                      onChange={(e) => setForm({ ...form, product: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#ffe000] focus:ring-2 focus:ring-[#ffe000]/20 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
                      Message / Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your equipment, required quantities, delivery location or questions..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#ffe000] focus:ring-2 focus:ring-[#ffe000]/20 font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#ffe000] hover:bg-[#fff04d] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg shadow transition flex items-center justify-center gap-2 transform hover:scale-[1.01]"
                  >
                    <span>Send Message</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
