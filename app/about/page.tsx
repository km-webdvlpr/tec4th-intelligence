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
        intro="Tec4th is a Johannesburg-based systems build practice shaped around the idea that bespoke platforms should feel grounded, direct, and useful."
        label="ABOUT"
        notes={[
          "FOUNDER-LED",
          "JOHANNESBURG-BASED",
          "ANALYST + DEVELOPER",
        ]}
        title="A founder-led build practice for businesses that need the system built, not just described."
      />

      <section className="shell section">
        <SectionHeading
          label="THE BUILDER"
          title={"Kabelo Makua \u2014 Johannesburg"}
        />

        <div className="about-grid">
          <div className="portrait-card builder-photo-card">
            <div className="portrait-placeholder builder-placeholder" aria-hidden="true">
              <span>[headshot]</span>
            </div>
            <p className="portrait-caption">[headshot]</p>
          </div>

          <div className="about-copy">
            <p>
              Tec4th is run by Kabelo Makua &mdash; a Johannesburg-based product
              analyst and systems builder with a background in business
              analysis, product analytics, and operational software delivery.
              The work is grounded in a simple conviction: practical operators
              deserve systems that were actually designed for the way their
              business moves. Not off-the-shelf. Not enterprise overhead. Just
              a working platform, scoped and shipped.
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
