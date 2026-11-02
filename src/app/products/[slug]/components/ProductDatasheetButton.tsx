"use client";

import { useCallback, useState } from "react";
import { Download, FileText } from "lucide-react";
import ProductDatasheetDrawer from "@/components/ProductDatasheetDrawer";

interface ProductDatasheetButtonProps {
  productName: string;
  productSlug: string;
}

export default function ProductDatasheetButton({
  productName,
  productSlug,
}: ProductDatasheetButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group w-full text-left flex items-center justify-between gap-4 rounded-[28px] bg-black text-white border border-black shadow-sm p-5 sm:p-6 hover:bg-zinc-900 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-[#ffe000] text-black flex items-center justify-center shrink-0">
            <FileText size={20} />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-black">Product Datasheet</div>
            <div className="text-xs text-zinc-400 truncate">
              Download the technical PDF for {productName}
            </div>
          </div>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1.5 bg-[#ffe000] text-black text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-full group-hover:bg-white transition-colors">
          <Download size={14} />
          PDF
        </span>
      </button>

      <ProductDatasheetDrawer
        isOpen={isOpen}
        onClose={close}
        productName={productName}
        productSlug={productSlug}
      />
    </>
  );
}
