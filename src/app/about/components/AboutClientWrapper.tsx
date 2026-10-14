"use client";

import { useEffect } from "react";
import { useCMSStore } from "@/store/useCMSStore";
import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import AboutValues from "./AboutValues";
import AboutPortfolio from "./AboutPortfolio";
import AboutTimeline from "./AboutTimeline";
import AboutCtaBanner from "./AboutCtaBanner";

import LoadingIndicator from "@/components/LoadingIndicator";

interface AboutClientWrapperProps {
  headingTag?: string | null;
}

export default function AboutClientWrapper({ headingTag }: AboutClientWrapperProps) {
  const { aboutData, isAboutLoading, fetchAboutData } = useCMSStore();

  useEffect(() => {
    fetchAboutData();
  }, [fetchAboutData]);

  if (isAboutLoading || !aboutData) {
    return (
      <LoadingIndicator
        fullScreen
        message="Loading About Lubricon..."
        subMessage="Precision Engineering & Australian Legacy"
      />
    );
  }

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
