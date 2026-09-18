import HeroSlider from '@/components/HeroSlider';
import HomeStats from './components/HomeStats';
import HomeIndustries from './components/HomeIndustries';
import HomeAboutStrip from './components/HomeAboutStrip';
import HomeProductShowcase from './components/HomeProductShowcase';
import HomeLubricantFinderSection from './components/HomeLubricantFinderSection';
import CallbackSection from '@/components/CallbackSection';

export default function HomePage() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      {/* 1. Authentic Hero Carousel */}
      <HeroSlider />

      {/* 2. Stats & Credibility Bar (Dull White Background) */}
      <HomeStats />

      {/* 3. Industries We Serve (Authentic Images) */}
      <HomeIndustries />

      {/* 4. About Lubricon Narrative & Framed Photo */}
      <HomeAboutStrip />

      {/* 5. Product Portfolio Showcase */}
      <HomeProductShowcase />

      {/* 6. Lubricant Finder Advisor */}
      <HomeLubricantFinderSection />

      {/* 7. Signature Callback Form */}
      <CallbackSection />
    </div>
  );
}
