"use client";

import { useEffect } from "react";
import { useCMSStore } from "@/store/useCMSStore";
import IndustriesHero from "./IndustriesHero";
import IndustriesList from "./IndustriesList";
import IndustriesPlantSupport from "./IndustriesPlantSupport";

interface IndustriesClientWrapperProps {
  headingTag?: string | null;
}

export default function IndustriesClientWrapper({ headingTag }: IndustriesClientWrapperProps) {
  const { fetchIndustriesData, fetchIndustries } = useCMSStore();

  useEffect(() => {
    fetchIndustriesData();
    fetchIndustries();
  }, [fetchIndustriesData, fetchIndustries]);

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
