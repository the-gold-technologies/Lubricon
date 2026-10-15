"use client";

import { useEffect } from "react";
import { useCMSStore } from "@/store/useCMSStore";
import IndustriesHero from "./IndustriesHero";
import IndustriesList from "./IndustriesList";
import IndustriesPlantSupport from "./IndustriesPlantSupport";

import LoadingIndicator from "@/components/LoadingIndicator";

interface IndustriesClientWrapperProps {
  headingTag?: string | null;
}

export default function IndustriesClientWrapper({ headingTag }: IndustriesClientWrapperProps) {
  const { industriesData, industries, isIndustriesLoading, fetchIndustriesData, fetchIndustries } =
    useCMSStore();

  useEffect(() => {
    fetchIndustriesData();
    fetchIndustries();
  }, [fetchIndustriesData, fetchIndustries]);

  if (isIndustriesLoading || (!industriesData && (!industries || industries.length === 0))) {
    return (
      <LoadingIndicator
        fullScreen
        message="Loading Industries & Solutions..."
        subMessage="Specialized Australian Lubrication Formulations"
      />
    );
  }

  return (
    <>
      {/* 1. Hero Section */}
      <IndustriesHero headingTag={headingTag} />

      {/* 2. Industries Breakdown with Authentic Assets */}
      <IndustriesList />

      {/* 3. Plant Engineering Services, Audit & Callback Section */}
      <IndustriesPlantSupport />
    </>
  );
}
