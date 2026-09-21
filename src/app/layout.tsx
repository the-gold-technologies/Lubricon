import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import GoogleTranslator from '@/components/GoogleTranslator';

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof Node === 'function' && Node.prototype) {
                  var origRemoveChild = Node.prototype.removeChild;
                  Node.prototype.removeChild = function (child) {
                    if (child.parentNode !== this) {
                      return child;
                    }
                    return origRemoveChild.apply(this, arguments);
                  };

                  var origInsertBefore = Node.prototype.insertBefore;
                  Node.prototype.insertBefore = function (newNode, refNode) {
                    if (refNode && refNode.parentNode !== this) {
                      return this.appendChild(newNode);
                    }
                    return origInsertBefore.apply(this, arguments);
                  };
                }

                var s = localStorage.getItem('lubricon_font_size');
                if (s) {
                  var n = parseInt(s, 10);
                  if (!isNaN(n) && n >= 12 && n <= 26) {
                    document.documentElement.style.fontSize = n + 'px';
                  }
                }
                var savedLang = localStorage.getItem('lubricon_language');
                var c = document.cookie || '';
                var isHindi = savedLang === 'HI' || (savedLang !== 'EN' && (c.indexOf('googtrans=/en/hi') !== -1 || c.indexOf('googtrans=%2Fen%2Fhi') !== -1));

                if (isHindi) {
                  document.documentElement.classList.add('translating-hi');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <GoogleTranslator />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
