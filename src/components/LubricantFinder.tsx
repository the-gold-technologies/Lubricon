'use client';

import { useState } from 'react';
import { ChevronRight, Zap } from 'lucide-react';

const steps = [
  {
    id: 'use',
    question: 'What is the primary use?',
    options: [
      { value: 'automotive', label: '🚗 Automotive / Vehicle' },
      { value: 'industrial', label: '🏭 Industrial Machinery' },
      { value: 'special', label: '🔬 Specialist Application' },
    ],
  },
  {
    id: 'type',
    question: 'Select equipment type:',
    options: {
      automotive: [
        { value: 'diesel-heavy', label: '🚛 Heavy Diesel (Truck/Bus)' },
        { value: 'diesel-light', label: '🚐 Light Diesel Vehicle' },
        { value: 'petrol', label: '🚗 Petrol Car' },
        { value: 'transmission', label: '🔄 Automatic Gearbox / Steering' },
        { value: 'axle', label: '⚙️ Differential / Axle' },
      ],
      industrial: [
        { value: 'gearbox-light', label: '⚙️ Light Industrial Gearbox' },
        { value: 'gearbox-heavy', label: '⚙️ Heavy Industrial Gearbox (Steel/Paper)' },
        { value: 'compressor', label: '💨 Air Compressor' },
        { value: 'vacuum', label: '🌀 Vacuum Pump' },
      ],
      special: [
        { value: 'edm', label: '⚡ EDM / Spark Erosion Machine' },
        { value: 'rust-prevent', label: '🛡️ Rust Prevention & Storage' },
        { value: 'def', label: '🌿 SCR/AdBlue DEF (Emission Control)' },
        { value: 'brake', label: '🛑 Brake / Clutch Hydraulic' },
      ],
    },
  },
];

const recommendations: Record<string, { name: string; grade: string; why: string }[]> = {
  'diesel-heavy': [
    { name: 'Lubricon XtremeX CK-4 15W40', grade: 'API CK-4', why: 'Latest generation oil for Euro 6 and modern HDDE engines with DPF/EGR.' },
    { name: 'Lubricon UltraX CI-4 Plus 15W40', grade: 'API CI-4+', why: 'Excellent for older turbocharged heavy diesels requiring CI-4 Plus spec.' },
  ],
  'diesel-light': [
    { name: 'Lubricon TurboX CI-4 15W40', grade: 'API CI-4', why: 'Reliable protection for light commercial diesel vehicles and pickups.' },
    { name: 'Lubricon MultiX 20W40', grade: 'API SJ/CF', why: 'Versatile and economical for older light diesel engines.' },
  ],
  petrol: [
    { name: 'Lubricon MultiX 20W40', grade: 'API SJ/CF', why: 'Proven multigrade protection for petrol cars and passenger vehicles.' },
  ],
  transmission: [
    { name: 'Lubricon DEX III ATF', grade: 'Dexron III', why: 'Proven ATF for automatic gearboxes and hydraulic power steering.' },
    { name: 'Lubricon ATF Type A', grade: 'ATF Type A', why: 'Ideal for older vehicles requiring ATF Type A specification.' },
  ],
  axle: [
    { name: 'Lubricon GearShield Pro 80W90 GL-5', grade: 'GL-5', why: 'Superior EP protection for hypoid axles, differentials, and transfer boxes.' },
    { name: 'Lubricon HeavyGear Pro 85W140 GL-5', grade: 'GL-5', why: 'For very high-load rear axles on heavy trucks and off-highway machines.' },
  ],
  'gearbox-light': [
    { name: 'Lubricon GearTuff 100/220/320', grade: 'ISO VG 100–320', why: 'CLP gear oil range for light to medium enclosed industrial gearboxes.' },
  ],
  'gearbox-heavy': [
    { name: 'Lubricon GearTuff 460', grade: 'ISO VG 460', why: 'For high-load, slow-speed gearboxes in steel mills and paper plants.' },
    { name: 'Lubricon GearTuff 680', grade: 'ISO VG 680', why: 'Ultra-heavy EP oil for the most demanding steel and cement gearboxes.' },
  ],
  compressor: [
    { name: 'Lubricon Compressor Oil', grade: 'ISO VG 32–150', why: 'Excellent for rotary screw, vane, and reciprocating air compressors.' },
  ],
  vacuum: [
    { name: 'Lubricon VaccuSyn 100', grade: 'ISO VG 100', why: 'Deep vacuum-rated oil with very low vapor pressure for rotary vane pumps.' },
  ],
  edm: [
    { name: 'Lubricon EDM Oil', grade: 'ISO VG 3–5', why: 'High dielectric purity fluid for wire and die-sink EDM machining.' },
  ],
  'rust-prevent': [
    { name: 'Lubricon RustGuard Pro', grade: 'Rust Preventive', why: 'Transparent non-staining film for long-term metal component protection.' },
  ],
  def: [
    { name: 'Lubricon AdBlue / DEF', grade: 'ISO 22241', why: '32.5% pure urea solution for SCR emission control — Euro 4/5/6 compliant.' },
  ],
  brake: [
    { name: 'Lubricon Brake Fluid DOT 3/4', grade: 'DOT 3 / DOT 4', why: 'High boiling point glycol-based fluid for all hydraulic braking systems.' },
  ],
};

export default function LubricantFinder() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const currentStep = steps[step];
  const options = step === 0
    ? (currentStep.options as { value: string; label: string }[])
    : (currentStep.options as Record<string, { value: string; label: string }[]>)[selections[0]] || [];

  const handleSelect = (value: string) => {
    if (step === 0) {
      setSelections([value]);
      setStep(1);
    } else {
      setSelections([selections[0], value]);
      setResult(value);
      setStep(2);
    }
  };

  const reset = () => {
    setStep(0);
    setSelections([]);
    setResult(null);
  };

  const recs = result ? recommendations[result] || [] : [];

  return (
    <div className="glass rounded-2xl p-6 md:p-8">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              step > i ? 'bg-amber-400' : step === i ? 'bg-amber-500/60' : 'bg-white/10'
            }`}
          />
        ))}
      </div>

      {step < 2 ? (
        <>
          <div className="flex items-center gap-2 mb-5">
            <Zap size={16} className="text-amber-400" />
            <h3 className="text-white font-semibold">{currentStep.question}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className="flex items-center gap-3 p-4 bg-navy-800/50 border border-white/10 rounded-xl text-left text-slate-200 text-sm font-medium hover:border-amber-500/40 hover:bg-amber-500/5 hover:text-amber-200 transition-all group"
              >
                <span className="text-xl">{opt.label.split(' ')[0]}</span>
                <span>{opt.label.slice(opt.label.indexOf(' ') + 1)}</span>
                <ChevronRight size={14} className="ml-auto text-slate-500 group-hover:text-amber-400 transition-colors" />
              </button>
            ))}
          </div>
          {step > 0 && (
            <button onClick={reset} className="mt-4 text-slate-400 text-sm hover:text-amber-400 transition-colors">
              ← Start over
            </button>
          )}
        </>
      ) : (
        <div className="animate-slide-up">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-2xl">✅</span>
            <h3 className="text-white font-semibold">Recommended Lubricon Products</h3>
          </div>
          {recs.length === 0 ? (
            <p className="text-slate-400 text-sm">
              Please contact our technical team for a custom recommendation.
            </p>
          ) : (
            <div className="space-y-4">
              {recs.map((rec, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-xl p-4"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-amber-300 font-bold text-sm">{rec.name}</h4>
                    <span className="badge badge-amber flex-shrink-0">{rec.grade}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{rec.why}</p>
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-3 mt-6">
            <a href="tel:18005696363" className="btn-primary text-sm py-2.5 px-5">
              Get a Quote
            </a>
            <button onClick={reset} className="btn-outline text-sm py-2.5 px-5">
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
