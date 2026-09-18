import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: {
    default: 'Lubricon Specialities India – Premium Industrial & Automotive Lubricants',
    template: '%s | Lubricon Specialities India',
  },
  description:
    'Lubricon Specialities India delivers premium industrial and automotive lubricants powered by Australian technology. Engineered for Indian conditions to maximize performance, reduce downtime, and extend equipment life.',
  keywords: [
    'lubricants India',
    'industrial lubricants',
    'engine oil India',
    'gear oil',
    'ATF transmission fluid',
    'AdBlue DEF',
    'Australian technology lubricants',
    'Lubricon India',
    'CK-4 engine oil',
    'vacuum pump oil',
    'EDM oil',
    'rust preventive',
  ],
  openGraph: {
    title: 'Lubricon Specialities India – Premium Lubricants',
    description:
      'Premium industrial and automotive lubricants backed by Australian technology, engineered for Indian conditions.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
