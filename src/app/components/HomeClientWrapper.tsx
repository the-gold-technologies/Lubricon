"use client";

import { useEffect } from "react";
import { useCMSStore } from "@/store/useCMSStore";
import HeroSlider from "@/components/HeroSlider";
import HomeStats from "./HomeStats";
import HomeGovernmentProcurement from "./HomeGovernmentProcurement";
import HomeIndustries from "./HomeIndustries";
import HomeAboutStrip from "./HomeAboutStrip";
import HomeProductShowcase from "./HomeProductShowcase";
import HomeLubricantFinderSection from "./HomeLubricantFinderSection";
import HomeCtaBanner from "./HomeCtaBanner";

interface HomeClientWrapperProps {
  headingTag?: string | null;
}

export default function HomeClientWrapper({ headingTag }: HomeClientWrapperProps) {
  const { fetchHomeData } = useCMSStore();

  useEffect(() => {
    fetchHomeData();
  }, [fetchHomeData]);

  return (
    <>
      {/* 1. Authentic Hero Carousel */}
      <HeroSlider headingTag={headingTag} />

      {/* 2. Stats & Credibility Bar */}
      <HomeStats />

      {/* 3. Government & Institutional Procurement (GeM & IREPS) */}
      <HomeGovernmentProcurement />

      {/* 4. Industries We Serve */}
      <HomeIndustries />

      {/* 5. About Lubricon Narrative */}
      <HomeAboutStrip />

      {/* 6. Product Portfolio Showcase */}
      <HomeProductShowcase />

      {/* 7. Lubricant Finder Advisor */}
      <HomeLubricantFinderSection />

      {/* 8. Modern CTA Banner */}
      <HomeCtaBanner />
    </>
  );
}
