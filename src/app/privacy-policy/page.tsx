import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck, Calendar, Phone, Mail, ChevronRight, Lock, CheckCircle2 } from "lucide-react";
import { getPageSEO, getGlobalSEO, buildMetadata, sanitizeHeadingTag } from "@/lib/seo";
import { getContactInfo } from "@/lib/contact";
import { getApiBaseUrl } from "@/lib/api";

export const dynamic = "force-dynamic";

interface PrivacyPolicyData {
  title?: string;
  heroBadge?: string;
  heroHeading?: string;
  heroDescription?: string;
  heroBannerImage?: string;
  lastUpdated?: string;
  content?: string;
  isPublished?: boolean;
}

function formatPolicyContent(raw?: string | null): string {
  if (!raw || !raw.trim()) {
    return "";
  }

  const trimmed = raw.trim();
  const hasHtml = /<(p|div|h[1-6]|ul|ol|li|br|table|section)[^>]*>/i.test(trimmed);

  if (!hasHtml) {
    // Content is plain text / markdown-like with newlines
    const blocks = trimmed
      .split(/\n{2,}/)
      .map((b) => b.trim())
      .filter(Boolean);

    return blocks
      .map((block) => {
        // Numbered heading: e.g. "1. Information We Collect"
        if (/^\d+\.\s+[A-Z0-9]/i.test(block) && block.length < 120 && !block.includes("\n")) {
          return `<h2>${block}</h2>`;
        }

        const lines = block
          .split(/\n/)
          .map((l) => l.trim())
          .filter(Boolean);

        if (lines.length > 1) {
          // If bulleted list
          if (lines.every((l) => /^[-•*]\s+/.test(l))) {
            const lis = lines.map((l) => `<li>${l.replace(/^[-•*]\s+/, "")}</li>`).join("");
            return `<ul>${lis}</ul>`;
          }

          // Format lines with key prefixes (e.g. "Business & Contact Details: ...")
          const formattedLines = lines.map((l) => {
            const colonIdx = l.indexOf(":");
            if (colonIdx > 0 && colonIdx < 50 && !l.startsWith("http")) {
              const key = l.substring(0, colonIdx);
              const val = l.substring(colonIdx + 1);
              return `<strong>${key}:</strong>${val}`;
            }
            return l;
          });

          return `<p>${formattedLines.join("<br />")}</p>`;
        }

        return `<p>${block}</p>`;
      })
      .join("");
  }

  // Content has HTML: upgrade unstyled <p>1. Section</p> or <p><strong>1. Section</strong></p> into <h2>
  let formatted = trimmed.replace(
    /<p(?:\s+[^>]*)?>\s*(?:<strong>)?\s*(\d+\.\s+[A-Za-z0-9\s,&/()'-]{3,100})\s*(?:<\/strong>)?\s*<\/p>/gi,
    "<h2>$1</h2>",
  );

  return formatted;
}

async function getPrivacyPolicyData(): Promise<PrivacyPolicyData | null> {
  try {
    const baseUrl = getApiBaseUrl();
    const res = await fetch(`${baseUrl}/api/privacy-policy`, {
      cache: "no-store",
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return json.data;
      }
    }
  } catch (err) {
    console.error("Failed to load privacy policy from CMS:", err);
  }
  return null;
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("privacy-policy");
  return buildMetadata(
    seo,
    "Privacy Policy | Lubricon Specialities India",
    "Read the official Privacy Policy of Lubricon Specialities India — Australian technology lubricants and industrial fluids data protection practices.",
  );
}

export default async function PrivacyPolicyPage() {
  const [data, seo, globalSeo] = await Promise.all([
    getPrivacyPolicyData(),
    getPageSEO("privacy-policy"),
    getGlobalSEO(),
  ]);
  const contact = getContactInfo(globalSeo);

  if (!data) {
    notFound();
  }

  const HeadingTag = sanitizeHeadingTag(seo?.headingOptions || "h1");
  const heroTitle = data.heroHeading || data.title || "Privacy Policy";

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Injection */}
      {seo?.schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seo.schema }} />
      )}

      {/* ── 1. PREMIUM HERO SECTION FROM CMS ── */}
      <section className="relative py-14 sm:py-18 lg:py-20 bg-black text-white border-b-4 border-[#ffe000] overflow-hidden">
        {/* Hero Background Banner Image from DB */}
        {data.heroBannerImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={data.heroBannerImage}
              alt={heroTitle}
              fill
              priority
              className="object-cover object-center opacity-40 scale-105"
            />
            {/* Multi-layered dark vignette and gold ambient glows */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
          </div>
        )}

        {/* Ambient decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffe000]/10 rounded-full blur-3xl pointer-events-none z-1" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start max-w-4xl">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-zinc-400 mb-5"
            >
              <Link href="/" className="hover:text-[#ffe000] transition-colors">
                Home
              </Link>
              <ChevronRight size={12} className="text-zinc-600" />
              <span className="text-[#ffe000] font-semibold">{heroTitle}</span>
            </nav>

            {/* Pill Badge */}
            {data.heroBadge && (
              <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-black text-xs uppercase px-3.5 py-1.5 rounded-full mb-4 w-fit tracking-wider shadow-sm">
                <ShieldCheck size={14} className="stroke-[2.5]" />
                <span>{data.heroBadge}</span>
              </div>
            )}

            {/* Main Headline */}
            <HeadingTag className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
              {heroTitle}
            </HeadingTag>

            {/* Subtitle / Narrative */}
            {data.heroDescription && (
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                {data.heroDescription}
              </p>
            )}

            {/* Metadata Pills Strip */}
            <div className="flex items-center gap-3 flex-wrap text-xs font-semibold text-zinc-300">
              {data.lastUpdated && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300">
                  <Calendar size={13} className="text-[#ffe000]" />
                  <span>Last Updated: {data.lastUpdated}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300">
                <Lock size={13} className="text-[#ffe000]" />
                <span>Enterprise Data Security</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300">
                <CheckCircle2 size={13} className="text-[#ffe000]" />
                <span>Non-Disclosure Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PRIVACY POLICY CONTENT SECTION ── */}
      <section className="w-full bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Main Content Rendered with Dedicated Responsive Typography */}
          {data.content ? (
            <article
              className="policy-content"
              dangerouslySetInnerHTML={{ __html: formatPolicyContent(data.content) }}
            />
          ) : (
            <div className="py-12 text-center text-zinc-400">
              Policy content is currently being prepared.
            </div>
          )}

          {/* ── 3. BOTTOM COMPLIANCE & CONTACT BANNER ── */}
          <div className="mt-16 pt-10 border-t-2 border-zinc-100">
            <div className="rounded-2xl bg-zinc-900 text-white p-6 sm:p-8 lg:p-10 border border-zinc-800 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#ffe000]/15 text-[#ffe000] border border-[#ffe000]/30 mb-3">
                  Grievance &amp; Compliance Desk
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                  Need Help or Have Privacy Inquiries?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Our compliance officer and data protection desk are available to address queries
                  regarding your personal data, technical specifications, or quotation details.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
                <a
                  href={contact.phoneHref}
                  className="px-5 py-3 rounded-xl bg-black hover:bg-zinc-800 border border-zinc-700 hover:border-[#ffe000] transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ffe000] text-black flex items-center justify-center shrink-0">
                    <Phone size={15} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      Toll Free Helpline
                    </div>
                    <div className="text-sm font-black text-white group-hover:text-[#ffe000] transition-colors">
                      {contact.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="px-5 py-3 rounded-xl bg-black hover:bg-zinc-800 border border-zinc-700 hover:border-[#ffe000] transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 text-[#ffe000] flex items-center justify-center shrink-0">
                    <Mail size={15} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      Email Compliance Desk
                    </div>
                    <div className="text-sm font-black text-white group-hover:text-[#ffe000] transition-colors">
                      {contact.email}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
