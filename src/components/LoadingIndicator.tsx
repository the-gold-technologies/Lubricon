"use client";

import React from "react";

interface LoadingIndicatorProps {
  message?: string;
  subMessage?: string;
  fullScreen?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LoadingIndicator({
  message = "Loading content...",
  subMessage,
  fullScreen = false,
  size = "md",
  className = "",
}: LoadingIndicatorProps) {
  const containerClasses = fullScreen
    ? "min-h-[65vh] w-full flex flex-col items-center justify-center p-6 sm:p-12"
    : "py-16 w-full flex flex-col items-center justify-center p-6";

  const spinnerDimensions =
    size === "sm"
      ? { outer: "w-12 h-12", inner: "w-8 h-8", icon: 16 }
      : size === "lg"
        ? { outer: "w-24 h-24", inner: "w-16 h-16", icon: 32 }
        : { outer: "w-16 h-16", inner: "w-11 h-11", icon: 22 };

  return (
    <div role="status" aria-live="polite" className={`${containerClasses} ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Ambient subtle yellow glow */}
        <div className="absolute -inset-4 bg-[#ffe000]/15 rounded-full blur-xl pointer-events-none animate-pulse" />

        {/* Outer glowing orbital spinner */}
        <div
          className={`${spinnerDimensions.outer} rounded-full border-2 border-transparent border-t-[#ffe000] border-r-[#ffe000]/60 animate-spin`}
          style={{ animationDuration: "1s" }}
        />

        {/* Inner reverse spinner */}
        <div
          className={`absolute ${spinnerDimensions.inner} rounded-full border border-dashed border-zinc-300 border-b-black/80 animate-spin`}
          style={{ animationDirection: "reverse", animationDuration: "2s" }}
        />

        {/* Center Lubricon Droplet / Tech Core */}
        <div className="absolute flex items-center justify-center w-7 h-7 rounded-full bg-black text-[#ffe000] shadow-md animate-pulse">
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        </div>
      </div>

      {/* Brand & Loading Info */}
      <div className="mt-6 flex flex-col items-center text-center max-w-sm">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-black">
            Lubricon
          </span>
          <span className="w-1 h-1 rounded-full bg-[#ffe000]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            Australian Tech
          </span>
        </div>

        {message && <p className="text-sm font-semibold text-zinc-800 tracking-tight">{message}</p>}

        {subMessage && <p className="text-xs text-zinc-400 mt-0.5">{subMessage}</p>}

        {/* Shimmering loader track */}
        <div className="w-28 h-1 bg-zinc-100 rounded-full overflow-hidden mt-3 relative">
          <div
            className="absolute top-0 bottom-0 left-0 bg-[#ffe000] w-1/2 rounded-full animate-[shimmer_1.4s_ease-in-out_infinite]"
            style={{
              animation: "shimmerSlide 1.5s infinite ease-in-out",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmerSlide {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(250%);
          }
        }
      `}</style>
    </div>
  );
}
