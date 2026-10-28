"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("lubricon_cookie_consent");
      if (!consent) {
        // Smooth entrance delay
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      // Handle private browsing or restricted localStorage
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("lubricon_cookie_consent", "accepted");
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("lubricon_cookie_consent", "declined");
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-40 bg-zinc-950/95 border border-zinc-800/90 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md text-white animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#ffe000]/15 text-[#ffe000] border border-[#ffe000]/25 flex items-center justify-center flex-shrink-0">
            <Cookie size={18} />
          </div>
          <h3 className="text-sm font-bold tracking-tight text-white">Cookie Preferences</h3>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Dismiss cookie banner"
          className="w-7 h-7 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors flex-shrink-0"
        >
          <X size={15} />
        </button>
      </div>

      <p className="text-xs text-zinc-300 leading-relaxed mb-4">
        We use cookies to improve your browsing experience, optimize site performance, and analyze
        traffic. Read our{" "}
        <Link
          href="/privacy-policy"
          className="text-[#ffe000] underline underline-offset-2 hover:text-yellow-300 font-medium transition-colors"
        >
          Privacy Policy
        </Link>{" "}
        to learn more.
      </p>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={handleDecline}
          className="flex-1 py-2 px-3 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-xl transition-all"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="flex-1 py-2 px-3 text-xs font-bold text-black bg-[#ffe000] hover:bg-[#ebd000] active:scale-[0.98] rounded-xl shadow transition-all"
        >
          Accept Cookies
        </button>
      </div>
    </aside>
  );
}
