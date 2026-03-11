import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-content";

export const metadata = {
  title: "Services",
  description:
    "Consulting services covering operational dashboards, KPI packs, reporting audits, learning intelligence, workflow analytics, and bespoke reporting tools.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical analytics offers designed for outcomes, not billable ambiguity."
        description="Each service is structured around the management problem being solved, the reporting assets delivered, and the kind of organisation that benefits most."
        primaryCta={{ href: "/contact", label: "Request a KPI audit" }}
        secondaryCta={{ href: "/case-studies", label: "Review proof points" }}
      />

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-6">
          {services.map((service) => (
            <div key={service.slug} className="panel p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="eyebrow">{service.outcome}</p>
                  <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)]">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-dusk">{service.summary}</p>
                </div>
                <div className="soft-panel p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusk">
                    Ideal Client
                  </p>
                  <p className="mt-3 text-dusk">{service.idealClient}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold font-[var(--font-display)]">
                    Deliverables
                  </h3>
                  <ul className="mt-4 space-y-3 text-dusk">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-[var(--font-display)]">
                    Outcomes
                  </h3>
                  <ul className="mt-4 space-y-3 text-dusk">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="Start with the smallest intervention that unlocks better management visibility."
        description="Not every organisation needs a large implementation. Many need cleaner KPIs, a tighter reporting pack, or a sharper operational review."
        primary={{ href: "/contact", label: "Explore a dashboard project" }}
        secondary={{ href: "/contact", label: "Book a consultation" }}
      />
    </>
  );
}
