"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactFormAndCards() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: Info ── */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-tight mb-3">
              Need more information?{" "}
              <span className="text-[#d4af37]">Get in touch</span> with us
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-sm">
              A dedicated team of Australian lubrication engineers ready to
              assist with product selection, bulk orders, and on-site support.
            </p>

            {/* Contact List */}
            <div className="space-y-6">
              <a
                href="tel:18005696363"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white group-hover:bg-[#ffe000] group-hover:border-[#ffe000] flex items-center justify-center shrink-0 transition-all shadow-sm">
                  <Phone size={16} className="text-zinc-500 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-0.5">
                    Phone Number
                  </div>
                  <div className="text-sm font-bold text-black group-hover:text-[#d4af37] transition-colors">
                    1800 569 6363 (Toll Free)
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Free from all Indian networks</div>
                </div>
              </a>

              <a
                href="mailto:info@lubriconindia.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white group-hover:bg-[#ffe000] group-hover:border-[#ffe000] flex items-center justify-center shrink-0 transition-all shadow-sm">
                  <Mail size={16} className="text-zinc-500 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-0.5">
                    Email
                  </div>
                  <div className="text-sm font-bold text-black group-hover:text-[#d4af37] transition-colors">
                    info@lubriconindia.com
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Response within 24 hours</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin size={16} className="text-zinc-500" />
                </div>
                <div>
                  <div className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-0.5">
                    Address
                  </div>
                  <div className="text-sm font-bold text-black leading-snug">
                    New Delhi, India
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Pan-India distribution &amp; warehouse hubs</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div>
            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-[#ffe000] text-black mx-auto flex items-center justify-center shadow-lg mb-4">
                  <CheckCircle2 size={36} className="stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                  Ref: LUB-INQ-{Math.floor(10000 + Math.random() * 90000)}
                </span>
                <h3 className="text-2xl font-black text-black tracking-tight mt-1 mb-2">
                  Message Sent!
                </h3>
                <p className="text-zinc-500 text-sm max-w-xs mx-auto leading-relaxed">
                  Thank you,{" "}
                  <strong className="text-black">{form.name}</strong>. Our
                  team will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", mobile: "", location: "", message: "" });
                  }}
                  className="mt-6 text-xs font-black uppercase tracking-wider text-zinc-500 hover:text-black border border-zinc-200 hover:border-black px-6 py-2.5 rounded-full transition cursor-pointer"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-1">
                  Send Message
                </h3>
                <p className="text-zinc-400 text-sm mb-7 leading-relaxed">
                  Please fill out the form below with your details and message
                  to contact us.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Your Name */}
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                  />

                  {/* Your Email */}
                  <input
                    required
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                  />

                  {/* Your Mobile Number */}
                  <input
                    required
                    type="tel"
                    placeholder="Your Mobile Number"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                  />

                  {/* Your Location */}
                  <input
                    required
                    type="text"
                    placeholder="Your Location"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                  />

                  {/* Message */}
                  <textarea
                    required
                    rows={4}
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition resize-none"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-black hover:bg-[#ffe000] hover:text-black text-white font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send size={14} />
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
