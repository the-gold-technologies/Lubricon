import { Industry, Stat } from '@/types';

export const industries: Industry[] = [
  {
    id: 'plastic-injection-molding',
    name: 'Plastic Injection Molding',
    icon: '🏭',
    image: '/images/ind-plastic.png',
    description:
      'Precision lubrication solutions for injection molding machines requiring extreme cleanliness, non-staining properties, and excellent thermal stability under high-pressure cycles.',
    challenges: [
      'High-temperature hydraulic system stability',
      'Risk of plastic contamination from lubricant carryover',
      'Demanding cycle loads on tie bars and guides',
      'Frequent screw and barrel wear',
    ],
    solutions: [
      'Food-grade compatible hydraulic oils',
      'High-temperature greases for tie-bar lubrication',
      'Anti-wear gear oils for gearbox protection',
      'Non-staining rust preventives for mold storage',
    ],
    recommendedProducts: ['geartuff-460', 'rustguard-pro', 'compressor-oil'],
  },
  {
    id: 'paper-mills',
    name: 'Paper Mills',
    icon: '📄',
    image: '/images/ind-paper.png',
    description:
      'Lubrication solutions for the highly demanding wet, high-temperature, and contamination-prone paper manufacturing environment. Our products resist washout, emulsification, and support continuous operation.',
    challenges: [
      'Constant water and steam exposure causing lubricant washout',
      'High-speed bearings in dryer sections',
      'Risk of product contamination in food-grade paper production',
      'Large industrial gearbox loads in pulp digesters',
    ],
    solutions: [
      'Water-resistant EP gear oils for wet sections',
      'High-temperature dryer section lubricants',
      'Industrial gear oil EP range for pulp digesters',
      'Anti-corrosion protection for seasonal shutdowns',
    ],
    recommendedProducts: ['geartuff-680', 'geartuff-460', 'rustguard-pro'],
  },
  {
    id: 'steel-plants',
    name: 'Steel Plants',
    icon: '⚙️',
    image: '/images/ind-steel.png',
    description:
      'Heavy-duty lubrication engineered for the extreme heat, heavy loads, and contamination challenges of rolling mills, continuous casting, and blast furnace operations.',
    challenges: [
      'Ultra-high loads on rolling mill gearboxes',
      'Extreme temperature swings from furnace proximity',
      'Water and scale contamination in wet sections',
      'Electrical isolation requirements for certain equipment',
    ],
    solutions: [
      'Ultra-high viscosity EP gear oils for roll drives',
      'Fire-resistant hydraulic fluids for furnace areas',
      'High-load bearing greases for caster rolls',
      'EDM oils for precision tool manufacture on-site',
    ],
    recommendedProducts: ['geartuff-680', 'geartuff-460', 'edm-oil'],
  },
  {
    id: 'automotive-fleet',
    name: 'Automotive & Fleet Transport',
    icon: '🚛',
    description:
      'Complete lubricant range for fleet operators managing mixed diesel fleets, buses, tippers, and tractor-trailers across diverse Indian road and climate conditions.',
    challenges: [
      'High-mileage engine wear under load',
      'Extended oil drain intervals for cost savings',
      'Mixed fleet requiring multiple oil grades',
      'Regulatory compliance for Euro emission norms',
    ],
    solutions: [
      'CK-4 premium diesel engine oils for latest engines',
      'Full product range from CF-4 to CK-4',
      'AdBlue DEF for SCR-equipped Euro 5/6 vehicles',
      'Transmission oils for manual and automatic gearboxes',
    ],
    recommendedProducts: ['ck4-15w40', 'ci4plus-15w40', 'adblue-def', 'atf-dex3'],
  },
  {
    id: 'precision-engineering',
    name: 'Precision Engineering',
    icon: '🔧',
    description:
      'Specialty fluids and lubricants for precision machining, tool room operations, and high-accuracy manufacturing where contamination control and surface finish are critical.',
    challenges: [
      'Ultra-precise surface finish requirements',
      'EDM process dielectric fluid purity',
      'Tool life extension in hard material machining',
      'Rust prevention for precision parts during storage',
    ],
    solutions: [
      'EDM dielectric oil for spark erosion',
      'High-performance rust preventives for tooling',
      'Compressor oils for precision air tools',
      'Vacuum pump oils for packaging and testing equipment',
    ],
    recommendedProducts: ['edm-oil', 'rustguard-pro', 'vaccusyn-100', 'compressor-oil'],
  },
];

export const stats: Stat[] = [
  { label: 'Products', value: 40, suffix: '+' },
  { label: 'Happy Clients', value: 500, suffix: '+' },
  { label: 'Industry Experts', value: 50, suffix: '+' },
  { label: 'Years of Excellence', value: 10, suffix: '+' },
];

export const whyChooseUs = [
  {
    icon: '🇦🇺',
    title: 'Australian Technology',
    description:
      'Backed by cutting-edge Australian lubrication technology, our formulations represent global best practices adapted for Indian conditions.',
  },
  {
    icon: '🔬',
    title: 'Advanced R&D',
    description:
      'Continuous research and development ensures our products meet the latest international standards and OEM requirements.',
  },
  {
    icon: '🛡️',
    title: 'Proven Protection',
    description:
      'Field-tested across demanding industrial and automotive applications throughout India — trusted by leading manufacturers.',
  },
  {
    icon: '🌱',
    title: 'Eco-Conscious',
    description:
      'Our AdBlue DEF and low-emission formulations help customers meet India\'s tightening environmental and emission standards.',
  },
  {
    icon: '⚡',
    title: 'Maximize Uptime',
    description:
      'Our lubricants extend drain intervals, reduce equipment wear, and help you eliminate costly unplanned downtime.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    description:
      'Our technical team provides personalized lubrication recommendations and after-sales support for every application.',
  },
];
