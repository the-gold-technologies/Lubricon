import { Metadata } from "next";
import IndustriesHero from "./components/IndustriesHero";
import IndustriesList from "./components/IndustriesList";
import IndustriesPlantSupport from "./components/IndustriesPlantSupport";

export const metadata: Metadata = {
  title: "Industries We Serve | Lubricon Specialities India",
  description:
    "Lubricon provides specialized lubrication solutions for plastic injection molding, paper mills, and steel plants. Australian technology for maximum uptime.",
};

export default function IndustriesPage() {
  return (
    <main className="bg-white text-zinc-900 min-h-screen font-sans">
      {/* 1. Hero Section */}
      <IndustriesHero />

      {/* 2. Industries Breakdown with Authentic Assets */}
      <IndustriesList />

      {/* 3. Plant Engineering Services, Audit & Callback Section */}
      <IndustriesPlantSupport />
    </main>
  );
}
