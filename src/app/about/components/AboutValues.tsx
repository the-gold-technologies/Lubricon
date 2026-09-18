import { Globe, Shield, Zap, Award } from 'lucide-react';

const values = [
  {
    icon: <Globe size={26} className="text-black" />,
    title: 'Australian Technology',
    description:
      'Formulations rooted in Australian R&D, tailored and field-tested specifically for harsh Indian industrial environments.',
  },
  {
    icon: <Shield size={26} className="text-black" />,
    title: 'Uncompromising Quality',
    description:
      'Every batch undergoes rigorous quality testing adhering to international API, ISO 9001:2015, and OEM standards.',
  },
  {
    icon: <Zap size={26} className="text-black" />,
    title: 'Equipment Protection',
    description:
      'Designed to reduce friction, minimize heat, resist oxidation, and deliver extended drain intervals for peak machine uptime.',
  },
  {
    icon: <Award size={26} className="text-black" />,
    title: 'Application Excellence',
    description:
      'We do not just sell lubricants — our technical engineering team provides custom lubrication audits and expert consultation.',
  },
];

export default function AboutValues() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-extrabold text-xs uppercase px-3.5 py-1 rounded-full mb-3 shadow-sm tracking-wider">
            <span>Our Principles</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
            What We Stand For
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-medium mt-3">
            Core commitments driving every barrel of lubricant formulated under the Lubricon standard.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-[#ffe000] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#ffe000] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm">
                {v.icon}
              </div>
              <h3 className="text-lg font-black text-black mb-2 tracking-tight">
                {v.title}
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
