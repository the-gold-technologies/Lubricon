import Image from "next/image";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function HomeGovernmentProcurement() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto">
        {/* Simple Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#ffe000] text-black font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full mb-2.5 shadow-xs">
            <CheckCircle2 size={13} className="stroke-[3]" />
            <span>Official E-Procurement Registration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            We Are Registered on GeM &amp; IREPS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-1.5">
            Registered and approved supplier for institutional and government
            procurement.
          </p>
        </div>

        {/* Compact Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* GeM Portal Card */}
          <div className="bg-[#f8f9fa] hover:bg-white rounded-2xl border border-zinc-200 hover:border-black p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="h-12 w-36 relative bg-white rounded-lg p-1.5 border border-zinc-200/80 flex items-center justify-center">
                <Image
                  src="/images/gem-logo.png"
                  alt="Government e Marketplace"
                  width={160}
                  height={50}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Registered Seller
              </span>
            </div>

            <div>
              <h3 className="text-base font-extrabold text-black">
                Government e Marketplace (GeM)
              </h3>
              <p className="text-xs text-zinc-600 mt-1">
                Registered vendor for direct procurement by Central &amp; State
                government departments and PSUs.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-200/70 flex items-center justify-between text-xs">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                GeM Portal
              </span>
              <a
                href="https://gem.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-black hover:text-[#d4af37] transition-colors"
              >
                <span>gem.gov.in</span>
                <ExternalLink size={12} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* IREPS Portal Card */}
          <div className="bg-[#f8f9fa] hover:bg-white rounded-2xl border border-zinc-200 hover:border-black p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="h-12 w-36 relative bg-white rounded-lg p-1.5 border border-zinc-200/80 flex items-center justify-center">
                <Image
                  src="/images/ireps-logo.png"
                  alt="Indian Railways E-Procurement System"
                  width={160}
                  height={50}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Approved Vendor
              </span>
            </div>

            <div>
              <h3 className="text-base font-extrabold text-black">
                Indian Railways (IREPS)
              </h3>
              <p className="text-xs text-zinc-600 mt-1">
                Approved vendor on the official Indian Railways E-Procurement
                portal for zonal and workshop supplies.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-200/70 flex items-center justify-between text-xs">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                IREPS Portal
              </span>
              <a
                href="https://www.ireps.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-black hover:text-[#d4af37] transition-colors"
              >
                <span>ireps.gov.in</span>
                <ExternalLink size={12} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
