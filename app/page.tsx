import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers3,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  caseStudies,
  featuredSectors,
  reasons,
  services,
  testimonials,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Operational Intelligence for Growing Organisations"
        title="Make operations visible. Turn reporting into decision support."
        description="Kopano Intelligence helps schools, training providers, SMEs, service businesses, and digital products move from spreadsheet chaos to structured KPI visibility, practical dashboards, and management-ready reporting."
        primaryCta={{ href: "/contact", label: "Book a consultation" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Clarify metrics that teams can actually trust",
            "Surface bottlenecks, drop-offs, and workflow gaps",
            "Build reporting systems leaders can use every week",
          ].map((item) => (
            <div key={item} className="soft-panel p-4 text-sm text-dusk">
              <CheckCircle2 className="mb-3 h-5 w-5 text-ember" />
              {item}
            </div>
          ))}
        </div>
      </PageHero>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Consulting Value"
            title="A solo consultancy built for leaders who need clarity, not analytics theatre."
            description="The work combines operational thinking, reporting discipline, and product-level execution. Engagements are designed to answer management questions quickly, improve metric trust, and leave behind systems a team can actually use."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Business-first framing",
                text: "Every dashboard, KPI pack, or review starts with management questions, reporting routines, and operational decisions.",
              },
              {
                icon: Layers3,
                title: "Structured data visibility",
                text: "Messy spreadsheets, fragmented exports, and manual reports are reworked into a reporting layer leaders can navigate.",
              },
              {
                icon: BarChart3,
                title: "Decision-ready outputs",
                text: "The deliverables are built for meetings, performance reviews, interventions, and executive updates rather than passive monitoring.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="panel p-8">
                <Icon className="h-8 w-8 text-ember" />
                <h3 className="mt-5 text-2xl font-semibold font-[var(--font-display)]">
                  {title}
                </h3>
                <p className="mt-3 text-dusk">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Focused offers for reporting, KPI clarity, and operational visibility."
            description="The consultancy is positioned for early-stage and growing organisations that need analytics momentum without the cost and sprawl of a large agency or enterprise platform."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <div key={service.slug} className="panel p-8">
                <p className="eyebrow">{service.outcome}</p>
                <h3 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-dusk">{service.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-dusk">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Featured Sectors"
            title="Relevant for organisations where operational decisions depend on better reporting."
            description="The consultancy is especially suited to environments where data exists but insight is fragmented: education, service operations, recruitment, SMEs, and digital products."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredSectors.map((sector) => (
              <div key={sector.title} className="soft-panel p-6">
                <h3 className="text-2xl font-semibold font-[var(--font-display)]">
                  {sector.title}
                </h3>
                <p className="mt-3 text-sm text-dusk">{sector.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why Work With Me"
              title="Sharp execution with the judgment of a strategist and operator."
              description="The practice is built around practical value: fast-scanning communication, grounded delivery, and enough technical depth to build the reporting layer rather than merely describe it."
            />
          </div>
          <div className="grid gap-5">
            {reasons.map((reason) => (
              <div key={reason.title} className="panel p-6">
                <h3 className="text-2xl font-semibold font-[var(--font-display)]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-dusk">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell">
          <div className="panel overflow-hidden">
            <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="eyebrow">Featured Case Study</p>
                <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)] sm:text-5xl">
                  Bontle: an operational intelligence proof point for service-team visibility.
                </h2>
                <p className="mt-5 max-w-2xl text-dusk">
                  Designed and shipped as a practical analytics product example, Bontle demonstrates how service workflows can be translated into measurable states, reliable KPI definitions, and executive-ready reporting architecture.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-dusk">
                  {caseStudies[0].tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-black/5 px-4 py-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/case-studies"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink"
                >
                  Read the case study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="soft-panel p-7">
                <p className="eyebrow">What It Demonstrates</p>
                <ul className="mt-5 space-y-4 text-sm text-dusk">
                  {caseStudies[0].results.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Learning Intelligence"
              title="A premium reporting layer for schools and training providers."
              description="This niche offer is positioned as a smarter alternative to bloated systems: focused dashboards for learner progress, attendance, cohort completion, interventions, and operational oversight."
            />
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-dusk">
              <GraduationCap className="h-4 w-4 text-ember" />
              Learning intelligence without pitching a full LMS rebuild
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Learner performance visibility by cohort, module, or facilitator",
              "Attendance, completion, and intervention tracking for academic or training teams",
              "Academic and operational dashboards that reduce manual reporting pressure",
              "Bespoke reporting structures aligned to real meetings and decisions",
            ].map((item) => (
              <div key={item} className="panel p-6 text-dusk">
                {item}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Early Social Proof"
            title="Positioned for consulting conversations, retained reporting, and short-term credibility."
            description="These reference statements are deliberately framed as the kind of signals a solo consultant can use early in market-facing outreach."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="panel p-8">
                <p className="text-dusk">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-dusk">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="If reporting is slow, unclear, or too manual, fix the reporting layer before the problem compounds."
        description="Start with a KPI audit, dashboard project, or a discussion about a reporting bottleneck that leadership keeps circling."
        primary={{ href: "/contact", label: "Discuss a reporting problem" }}
        secondary={{ href: "/approach", label: "See the method" }}
      />
    </>
  );
}
