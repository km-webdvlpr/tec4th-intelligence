import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { industries } from "@/lib/site-content";

export const metadata = {
  title: "Industries",
  description:
    "Industry-specific analytics consulting for education, service operations, SMEs, digital products, and recruitment or workforce operations.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Analytics tailored to the reporting realities of growing organisations."
        description="Different sectors generate different visibility problems. The work adapts to the pace, language, and operational questions of each environment."
        primaryCta={{ href: "/contact", label: "Discuss your sector" }}
        secondaryCta={{ href: "/services", label: "View services" }}
      />

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-6">
          {industries.map((industry) => (
            <div key={industry.slug} className="panel p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="eyebrow">{industry.label}</p>
                  <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)]">
                    {industry.title}
                  </h2>
                  <p className="mt-4 text-dusk">{industry.summary}</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="soft-panel p-6">
                    <h3 className="text-lg font-semibold font-[var(--font-display)]">
                      Common pain points
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-dusk">
                      {industry.painPoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="soft-panel p-6">
                    <h3 className="text-lg font-semibold font-[var(--font-display)]">
                      How analytics helps
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-dusk">
                      {industry.analyticsHelps.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="If your team is still managing performance through exports, screenshots, and manual reconciliations, there is room to tighten the system."
        description="The right reporting layer depends on the sector, the operating rhythm, and what leaders genuinely need to see."
        primary={{ href: "/contact", label: "Discuss a reporting problem" }}
        secondary={{ href: "/about", label: "Learn about the practice" }}
      />
    </>
  );
}
