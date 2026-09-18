import { Metadata } from 'next';
import IndustriesHero from './components/IndustriesHero';
import IndustriesList from './components/IndustriesList';
import CallbackSection from '@/components/CallbackSection';

export const metadata: Metadata = {
  title: 'Industries We Serve | Lubricon Specialities India',
  description:
    'Lubricon provides specialized lubrication solutions for plastic injection molding, paper mills, steel plants, automotive fleets, and precision engineering industries.',
};

export default function IndustriesPage() {
  return (
    <main className="bg-white text-zinc-900 min-h-screen font-sans">
      {/* 1. Hero Section */}
      <IndustriesHero />

      {/* 2. Industries Breakdown with Authentic Assets */}
      <IndustriesList />

      {/* 3. Callback Section */}
      <CallbackSection />
    </main>
  );
}
