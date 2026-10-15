"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useCMSStore } from "@/store/useCMSStore";

export default function AboutPortfolio() {
  const { aboutData } = useCMSStore();
  const portfolio = aboutData?.AboutPortfolio;

  if (!portfolio) return null;

  const badge = portfolio.badge;
  const title = portfolio.title;
  const subtitle = portfolio.subtitle;
  const portfolios = portfolio.portfolios;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0c10] text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-extrabold text-xs uppercase px-3.5 py-1 rounded-full mb-3 shadow-sm tracking-wider">
              <span>{badge}</span>
            </div>
          )}
          {title && (
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{title}</h2>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base text-zinc-400 font-medium mt-3">{subtitle}</p>
          )}
        </div>

        {portfolios && portfolios.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map((p: any, i: number) => (
              <div
                key={i}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 hover:border-[#ffe000] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-[#ffe000] transition-colors">
                    {p.title}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {p.items?.map((item: string, j: number) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs text-zinc-300 font-medium"
                      >
                        <CheckCircle2 size={14} className="text-[#ffe000] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {p.link && (
                  <Link
                    href={p.link}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#ffe000] group-hover:text-white transition-colors pt-4 border-t border-zinc-800/80"
                  >
                    <span>{p.linkText}</span>
                    <ArrowRight size={13} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
