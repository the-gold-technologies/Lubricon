import { create } from "zustand";
import { Product, Industry, ProductCategory } from "@/types";

export interface GlobalConfig {
  siteTitle?: string;
  siteDescription?: string;
  phone?: string;
  email?: string;
  address?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    tollFree?: string;
    copyrightText?: string;
    [key: string]: any;
  };
  logo?: string;
  favicon?: string;
  headingOptions?: string;
}

export interface HeroSlide {
  id?: number | string;
  tagline?: string;
  heading?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  link?: string;
  badge?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export interface HomeData {
  HeroSlider?: {
    slides: HeroSlide[];
  };
  HomeStats?: {
    heading: string;
    subtitle: string;
    stats: { label: string; value: number; suffix: string }[];
  };
  HomeGovernmentProcurement?: {
    badgeText: string;
    title: string;
    subtitle: string;
    gemCard: {
      title: string;
      badge: string;
      description: string;
      link: string;
      logo: string;
    };
    irepsCard: {
      title: string;
      badge: string;
      description: string;
      link: string;
      logo: string;
    };
  };
  GovernmentProcurement?: any;
  HomeIndustries?: {
    badgeText: string;
    title: string;
    subtitle: string;
    industries: any[];
  };
  HomeAboutStrip?: {
    badgeText: string;
    headline: string;
    primaryParagraph: string;
    secondaryParagraph: string;
    keyBullets: string[];
    primaryBtnText: string;
    primaryBtnLink: string;
    secondaryBtnText: string;
    secondaryBtnLink: string;
    photoImage: string;
    badgeTitle: string;
    badgeSubtitle: string;
  };
  HomeProductShowcase?: {
    badgeText: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  HomeLubricantFinderSection?: {
    badgeText: string;
    title: string;
    subtitle: string;
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
    categories?: any[];
  };
  HomeLubricantFinder?: any;
  HomeCtaBanner?: {
    categoryTag: string;
    headline: string;
    subtext: string;
    primaryBtnText: string;
    primaryBtnLink: string;
    secondaryBtnText: string;
    secondaryBtnLink: string;
    trustMarkers: string[];
    archImage: string;
    floaterTitle: string;
    floaterSubtitle: string;
  };
  seo?: any;
}

export interface AboutData {
  AboutHero?: {
    badge?: string;
    heading?: string;
    narrative?: string;
    secondaryText?: string;
    image?: string;
    cardTag?: string;
    isoBadgeTitle?: string;
    isoBadgeSub?: string;
    tollFree?: string;
    tollFreeLabel?: string;
    tollFreeSub?: string;
    valuePillars?: Array<{ title: string; subtitle?: string; desc: string }>;
    [key: string]: any;
  };
  AboutStats?: {
    stats?: { label: string; value: number; suffix: string }[];
    [key: string]: any;
  };
  AboutValues?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    values?: { title: string; desc: string; icon?: string }[];
    [key: string]: any;
  };
  AboutPortfolio?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    portfolios?: Array<{
      category: string;
      desc: string;
      icon?: string;
      metric?: string;
    }>;
    items?: Array<{ category: string; desc: string }>;
    [key: string]: any;
  };
  AboutTimeline?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    milestones?: Array<{ year: string; title: string; description: string }>;
    [key: string]: any;
  };
  AboutCtaBanner?: {
    heading?: string;
    subtext?: string;
    buttonText?: string;
    buttonLink?: string;
    phone?: string;
    [key: string]: any;
  };
  seo?: any;
}

export interface ContactData {
  ContactHero?: {
    badge?: string;
    heading?: string;
    description?: string;
    helpline?: string;
    email?: string;
    address?: string;
    image?: string;
    [key: string]: any;
  };
  ContactForm?: {
    infoHeading?: string;
    infoDescription?: string;
    formTitle?: string;
    formSubtitle?: string;
    submitButtonText?: string;
    phone?: string;
    email?: string;
    address?: string;
    [key: string]: any;
  };
  ContactFaq?: {
    badge?: string;
    heading?: string;
    subtitle?: string;
    faqs?: Array<{ q: string; a: string; tag: string }>;
    [key: string]: any;
  };
  offices?: any[];
  seo?: any;
}

export interface ExtendedProduct extends Product {
  containerImage?: string | null;
  propertiesTable?: any[];
  tableHeaders?: string[];
  pdfUrl?: string | null;
  msdsUrl?: string | null;
  raw?: any;
}

export function normalizeProduct(p: any): ExtendedProduct {
  const categorySlug = String(p.categorySlug ?? p.category ?? "").toLowerCase();

  let feat: string[] = [];
  if (
    Array.isArray(p.performanceBenefits) &&
    p.performanceBenefits.length > 0
  ) {
    feat = p.performanceBenefits;
  } else if (Array.isArray(p.features) && p.features.length > 0) {
    feat = p.features;
  } else if (Array.isArray(p.specialFeatures) && p.specialFeatures.length > 0) {
    feat = p.specialFeatures;
  }

  let apps: string[] = [];
  if (typeof p.applicationAreas === "string") {
    apps = p.applicationAreas
      .split(",")
      .map((s: string) => s.trim())
      .filter(Boolean);
  } else if (Array.isArray(p.applications)) {
    apps = p.applications;
  }

  let specs = p.specifications;
  if (!specs || typeof specs !== "object") {
    specs = {
      viscosity: p.viscosity ?? "",
      grade: p.grade ?? "",
      packaging: Array.isArray(p.packaging) ? p.packaging : [],
    };
  }

  return {
    id: p.id ?? p.slug,
    name: p.name,
    slug: p.slug,
    category: categorySlug as ProductCategory,
    subcategory: p.subCategoryTitle ?? p.subcategory ?? p.categoryName ?? "",
    description: p.description ?? "",
    features: feat,
    applications: apps,
    specifications: specs,
    badge: p.badge,
    featured: Boolean(p.isFeatured),
    containerImage: p.containerImage ?? null,
    propertiesTable: Array.isArray(p.propertiesTable) ? p.propertiesTable : [],
    tableHeaders: Array.isArray(p.tableHeaders) ? p.tableHeaders : [],
    pdfUrl: p.pdfUrl ?? null,
    msdsUrl: p.msdsUrl ?? null,
    raw: p,
  };
}

export function normalizeIndustry(ind: any): Industry {
  return {
    id: ind.slug ?? ind.id,
    name: ind.name,
    icon: ind.icon,
    image: ind.image,
    description: ind.description ?? "",
    challenges: Array.isArray(ind.challenges) ? ind.challenges : [],
    solutions: Array.isArray(ind.solutions) ? ind.solutions : [],
    recommendedProducts: Array.isArray(ind.recommendedProducts)
      ? ind.recommendedProducts
      : [],
  };
}

import type { ElementType } from "react";

export function getHeadingTag(
  headingOptions?: string | null,
  defaultTag: string = "h1",
): ElementType {
  if (!headingOptions) return defaultTag as ElementType;
  const tag = String(headingOptions).toLowerCase().trim();
  const validTags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "span"];
  return (validTags.includes(tag) ? tag : defaultTag) as ElementType;
}

// In-flight promise cache to prevent duplicate simultaneous API calls (from Jai-deva)
const inFlightRequests = new Map<string, Promise<any>>();

export const getApiBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_CMS_API_URL as string;
};

interface CMSStoreState {
  pages: Record<string, any>;
  pageSEO: Record<string, any>;
  homeData: HomeData | null;
  aboutData: AboutData | null;
  contactData: ContactData | null;
  products: ExtendedProduct[];
  categories: any[];
  productsHero: any;
  industries: Industry[];
  industriesData: any;
  globalConfig: GlobalConfig | null;
  navLinks: any[];
  isHomeLoading: boolean;
  isAboutLoading: boolean;
  isContactLoading: boolean;
  isProductsLoading: boolean;
  isIndustriesLoading: boolean;
}

interface CMSStoreActions {
  fetchPage: (slug: string, force?: boolean) => Promise<any>;
  fetchHomeData: (force?: boolean) => Promise<HomeData | null>;
  fetchAboutData: (force?: boolean) => Promise<AboutData | null>;
  fetchContactData: (force?: boolean) => Promise<ContactData | null>;
  fetchIndustriesData: (force?: boolean) => Promise<any>;
  fetchProducts: (
    categorySlug?: string,
    force?: boolean,
  ) => Promise<ExtendedProduct[]>;
  fetchProductBySlug: (slug: string) => Promise<ExtendedProduct | null>;
  fetchIndustries: (force?: boolean) => Promise<Industry[]>;
  fetchGlobalConfig: (force?: boolean) => Promise<GlobalConfig | null>;
  fetchNavLinks: (force?: boolean) => Promise<any[]>;
  submitEnquiry: (data: {
    name: string;
    email?: string;
    phone?: string;
    company?: string;
    product?: string;
    packaging?: string;
    message?: string;
    type?: string;
    [key: string]: any;
  }) => Promise<{ success: boolean; data?: any; error?: string }>;
}

export const useCMSStore = create<CMSStoreState & CMSStoreActions>(
  (set, get) => ({
    pages: {},
    pageSEO: {},
    homeData: null,
    aboutData: null,
    contactData: null,
    industriesData: null,
    products: [],
    categories: [],
    productsHero: null,
    industries: [],
    globalConfig: null,
    navLinks: [],
    isHomeLoading: false,
    isAboutLoading: false,
    isContactLoading: false,
    isProductsLoading: false,
    isIndustriesLoading: false,

    fetchPage: async (slug: string, force = false) => {
      const normalizedSlug = slug.replace(/^\/+/, "");
      if (get().pages[normalizedSlug] && !force) {
        return get().pages[normalizedSlug];
      }

      const key = "page:" + normalizedSlug;
      if (inFlightRequests.has(key)) {
        return inFlightRequests.get(key);
      }

      const reqPromise = (async () => {
        try {
          const baseUrl = getApiBaseUrl();
          let endpoint = normalizedSlug;
          if (endpoint === "home") endpoint = "home";
          else if (endpoint === "about" || endpoint === "about-us")
            endpoint = "about";
          else if (endpoint === "contact" || endpoint === "contact-us")
            endpoint = "contact";
          else if (endpoint === "industries") endpoint = "industries";
          else if (endpoint === "products") endpoint = "products";

          const res = await fetch(`${baseUrl}/api/${endpoint}`, {
            cache: "no-store",
          });
          if (!res.ok) throw new Error(`Failed to fetch page ${slug} from CMS`);
          const json = await res.json();
          if (json.success && json.data) {
            let pageData = json.data;
            if (pageData && typeof pageData === "object" && pageData.sections) {
              pageData = {
                ...pageData,
                ...pageData.sections,
              };
            }
            const seo = json.seo ?? pageData?.seo ?? null;

            if (normalizedSlug === "home") {
              const rawProducts = Array.isArray(json.products)
                ? json.products
                : [];
              const normalizedProducts = rawProducts.map(normalizeProduct);
              const cats = Array.isArray(json.categories)
                ? json.categories
                : [];
              set({
                homeData: { ...pageData, seo },
                products:
                  normalizedProducts.length > 0
                    ? normalizedProducts
                    : get().products,
                categories: cats.length > 0 ? cats : get().categories,
              });
            } else if (
              normalizedSlug === "about" ||
              normalizedSlug === "about-us"
            ) {
              set({ aboutData: { ...pageData, seo } });
            } else if (
              normalizedSlug === "contact" ||
              normalizedSlug === "contact-us"
            ) {
              set({
                contactData: {
                  ...pageData,
                  offices: json.offices ?? pageData.offices,
                  seo,
                },
              });
            } else if (normalizedSlug === "industries") {
              const rawInd = Array.isArray(json.industries)
                ? json.industries
                : [];
              set({
                industriesData: { ...pageData, seo },
                industries:
                  rawInd.length > 0
                    ? rawInd.map(normalizeIndustry)
                    : get().industries,
              });
            }

            set((state) => ({
              pages: { ...state.pages, [normalizedSlug]: pageData },
              pageSEO: seo
                ? { ...state.pageSEO, [normalizedSlug]: seo }
                : state.pageSEO,
            }));

            return pageData;
          }
        } catch (err) {
          console.error(`Error loading page ${slug} from CMS:`, err);
        } finally {
          inFlightRequests.delete(key);
        }
        return null;
      })();

      inFlightRequests.set(key, reqPromise);
      return reqPromise;
    },

    fetchHomeData: async (force = false) => {
      if (get().homeData && !force) return get().homeData;
      set({ isHomeLoading: true });
      await get().fetchPage("home", force);
      set({ isHomeLoading: false });
      return get().homeData;
    },

    fetchAboutData: async (force = false) => {
      if (get().aboutData && !force) return get().aboutData;
      set({ isAboutLoading: true });
      await get().fetchPage("about", force);
      set({ isAboutLoading: false });
      return get().aboutData;
    },

    fetchContactData: async (force = false) => {
      if (get().contactData && !force) return get().contactData;
      set({ isContactLoading: true });
      await get().fetchPage("contact", force);
      set({ isContactLoading: false });
      return get().contactData;
    },

    fetchIndustriesData: async (force = false) => {
      if (get().industriesData && !force) return get().industriesData;
      set({ isIndustriesLoading: true });
      await get().fetchPage("industries", force);
      set({ isIndustriesLoading: false });
      return get().industriesData;
    },

    fetchProducts: async (categorySlug?: string, force = false) => {
      if (get().products.length > 0 && !force && !categorySlug) {
        return get().products;
      }
      set({ isProductsLoading: true });
      try {
        const baseUrl = getApiBaseUrl();
        const url =
          categorySlug && categorySlug !== "all"
            ? `${baseUrl}/api/products?category=${encodeURIComponent(categorySlug)}`
            : `${baseUrl}/api/products`;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch products from CMS");
        const json = await res.json();
        if (json.success && json.data) {
          const rawList = Array.isArray(json.data.products)
            ? json.data.products
            : Array.isArray(json.data)
              ? json.data
              : [];
          const normalized = rawList.map(normalizeProduct);
          set({
            products: normalized,
            categories: Array.isArray(json.data.categories)
              ? json.data.categories
              : [],
            productsHero: json.data.hero ?? json.data.productsHero ?? get().productsHero,
            isProductsLoading: false,
          });
          return normalized;
        }
      } catch (err) {
        console.error("Error loading products from CMS:", err);
      }
      set({ isProductsLoading: false });
      return get().products;
    },

    fetchProductBySlug: async (slug: string) => {
      try {
        const baseUrl = getApiBaseUrl();
        const res = await fetch(
          `${baseUrl}/api/products?slug=${encodeURIComponent(slug)}`,
          {
            cache: "no-store",
          },
        );
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            return normalizeProduct(json.data);
          }
        }
      } catch (err) {
        console.error(`Error loading product ${slug} from CMS:`, err);
      }
      return null;
    },

    fetchIndustries: async (force = false) => {
      if (get().industries.length > 0 && !force) {
        return get().industries;
      }
      set({ isIndustriesLoading: true });
      try {
        const baseUrl = getApiBaseUrl();
        const res = await fetch(`${baseUrl}/api/industries`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch industries from CMS");
        const json = await res.json();
        if (json.success && json.data) {
          const rawList = Array.isArray(json.data.industries)
            ? json.data.industries
            : Array.isArray(json.industries)
              ? json.industries
              : Array.isArray(json.data)
                ? json.data
                : [];
          const normalized = rawList.map(normalizeIndustry);
          set({ industries: normalized, isIndustriesLoading: false });
          return normalized;
        }
      } catch (err) {
        console.error("Error loading industries from CMS:", err);
      }
      set({ isIndustriesLoading: false });
      return get().industries;
    },

    fetchGlobalConfig: async (force = false) => {
      if (get().globalConfig && !force) return get().globalConfig;
      try {
        const baseUrl = getApiBaseUrl();
        const res = await fetch(`${baseUrl}/api/seo`, { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            set({ globalConfig: json.data });
            return json.data;
          }
        }
      } catch (err) {
        console.error("Error loading global config from CMS:", err);
      }
      return get().globalConfig;
    },

    fetchNavLinks: async (force = false) => {
      if (get().navLinks.length > 0 && !force) return get().navLinks;
      try {
        const baseUrl = getApiBaseUrl();
        const res = await fetch(`${baseUrl}/api/nav-links`, {
          cache: "no-store",
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            set({ navLinks: json.data });
            return json.data;
          }
        }
      } catch (err) {
        console.error("Error loading nav links from CMS:", err);
      }
      return get().navLinks;
    },

    submitEnquiry: async (data) => {
      try {
        const baseUrl = getApiBaseUrl();
        const res = await fetch(`${baseUrl}/api/enquiries`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: null,
            company: null,
            product: null,
            packaging: null,
            message: null,
            ...data,
            type: data.type ?? "General",
            email: data.email ?? "",
          }),
        });
        const json = await res.json();
        return {
          success: json.success ?? res.ok,
          data: json.data,
          error: json.error,
        };
      } catch (err: any) {
        console.error("Failed to submit enquiry to CMS:", err);
        return {
          success: false,
          error: err.message ?? "Network error submitting enquiry",
        };
      }
    },
  }),
);
