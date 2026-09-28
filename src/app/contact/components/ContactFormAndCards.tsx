"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  RotateCw,
  ShieldCheck,
  Lock,
} from "lucide-react";

interface CaptchaItem {
  code: string;
  chars: {
    char: string;
    x: number;
    y: number;
    rotate: number;
    fontSize: number;
    color: string;
  }[];
  lines: {
    d: string;
    stroke: string;
    strokeWidth: number;
  }[];
  dots: {
    cx: number;
    cy: number;
    r: number;
    fill: string;
  }[];
}

const generateCaptcha = (): CaptchaItem => {
  const charsPool = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  const colors = [
    "#0f172a", // deep slate
    "#1e3a8a", // deep navy
    "#b45309", // amber
    "#047857", // emerald
    "#7c2d12", // deep orange
    "#4c1d95", // violet
    "#991b1b", // red
    "#0284c7", // sky blue
  ];

  let code = "";
  const chars: CaptchaItem["chars"] = [];

  for (let i = 0; i < 5; i++) {
    const c = charsPool.charAt(Math.floor(Math.random() * charsPool.length));
    code += c;
    chars.push({
      char: c,
      x: 18 + i * 26 + (Math.random() * 4 - 2),
      y: 28 + (Math.random() * 4 - 2),
      rotate: Math.floor(Math.random() * 28) - 14,
      fontSize: 22 + Math.floor(Math.random() * 4),
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  const lines: CaptchaItem["lines"] = [
    {
      d: `M 0 ${10 + Math.random() * 10} Q 40 ${5 + Math.random() * 25}, 85 ${12 + Math.random() * 18} T 155 ${18 + Math.random() * 15}`,
      stroke: "#94a3b8",
      strokeWidth: 1.5,
    },
    {
      d: `M 0 ${24 + Math.random() * 8} Q 60 ${18 + Math.random() * 15}, 105 ${12 + Math.random() * 18} T 155 ${16 + Math.random() * 16}`,
      stroke: "#cbd5e1",
      strokeWidth: 1.2,
    },
    {
      d: `M 5 ${8 + Math.random() * 25} C 45 ${32 - Math.random() * 20}, 95 ${8 + Math.random() * 24}, 150 ${14 + Math.random() * 18}`,
      stroke: "#d97706",
      strokeWidth: 1,
    },
  ];

  const dots: CaptchaItem["dots"] = [];
  for (let i = 0; i < 28; i++) {
    dots.push({
      cx: Math.floor(Math.random() * 155),
      cy: Math.floor(Math.random() * 42),
      r: Math.random() > 0.75 ? 1.5 : 1,
      fill:
        Math.random() > 0.5
          ? "rgba(100, 116, 139, 0.45)"
          : "rgba(217, 119, 6, 0.35)",
    });
  }

  return { code, chars, lines, dots };
};

export default function ContactFormAndCards() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    address: "",
    message: "",
  });
  const [captchaData, setCaptchaData] = useState<CaptchaItem | null>(null);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setCaptchaData(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setIsSpinning(true);
    setCaptchaData(generateCaptcha());
    setCaptchaInput("");
    setCaptchaError("");
    setTimeout(() => setIsSpinning(false), 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !captchaData ||
      captchaInput.trim().toUpperCase() !== captchaData.code.toUpperCase()
    ) {
      setCaptchaError("Incorrect security code. Please check and try again.");
      refreshCaptcha();
      return;
    }
    setCaptchaError("");
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
                    1800 569 6363 (Toll Free)
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Free from all Indian networks
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@lubriconindia.com"
                className="flex items-start gap-4 group"
              >
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
                    info@lubriconindia.com
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Prompt response &amp; technical support
                  </div>
                </div>
              </a>
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
                  Thank you, <strong className="text-black">{form.name}</strong>
                  . Our team will get back to you shortly.
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
                    refreshCaptcha();
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
                  {/* Two-Column Grid for Name, Email, Mobile, and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Your Name */}
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                    />

                    {/* Your Email */}
                    <input
                      required
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
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
                        const numericOnly = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);
                        setForm({ ...form, mobile: numericOnly });
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                    />

                    {/* Company Name */}
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                    />
                  </div>

                  {/* Your Address */}
                  <input
                    type="text"
                    placeholder="Your Address"
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                  />

                  {/* Message */}
                  <textarea
                    required
                    rows={4}
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition resize-none"
                  />

                  {/* Captcha Verification */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-emerald-600" />
                        <span>Security Verification</span>
                      </label>
                      <span className="text-[10px] text-zinc-400 font-medium">
                        Click code or icon to refresh
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      {/* Interactive Rich Captcha Box */}
                      <div className="flex items-center gap-2">
                        <div
                          onClick={refreshCaptcha}
                          title="Click to generate new code"
                          className="relative h-12 w-44 rounded-xl border border-zinc-300 bg-gradient-to-br from-amber-50/60 via-zinc-100 to-zinc-50 flex items-center justify-center cursor-pointer select-none overflow-hidden shadow-inner group transition-all hover:border-black"
                        >
                          {captchaData ? (
                            <svg
                              viewBox="0 0 160 44"
                              className="w-full h-full block"
                              aria-label="Security Captcha Code"
                            >
                              <defs>
                                <pattern
                                  id="captcha-dots-pattern"
                                  width="8"
                                  height="8"
                                  patternUnits="userSpaceOnUse"
                                >
                                  <circle
                                    cx="2"
                                    cy="2"
                                    r="0.75"
                                    fill="rgba(0,0,0,0.06)"
                                  />
                                </pattern>
                              </defs>
                              <rect
                                width="100%"
                                height="100%"
                                fill="url(#captcha-dots-pattern)"
                              />

                              {/* Noise dots */}
                              {captchaData.dots.map((d, i) => (
                                <circle
                                  key={i}
                                  cx={d.cx}
                                  cy={d.cy}
                                  r={d.r}
                                  fill={d.fill}
                                />
                              ))}

                              {/* Interference wavy lines */}
                              {captchaData.lines.map((l, i) => (
                                <path
                                  key={i}
                                  d={l.d}
                                  fill="none"
                                  stroke={l.stroke}
                                  strokeWidth={l.strokeWidth}
                                  strokeLinecap="round"
                                />
                              ))}

                              {/* Tilted, colored, stylized characters */}
                              {captchaData.chars.map((c, i) => (
                                <text
                                  key={i}
                                  x={c.x}
                                  y={c.y}
                                  fill={c.color}
                                  fontSize={c.fontSize}
                                  fontWeight="900"
                                  fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                                  transform={`rotate(${c.rotate} ${c.x} ${c.y})`}
                                  style={{ letterSpacing: "2px" }}
                                >
                                  {c.char}
                                </text>
                              ))}
                            </svg>
                          ) : (
                            <span className="text-zinc-400 font-mono text-sm tracking-widest animate-pulse">
                              LOADING...
                            </span>
                          )}

                          {/* Hover hint badge */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                        </div>

                        {/* Animated Refresh Button */}
                        <button
                          type="button"
                          onClick={refreshCaptcha}
                          title="Refresh Security Code"
                          className="w-12 h-12 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-[#ffe000] hover:border-[#ffe000] text-zinc-600 hover:text-black flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-sm"
                        >
                          <RotateCw
                            size={16}
                            className={`transition-transform duration-500 ${
                              isSpinning ? "rotate-180 text-black" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Captcha Code Input with lock indicator */}
                      <div className="relative flex-1">
                        <Lock
                          size={15}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
                        />
                        <input
                          required
                          type="text"
                          maxLength={5}
                          placeholder="ENTER CODE"
                          value={captchaInput}
                          onChange={(e) => {
                            setCaptchaInput(e.target.value.toUpperCase());
                            if (captchaError) setCaptchaError("");
                          }}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-mono font-bold placeholder:text-zinc-400 placeholder:font-sans placeholder:font-normal focus:outline-none focus:border-black focus:ring-1 focus:ring-black uppercase tracking-[0.2em] transition"
                        />
                      </div>
                    </div>

                    {captchaError && (
                      <p className="text-xs font-semibold text-red-600 mt-1 flex items-center gap-1">
                        <span>•</span>
                        <span>{captchaError}</span>
                      </p>
                    )}
                  </div>

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
