"use client";

import Image from "next/image";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { useCMSStore } from "@/store/useCMSStore";

export default function HomeGovernmentProcurement() {
  const { homeData } = useCMSStore();
  const procurement = homeData?.HomeGovernmentProcurement;

  if (!procurement) return null;

  const badgeText = procurement.badgeText;
  const title = procurement.title;
  const subtitle = procurement.subtitle;
  const gemCard = procurement.gemCard;
  const irepsCard = procurement.irepsCard;

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto">
        {/* Simple Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          {badgeText && (
            <div className="inline-flex items-center gap-1.5 bg-[#ffe000] text-black font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full mb-2.5 shadow-xs">
              <CheckCircle2 size={13} className="stroke-[3]" />
              <span>{badgeText}</span>
            </div>
          )}
          {title && (
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-1.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Compact Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* GeM Portal Card */}
          {gemCard && (
            <div className="bg-[#f8f9fa] hover:bg-white rounded-2xl border border-zinc-200 hover:border-black p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="h-12 w-36 relative bg-white rounded-lg p-1.5 border border-zinc-200/80 flex items-center justify-center">
                  {gemCard.logo && (
                    <Image
                      src={gemCard.logo}
                      alt={gemCard.title ?? ""}
                      width={160}
                      height={50}
                      className="h-9 w-auto object-contain"
                    />
                  )}
                </div>
                {gemCard.badge && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {gemCard.badge}
                  </span>
                )}
              </div>

              <div>
                {gemCard.title && (
                  <h3 className="text-base font-extrabold text-black">
                    {gemCard.title}
                  </h3>
                )}
                {gemCard.description && (
                  <p className="text-xs text-zinc-600 mt-1">
                    {gemCard.description}
                  </p>
                )}
              </div>

              {gemCard.link && (
                <div className="mt-5 pt-4 border-t border-zinc-200/70 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    GeM Portal
                  </span>
                  <a
                    href={gemCard.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-black hover:text-[#d4af37] transition-colors"
                  >
                    <span>gem.gov.in</span>
                    <ExternalLink size={12} strokeWidth={2.5} />
                  </a>
                </div>
              )}
            </div>
          )}

          {/* IREPS Portal Card */}
          {irepsCard && (
            <div className="bg-[#f8f9fa] hover:bg-white rounded-2xl border border-zinc-200 hover:border-black p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="h-12 w-36 relative bg-white rounded-lg p-1.5 border border-zinc-200/80 flex items-center justify-center">
                  {irepsCard.logo && (
                    <Image
                      src={irepsCard.logo}
                      alt={irepsCard.title ?? ""}
                      width={160}
                      height={50}
                      className="h-9 w-auto object-contain"
                    />
                  )}
                </div>
                {irepsCard.badge && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    {irepsCard.badge}
                  </span>
                )}
              </div>

              <div>
                {irepsCard.title && (
                  <h3 className="text-base font-extrabold text-black">
                    {irepsCard.title}
                  </h3>
                )}
                {irepsCard.description && (
                  <p className="text-xs text-zinc-600 mt-1">
                    {irepsCard.description}
                  </p>
                )}
              </div>

              {irepsCard.link && (
                <div className="mt-5 pt-4 border-t border-zinc-200/70 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    IREPS Portal
                  </span>
                  <a
                    href={irepsCard.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-black hover:text-[#d4af37] transition-colors"
                  >
                    <span>ireps.gov.in</span>
                    <ExternalLink size={12} strokeWidth={2.5} />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
