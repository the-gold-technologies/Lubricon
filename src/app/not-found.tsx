import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Home, Package, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Lubricon Specialities India",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="bg-[#f8f9fa] text-zinc-900 flex-1 flex items-center justify-center px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-xl w-full text-center">
        <span className="inline-block bg-[#ffe000] text-black text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
          Error 404
        </span>
        <h1 className="mt-5 text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
          The link may be outdated or the product may have moved. Browse our full range of
          lubricants or get in touch and our team will help you find the right product.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-black hover:bg-[#ffe000] text-white hover:text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors"
          >
            <Package size={15} />
            Browse Products
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-zinc-200 hover:border-black text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
          >
            <Home size={15} />
            Go to Home
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-zinc-500">
          <Link href="/contact" className="inline-flex items-center gap-1.5 hover:text-black">
            <Phone size={13} />
            Contact Us
          </Link>
          <Link href="/industries" className="inline-flex items-center gap-1.5 hover:text-black">
            <ArrowLeft size={13} />
            Industries We Serve
          </Link>
        </div>
      </div>
    </main>
  );
}
