"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { industries } from "@/data/industries";
import PlantAuditDrawer from "@/components/PlantAuditDrawer";

export default function IndustriesList() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");

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
                    <h3 className="text-xl font-bold text-white mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-zinc-400 max-w-xs">
                      Heavy duty engineered fluids ensuring maximum uptime and
                      component protection.
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column: Information, Challenges, Solutions */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{industry.icon}</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">
                    {industry.name}
                  </h2>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  {industry.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Challenges */}
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

                  {/* Solutions */}
                  <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
                    <h4 className="text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-emerald-600" />{" "}
                      Lubricon Solutions
                    </h4>
                    <ul className="space-y-1.5 text-xs text-zinc-700">
                      {industry.solutions.map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">✔</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/products"
                    className="bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition shadow flex items-center gap-1.5"
                  >
                    <span>View Recommended Products</span>
                    <ArrowRight size={14} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedIndustry(industry.name);
                      setIsAuditOpen(true);
                    }}
                    className="border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white text-zinc-900 font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition flex items-center gap-1.5 cursor-pointer"
                  >
                    Request Technical Audit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plant Audit Slide-over Drawer */}
      <PlantAuditDrawer
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        initialService={`On-Site Plant Lubrication Audits – ${selectedIndustry}`}
      />
    </>
  );
}

