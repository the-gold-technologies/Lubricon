import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const portfolios = [
  {
    icon: "🛢️",
    title: "Engine Oils",
    items: [
      "CK-4, CI-4 Plus, CI-4, CH-4, CF-4",
      "SAE 15W40 heavy duty multigrade range",
      "API-certified performance & soot control",
    ],
    link: "/products?cat=engine-oil",
  },
  {
    icon: "⚙️",
    title: "Gear Oils",
    items: [
      "Automotive GL-5: 80W90, 85W140",
      "Industrial EP: ISO VG 100 to 680",
      "Hypoid, worm, and spur gear formulations",
    ],
    link: "/products?cat=gear-oil",
  },
  {
    icon: "🔄",
    title: "ATF & Steering Fluids",
    items: [
      "Dexron III ATF automatic transmission",
      "ATF Type A for power steering systems",
      "Smooth gear engagement & seal protection",
    ],
    link: "/products?cat=atf",
  },
  {
    icon: "🏭",
    title: "Industrial Specialties",
    items: [
      "Neat & Soluble CNC Cutting Oils",
      "High-Pressure Anti-Wear Hydraulic Oils",
      "VaccuSyn Vacuum Pump & Compressor Fluids",
    ],
    link: "/products?cat=industrial",
  },
  {
    icon: "💧",
    title: "DEF & Coolants",
    items: [
      "ISO 22241 AdBlue 32.5% (AUS32)",
      "Heavy duty radiator coolants",
      "Euro 4/5/6 SCR emission compliance",
    ],
    link: "/products?cat=coolants",
  },
  {
    icon: "🔧",
    title: "Greases & Maintenance",
    items: [
      "High-temperature lithium complex greases",
      "Moly extreme pressure chassis grease",
      "Rust preventive fluids & rust guards",
    ],
    link: "/products?cat=greases",
  },
];

export default function AboutPortfolio() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0c0d12] text-white border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-black text-xs uppercase px-3.5 py-1 rounded-full mb-3 tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>Product Lineup</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Complete Lubrication{" "}
              <span className="text-[#ffe000]">Portfolio</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-medium mt-2 max-w-xl leading-relaxed">
              From heavy transport fleets and hydraulic systems to
              high-precision CNC tool rooms and industrial manufacturing.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#ffe000] hover:bg-white text-black font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md transform hover:scale-105"
          >
            <span>View All 40+ Products</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((item, i) => (
            <div
              key={i}
              className="bg-[#12141a] border border-zinc-800/90 rounded-2xl p-6 hover:border-[#ffe000]/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:border-[#ffe000]/40 transition-all shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3 tracking-tight group-hover:text-[#ffe000] transition-colors">
                  {item.title}
                </h3>
                <ul className="space-y-2.5 mb-6">
                  {item.items.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm leading-snug"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#ffe000] fill-black flex-shrink-0 mt-0.5"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={item.link}
                className="inline-flex items-center justify-between text-xs font-black uppercase text-zinc-300 group-hover:text-[#ffe000] transition-colors pt-4 border-t border-zinc-800/80"
              >
                <span>Explore Range</span>
                <ArrowRight
                  size={14}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
