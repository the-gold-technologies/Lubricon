"use client";

import { useCallback, useEffect, useState } from "react";
import { Lock, RotateCw, ShieldCheck } from "lucide-react";
import { getApiBaseUrl } from "@/store/useCMSStore";

type CaptchaResponse = { token: string; svg: string };

async function fetchCaptcha(): Promise<CaptchaResponse | null> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/captcha`, { cache: "no-store" });
    const json = await res.json();
    return json.success ? { token: json.token, svg: json.svg } : null;
  } catch {
    return null;
  }
}

/**
 * Server-verified captcha. The CMS issues an SVG image + signed token; the answer is only
 * checked by the CMS when the enquiry is submitted, so it can't be bypassed in the browser.
 */
export function useCaptcha() {
  const [token, setToken] = useState("");
  const [svg, setSvg] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [spinning, setSpinning] = useState(false);

  // Applies a fetched code (called from promise callbacks only)
  const apply = useCallback((result: CaptchaResponse | null) => {
    if (result) {
      setToken(result.token);
      setSvg(result.svg);
    } else {
      setError("Could not load the security code. Please refresh it.");
    }
    setLoading(false);
    setTimeout(() => setSpinning(false), 500);
  }, []);

  const refresh = useCallback(
    (keepError = false) => {
      setSpinning(true);
      setLoading(true);
      setAnswer("");
      if (!keepError) setError("");
      return fetchCaptcha().then(apply);
    },
    [apply],
  );

  useEffect(() => {
    let active = true;
    fetchCaptcha().then((result) => {
      if (active) apply(result);
    });
    return () => {
      active = false;
    };
  }, [apply]);

  return {
    token,
    svg,
    answer,
    setAnswer,
    error,
    setError,
    loading,
    spinning,
    refresh,
    /** Fields to spread into the enquiry payload */
    payload: { captchaToken: token, captchaAnswer: answer.trim() },
  };
}

export type CaptchaState = ReturnType<typeof useCaptcha>;

/**
 * Handles an enquiry response: on a captcha failure shows the message and loads a new code.
 * Returns true if the submission succeeded.
 */
export function handleCaptchaResult(
  captcha: CaptchaState,
  result: { success: boolean; code?: string; error?: string },
  setFormError: (msg: string) => void,
): boolean {
  if (result.success) return true;
  if (result.code === "CAPTCHA_INVALID") {
    captcha.setError(result.error || "Incorrect security code. Please try again.");
    captcha.refresh(true);
  } else {
    setFormError(result.error || "Something went wrong. Please try again or call us.");
    captcha.refresh();
  }
  return false;
}

export default function CaptchaField({ captcha }: { captcha: CaptchaState }) {
  const imgSrc = captcha.svg ? `data:image/svg+xml;utf8,${encodeURIComponent(captcha.svg)}` : "";

  return (
    <div className="space-y-2 pt-1">
      <div className="flex items-center justify-between">
        <label className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span>Security Verification *</span>
        </label>
        <span className="text-[10px] text-zinc-400 font-medium">Click code to refresh</span>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => captcha.refresh()}
            title="Click to generate a new code"
            className="relative h-12 w-40 rounded-xl border border-zinc-300 bg-zinc-50 flex items-center justify-center cursor-pointer select-none overflow-hidden shadow-inner transition-all hover:border-black"
          >
            {captcha.loading || !imgSrc ? (
              <span className="text-zinc-400 font-mono text-xs tracking-widest animate-pulse">
                LOADING...
              </span>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imgSrc}
                alt="Security code"
                className="w-full h-full object-contain"
                draggable={false}
              />
            )}
          </button>

          <button
            type="button"
            onClick={() => captcha.refresh()}
            title="Refresh security code"
            aria-label="Refresh security code"
            className="w-12 h-12 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-[#ffe000] hover:border-[#ffe000] text-zinc-600 hover:text-black flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-sm"
          >
            <RotateCw
              size={16}
              className={`transition-transform duration-500 ${
                captcha.spinning ? "rotate-180 text-black" : ""
              }`}
            />
          </button>
        </div>

        <div className="relative flex-1">
          <Lock
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
          />
          <input
            required
            type="text"
            inputMode="numeric"
            pattern="[0-9]{4}"
            title="Enter the 4 digits shown"
            maxLength={4}
            autoComplete="off"
            spellCheck={false}
            placeholder="Enter 4 digits"
            value={captcha.answer}
            onChange={(e) => {
              captcha.setAnswer(e.target.value.replace(/\D/g, "").slice(0, 4));
              if (captcha.error) captcha.setError("");
            }}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white focus:bg-white text-sm text-zinc-900 font-mono font-bold placeholder:text-zinc-400 placeholder:font-sans placeholder:font-normal focus:outline-none focus:border-black focus:ring-1 focus:ring-black uppercase tracking-[0.2em] transition"
          />
        </div>
      </div>

      {captcha.error && (
        <p className="text-xs font-semibold text-red-600 mt-1 flex items-center gap-1">
          <span>•</span>
          <span>{captcha.error}</span>
        </p>
      )}
    </div>
  );
}
