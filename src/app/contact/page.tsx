'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/components/SocialIcons';

const faqs = [
  {
    q: 'What product grades do you offer for heavy diesel engines?',
    a: 'We offer the full range from API CF-4 through to the latest API CK-4 (ACEA E9) specification. For modern Euro 6 engines with DPF and SCR, we recommend our Lubricon XtremeX CK-4 15W40.',
  },
  {
    q: 'Do you supply AdBlue / DEF for Euro 6 compliance?',
    a: 'Yes! Lubricon AdBlue is ISO 22241-compliant 32.5% urea solution (AUS32/DEF), available in 10L, 20L, and 1000L IBC. It is fully compatible with all SCR emission control systems.',
  },
  {
    q: 'Can you supply lubricants for plastic injection molding machines?',
    a: 'Absolutely. We provide non-staining hydraulic oils, tie-bar greases, gear oils, and rust preventives specifically suited to the high-pressure, high-temperature demands of injection molding.',
  },
  {
    q: 'Do you offer technical support for lubrication selection?',
    a: 'Yes — our technical team provides free lubrication audits and product recommendations. Call our toll-free number or use the callback form and we will connect you with an expert.',
  },
  {
    q: 'What are your minimum order quantities?',
    a: 'We have flexible ordering from retail sizes (500ml, 1L) to bulk industrial supplies (210L drums, 1000L IBCs). Contact us for bulk pricing and custom packing.',
  },
  {
    q: 'Are your products compatible with major OEM equipment?',
    a: 'Yes, our products meet or exceed the API, ACEA, and DIN specifications required by major OEM equipment manufacturers. Specific OEM approval lists are available on request.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-3 p-5 text-left text-white font-medium hover:bg-white/5 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm">{q}</span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-amber-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '', product: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="orb orb-amber w-96 h-96 -top-48 -right-32 opacity-[0.10]" />
        <div className="container-custom relative z-10 text-center">
          <div className="section-tag">Get in Touch</div>
          <h1 className="section-heading text-white mb-5">
            Contact <span className="gradient-text">Lubricon India</span>
          </h1>
          <p className="section-subheading mx-auto">
            Whether you need a product recommendation, a bulk quote, or technical support —
            we&apos;re just a call or message away.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-gradient py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info cards */}
            <div className="lg:col-span-2 space-y-5">
              {/* Quick contact */}
              {[
                {
                  icon: <Phone size={20} className="text-amber-400" />,
                  title: 'Toll Free',
                  value: '1800 569 6363',
                  sub: 'Free calls from any network',
                  href: 'tel:18005696363',
                },
                {
                  icon: <Mail size={20} className="text-amber-400" />,
                  title: 'Email',
                  value: 'info@lubriconindia.com',
                  sub: 'We reply within 24 hours',
                  href: 'mailto:info@lubriconindia.com',
                },
                {
                  icon: <MapPin size={20} className="text-amber-400" />,
                  title: 'Address',
                  value: 'New Delhi, India',
                  sub: 'Pan-India distribution network',
                  href: '#',
                },
                {
                  icon: <Clock size={20} className="text-amber-400" />,
                  title: 'Business Hours',
                  value: 'Mon–Sat: 9 AM – 6 PM',
                  sub: 'IST (Indian Standard Time)',
                  href: '#',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-4 glass-card rounded-xl p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">{item.title}</p>
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </a>
              ))}

              {/* Social */}
              <div className="glass-card rounded-xl p-5">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { href: 'https://www.facebook.com/LubriconIndia', label: 'Facebook', Icon: FacebookIcon },
                    { href: 'https://www.instagram.com/', label: 'Instagram', Icon: InstagramIcon },
                    { href: 'https://www.linkedin.com/company/lubriconindia', label: 'LinkedIn', Icon: LinkedinIcon },
                    { href: 'https://www.youtube.com/', label: 'YouTube', Icon: YoutubeIcon },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all text-sm font-bold"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3 glass rounded-2xl p-8">
              {!sent ? (
                <>
                  <h2 className="text-white font-display font-bold text-2xl mb-2">Send Us a Message</h2>
                  <p className="text-slate-400 text-sm mb-7">
                    Fill out the form below and our team will respond within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Your Name *</label>
                        <input
                          className="form-input"
                          required
                          placeholder="Full Name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          id="contact-name"
                        />
                      </div>
                      <div>
                        <label className="form-label">Company</label>
                        <input
                          className="form-input"
                          placeholder="Company Name"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          id="contact-company"
                        />
                      </div>
                      <div>
                        <label className="form-label">Phone *</label>
                        <input
                          className="form-input"
                          required
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          id="contact-phone"
                        />
                      </div>
                      <div>
                        <label className="form-label">Email</label>
                        <input
                          className="form-input"
                          type="email"
                          placeholder="email@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          id="contact-email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Product / Service Interest</label>
                      <select
                        className="form-input"
                        value={form.product}
                        onChange={(e) => setForm({ ...form, product: e.target.value })}
                        id="contact-product"
                      >
                        <option value="">Select a category (optional)</option>
                        <option>Engine Oils</option>
                        <option>Gear Oils</option>
                        <option>ATF & Transmission Fluids</option>
                        <option>Industrial Lubricants</option>
                        <option>AdBlue / DEF</option>
                        <option>EDM Oil</option>
                        <option>Vacuum Pump Oil</option>
                        <option>Rust Preventive</option>
                        <option>Bulk Supply Enquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Message *</label>
                      <textarea
                        className="form-input min-h-[120px] resize-y"
                        required
                        placeholder="Tell us about your application, quantity required, or any questions..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        id="contact-message"
                      />
                    </div>
                    <button
                      type="submit"
                      id="contact-submit"
                      className="btn-primary w-full justify-center py-3.5"
                    >
                      <Mail size={15} />
                      Send Message
                    </button>
                    <p className="text-slate-500 text-xs text-center">
                      Or call us directly: <a href="tel:18005696363" className="text-amber-400 hover:underline">1800 569 6363</a> (Toll Free)
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12 animate-scale-in">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-white font-bold text-2xl mb-2">Message Received!</h3>
                  <p className="text-slate-400 mb-3">
                    Thank you, {form.name}! We have received your enquiry and will respond within 24 hours.
                  </p>
                  <p className="text-slate-500 text-sm mb-6">
                    For faster assistance, call our toll-free number:
                  </p>
                  <a href="tel:18005696363" className="btn-primary py-3 px-7">
                    <Phone size={15} />
                    Call 1800 569 6363 Now
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-navy-900">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-tag">FAQ</div>
            <h2 className="section-heading text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
