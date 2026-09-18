import { Product } from '@/types';

export const products: Product[] = [
  // ENGINE OILS
  {
    id: 'ck4-15w40',
    name: 'Lubricon XtremeX CK-4 15W40',
    slug: 'lubricon-xtremex-ck4-15w40',
    category: 'engine-oil',
    subcategory: 'CK4 Engine Oils',
    description:
      'Premium heavy-duty diesel engine oil formulated for modern engines requiring CK-4 performance. Advanced additive package provides exceptional oxidation stability, shear stability, and wear protection even under severe operating conditions.',
    features: [
      'Meets API CK-4 specification',
      'Superior oxidation resistance',
      'Excellent soot handling capability',
      'Extended drain intervals',
      'Compatible with DPF and EGR systems',
    ],
    applications: [
      'Modern turbocharged diesel engines',
      'Heavy-duty trucks and buses',
      'Construction and mining equipment',
      'Agricultural machinery',
    ],
    specifications: {
      viscosity: 'SAE 15W40',
      grade: 'API CK-4',
      standard: 'ACEA E9',
      packaging: ['1L', '4L', '10L', '20L', '210L'],
    },
    badge: 'Latest Grade',
    featured: true,
  },
  {
    id: 'ci4plus-15w40',
    name: 'Lubricon UltraX CI-4 Plus 15W40',
    slug: 'lubricon-ultrax-ci4-plus-15w40',
    category: 'engine-oil',
    subcategory: 'CI4 Plus Engine Oils',
    description:
      'High-performance CI-4 Plus diesel engine oil engineered for pre-emission and low-emission diesel engines. Provides outstanding protection for EGR-equipped engines.',
    features: [
      'API CI-4 Plus certification',
      'Enhanced EGR protection',
      'Superior viscosity stability',
      'Excellent deposit control',
    ],
    applications: [
      'EGR-equipped diesel engines',
      'High-mileage trucks',
      'Fleet vehicles',
    ],
    specifications: {
      viscosity: 'SAE 15W40',
      grade: 'API CI-4 Plus',
      packaging: ['1L', '4L', '10L', '20L', '210L'],
    },
  },
  {
    id: 'ci4-15w40',
    name: 'Lubricon TurboX CI-4 15W40',
    slug: 'lubricon-turbox-ci4-15w40',
    category: 'engine-oil',
    subcategory: 'CI4 Engine Oils',
    description:
      'Robust CI-4 grade engine oil for turbocharged diesel engines. Exceptional performance in extreme temperature cycles and heavy loads.',
    features: [
      'API CI-4 specification',
      'Excellent thermal stability',
      'High TBN for acid neutralization',
      'Anti-wear additive technology',
    ],
    applications: ['Turbo diesel engines', 'Commercial transport', 'Mining'],
    specifications: {
      viscosity: 'SAE 15W40',
      grade: 'API CI-4',
      packaging: ['1L', '4L', '10L', '20L', '210L'],
    },
  },
  {
    id: 'ch4-15w40',
    name: 'Lubricon HyperX CH-4 15W40',
    slug: 'lubricon-hyperx-ch4-15w40',
    category: 'engine-oil',
    subcategory: 'CH4 Engine Oils',
    description:
      'Proven CH-4 diesel engine oil offering reliable protection for older generation diesel engines. Cost-effective without compromising performance.',
    features: [
      'API CH-4 specification',
      'Good wear protection',
      'Effective soot dispersion',
      'Wide temperature range',
    ],
    applications: ['Older diesel engines', 'Agricultural tractors', 'Generators'],
    specifications: {
      viscosity: 'SAE 15W40',
      grade: 'API CH-4',
      packaging: ['1L', '4L', '10L', '20L', '210L'],
    },
  },
  {
    id: 'cf4-15w40',
    name: 'Lubricon SupremeX CF-4 15W40',
    slug: 'lubricon-supremex-cf4-15w40',
    category: 'engine-oil',
    subcategory: 'CF4 Engine Oils',
    description:
      'CF-4 grade multi-purpose diesel engine oil suitable for a wide range of diesel applications requiring conventional technology.',
    features: [
      'API CF-4 specification',
      'Reliable engine protection',
      'Good oxidation stability',
    ],
    applications: ['Light commercial diesel', 'Older vehicle fleets', 'Stationary engines'],
    specifications: {
      viscosity: 'SAE 15W40',
      grade: 'API CF-4',
      packaging: ['1L', '4L', '10L', '20L', '210L'],
    },
  },
  {
    id: 'multigrade',
    name: 'Lubricon MultiX 20W40',
    slug: 'lubricon-multix-20w40',
    category: 'engine-oil',
    subcategory: 'Multigrade Engine Oils',
    description:
      'Versatile multigrade engine oil for petrol and diesel engines. Suitable for passenger cars, light commercial vehicles, and vintage vehicles.',
    features: [
      'Multi-purpose formulation',
      'Good cold start performance',
      'Effective engine cleanliness',
    ],
    applications: ['Passenger cars', 'Light commercial vehicles', 'Vintage vehicles'],
    specifications: {
      viscosity: 'SAE 20W40',
      grade: 'API SJ/CF',
      packaging: ['1L', '4L', '10L', '20L'],
    },
    featured: true,
  },

  // GEAR OILS
  {
    id: 'gearshield-80w90-gl5',
    name: 'Lubricon GearShield Pro 80W90 GL-5',
    slug: 'lubricon-gearshield-pro-80w90-gl5',
    category: 'gear-oil',
    subcategory: 'Automotive Gear Oils - 80W90',
    description:
      'High-performance GL-5 gear oil engineered for hypoid gears in axles and differentials. Provides maximum protection against shock loads and extreme pressure.',
    features: [
      'API GL-5 specification',
      'Superior EP protection',
      'Excellent thermal stability',
      'Foam-free operation',
      'Compatible with yellow metals',
    ],
    applications: ['Rear axles', 'Differentials', 'Transfer boxes', 'Manual gearboxes'],
    specifications: {
      viscosity: 'SAE 80W90',
      grade: 'API GL-5',
      packaging: ['1L', '4L', '10L', '20L', '210L'],
    },
    badge: 'Best Seller',
    featured: true,
  },
  {
    id: 'heavygear-85w140-gl5',
    name: 'Lubricon HeavyGear Pro 85W140 GL-5',
    slug: 'lubricon-heavygear-pro-85w140-gl5',
    category: 'gear-oil',
    subcategory: 'Automotive Gear Oils - 85W140',
    description:
      'Extra-heavy-duty GL-5 gear oil for high-load, high-temperature axle and differential applications. Ideal for loaded trucks and off-highway equipment.',
    features: ['API GL-5 specification', 'Very high viscosity index', 'Outstanding load carrying'],
    applications: ['Heavy truck axles', 'Mining equipment', 'Off-highway vehicles'],
    specifications: {
      viscosity: 'SAE 85W140',
      grade: 'API GL-5',
      packaging: ['4L', '20L', '210L'],
    },
  },
  {
    id: 'geartuff-680',
    name: 'Lubricon GearTuff 680',
    slug: 'lubricon-geartuff-680',
    category: 'gear-oil',
    subcategory: 'Heavy Duty Industrial Gear Oils',
    description:
      'Premium industrial EP gear oil for enclosed gear sets, worm gears, and industrial gearboxes under severe operating conditions.',
    features: [
      'ISO VG 680 viscosity',
      'Extreme pressure additives',
      'Anti-wear, anti-foam, anti-corrosion',
      'Long service life',
    ],
    applications: ['Steel mills', 'Paper mills', 'Cement plants', 'Industrial gearboxes'],
    specifications: {
      viscosity: 'ISO VG 680',
      grade: 'API GL-4',
      standard: 'DIN 51517 Part 3 CLP',
      packaging: ['20L', '210L'],
    },
    badge: 'Industrial Grade',
  },
  {
    id: 'geartuff-460',
    name: 'Lubricon GearTuff 460',
    slug: 'lubricon-geartuff-460',
    category: 'gear-oil',
    subcategory: 'Heavy Duty Industrial Gear Oils',
    description: 'Industrial EP gear oil ISO VG 460 for high-load slow-speed gearboxes and enclosed gear sets.',
    features: ['ISO VG 460', 'EP additives', 'Anti-wear protection'],
    applications: ['Conveyor drives', 'Steel plant gearboxes', 'Mixers'],
    specifications: {
      viscosity: 'ISO VG 460',
      grade: 'API GL-4',
      packaging: ['20L', '210L'],
    },
  },
  {
    id: 'geartuff-100-320',
    name: 'Lubricon GearTuff 100/150/220/320',
    slug: 'lubricon-geartuff-100150220320',
    category: 'gear-oil',
    subcategory: 'Heavy Duty Industrial Gear Oils',
    description:
      'Range of industrial EP gear oils covering ISO VG 100 through 320 for diverse enclosed gearbox applications.',
    features: ['Multiple viscosity grades', 'EP protection', 'Multi-industry application'],
    applications: ['Light gearboxes', 'Conveyor systems', 'Packaging machinery'],
    specifications: {
      viscosity: 'ISO VG 100, 150, 220, 320',
      grade: 'API GL-4',
      packaging: ['20L', '210L'],
    },
  },

  // ATF / TRANSMISSION
  {
    id: 'atf-dex3',
    name: 'Lubricon DEX III (ATF)',
    slug: 'lubricon-dex-iii',
    category: 'atf',
    subcategory: 'Automatic Transmission Fluid',
    description:
      'Dexron III compatible automatic transmission fluid for older automatic gearboxes and power steering systems requiring this specification.',
    features: [
      'Dexron III compatible',
      'Excellent friction durability',
      'Good low-temperature fluidity',
      'Prevents seal leakage',
    ],
    applications: ['Automatic transmissions', 'Power steering', 'Torque converters'],
    specifications: {
      grade: 'Dexron III',
      packaging: ['1L', '4L', '20L'],
    },
    badge: 'ATF',
    featured: true,
  },
  {
    id: 'atf-type-a',
    name: 'Lubricon ATF Type A',
    slug: 'lubricon-atf-a',
    category: 'atf',
    subcategory: 'Steering Oil',
    description:
      'High-quality ATF Type A for power steering systems and older automatic transmissions requiring Type A suffix A specification.',
    features: ['ATF Type A specification', 'Excellent anti-wear', 'Low foaming'],
    applications: ['Power steering systems', 'Older automatics'],
    specifications: {
      grade: 'ATF Type A',
      packaging: ['1L', '4L', '20L'],
    },
  },

  // INDUSTRIAL SPECIALITIES
  {
    id: 'vaccusyn-100',
    name: 'Lubricon VaccuSyn 100',
    slug: 'lubricon-vaccusyn-100',
    category: 'industrial',
    subcategory: 'Vacuum Pump Oil',
    description:
      'Premium paraffinic mineral oil specifically formulated for rotary vane and piston-type vacuum pumps. Engineered to achieve deep vacuum levels with minimal oil carryover.',
    features: [
      'ISO VG 100 viscosity',
      'Very low vapor pressure',
      'Excellent oxidation stability',
      'Anti-emulsion properties',
      'Low foaming tendency',
    ],
    applications: [
      'Rotary vane vacuum pumps',
      'Piston vacuum pumps',
      'Pharmaceutical packaging',
      'Food processing',
      'Semiconductor manufacturing',
    ],
    specifications: {
      viscosity: 'ISO VG 100',
      packaging: ['5L', '20L', '210L'],
    },
    badge: 'Specialty',
    featured: true,
  },
  {
    id: 'rustguard-pro',
    name: 'Lubricon RustGuard Pro',
    slug: 'lubricon-rustguard-pro',
    category: 'industrial',
    subcategory: 'Rust Preventive Oil',
    description:
      'Advanced rust preventive oil forming a tough, transparent film that protects metal surfaces from corrosion, moisture, and salt spray for extended periods.',
    features: [
      'Long-term rust protection',
      'Non-staining transparent film',
      'Excellent water displacement',
      'Salt spray resistance',
      'Easy to apply and remove',
    ],
    applications: [
      'Metal components storage',
      'Machine parts during transit',
      'Industrial tooling',
      'Finished goods protection',
    ],
    specifications: {
      packaging: ['5L', '20L', '210L'],
    },
    badge: 'Corrosion Shield',
  },
  {
    id: 'edm-oil',
    name: 'Lubricon EDM Oil',
    slug: 'edm-oil',
    category: 'industrial',
    subcategory: 'Electrical Discharge Machining Oil',
    description:
      'High-purity dielectric fluid for Electrical Discharge Machining (EDM/Spark Erosion). Provides excellent insulating properties, efficient debris flushing, and minimal electrode wear.',
    features: [
      'Excellent dielectric strength',
      'Low viscosity for efficient flushing',
      'Minimal electrode wear',
      'Good thermal stability',
      'Low aromatic content',
    ],
    applications: [
      'Wire EDM machines',
      'Die-sinking EDM',
      'Precision mold making',
      'Aerospace component machining',
    ],
    specifications: {
      viscosity: 'ISO VG 3-5',
      packaging: ['20L', '210L'],
    },
    badge: 'Precision',
  },
  {
    id: 'compressor-oil',
    name: 'Lubricon Compressor Oil',
    slug: 'compressor-oil',
    category: 'industrial',
    subcategory: 'Compressor Oil',
    description:
      'Premium mineral and synthetic blend compressor oil for rotary screw, vane, and reciprocating air compressors. Delivers long service life and deposit-free operation.',
    features: [
      'Low carbon deposit formation',
      'Excellent oxidation resistance',
      'Anti-wear performance',
      'Good air release properties',
      'Available ISO VG 32, 46, 68, 100, 150',
    ],
    applications: ['Rotary screw compressors', 'Vane compressors', 'Reciprocating compressors', 'Air tools'],
    specifications: {
      viscosity: 'ISO VG 32–150',
      packaging: ['5L', '20L', '210L'],
    },
  },

  // AUTOMOTIVE FLUIDS
  {
    id: 'adblue-def',
    name: 'Lubricon AdBlue / DEF',
    slug: 'adbluedef',
    category: 'fluids',
    subcategory: 'AdBlue / DEF',
    description:
      'High-purity 32.5% urea solution (AUS 32 / DEF) for SCR (Selective Catalytic Reduction) emission control systems in Euro 4, 5 & 6 diesel vehicles.',
    features: [
      'ISO 22241 compliant',
      'Ultra-pure 32.5% urea',
      'Reduces NOx emissions by up to 90%',
      'Compatible with all SCR systems',
    ],
    applications: ['Euro 4/5/6 trucks', 'Modern diesel cars', 'Buses', 'Off-road machinery'],
    specifications: {
      standard: 'ISO 22241 / AUS 32',
      packaging: ['10L', '20L', '1000L IBC'],
    },
    badge: 'Eco Compliance',
    featured: true,
  },
  {
    id: 'brake-fluid',
    name: 'Lubricon Brake Fluid DOT 3/4',
    slug: 'brake-fluid',
    category: 'fluids',
    subcategory: 'Brake Fluid',
    description:
      'Premium polyglycol-based brake fluid meeting DOT 3 and DOT 4 specifications. Provides reliable braking performance and exceptional moisture resistance.',
    features: [
      'High dry boiling point',
      'High wet boiling point',
      'Anti-corrosion additives',
      'Compatible with all rubber seals',
      'Long service life',
    ],
    applications: ['Hydraulic disc brakes', 'Drum brakes', 'Clutch hydraulics'],
    specifications: {
      grade: 'DOT 3 / DOT 4',
      standard: 'FMVSS 116',
      packaging: ['500ml', '1L', '4L'],
    },
  },
];

export const productCategories = [
  { id: 'all', label: 'All Products' },
  { id: 'engine-oil', label: 'Engine Oils' },
  { id: 'gear-oil', label: 'Gear Oils' },
  { id: 'atf', label: 'ATF & Transmission' },
  { id: 'industrial', label: 'Industrial Specialities' },
  { id: 'fluids', label: 'DEF & Brake Fluids' },
];

export const featuredProducts = products.filter((p) => p.featured);
