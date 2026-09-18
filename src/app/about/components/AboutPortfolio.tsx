import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const portfolios = [
  {
    icon: '🛢️',
    title: 'Engine Oils',
    items: [
      'CK-4, CI-4 Plus, CI-4, CH-4, CF-4',
      'SAE 15W40 heavy duty multigrade range',
      'API-certified performance & soot control',
    ],
    link: '/products?cat=engine-oil',
  },
  {
    icon: '⚙️',
    title: 'Gear Oils',
    items: [
      'Automotive GL-5: 80W90, 85W140',
      'Industrial EP: ISO VG 100 to 680',
      'Hypoid, worm, and spur gear formulations',
    ],
    link: '/products?cat=gear-oil',
  },
  {
    icon: '🔄',
    title: 'ATF & Steering Fluids',
    items: [
      'Dexron III ATF automatic transmission',
      'ATF Type A for power steering systems',
      'Smooth gear engagement & seal protection',
    ],
    link: '/products?cat=atf',
  },
  {
    icon: '🏭',
    title: 'Industrial Specialties',
    items: [
      'Neat & Soluble CNC Cutting Oils',
      'High-Pressure Anti-Wear Hydraulic Oils',
      'VaccuSyn Vacuum Pump & Compressor Fluids',
    ],
    link: '/products?cat=industrial',
  },
  {
    icon: '💧',
    title: 'DEF & Coolants',
    items: [
      'ISO 22241 AdBlue 32.5% (AUS32)',
      'Heavy duty radiator coolants',
      'Euro 4/5/6 SCR emission compliance',
    ],
    link: '/products?cat=coolants',
  },
  {
    icon: '🔧',
    title: 'Greases & Maintenance',
    items: [
      'High-temperature lithium complex greases',
      'Moly extreme pressure chassis grease',
      'Rust preventive fluids & rust guards',
    ],
    link: '/products?cat=greases',
  },
];

export default function AboutPortfolio() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-extrabold text-xs uppercase px-3.5 py-1 rounded-full mb-3 shadow-sm tracking-wider">
              <span>Product Lineup</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
              Complete Lubrication Portfolio
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-medium mt-2">
              From heavy transport fleets to high-precision CNC tool rooms.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-black hover:bg-[#ffe000] hover:text-black text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow"
          >
            <span>View All Products</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-[#ffe000] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-zinc-100 flex items-center justify-center text-3xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-black mb-3 tracking-tight">
                  {item.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {item.items.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-zinc-600 text-xs sm:text-sm">
                      <CheckCircle2 size={16} className="text-[#ffe000] fill-black flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-black hover:text-[#d4af37] transition-colors pt-4 border-t border-zinc-100"
              >
                <span>Explore Range</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
