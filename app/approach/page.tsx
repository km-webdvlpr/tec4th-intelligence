import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { processSteps } from "@/lib/site-content";

export const metadata = {
  title: "Approach",
  description:
    "The consulting method used by Kopano Intelligence: diagnose, define metrics, structure data, build visibility, recommend action, and support adoption.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title="A consulting method designed to move from ambiguity to adoption."
        description="The workflow is mature enough for business-facing delivery but lean enough for founder-led engagements. Each step reduces noise and increases management usefulness."
        primaryCta={{ href: "/contact", label: "Book a consultation" }}
        secondaryCta={{ href: "/services", label: "Explore service models" }}
      />

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <div className="grid gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="panel p-8 lg:p-10">
                <div className="grid gap-6 lg:grid-cols-[120px_1fr_0.95fr] lg:items-start">
                  <div className="soft-panel flex h-20 w-20 items-center justify-center text-3xl font-semibold font-[var(--font-display)] text-ember">
                    0{index + 1}
                  </div>
                  <div>
                    <p className="eyebrow">{step.label}</p>
                    <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
                      {step.title}
                    </h2>
                    <p className="mt-4 text-dusk">{step.text}</p>
                  </div>
                  <div className="soft-panel p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusk">
                      Output
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-dusk">
                      {step.outputs.map((output) => (
                        <li key={output} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                          <span>{output}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="The point is not only to produce a dashboard. The point is to improve how an organisation sees and manages itself."
        description="That requires clear metrics, structured data, usable reporting, and support for adoption after the first delivery."
        primary={{ href: "/contact", label: "Discuss your reporting layer" }}
        secondary={{ href: "/case-studies", label: "Review a proof point" }}
      />
    </>
  );
}
