# Lubricon — Frontend Web Application

> Official website frontend for **Lubricon Specialities India** — Australian-technology lubricants and industrial fluid solutions for industrial, automotive, and government sectors across India.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Key Features](#key-features)
- [Components](#components)
- [State Management](#state-management)
- [CMS Integration](#cms-integration)
- [SEO Architecture](#seo-architecture)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Code Conventions](#code-conventions)

---

## Overview

This is the **Next.js 16** frontend for the Lubricon website. All content — products, hero slides, page copy, SEO settings, global config — is fetched dynamically from a headless CMS backend via REST API. The frontend has **no hardcoded product or page content**; everything is driven by the CMS.

---

## Tech Stack

| Layer            | Technology                                     |
| ---------------- | ---------------------------------------------- |
| Framework        | [Next.js 16](https://nextjs.org/) (App Router) |
| Language         | TypeScript 5                                   |
| Styling          | Tailwind CSS v4                                |
| State Management | [Zustand](https://zustand-demo.pmnd.rs/) v5    |
| Icons            | [Lucide React](https://lucide.dev/)            |
| React            | React 19                                       |
| Linting          | ESLint 9 (Next.js config)                      |

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar, Footer, scripts)
│   ├── page.tsx                # Home page (/)
│   ├── about/                  # About page (/about)
│   ├── contact/                # Contact page (/contact)
│   ├── industries/             # Industries page (/industries)
│   ├── products/               # Products listing (/products)
│   │   └── [slug]/             # Dynamic product detail page (/products/:slug)
│   ├── privacy-policy/         # Privacy Policy page (/privacy-policy)
│   ├── robots.txt/             # Dynamic robots.txt route
│   └── sitemap.xml/            # Dynamic sitemap route
│
├── components/                 # Shared/global UI components
│   ├── Navbar.tsx              # Full navigation bar (CMS-driven)
│   ├── Footer.tsx              # Site footer (CMS-driven)
│   ├── HeroSlider.tsx          # Homepage hero image slider
│   ├── LubricantFinder.tsx     # Interactive lubricant finder tool
│   ├── ProductCard.tsx         # Product card for grid listings
│   ├── CallbackModal.tsx       # Request callback modal
│   ├── PlantAuditDrawer.tsx    # Plant audit request drawer
│   ├── ProductQuoteDrawer.tsx  # Product quotation request drawer
│   ├── ProductPriceListDrawer.tsx # Price list request drawer
│   ├── FloatingWhatsApp.tsx    # Floating WhatsApp CTA button
│   ├── GoogleTranslator.tsx    # Google Translate integration (EN/HI)
│   ├── CustomCodeInjector.tsx  # CMS custom header/footer scripts injector
│   ├── LoadingIndicator.tsx    # Global loading indicator
│   ├── JsonLd.tsx              # JSON-LD structured data injector
│   ├── ScrollToTopOnNavigation.tsx # Scroll reset on route change
│   └── SocialIcons.tsx         # Social media icons
│
├── hooks/
│   └── usePageHeadingTag.ts    # Hook to resolve H1 tag from CMS/global config
│
├── lib/
│   ├── api.ts                  # API base URL utility
│   └── seo.ts                  # SEO helpers: getGlobalSEO, getPageSEO, buildMetadata
│
├── store/
│   └── useCMSStore.ts          # Zustand global store — all CMS data & fetchers
│
└── types/
    └── index.ts                # Shared TypeScript interfaces
```

---

## Pages & Routes

| Route              | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `/`                | Home page — hero slider, stats, product showcase, industries, CTA sections |
| `/about`           | About Lubricon — hero, timeline, values, portfolio, stats, CTA             |
| `/products`        | Products listing with filter bar and product grid                          |
| `/products/[slug]` | Individual product detail page (CMS-driven dynamic route)                  |
| `/industries`      | Industries served — hero, industry list, plant support section             |
| `/contact`         | Contact page — hero, contact form, FAQ section                             |
| `/privacy-policy`  | Privacy policy — CMS-driven hero, content, compliance contact              |
| `/robots.txt`      | Dynamically generated from CMS global SEO config                           |
| `/sitemap.xml`     | Dynamically generated sitemap                                              |

---

## Key Features

- **100% CMS-driven content** — No hardcoded product data, page text, or SEO metadata
- **Dynamic SEO** — Every page resolves `metaTitle`, `metaDescription`, `canonical`, `ogImage`, `schema` (JSON-LD), and `noIndex` from the CMS
- **Global SEO config** — Site-wide favicon, Google Analytics (GA4), Google Tag Manager (GTM), Google Search Console verification, custom header/footer scripts, all managed from CMS
- **Dynamic heading tag** — The `<h1>` tag type (h1–h6) across all pages is CMS-configurable via `headingOptions`, resolved by priority: `globalConfig → pageSEO → initialProp → "h1"`
- **Bilingual support** — Google Translate integration for English / Hindi switching, persisted in `localStorage`
- **Accessibility font size** — User-adjustable font size, persisted across sessions via `localStorage`
- **Interactive tools** — Lubricant Finder, Plant Audit Drawer, Product Quote Drawer, Price List Drawer, Callback Modal — all with form submission
- **WhatsApp floating CTA** — CMS-configured WhatsApp number and message
- **Dynamic robots.txt & sitemap** — Generated at request time from CMS data
- **Image optimization** — Next.js `<Image>` with Cloudinary and remote pattern support

---

## Components

### Global Layout (`src/app/layout.tsx`)

- Fetches `GlobalSEO` from CMS on every request
- Injects GTM, GA4, Search Console verification, custom scripts, JSON-LD, favicon
- Patches `Node.prototype.removeChild` / `insertBefore` for Google Translate hydration safety
- Applies saved font size and Hindi language class before first paint (inline script, no flash)

### HeroSlider (`src/components/HeroSlider.tsx`)

- Reads slides from `homeData.HeroSlider.slides` in Zustand store
- Auto-advances every 6 seconds; manual prev/next/dot controls
- Uses the `usePageHeadingTag("home")` hook so the heading tag is always CMS-consistent across all slides

### LubricantFinder (`src/components/LubricantFinder.tsx`)

- Multi-step interactive selector (Application → Sub-category → Conditions)
- Sends enquiry to CMS API

### Drawers (PlantAudit, ProductQuote, ProductPriceList, Callback)

- Slide-in drawer UI with form validation
- Posts form data to the CMS API

---

## State Management

**Zustand store** (`src/store/useCMSStore.ts`) acts as the single client-side data layer.

### Store slices

| State            | Description                                     |
| ---------------- | ----------------------------------------------- |
| `homeData`       | Home page CMS data (hero slides, sections)      |
| `aboutData`      | About page CMS data                             |
| `contactData`    | Contact page CMS data                           |
| `industriesData` | Industries page CMS data                        |
| `globalConfig`   | Global site config (logo, headingOptions, etc.) |
| `navData`        | Navigation menu items                           |
| `products`       | Products list for the grid                      |
| `pages`          | Map of page slug → page data                    |
| `pageSEO`        | Map of page slug → page SEO data                |

### Key actions

| Action                         | Description                                           |
| ------------------------------ | ----------------------------------------------------- |
| `fetchHomeData()`              | Loads home page data                                  |
| `fetchGlobalConfig()`          | Loads global site config                              |
| `fetchProducts()`              | Loads all products                                    |
| `fetchPageData(slug)`          | Loads arbitrary page data by slug                     |
| `getHeadingTag(raw, fallback)` | Validates and returns a safe heading tag element type |

---

## CMS Integration

All data is fetched from a headless CMS backend REST API. The base URL is configured via environment variable (see [Environment Variables](#environment-variables)).

### API Endpoints used

| Endpoint                   | Purpose                                             |
| -------------------------- | --------------------------------------------------- |
| `GET /api/seo`             | Global SEO config (GTM, GA, favicon, heading, etc.) |
| `GET /api/seo/pages/:slug` | Per-page SEO data                                   |
| `GET /api/home`            | Home page content                                   |
| `GET /api/about`           | About page content                                  |
| `GET /api/contact`         | Contact page content                                |
| `GET /api/industries`      | Industries page content                             |
| `GET /api/products`        | All products                                        |
| `GET /api/products/:slug`  | Single product detail                               |
| `GET /api/privacy-policy`  | Privacy policy content                              |
| `GET /api/nav`             | Navigation menu                                     |
| `GET /api/global-config`   | Global site config (logo, social links, etc.)       |

---

## SEO Architecture

```
CMS (headingOptions, metaTitle, schema…)
        │
        ▼
Server: getPageSEO(slug) + getGlobalSEO()   ← lib/seo.ts
        │
        ├─► generateMetadata()              ← Next.js metadata API
        │
        └─► sanitizeHeadingTag()            ← resolves h1–h6

Client: usePageHeadingTag(pageSlug)         ← hooks/usePageHeadingTag.ts
        Priority: globalConfig → pageSEO → initialProp → "h1"
```

- Server components use `generateMetadata()` for SSR meta tags
- Client components use `usePageHeadingTag()` to reactively track CMS heading changes
- JSON-LD structured data is injected via `<JsonLd>` component
- `robots.txt` and `sitemap.xml` are generated dynamically from CMS data

---

## Environment Variables

Create a `.env.local` file in the project root. **Never commit this file.**

```env
# Required — URL of the headless CMS backend API
NEXT_PUBLIC_CMS_API_URL=http://your-cms-api-url

# Required — Public URL of this website (used for metadataBase, sitemap, etc.)
NEXT_PUBLIC_SITE_URL=https://your-website-url
```

> ⚠️ `.env` and `.env.local` are already listed in `.gitignore`. Never add real credentials to these files.

---

## Getting Started

### Prerequisites

- Node.js **18+**
- npm or yarn
- A running instance of the Lubricon CMS backend

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd lubricon

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Then edit .env.local with your actual CMS API URL and site URL
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Available Scripts

| Script                 | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start development server         |
| `npm run build`        | Build production bundle          |
| `npm run start`        | Start production server          |
| `npm run lint`         | Run ESLint                       |
| `npm run format`       | Format all files with Prettier   |
| `npm run format:check` | Check formatting without writing |

---

## Code Conventions

- **TypeScript strict mode** — all components and utilities are fully typed
- **App Router only** — no `pages/` directory; all routes use the `app/` directory
- **Server components by default** — client components use `"use client"` directive explicitly
- **No hardcoded content** — all text, images, and SEO data come from the CMS
- **Zustand for client state** — no Redux, no Context API for data; Zustand is the single source of truth
- **`@/` alias** — absolute imports use `@/` which maps to `src/`
- **Tailwind CSS only** — no inline styles, no CSS modules (except `globals.css`)
- **Lucide React** — all icons come from `lucide-react`, no other icon libraries

---

## Notes for Developers

- The `AGENTS.md` file at the root is auto-generated by `next dev` for AI coding assistants — do not delete it
- The `.prettierrc` and `.prettierignore` files are local-only (gitignored) — code formatting is developer-local, not enforced in CI
- All CMS API calls in server components use `cache: "no-store"` to ensure fresh content on every request
- The `useCMSStore` lazy-fetches data on first use — components that need data should call the relevant fetch action in a `useEffect`
