import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Globe, Award, Shield, Zap, ArrowRight } from 'lucide-react';
import CallbackSection from '@/components/CallbackSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Lubricon Specialities India — our story, Australian technology partnership, product quality standards, and commitment to Indian industry.',
};

const milestones = [
  { year: '2014', title: 'Founded', description: 'Lubricon Specialities India established with exclusive Australian technology license.' },
  { year: '2016', title: 'First Industrial Clients', description: 'Started supplying premium lubricants to manufacturing units across North India.' },
  { year: '2019', title: 'Pan-India Expansion', description: 'Distribution network expanded to 15+ states with regional technical support.' },
  { year: '2022', title: 'AdBlue/DEF Launch', description: 'Launched ISO 22241-compliant AdBlue for India\'s Euro 6 emission transition.' },
  { year: '2024', title: '500+ Clients', description: 'Reached milestone of 500+ satisfied industrial and automotive clients.' },
  { year: '2025', title: 'CK-4 Range Introduced', description: 'Launched latest-generation API CK-4 and ACEA E9 diesel engine oil range.' },
];

const values = [
  {
    icon: <Globe size={28} className="text-amber-400" />,
    title: 'Australian Technology',
    description: 'Our formulations are rooted in advanced R&D from Australia, bringing global lubrication science to Indian industry.',
  },
  {
    icon: <Shield size={28} className="text-amber-400" />,
    title: 'Uncompromising Quality',
    description: 'Every batch is quality-checked against stringent API, ISO, and OEM specifications before reaching our customers.',
  },
  {
    icon: <Zap size={28} className="text-amber-400" />,
    title: 'Application Excellence',
    description: 'We don\'t just sell lubricants — we provide complete lubrication solutions tailored to each customer\'s unique needs.',
  },
  {
    icon: <Award size={28} className="text-amber-400" />,
    title: 'Customer First',
    description: 'Our dedicated technical support ensures you always have expert guidance at every stage — from selection to application.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="orb orb-amber w-96 h-96 -top-48 right-0 opacity-[0.10]" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-tag">About Us</div>
              <h1 className="section-heading text-white mb-6">
                Redefining <span className="gradient-text">Lubrication</span>{' '}
                for Indian Industry
              </h1>
              <p className="text-slate-300 leading-relaxed mb-5">
                At Lubricon Specialities India, we are redefining performance, reliability, and
                innovation in lubrication solutions. Backed by advanced Australian technology,
                Lubricon brings to the Indian industry a comprehensive range of speciality and
                conventional lubricants engineered for modern industrial and automotive demands.
              </p>
              <p className="text-slate-400 leading-relaxed mb-5 text-sm">
                With exclusive rights to represent the Lubricon brand in India, Lubricon Specialities
                India operates independently, delivering international-quality products tailored for
                Indian operating conditions. Our formulations are driven by deep technical know-how,
                field-tested performance, and a commitment to operational efficiency.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Whether it&apos;s High-performance Greases, Metalworking Fluids, or Industrial-grade
                Oils, our solutions are trusted by leading Manufacturers, Workshops, and Engineering
                units across the country. At Lubricon, we don&apos;t just sell lubricants — we enable
                uptime, protect assets, and help you run smoother.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/aboutlubricon.jpeg"
                  alt="Lubricon Specialities India about page"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/50 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 glass rounded-2xl px-5 py-4 border border-amber-500/20">
                <div className="text-3xl font-black gradient-text">🇦🇺 Tech</div>
                <div className="text-slate-400 text-xs">Australian Partnership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gradient py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">Our Values</div>
            <h2 className="section-heading text-white mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range Summary */}
      <section className="py-20 bg-navy-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">Our Range</div>
            <h2 className="section-heading text-white mb-4">
              Complete <span className="gradient-text">Lubrication Portfolio</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🛢️', title: 'Engine Oils', items: ['CK-4, CI-4 Plus, CI-4, CH-4, CF-4', 'SAE 15W40 multigrade range', 'API-certified performance grades'] },
              { icon: '⚙️', title: 'Gear Oils', items: ['Automotive GL-5: 80W90, 85W140', 'Industrial EP: VG 100 to 680', 'Hypoid, worm, and spur gear formulations'] },
              { icon: '🔄', title: 'ATF & Transmission', items: ['Dexron III ATF', 'ATF Type A for power steering', 'Smooth shifting & seal protection'] },
              { icon: '🏭', title: 'Industrial Specialities', items: ['Vacuum Pump Oil VaccuSyn 100', 'Compressor Oil ISO VG 32–150', 'EDM Spark Erosion Oil', 'RustGuard Pro Rust Preventive'] },
              { icon: '💧', title: 'DEF & Brake Fluids', items: ['ISO 22241 AdBlue 32.5% (AUS32)', 'DOT 3 & DOT 4 Brake Fluid', 'Euro 4/5/6 SCR compliance'] },
              { icon: '🔬', title: 'Specialty Products', items: ['Custom formulations available', 'OEM recommendation compliance', 'Technical data sheets provided'] },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <CheckCircle size={13} className="text-amber-400 flex-shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-gradient py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag">Our Journey</div>
            <h2 className="section-heading text-white mb-4">
              A Decade of <span className="gradient-text">Excellence</span>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/60 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`relative flex gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-navy-900 flex-shrink-0 mt-1" />
                  {/* Content */}
                  <div className={`glass-card rounded-xl p-5 flex-1 ml-16 md:ml-0 ${i % 2 === 1 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'}`}>
                    <span className="badge badge-amber mb-2">{m.year}</span>
                    <h3 className="text-white font-bold mb-1">{m.title}</h3>
                    <p className="text-slate-400 text-sm">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Callback Section */}
      <CallbackSection />
    </>
  );
}
