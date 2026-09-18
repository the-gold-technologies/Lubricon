import ContactHero from "./components/ContactHero";
import ContactFormAndCards from "./components/ContactFormAndCards";
import ContactFaq from "./components/ContactFaq";
import CallbackSection from "@/components/CallbackSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Lubricon Specialities India",
  description:
    "Contact Lubricon Specialities India for industrial lubrication quotes, bulk orders, and technical support. Toll-free 1800 569 6363.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-zinc-900 min-h-screen">
      {/* 1. Contact Hero */}
      <ContactHero />

      {/* 2. Contact Details & Inquiry Form */}
      <ContactFormAndCards />

      {/* 3. Frequently Asked Questions */}
      <ContactFaq />

      {/* 4. Callback Section */}
      <CallbackSection />
    </main>
  );
}
