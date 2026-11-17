import { FileText, ListChecks, Table2 } from "lucide-react";
import type { ProductCustomSection } from "@/lib/productDetail";
import SpecTable from "./SpecTable";

const ICONS = { text: FileText, list: ListChecks, table: Table2 } as const;

/** Admin-defined extra cards shown below the properties table, in CMS order. */
export default function ProductCustomSections({ sections }: { sections: ProductCustomSection[] }) {
  return (
    <>
      {sections.map((section, i) => {
        const Icon = ICONS[section.type];
        // Alternate icon styles like the cards above (yellow / black)
        const iconClass = i % 2 === 0 ? "bg-black text-[#ffe000]" : "bg-[#ffe000] text-black";

        return (
          <div
            key={section.id}
            className="rounded-[28px] bg-white border border-zinc-200/90 shadow-sm p-6 sm:p-9"
          >
            {section.title && (
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-zinc-100">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${iconClass}`}
                >
                  <Icon size={16} />
                </div>
                <h2 className="text-lg font-black text-black">{section.title}</h2>
              </div>
            )}

            {section.type === "text" && (
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            )}

            {section.type === "list" && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm font-semibold text-zinc-800 leading-snug"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ffe000] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.type === "table" && (
              <SpecTable headers={section.headers} rows={section.rows} />
            )}
          </div>
        );
      })}
    </>
  );
}
