"use client";

import { useState } from "react";
import { Product } from "@/types";
import ProductQuoteDrawer from "@/components/ProductQuoteDrawer";
import ProductPriceListDrawer from "@/components/ProductPriceListDrawer";

interface ProductCtaButtonsProps {
  product: Product;
}

export default function ProductCtaButtons({ product }: ProductCtaButtonsProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isPriceListOpen, setIsPriceListOpen] = useState(false);

  return (
    <>
      <div className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <div className="text-sm sm:text-base font-black text-black">
            Need pricing or technical data sheets?
          </div>
          <div className="text-xs text-zinc-500 mt-1">
            Get custom estimates and TDS spec sheets within 24 hours.
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
          <button
            type="button"
            onClick={() => setIsQuoteOpen(true)}
            className="cursor-pointer bg-[#ffe000] hover:bg-black hover:text-[#ffe000] text-black font-black px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md text-center flex-1 sm:flex-none"
          >
            Get Custom Quote
          </button>

          <button
            type="button"
            onClick={() => setIsPriceListOpen(true)}
            className="cursor-pointer bg-white hover:bg-zinc-100 text-black border-2 border-zinc-200 hover:border-black font-extrabold px-5 py-3 rounded-full text-xs uppercase tracking-wider transition-all text-center flex-1 sm:flex-none"
          >
            Request Price List
          </button>
        </div>
      </div>

      {/* Slide-over Drawers */}
      <ProductQuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        product={product}
      />

      <ProductPriceListDrawer
        isOpen={isPriceListOpen}
        onClose={() => setIsPriceListOpen(false)}
        product={product}
      />
    </>
  );
}
