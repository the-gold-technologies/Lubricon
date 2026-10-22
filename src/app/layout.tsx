import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleTranslator from "@/components/GoogleTranslator";
import ScrollToTopOnNavigation from "@/components/ScrollToTopOnNavigation";
import JsonLd from "@/components/JsonLd";
import { CustomHeaderScripts, CustomFooterScripts } from "@/components/CustomCodeInjector";
import { getGlobalSEO } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const globalSeo = await getGlobalSEO();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: globalSeo?.siteTitle ?? undefined,
    description: globalSeo?.siteDescription ?? undefined,
    icons: globalSeo?.favicon
      ? {
          icon: globalSeo.favicon,
          shortcut: globalSeo.favicon,
          apple: globalSeo.favicon,
        }
      : undefined,
    verification: globalSeo?.searchConsoleId
      ? {
          google: globalSeo.searchConsoleId,
        }
      : undefined,
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const globalSeo = await getGlobalSEO();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Dynamic Favicon link tags so browser reliably gets it on every single page */}
        {globalSeo?.favicon && (
          <>
            <link rel="icon" href={globalSeo.favicon} />
            <link rel="shortcut icon" href={globalSeo.favicon} />
            <link rel="apple-touch-icon" href={globalSeo.favicon} />
          </>
        )}

        {/* Google Search Console verification meta */}
        {globalSeo?.searchConsoleId && (
          <meta name="google-site-verification" content={globalSeo.searchConsoleId} />
        )}

        {/* Google Tag Manager (GTM) */}
        {globalSeo?.gtmId && (
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${globalSeo.gtmId}');`,
            }}
          />
        )}

        {/* Google Analytics (gtag.js) */}
        {globalSeo?.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${globalSeo.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${globalSeo.googleAnalyticsId}');`,
              }}
            />
          </>
        )}

        {/* Global Structured Data (JSON-LD from CMS Global Config) */}
        {globalSeo?.schema && <JsonLd schema={globalSeo.schema} id="global-seo-jsonld" />}

        {/* Custom Header Scripts (from CMS Global Config) */}
        <CustomHeaderScripts content={globalSeo?.customHeaderScripts} />

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
        {/* GTM noscript fallback */}
        {globalSeo?.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${globalSeo.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <ScrollToTopOnNavigation />
        <GoogleTranslator />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />

        {/* Custom Footer Scripts (from CMS Global Config) */}
        <CustomFooterScripts content={globalSeo?.customFooterScripts} />
      </body>
    </html>
  );
}
