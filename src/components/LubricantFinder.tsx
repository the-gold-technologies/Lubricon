"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Factory,
  FlaskConical,
  Truck,
  Settings,
  Wind,
  Gauge,
  ShieldCheck,
  ArrowRight,
  RotateCcw,
  Phone,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

interface CategoryOption {
  id: "automotive" | "industrial" | "special";
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

interface EquipmentOption {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

const categoriesList: CategoryOption[] = [
  {
    id: "automotive",
    title: "Automotive & Fleet",
    subtitle:
      "Commercial diesel trucks, light transport fleets, and transmissions",
    icon: Truck,
  },
  {
    id: "industrial",
    title: "Industrial Manufacturing",
    subtitle:
      "Injection molding presses, paper mills, CNC machining & gearboxes",
    icon: Factory,
  },
  {
    id: "special",
    title: "Specialty Formulations",
    subtitle: "High dielectric EDM fluids, rust guard protectants & AdBlue DEF",
    icon: FlaskConical,
  },
];

const equipmentMap: Record<
  "automotive" | "industrial" | "special",
  EquipmentOption[]
> = {
  automotive: [
    {
      id: "diesel-heavy",
      title: "Heavy Duty Diesel Engine",
      subtitle: "Euro 6 / BS6 haulage trucks, excavators, and passenger buses",
      icon: Truck,
    },
    {
      id: "transmission",
      title: "Automatic Transmission & Steering",
      subtitle: "Smooth gear shift ATFs and hydraulic power steering units",
      icon: Settings,
    },
    {
      id: "axle",
      title: "Differentials & Hypoid Axles",
      subtitle: "High extreme-pressure rear differentials and axle boxes",
      icon: Settings,
    },
  ],
  industrial: [
    {
      id: "molding",
      title: "Plastic Injection Molding",
      subtitle: "Anti-wear hydraulic systems and high-temp tie-bar grease",
      icon: Factory,
    },
    {
      id: "gearbox-heavy",
      title: "Heavy Industrial Gearboxes",
      subtitle: "Slow-speed, ultra-heavy shock loads in paper and steel mills",
      icon: Gauge,
    },
    {
      id: "compressor",
      title: "Rotary Screw & Air Compressors",
      subtitle: "Continuous-run industrial air and refrigeration compressors",
      icon: Wind,
    },
  ],
  special: [
    {
      id: "edm",
      title: "CNC EDM & Spark Erosion",
      subtitle: "High dielectric purity fluids for precision wire EDM tooling",
      icon: Sparkles,
    },
    {
      id: "rust-prevent",
      title: "Anti-Rust Preservation",
      subtitle:
        "Long-term de-watering corrosion preventive films for metal parts",
      icon: ShieldCheck,
    },
    {
      id: "def",
      title: "AdBlue DEF Emission Control",
      subtitle: "ISO 22241 compliant 32.5% aqueous urea solution (AUS32)",
      icon: FlaskConical,
    },
  ],
};

const resultsData: Record<
  string,
  {
    name: string;
    grade: string;
    badge: string;
    benefits: string[];
    link: string;
  }[]
> = {
  "diesel-heavy": [
    {
      name: "Lubricon XtremeX CK-4 15W40",
      grade: "API CK-4 / ACEA E9",
      badge: "Euro 6 & BS6 Ready",
      benefits: [
        "Advanced soot dispersancy",
        "DPF & SCR catalytic protection",
        "Extended 60,000+ km drain intervals",
      ],
      link: "/products?cat=engine-oil&search=CK-4",
    },
    {
      name: "Lubricon UltraX CI-4 Plus 15W40",
      grade: "API CI-4 Plus / SL",
      badge: "High-Torque Turbo",
      benefits: [
        "Unmatched piston deposit control",
        "Thermal stability under severe loads",
        "Proven fleet operating savings",
      ],
      link: "/products?cat=engine-oil&search=CI-4",
    },
  ],
  transmission: [
    {
      name: "Lubricon DEX III ATF",
      grade: "General Motors Dexron IIIH",
      badge: "Smooth Shifting",
      benefits: [
        "Superior anti-shudder performance",
        "Extreme low-temperature fluidity",
        "Complete seal compatibility",
      ],
      link: "/products?cat=atf",
    },
  ],
  axle: [
    {
      name: "Lubricon HeavyGear Pro 85W140 GL-5",
      grade: "API GL-5 / MT-1",
      badge: "Extreme Pressure EP",
      benefits: [
        "Prevents hypoid gear spalling",
        "Thermal resilience under 120°C+",
        "Resists shock-load tooth shearing",
      ],
      link: "/products?cat=gear-oil",
    },
  ],
  molding: [
    {
      name: "Lubricon HydroShield AW-68",
      grade: "DIN 51524 Part 2 (HLP)",
      badge: "Zero Varnish Formula",
      benefits: [
        "Zero-varnish valve operation",
        "Superior hydrolytic stability",
        "Protects high-cycle toggle pins",
      ],
      link: "/products?cat=industrial",
    },
  ],
  "gearbox-heavy": [
    {
      name: "Lubricon GearTuff 460 / 680",
      grade: "ISO VG 460 / 680 CLP",
      badge: "Heavy Metallurgy Spec",
      benefits: [
        "High micro-pitting resistance",
        "Exceptional water separation",
        "Engineered for 24/7 furnace proximity",
      ],
      link: "/products?cat=gear-oil",
    },
  ],
  compressor: [
    {
      name: "Lubricon SynAir Compressor Fluid",
      grade: "ISO VG 46 / 68",
      badge: "8000 hr Service Life",
      benefits: [
        "Ultra-low carbon deposit tendency",
        "Fast air release & foam resistance",
        "Reduces separator maintenance",
      ],
      link: "/products?cat=industrial",
    },
  ],
  edm: [
    {
      name: "Lubricon SparkPure EDM Fluid",
      grade: "Dielectric Grade",
      badge: "Micro-Finishing Quality",
      benefits: [
        "Rapid particle settling rate",
        "High flash point & low odor",
        "Mirror-like workpiece surface finish",
      ],
      link: "/products?cat=industrial",
    },
  ],
  "rust-prevent": [
    {
      name: "Lubricon RustGuard Pro",
      grade: "Dewatering Barrier Film",
      badge: "Up to 24 Months Storage",
      benefits: [
        "Ultra-thin non-sticky film",
        "Fingerprint neutralization",
        "Easy removal with alkaline cleaner",
      ],
      link: "/products?cat=industrial",
    },
  ],
  def: [
    {
      name: "Lubricon AdBlue AUS32",
      grade: "ISO 22241 / DIN 70070",
      badge: "Pure Automotive DEF",
      benefits: [
        "99.9% catalytic SCR efficiency",
        "Prevents injector crystallization",
        "Certified urea concentration",
      ],
      link: "/products?cat=coolants",
    },
  ],
};

export default function LubricantFinder() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<
    "automotive" | "industrial" | "special" | null
  >(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleSelectCategory = (
    categoryId: "automotive" | "industrial" | "special",
  ) => {
    setSelectedCategory(categoryId);
    setIsTransitioning(true);
    // Smooth auto-transition with 280ms feedback highlight
    setTimeout(() => {
      setSelectedType(null);
      setCurrentStep(2);
      setIsTransitioning(false);
    }, 280);
  };

  const handleSelectType = (typeId: string) => {
    setSelectedType(typeId);
    setIsTransitioning(true);
    // Smooth auto-transition to recommendations
    setTimeout(() => {
      setCurrentStep(3);
      setIsTransitioning(false);
    }, 280);
  };

  const handleReset = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(1);
      setSelectedCategory(null);
      setSelectedType(null);
      setIsTransitioning(false);
    }, 180);
  };

  const currentOptions = selectedCategory ? equipmentMap[selectedCategory] : [];
  const matchedProducts = selectedType ? resultsData[selectedType] || [] : [];

  return (
    <div className="w-full">
      {/* ── STEP PROGRESS INDICATORS ── */}
      <div className="flex items-center justify-between gap-3 mb-8 pb-6 border-b border-zinc-200">
        {[
          { num: 1, label: "Application Category" },
          { num: 2, label: "Equipment Type" },
          { num: 3, label: "Recommended Formulation" },
        ].map((item) => {
          const isActive = currentStep === item.num;
          const isDone = currentStep > item.num;

          return (
            <div key={item.num} className="flex-1 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (isDone) {
                    if (item.num === 1) handleReset();
                    else if (item.num === 2) setCurrentStep(2);
                  }
                }}
                disabled={!isDone}
                className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-xs transition-all duration-300 ${
                  isDone
                    ? "bg-black text-[#ffe000] cursor-pointer hover:scale-110"
                    : isActive
                      ? "bg-[#ffe000] text-black ring-4 ring-[#ffe000]/30 shadow-md scale-105"
                      : "bg-zinc-100 text-zinc-400 border border-zinc-200 cursor-not-allowed"
                }`}
              >
                {isDone ? "✓" : item.num}
              </button>
              <div className="hidden sm:block">
                <div
                  className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive || isDone ? "text-black" : "text-zinc-400"
                  }`}
                >
                  {item.label}
                </div>
              </div>
              {item.num < 3 && (
                <div
                  className={`h-1 flex-1 rounded-full hidden md:block transition-all duration-500 ${
                    isDone ? "bg-black" : "bg-zinc-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ── STEP 1: CATEGORY SELECTION ── */}
      {currentStep === 1 && (
        <div
          className={`transition-all duration-300 ${isTransitioning ? "opacity-40 scale-[0.98]" : "opacity-100 scale-100"}`}
        >
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
              Select Application Category
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-medium">
              Choose your operating domain — we will automatically advance to
              specific equipment types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categoriesList.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedCategory === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectCategory(opt.id)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 group shadow-sm hover:shadow-lg flex flex-col justify-between border-2 ${
                    isSelected
                      ? "bg-[#ffe000] border-black scale-[1.02]"
                      : "bg-white hover:bg-[#fffde6] border-zinc-200 hover:border-[#ffe000]"
                  }`}
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors shadow-sm ${
                        isSelected
                          ? "bg-black text-[#ffe000]"
                          : "bg-black text-[#ffe000] group-hover:bg-[#ffe000] group-hover:text-black"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <h4 className="text-base font-black text-black mb-1.5">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                      {opt.subtitle}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-black uppercase tracking-wider text-black">
                    <span>
                      {isSelected
                        ? "Loading Equipment..."
                        : "Select & Continue"}
                    </span>
                    <ChevronRight
                      size={16}
                      className="transform group-hover:translate-x-1.5 transition-transform"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── STEP 2: EQUIPMENT SUB-TYPE SELECTION ── */}
      {currentStep === 2 && (
        <div
          className={`transition-all duration-300 ${isTransitioning ? "opacity-40 scale-[0.98]" : "opacity-100 scale-100"}`}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                Select Equipment / Machinery Type
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-medium">
                Click your mechanical component to immediately generate
                recommended formulations.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-xs font-bold text-zinc-700 hover:text-black transition-colors"
            >
              <RotateCcw size={12} />
              <span>← Back</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {currentOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedType === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectType(opt.id)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 group shadow-sm hover:shadow-lg flex flex-col justify-between border-2 ${
                    isSelected
                      ? "bg-[#ffe000] border-black scale-[1.02]"
                      : "bg-white hover:bg-[#fffde6] border-zinc-200 hover:border-[#ffe000]"
                  }`}
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors shadow-sm ${
                        isSelected
                          ? "bg-black text-[#ffe000]"
                          : "bg-zinc-100 group-hover:bg-[#ffe000] text-black"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <h4 className="text-base font-black text-black mb-1.5">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                      {opt.subtitle}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-black uppercase tracking-wider text-black">
                    <span>
                      {isSelected
                        ? "Matching Formulation..."
                        : "View Formulations"}
                    </span>
                    <ArrowRight
                      size={16}
                      className="transform group-hover:translate-x-1.5 transition-transform text-black"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── STEP 3: MATCHED LUBRICON RECOMMENDATIONS ── */}
      {currentStep === 3 && (
        <div
          className={`transition-all duration-300 ${isTransitioning ? "opacity-40 scale-[0.98]" : "opacity-100 scale-100"}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-black uppercase tracking-wider mb-1">
                <CheckCircle2 size={16} className="text-[#ffe000] fill-black" />
                <span>Formulations Match Found</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                Recommended Lubricon Formulations
              </h3>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-300 hover:border-black text-xs font-bold text-zinc-700 hover:text-black transition-all self-start sm:self-auto shadow-sm"
            >
              <RotateCcw size={13} />
              <span>Change Criteria</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {matchedProducts.map((prod, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-[#ffe000] shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="bg-[#ffe000] text-black font-extrabold text-[11px] uppercase px-3 py-1 rounded-full shadow-sm">
                      {prod.badge}
                    </span>
                    <span className="bg-black text-[#ffe000] font-black text-[11px] uppercase px-3 py-1 rounded-full">
                      {prod.grade}
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-black mb-2">
                    {prod.name}
                  </h4>

                  <ul className="space-y-2 mb-6">
                    {prod.benefits.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 text-xs font-medium text-zinc-700"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-black flex-shrink-0 mt-0.5"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center gap-3">
                  <Link
                    href={prod.link}
                    className="flex-1 py-2.5 bg-black hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-full text-center transition shadow flex items-center justify-center gap-1.5"
                  >
                    <span>View Specs</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a
                    href="tel:18005696363"
                    className="py-2.5 px-4 bg-[#ffe000] hover:bg-[#fff04d] text-black font-extrabold text-xs uppercase rounded-full transition shadow flex items-center justify-center gap-1.5"
                  >
                    <Phone size={13} />
                    <span className="hidden sm:inline">Quote</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Expert Technical Support Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-[#ffe000] shadow-lg">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#ffe000] text-black flex items-center justify-center font-bold flex-shrink-0 shadow">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#ffe000]">
                  Need Custom OEM Formulations or Laboratory Oil Analysis?
                </div>
                <div className="text-xs text-zinc-300">
                  Speak directly with our Indian field application engineers.
                </div>
              </div>
            </div>

            <a
              href="tel:18005696363"
              className="py-2.5 px-6 bg-[#ffe000] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-full transition shadow-md whitespace-nowrap"
            >
              Call 1800 569 6363
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
