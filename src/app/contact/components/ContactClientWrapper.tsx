"use client";

import { useEffect } from "react";
import { useCMSStore } from "@/store/useCMSStore";
import ContactHero from "./ContactHero";
import ContactFormAndCards from "./ContactFormAndCards";
import ContactFaq from "./ContactFaq";

interface ContactClientWrapperProps {
  headingTag?: string | null;
}

export default function ContactClientWrapper({ headingTag }: ContactClientWrapperProps) {
  const { fetchContactData } = useCMSStore();

  useEffect(() => {
    fetchContactData();
  }, [fetchContactData]);

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
