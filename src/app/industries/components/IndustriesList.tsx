"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useCMSStore } from "@/store/useCMSStore";
import PlantAuditDrawer from "@/components/PlantAuditDrawer";

export default function IndustriesList() {
  const { industries } = useCMSStore();
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  if (!industries || industries.length === 0) return null;

  return (
    <>
      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto space-y-16">
          {industries.map((industry) => (
            <div
              key={industry.id}
              id={industry.id}
              className="bg-white rounded-2xl p-8 shadow-xl border border-zinc-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Image or Visual */}
              <div className="lg:col-span-5 flex justify-center">
                {industry.image ? (
                  <div className="relative w-full h-80 bg-zinc-100 rounded-xl overflow-hidden border-2 border-zinc-200">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-contain p-4"
                    />
                    <div className="absolute top-3 left-3 bg-black/85 text-[#ffe000] text-xs font-extrabold px-3 py-1 rounded-full uppercase">
                      {industry.name}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-80 bg-zinc-900 rounded-xl flex flex-col items-center justify-center text-center p-6 border-2 border-[#ffe000]">
                    <span className="text-6xl mb-4">{industry.icon}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                    {industry.description && (
                      <p className="text-xs text-zinc-400 max-w-xs line-clamp-3">
                        {industry.description}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column: Information, Challenges, Solutions */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{industry.icon}</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">{industry.name}</h2>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">{industry.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Challenges */}
                  {industry.challenges && industry.challenges.length > 0 && (
                    <div className="bg-red-50/70 p-4 rounded-xl border border-red-200">
                      <h4 className="text-red-900 text-xs font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <span>⚠</span> Operating Challenges
                      </h4>
                      <ul className="space-y-1.5 text-xs text-zinc-700">
                        {industry.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-red-500 font-bold">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Solutions */}
                  {industry.solutions && industry.solutions.length > 0 && (
                    <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
                      <h4 className="text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-emerald-600" />
                        <span>Lubricon Engineered Solutions</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-zinc-700">
                        {industry.solutions.map((s, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom Row: Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-100">
                  <button
                    onClick={() => {
                      setSelectedIndustry(industry.name);
                      setIsAuditOpen(true);
                    }}
                    className="bg-[#ffe000] hover:bg-[#fff04d] text-black font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer transform hover:scale-105"
                  >
                    <span>Request Plant Audit</span>
                    <ArrowRight size={13} />
                  </button>

                  <Link
                    href="/products"
                    className="border-2 border-zinc-200 hover:border-black font-extrabold text-black text-xs px-5 py-2.5 rounded-full uppercase tracking-wider transition-all"
                  >
                    View Matching Formulations
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plant Audit Drawer */}
      <PlantAuditDrawer
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        initialService={selectedIndustry}
      />
    </>
  );
}
