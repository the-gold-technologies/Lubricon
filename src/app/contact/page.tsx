import { Metadata } from "next";
import ContactHero from "./components/ContactHero";
import ContactFormAndCards from "./components/ContactFormAndCards";
import ContactFaq from "./components/ContactFaq";
import ContactMapSection from "./components/ContactMapSection";

export const metadata: Metadata = {
  title: "Contact Us | Lubricon Specialities India",
  description:
    "Contact Lubricon Specialities India for industrial lubrication quotes, bulk orders, and technical support. Toll-free 1800 569 6363.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-zinc-900 min-h-screen">
      {/* 1. Hero */}
      <ContactHero />

      {/* 2. Contact Form & Info */}
      <ContactFormAndCards />

      {/* 3. FAQ */}
      <ContactFaq />

      {/* 4. Full-width Map */}
      <ContactMapSection />
    </main>
  );
}
