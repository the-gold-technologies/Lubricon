"use client";

import { useEffect } from "react";
import { useCMSStore } from "@/store/useCMSStore";
import ContactHero from "./ContactHero";
import ContactFormAndCards from "./ContactFormAndCards";
import ContactFaq from "./ContactFaq";

import LoadingIndicator from "@/components/LoadingIndicator";

interface ContactClientWrapperProps {
  headingTag?: string | null;
}

export default function ContactClientWrapper({ headingTag }: ContactClientWrapperProps) {
  const { contactData, isContactLoading, fetchContactData } = useCMSStore();

  useEffect(() => {
    fetchContactData();
  }, [fetchContactData]);

  if (isContactLoading || !contactData) {
    return (
      <LoadingIndicator
        fullScreen
        message="Loading Contact Details..."
        subMessage="Lubricon Support & Headquarters"
      />
    );
  }

  return (
    <>
      {/* 1. Hero */}
      <ContactHero headingTag={headingTag} />

      {/* 2. Contact Form & Info */}
      <ContactFormAndCards />

      {/* 3. FAQ */}
      <ContactFaq />
    </>
  );
}
