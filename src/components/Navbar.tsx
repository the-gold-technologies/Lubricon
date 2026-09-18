"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Search, Plus, Minus } from "lucide-react";

interface SubCategory {
  label: string;
  href: string;
}

interface ProductCategoryItem {
  id: string;
  label: string;
  href: string;
  subcategories?: SubCategory[];
}

const productHierarchy: ProductCategoryItem[] = [
  {
    id: "atf",
    label: "ATF",
    href: "/products?cat=atf",
    subcategories: [
      {
        label: "ATF (Steering Oil)",
        href: "/products?cat=atf&search=Steering",
      },
    ],
  },
  {
    id: "engine-oil",
    label: "Engine Oil",
    href: "/products?cat=engine-oil",
    subcategories: [
      {
        label: "CF4 15w40 Engine Oils",
        href: "/products?cat=engine-oil&search=CF-4",
      },
      {
        label: "CH4 15W40 Engine Oils",
        href: "/products?cat=engine-oil&search=CH-4",
      },
      {
        label: "CI4 15W40 Engine Oils",
        href: "/products?cat=engine-oil&search=CI-4",
      },
      {
        label: "CI4 Plus 15W40 Engine Oils",
        href: "/products?cat=engine-oil&search=CI-4+Plus",
      },
      {
        label: "CK4 15w40 Engine Oils",
        href: "/products?cat=engine-oil&search=CK-4",
      },
      {
        label: "Multigrade Engine Oil",
        href: "/products?cat=engine-oil&search=Multigrade",
      },
    ],
  },
  {
    id: "gear-oil",
    label: "Gear Oil",
    href: "/products?cat=gear-oil",
    subcategories: [
      {
        label: "Automotive Gear Oils - 80W90",
        href: "/products?cat=gear-oil&search=80W90",
      },
      {
        label: "Automotive Gear Oils - 85W140",
        href: "/products?cat=gear-oil&search=85W140",
      },
      {
        label: "Automotive Gear Oils - VG 140",
        href: "/products?cat=gear-oil&search=VG+140",
      },
      {
        label: "Automotive Gear Oils - VG 90",
        href: "/products?cat=gear-oil&search=VG+90",
      },
      {
        label: "Heavy Duty Gear Oils",
        href: "/products?cat=gear-oil&search=Heavy+Duty",
      },
    ],
  },
  {
    id: "adblue",
    label: "AdBlue/DEF",
    href: "/products?cat=fluids&search=AdBlue",
    // No subcategories
  },
  {
    id: "brake-fluid",
    label: "Brake Fluid",
    href: "/products?cat=fluids&search=Brake",
    // No subcategories
  },
  {
    id: "compressor-oil",
    label: "Compressor Oil",
    href: "/products?cat=industrial&search=Compressor",
    // No subcategories
  },
  {
    id: "vacuum-pump-oil",
    label: "Vacuum Pump Oil",
    href: "/products?cat=industrial&search=Vacuum",
    subcategories: [
      {
        label: "Lubricon VaccuSyn 100",
        href: "/products?cat=industrial&search=VaccuSyn",
      },
    ],
  },
  {
    id: "rust-preventive-oil",
    label: "Rust Preventive Oil",
    href: "/products?cat=industrial&search=Rust",
    subcategories: [
      {
        label: "LUBRICON RUSTGUARD PRO",
        href: "/products?cat=industrial&search=RustGuard",
      },
    ],
  },
  {
    id: "edm-oil",
    label: "EDM Oil",
    href: "/products?cat=industrial&search=EDM",
    // No subcategories
  },
];

const industryLinks = [
  {
    href: "/industries#plastic-injection-molding",
    label: "Plastic Injection Molding",
  },
  { href: "/industries#paper-mills", label: "Paper Mills" },
  { href: "/industries#steel-plants", label: "Steel Plants" },
  { href: "/industries#automotive-fleet", label: "Automotive & Fleet" },
  { href: "/industries", label: "All Industries →" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);
  const flyoutTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setHoveredCategory(null);
    setIndustriesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
        setHoveredCategory(null);
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchVal.trim())}`);
      setSearchVal("");
    }
  };

  const adjustTextSize = (delta: number) => {
    const next = Math.min(130, Math.max(90, zoomLevel + delta));
    setZoomLevel(next);
    document.documentElement.style.fontSize = `${(next / 100) * 16}px`;
  };

  const handleProductsMouseEnter = () => {
    if (flyoutTimerRef.current) clearTimeout(flyoutTimerRef.current);
    setProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    flyoutTimerRef.current = setTimeout(() => {
      setProductsOpen(false);
      setHoveredCategory(null);
    }, 150);
  };

  const hoveredCategoryData = hoveredCategory
    ? productHierarchy.find((p) => p.id === hoveredCategory)
    : null;

  return (
    <header className="sticky top-0 z-50 w-full font-sans shadow-md">
      {/* ── 1. CLEAN WHITE UTILITY TOP BAR ── */}
      <div className="bg-white bg-[#FBFCFE] border-b border-zinc-200 py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 ml-auto text-xs">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 font-semibold">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`transition-colors ${
                  lang === "en"
                    ? "text-black font-extrabold underline decoration-[#ffe000] decoration-2"
                    : "text-zinc-600 hover:text-black"
                }`}
              >
                English
              </button>
              <span className="text-zinc-300">|</span>
              <button
                type="button"
                onClick={() => setLang("hi")}
                className={`transition-colors ${
                  lang === "hi"
                    ? "text-black font-extrabold underline decoration-[#ffe000] decoration-2"
                    : "text-zinc-600 hover:text-black"
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <div className="relative flex items-stretch">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="w-36 sm:w-48 h-7 px-2.5 text-xs bg-white text-black border border-zinc-300 rounded-l-sm focus:outline-none focus:border-black placeholder:text-zinc-400"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="bg-[#ffe000] hover:bg-[#ebd000] text-black px-2.5 flex items-center justify-center rounded-r-sm transition-colors border border-l-0 border-[#ffe000]"
                >
                  <Search size={13} strokeWidth={2.5} />
                </button>
              </div>
            </form>

            {/* Text Zoom */}
            <div className="hidden sm:flex items-center gap-1 text-zinc-600 font-medium">
              <span className="mr-0.5 text-[11px]">Text</span>
              <button
                type="button"
                onClick={() => adjustTextSize(5)}
                title="Increase text size"
                className="w-5 h-5 bg-black hover:bg-zinc-800 text-white rounded-sm flex items-center justify-center transition-colors"
              >
                <Plus size={11} strokeWidth={3} />
              </button>
              <button
                type="button"
                onClick={() => adjustTextSize(-5)}
                title="Decrease text size"
                className="w-5 h-5 bg-black hover:bg-zinc-800 text-white rounded-sm flex items-center justify-center transition-colors"
              >
                <Minus size={11} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. MAIN NAVBAR ── */}
      <div className="w-full bg-white border-b border-zinc-200 py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Lubricon Specialities India"
              width={220}
              height={44}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-[14px] font-medium transition-colors ${
                pathname === "/"
                  ? "text-zinc-950 font-semibold"
                  : "text-zinc-700 hover:text-zinc-950"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-[14px] font-medium transition-colors ${
                pathname === "/about"
                  ? "text-zinc-950 font-semibold"
                  : "text-zinc-700 hover:text-zinc-950"
              }`}
            >
              About Us
            </Link>

            {/* ── PRODUCTS DROPDOWN WITH DYNAMIC FLYOUT ── */}
            <div
              className="relative py-2"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                className={`text-[14px] font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith("/products") || productsOpen
                    ? "text-zinc-950 font-semibold"
                    : "text-zinc-700 hover:text-zinc-950"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dynamic Products Dropdown */}
              {productsOpen && (
                <div className="absolute top-full left-0 mt-0 z-50 animate-fade-in flex items-start">
                  {/* Main Dropdown Column */}
                  <div className="w-56 bg-white shadow-xl rounded-sm border border-zinc-200">
                    {productHierarchy.map((item) => {
                      const hasSub = Boolean(
                        item.subcategories && item.subcategories.length > 0,
                      );
                      const isHovered = hoveredCategory === item.id;

                      return (
                        <div
                          key={item.id}
                          onMouseEnter={() => setHoveredCategory(item.id)}
                          onMouseLeave={() => setHoveredCategory(null)}
                          className="relative"
                        >
                          <Link
                            href={item.href}
                            className={`flex items-center justify-between px-4 py-2.5 text-[13px] border-b border-zinc-100 last:border-b-0 transition-none ${
                              isHovered
                                ? "bg-[#ffe000] text-black font-extrabold"
                                : "text-zinc-800 hover:bg-zinc-50"
                            }`}
                          >
                            <span>{item.label}</span>
                            {hasSub && (
                              <span
                                className={`text-[11px] font-bold ${
                                  isHovered ? "text-black" : "text-zinc-400"
                                }`}
                              >
                                ›
                              </span>
                            )}
                          </Link>

                          {/* Subcategory Flyout Panel — Anchored beside this item with a subtle gap */}
                          {hasSub && isHovered && (
                            <div className="absolute left-full top-0 ml-1.5 w-64 bg-white shadow-2xl rounded-md border border-zinc-200 z-50 animate-fade-in py-1 before:absolute before:-left-2 before:top-0 before:w-2 before:h-full before:content-['']">
                              {item.subcategories!.map((sub, idx) => (
                                <Link
                                  key={idx}
                                  href={sub.href}
                                  className="block px-5 py-2.5 text-[13px] text-zinc-800 hover:bg-[#ffe000] hover:text-black font-medium border-b border-zinc-100 last:border-b-0 transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* ── INDUSTRIES DROPDOWN ── */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className={`text-[14px] font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith("/industries") || industriesOpen
                    ? "text-zinc-950 font-semibold"
                    : "text-zinc-700 hover:text-zinc-950"
                }`}
              >
                <span>Industries We Serve</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {industriesOpen && (
                <div className="absolute top-full left-0 mt-0 w-60 bg-white border border-zinc-200 rounded-sm shadow-xl py-1 z-50 animate-fade-in">
                  {industryLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-[13px] text-zinc-700 hover:bg-[#ffe000] hover:text-black font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`text-[14px] font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-zinc-950 font-semibold"
                  : "text-zinc-700 hover:text-zinc-950"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action: Yellow with black text */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#ffe000] hover:bg-[#ffea4d] text-black text-xs font-bold px-4 py-2 rounded transition-all shadow-sm"
            >
              Get a Callback
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 transition"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto animate-fade-in">
          <div className="flex items-center justify-between p-4 border-b border-zinc-200">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Lubricon"
                width={170}
                height={34}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-zinc-700 hover:bg-zinc-100 rounded-lg"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="p-4 border-b border-zinc-100">
            <form onSubmit={handleSearchSubmit} className="flex items-stretch">
              <input
                type="text"
                placeholder="Search products..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="flex-1 px-3 py-2 text-sm border border-zinc-300 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#ffe000] text-black px-4 rounded-r-md flex items-center justify-center font-bold"
              >
                <Search size={16} strokeWidth={2.5} />
              </button>
            </form>
          </div>

          <div className="p-5 flex flex-col gap-3 flex-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-zinc-900 border-b border-zinc-100 pb-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-zinc-900 border-b border-zinc-100 pb-2"
            >
              About Us
            </Link>

            <div className="border-b border-zinc-100 pb-2">
              <div className="text-base font-semibold text-zinc-900 mb-1">
                Products
              </div>
              <div className="pl-3 flex flex-col gap-1.5">
                {productHierarchy.map((item) => (
                  <div key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs font-semibold text-zinc-800 block py-1"
                    >
                      {item.label}
                    </Link>
                    {item.subcategories && (
                      <div className="pl-3 flex flex-col gap-1 border-l border-zinc-200">
                        {item.subcategories.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-xs text-zinc-500 hover:text-[#c85a17] py-0.5"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/industries"
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-zinc-900 border-b border-zinc-100 pb-2"
            >
              Industries We Serve
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-zinc-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
