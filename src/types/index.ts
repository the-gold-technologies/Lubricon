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
    /** Custom display labels for the core fields, editable in the CMS */
    labels?: Partial<Record<"viscosity" | "grade" | "standard" | "packaging", string>>;
    /** Additional admin-defined parameters */
    extra?: { label: string; value: string }[];
  };
  badge?: string;
  featured?: boolean;
}

export type ProductCategory = "engine-oil" | "gear-oil" | "atf" | "industrial" | "fluids";

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
