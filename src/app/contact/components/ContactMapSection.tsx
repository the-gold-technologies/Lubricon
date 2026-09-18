import { Mail, MapPin } from "lucide-react";

export default function ContactMapSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto">

        {/* Top Row: Headline Left + Contact Info Right */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-8">

          {/* Left: Headline */}
          <div className="max-w-sm">
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-tight mb-2">
              Need help? Get in touch
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Feel free to reach out to us for any inquiries or assistance.
              We&apos;re here to help!
            </p>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 shrink-0">
            <a
              href="mailto:info@lubriconindia.com"
              className="flex items-start gap-3 group"
            >
              <Mail size={16} className="text-zinc-500 mt-0.5 shrink-0 group-hover:text-black transition-colors" />
              <div>
                <div className="text-xs font-black text-black uppercase tracking-wide mb-0.5">
                  Contacts
                </div>
                <div className="text-sm text-zinc-500 group-hover:text-black transition-colors">
                  info@lubriconindia.com
                </div>
              </div>
            </a>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-zinc-500 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-black text-black uppercase tracking-wide mb-0.5">
                  Address
                </div>
                <div className="text-sm text-zinc-500 leading-snug">
                  New Delhi, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Map */}
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889970711154!3d28.527758200788275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1726646400000!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lubricon India – New Delhi Location Map"
          />
        </div>

      </div>
    </section>
  );
}
