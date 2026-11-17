interface SpecTableProps {
  headers: string[];
  rows: string[][];
}

/**
 * Product data table: first column bold, last column emphasised, middle columns muted.
 * Line breaks typed into CMS cells are kept.
 */
export default function SpecTable({ headers, rows }: SpecTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-xs sm:text-sm">
        {headers.some((h) => h.trim()) && (
          <thead>
            <tr className="border-b border-zinc-200 text-zinc-500 font-extrabold uppercase text-[11px]">
              {headers.map((header, cIdx) => (
                <th key={cIdx} className="py-2.5 px-3 whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="divide-y divide-zinc-100 font-medium">
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-zinc-50 transition-colors">
              {row.map((cell, cIdx) => {
                const isFirst = cIdx === 0;
                const isLast = cIdx === row.length - 1 && row.length > 1;
                return (
                  <td
                    key={cIdx}
                    className={`py-2.5 px-3 align-top whitespace-pre-line ${
                      isFirst
                        ? "font-bold text-black"
                        : isLast
                          ? "font-extrabold text-black"
                          : "text-zinc-500"
                    }`}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
