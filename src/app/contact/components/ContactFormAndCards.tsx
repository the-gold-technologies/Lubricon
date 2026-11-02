"use client";

import { useState } from "react";
import { useCMSStore } from "@/store/useCMSStore";
import { Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import CaptchaField, { useCaptcha, handleCaptchaResult } from "@/components/CaptchaField";

export default function ContactFormAndCards() {
  const { contactData } = useCMSStore();

  const contactForm = contactData?.ContactForm;
  const infoHeading = contactForm?.infoHeading;
  const infoDescription = contactForm?.infoDescription;
  const formTitle = contactForm?.formTitle;
  const formSubtitle = contactForm?.formSubtitle;
  const submitButtonText = contactForm?.submitButtonText;

  const phone = contactForm?.phone;
  const email = contactForm?.email;

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    address: "",
    message: "",
  });
  const captcha = useCaptcha();
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);
    const result = await useCMSStore.getState().submitEnquiry({
      type: "Contact Form",
      name: form.name,
      email: form.email,
      phone: form.mobile,
      company: form.company,
      location: form.address,
      message: `Address: ${form.address}, Message: ${form.message}`,
      ...captcha.payload,
    });
    setIsSubmitting(false);
    if (!handleCaptchaResult(captcha, result, setFormError)) return;
    setSent(true);
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ── Left: Info ── */}
          <div>
            {infoHeading && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-tight mb-3">
                {infoHeading}
              </h2>
            )}
            {infoDescription && (
              <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-sm">
                {infoDescription}
              </p>
            )}

            {/* Contact List */}
            <div className="space-y-6">
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white group-hover:bg-[#ffe000] group-hover:border-[#ffe000] flex items-center justify-center shrink-0 transition-all shadow-sm">
                    <Phone
                      size={16}
                      className="text-zinc-500 group-hover:text-black transition-colors"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-0.5">
                      Phone Number
                    </div>
                    <div className="text-sm font-bold text-black group-hover:text-[#d4af37] transition-colors">
                      {phone}
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Free from all Indian networks
                    </div>
                  </div>
                </a>
              )}

              {email && (
                <a href={`mailto:${email}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white group-hover:bg-[#ffe000] group-hover:border-[#ffe000] flex items-center justify-center shrink-0 transition-all shadow-sm">
                    <Mail
                      size={16}
                      className="text-zinc-500 group-hover:text-black transition-colors"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-0.5">
                      Email
                    </div>
                    <div className="text-sm font-bold text-black group-hover:text-[#d4af37] transition-colors">
                      {email}
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Prompt response &amp; technical support
                    </div>
                  </div>
                </a>
              )}
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
                  Thank you, <strong className="text-black">{form.name}</strong>. Our team will get
                  back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({
                      name: "",
                      email: "",
                      mobile: "",
                      company: "",
                      address: "",
                      message: "",
                    });
                    captcha.refresh();
                  }}
                  className="mt-6 text-xs font-black uppercase tracking-wider text-zinc-500 hover:text-black border border-zinc-200 hover:border-black px-6 py-2.5 rounded-full transition cursor-pointer"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                {formTitle && (
                  <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-1">
                    {formTitle}
                  </h3>
                )}
                {formSubtitle && (
                  <p className="text-zinc-400 text-sm mb-7 leading-relaxed">{formSubtitle}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Two-Column Grid for Name, Email, Mobile, and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      placeholder="Mobile Number (10 digits)"
                      value={form.mobile}
                      onChange={(e) => {
                        const numericOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setForm({ ...form, mobile: numericOnly });
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                    />

                    {/* Company Name */}
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                    />
                  </div>

                  {/* Your Address */}
                  <input
                    type="text"
                    placeholder="Your Address"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
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

                  <CaptchaField captcha={captcha} />

                  {formError && (
                    <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                      {formError}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-black hover:bg-[#ffe000] hover:text-black text-white font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{submitButtonText}</span>
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
