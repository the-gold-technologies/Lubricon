export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  subcategory?: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: {
    viscosity?: string;
    grade?: string;
    standard?: string;
    packaging?: string[];
  };
  badge?: string;
  featured?: boolean;
}

export type ProductCategory =
  | 'engine-oil'
  | 'gear-oil'
  | 'atf'
  | 'industrial'
  | 'fluids';

export interface Industry {
  id: string;
  name: string;
  icon: string;
  image?: string;
  description: string;
  challenges: string[];
  solutions: string[];
  recommendedProducts: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}
