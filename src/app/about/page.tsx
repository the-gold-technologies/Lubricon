import { Metadata } from "next";
import AboutHero from "./components/AboutHero";
import AboutStats from "./components/AboutStats";
import AboutValues from "./components/AboutValues";
import AboutPortfolio from "./components/AboutPortfolio";
import AboutTimeline from "./components/AboutTimeline";
import AboutCtaBanner from "./components/AboutCtaBanner";

export const metadata: Metadata = {
  title: "About Us | Lubricon Specialities India",
  description:
    "Learn about Lubricon Specialities India — our Australian technology roots, high-performance formulations, quality standards, and commitment to Indian industry.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-zinc-900 min-h-screen">
      {/* 1. Authentic Hero Section with Framed Graphic */}
      <AboutHero />

      {/* 2. Dull White Reference Stats Section */}
      <AboutStats />

      {/* 3. Core Values & Principles */}
      <AboutValues />

      {/* 4. Complete Lubrication Portfolio Summary (Dark Industrial Section) */}
      <AboutPortfolio />

      {/* 5. A Decade of Excellence Timeline */}
      <AboutTimeline />

      {/* 6. High-Conversion CTA Banner */}
      <AboutCtaBanner />
    </main>
  );
}
