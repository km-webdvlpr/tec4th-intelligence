import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "About",
  description:
    "About the founder of Kopano Intelligence, a Johannesburg-based analytics consultant focused on operational intelligence, KPI design, and practical reporting systems.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An analytics consultant with operational judgment, product depth, and a practical South African lens."
        description="Kopano Intelligence is designed as a solo boutique practice for organisations that need sharper reporting, clearer metrics, and better decision support without unnecessary complexity."
        primaryCta={{ href: "/contact", label: "Book a consultation" }}
        secondaryCta={{ href: "/journal", label: "Read insights" }}
      />

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="panel p-8 lg:p-10">
            <h2 className="text-4xl font-semibold font-[var(--font-display)]">
              Positioned between analyst, strategist, and systems thinker.
            </h2>
            <p className="mt-5 text-dusk">
              The founder&apos;s public body of work already points in one direction: business-facing analytics, structured communication, operational thinking, and practical frameworks that help people move from raw data to management action.
            </p>
            <p className="mt-5 text-dusk">
              That includes work shaped around SQL, Power BI, Python, KPI design, reporting discipline, and product execution with React, TypeScript, FastAPI, and PostgreSQL. The consultancy uses that range to bridge strategy and implementation instead of separating them.
            </p>
          </div>
          <div className="soft-panel p-8">
            <p className="eyebrow">What clients can expect</p>
            <ul className="mt-5 space-y-4 text-dusk">
              {[
                "Business-first framing that connects reporting outputs to real management routines",
                "Clear communication that stays concise, structured, and practical",
                "Sensitivity to the realities of South African and African operating environments",
                "Enough technical depth to shape data models, dashboards, and reporting workflows directly",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Business context",
              text: "The consultancy is grounded in the kinds of reporting questions leaders actually ask: where performance is slipping, what is blocked, and what requires intervention.",
            },
            {
              title: "Operational intelligence",
              text: "The focus is on workflows, state changes, bottlenecks, throughput, and KPI definitions that reflect how work truly moves.",
            },
            {
              title: "Practical value",
              text: "Theory matters when it improves decisions. The bias is toward useful systems, credible analysis, and outputs that can be used the same week they are delivered.",
            },
          ].map((item) => (
            <div key={item.title} className="panel p-8">
              <h3 className="text-3xl font-semibold font-[var(--font-display)]">
                {item.title}
              </h3>
              <p className="mt-4 text-dusk">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="This site is built to start serious consulting conversations quickly."
        description="It can support freelance work, short-term contract roles, retained reporting engagements, and selective consulting projects with growing organisations."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/services", label: "Review the offers" }}
      />
    </>
  );
}
