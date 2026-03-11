import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { caseStudies } from "@/lib/site-content";

export const metadata = {
  title: "Case Studies",
  description:
    "Case studies and proof points showing how Kopano Intelligence frames workflow visibility, KPI design, and executive reporting.",
};

export default function CaseStudiesPage() {
  const [flagship, ...futureStudies] = caseStudies;

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Proof framed around measurable operations, trusted metrics, and management visibility."
        description="The flagship example below is presented honestly as a designed and shipped product case study that demonstrates consulting capability without overstating deployment claims."
        primaryCta={{ href: "/contact", label: "Request a project conversation" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
      />

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell">
          <div className="panel p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="eyebrow">Flagship Case Study</p>
                <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)] sm:text-5xl">
                  {flagship.title}
                </h2>
                <p className="mt-5 text-dusk">{flagship.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-dusk">
                  {flagship.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-black/5 px-4 py-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="soft-panel p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusk">
                  What it shows
                </p>
                <ul className="mt-4 space-y-3 text-dusk">
                  {flagship.results.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {flagship.highlights.map((highlight) => (
                <div key={highlight.title} className="soft-panel p-6">
                  <h3 className="text-2xl font-semibold font-[var(--font-display)]">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm text-dusk">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Future Case Study Structure</p>
              <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)]">
                Built to accommodate more proof as client work grows.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
            >
              Ask about similar work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {futureStudies.map((study) => (
              <div key={study.title} className="panel p-8">
                <p className="eyebrow">{study.status}</p>
                <h3 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
                  {study.title}
                </h3>
                <p className="mt-4 text-dusk">{study.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-dusk">
                  {study.framework.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="Strong case studies start with scoped, measurable consulting work."
        description="A KPI audit, reporting redesign, or workflow analytics project can become the next proof point when the work is structured well from day one."
        primary={{ href: "/contact", label: "Start a scoped project" }}
        secondary={{ href: "/approach", label: "See the consulting workflow" }}
      />
    </>
  );
}
