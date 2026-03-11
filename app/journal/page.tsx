import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { insights } from "@/lib/site-content";

export const metadata = {
  title: "Journal",
  description:
    "A journal for operational intelligence, KPI design, reporting maturity, and learning analytics insights.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="A practical ideas shelf for reporting maturity, KPI design, and operational visibility."
        description="The journal is structured for future thought leadership that supports consulting conversations, outreach, and credibility with business-facing buyers."
        primaryCta={{ href: "/contact", label: "Discuss an idea" }}
        secondaryCta={{ href: "/services", label: "See service offers" }}
      />

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {insights.map((article) => (
            <article key={article.title} className="panel p-8">
              <p className="eyebrow">{article.category}</p>
              <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
                {article.title}
              </h2>
              <p className="mt-4 text-dusk">{article.summary}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                Request this perspective in a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="Useful thinking is part of the service."
        description="The journal is meant to show how reporting problems can be reframed clearly before they are solved operationally."
        primary={{ href: "/contact", label: "Book a consultation" }}
        secondary={{ href: "/approach", label: "Review the method" }}
      />
    </>
  );
}
