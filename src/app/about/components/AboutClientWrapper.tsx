"use client";

import { useEffect } from "react";
import { useCMSStore } from "@/store/useCMSStore";
import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import AboutValues from "./AboutValues";
import AboutPortfolio from "./AboutPortfolio";
import AboutTimeline from "./AboutTimeline";
import AboutCtaBanner from "./AboutCtaBanner";

interface AboutClientWrapperProps {
  headingTag?: string | null;
}

export default function AboutClientWrapper({ headingTag }: AboutClientWrapperProps) {
  const { fetchAboutData } = useCMSStore();

  useEffect(() => {
    fetchAboutData();
  }, [fetchAboutData]);

  return (
    <>
      <AboutHero headingTag={headingTag} />
      <AboutStats />
      <AboutValues />
      <AboutPortfolio />
      <AboutTimeline />
      <AboutCtaBanner />
    </>
  );
}
