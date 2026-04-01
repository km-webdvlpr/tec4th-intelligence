import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { brandValues } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        intro="Tec4th is a Johannesburg-based consultancy practice built around the idea that bespoke systems should feel grounded, direct, and useful."
        label="ABOUT"
        notes={[
          "FOUNDER-LED",
          "JOHANNESBURG-BASED",
          "ANALYST + DEVELOPER",
        ]}
        title="A one-person consultancy for businesses that need the system built, not just described."
      />

      <section className="shell section">
        <SectionHeading
          intro="The tone stays grounded on purpose. The work is serious, practical, and close to the businesses it is made for."
          label="FOUNDER"
          title="Kabelo Makua"
        />

        <div className="about-grid">
          <div className="portrait-card">
            <div className="portrait-placeholder" aria-hidden="true">
              <span>KM</span>
            </div>
            <p className="portrait-caption">Headshot placeholder</p>
          </div>

          <div className="about-copy">
            <p>
              I&apos;m Kabelo Makua, a Johannesburg-based analyst and developer
              with a background in product analytics and business systems.
              Tec4th exists for operators who can feel the business outgrowing
              spreadsheets, but do not need enterprise theatre to solve the
              problem.
            </p>
            <p>
              The work is hands-on from discovery through shipping. That means
              the system is shaped around the real workflow, the admin pressure
              points, and the reporting the business actually needs to see.
            </p>
          </div>
        </div>

        <div className="value-grid value-grid-three">
          {brandValues.map((value) => (
            <article className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
