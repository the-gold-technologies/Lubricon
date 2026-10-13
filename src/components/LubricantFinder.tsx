"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Factory,
  FlaskConical,
  Truck,
  Settings,
  Gauge,
  Wind,
  ShieldCheck,
  ArrowRight,
  RotateCcw,
  Phone,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface FinderRecommendation {
  name: string;
  grade?: string;
  badge?: string;
  benefits?: string[];
  link?: string;
}

export interface FinderEquipment {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  recommendations?: FinderRecommendation[];
}

export interface FinderCategory {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  equipment?: FinderEquipment[];
}

export interface LubricantFinderProps {
  categories?: FinderCategory[];
  step1Title?: string;
  step1Subtitle?: string;
  step2Title?: string;
  step2Subtitle?: string;
  step3Badge?: string;
  step3Title?: string;
  resetBtnText?: string;
  helplinePrompt?: string;
  helplineText?: string;
  tollFree?: string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Truck,
  Factory,
  FlaskConical,
  Settings,
  Gauge,
  Wind,
  Sparkles,
  ShieldCheck,
};

export default function LubricantFinder({
  categories = [],
  step1Title,
  step1Subtitle,
  step2Title,
  step2Subtitle,
  step3Badge,
  step3Title,
  resetBtnText,
  helplinePrompt,
  helplineText,
  tollFree,
}: LubricantFinderProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Dynamic Categories from CMS
  const categoriesList = categories.map((c) => ({
    id: c.id,
    title: c.title,
    subtitle: c.subtitle,
    icon: (c.icon && ICON_MAP[c.icon]) ? ICON_MAP[c.icon] : Settings,
  }));

  // Dynamic Equipment & Recommendations Map from CMS
  const equipmentMap: Record<
    string,
    Array<{ id: string; title: string; subtitle?: string; icon: LucideIcon }>
  > = {};
  const resultsData: Record<string, FinderRecommendation[]> = {};

  categories.forEach((cat) => {
    equipmentMap[cat.id] = (cat.equipment || []).map((eq) => ({
      id: eq.id,
      title: eq.title,
      subtitle: eq.subtitle,
      icon: (eq.icon && ICON_MAP[eq.icon]) ? ICON_MAP[eq.icon] : Settings,
    }));

    (cat.equipment || []).forEach((eq) => {
      resultsData[eq.id] = eq.recommendations || [];
    });
  });

  const handleSelectCategory = (categoryId: string) => {
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

  const currentOptions = selectedCategory
    ? equipmentMap[selectedCategory] || []
    : [];
  const matchedProducts = selectedType ? resultsData[selectedType] || [] : [];

  if (!categories || categories.length === 0) {
    return null;
  }

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
            {step1Title && (
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                {step1Title}
              </h3>
            )}
            {step1Subtitle && (
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-medium">
                {step1Subtitle}
              </p>
            )}
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
                    {opt.subtitle && (
                      <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                        {opt.subtitle}
                      </p>
                    )}
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
              {step2Title && (
                <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                  {step2Title}
                </h3>
              )}
              {step2Subtitle && (
                <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-medium">
                  {step2Subtitle}
                </p>
              )}
            </div>
            {resetBtnText && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-xs font-bold text-zinc-700 hover:text-black transition-colors"
              >
                <RotateCcw size={12} />
                <span>← Back</span>
              </button>
            )}
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
                    {opt.subtitle && (
                      <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                        {opt.subtitle}
                      </p>
                    )}
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
              {step3Badge && (
                <div className="inline-flex items-center gap-1.5 text-xs font-black text-black uppercase tracking-wider mb-1">
                  <CheckCircle2 size={16} className="text-[#ffe000] fill-black" />
                  <span>{step3Badge}</span>
                </div>
              )}
              {step3Title && (
                <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                  {step3Title}
                </h3>
              )}
            </div>

            {resetBtnText && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-300 hover:border-black text-xs font-bold text-zinc-700 hover:text-black transition-all self-start sm:self-auto shadow-sm"
              >
                <RotateCcw size={13} />
                <span>{resetBtnText}</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {matchedProducts.map((prod, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-[#ffe000] shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    {prod.badge && (
                      <span className="bg-[#ffe000] text-black font-extrabold text-[11px] uppercase px-3 py-1 rounded-full shadow-sm">
                        {prod.badge}
                      </span>
                    )}
                    {prod.grade && (
                      <span className="bg-black text-[#ffe000] font-black text-[11px] uppercase px-3 py-1 rounded-full">
                        {prod.grade}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-black text-black mb-2">
                    {prod.name}
                  </h4>

                  {prod.benefits && prod.benefits.length > 0 && (
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
                  )}
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center gap-3">
                  {prod.link && (
                    <Link
                      href={prod.link}
                      className="flex-1 py-2.5 bg-black hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-full text-center transition shadow flex items-center justify-center gap-1.5"
                    >
                      <span>View Specs</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}

                  {tollFree && (
                    <a
                      href={`tel:${tollFree.replace(/\s+/g, "")}`}
                      className="py-2.5 px-4 bg-[#ffe000] hover:bg-[#fff04d] text-black font-extrabold text-xs uppercase rounded-full transition shadow flex items-center justify-center gap-1.5"
                    >
                      <Phone size={13} />
                      <span className="hidden sm:inline">Quote</span>
                    </a>
                  )}
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
                {helplinePrompt && (
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ffe000]">
                    {helplinePrompt}
                  </div>
                )}
                {helplineText && (
                  <div className="text-xs text-zinc-300">
                    {helplineText}
                  </div>
                )}
              </div>
            </div>

            {tollFree && (
              <a
                href={`tel:${tollFree.replace(/\s+/g, "")}`}
                className="py-2.5 px-6 bg-[#ffe000] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-full transition shadow-md whitespace-nowrap"
              >
                Call {tollFree}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
