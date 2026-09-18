'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const whatsappMsg = encodeURIComponent(
    "Hi, I'm interested in Lubricon lubricant products. Please guide me."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup card */}
      {open && (
        <div className="glass-card rounded-2xl p-5 w-72 animate-scale-in shadow-2xl border border-green-500/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Lubricon Support</p>
                <p className="text-green-400 text-xs">● Online now</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Close chat popup"
            >
              <X size={16} />
            </button>
          </div>
          <div className="bg-navy-900/60 rounded-xl p-3 mb-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              👋 Hello! How can we help you today? Chat with us for quick lubrication advice and product enquiries.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={`https://wa.me/917042460177?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold py-2.5 rounded-xl transition-all hover:scale-105"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:18005696363"
              className="flex items-center justify-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 text-sm font-semibold py-2.5 rounded-xl transition-all border border-amber-500/30"
            >
              <Phone size={15} />
              Call Toll Free: 1800 569 6363
            </a>
            <a
              href="mailto:info@lubriconindia.com"
              className="flex items-center justify-center gap-2 text-slate-400 hover:text-slate-200 text-xs py-2 transition-colors"
            >
              <Mail size={12} />
              info@lubriconindia.com
            </a>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        id="whatsapp-fab"
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)' }}
        aria-label="Open WhatsApp chat"
      >
        {open ? (
          <X size={22} className="animate-scale-in" />
        ) : (
          <>
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            {/* Notification pulse */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-navy-900 animate-pulse" />
          </>
        )}
      </button>
    </div>
  );
}
