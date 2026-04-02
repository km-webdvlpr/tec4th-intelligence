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
        intro="Tec4th is a Johannesburg-based systems build practice shaped around the idea that bespoke platforms should feel grounded, durable, and useful."
        label="ABOUT"
        notes={[
          "SYSTEMS BUILDER",
          "JOHANNESBURG-BASED",
          "LONG-RUN THINKING",
        ]}
        title="A systems build practice for businesses that need the system built, not just described."
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
              Tec4th is run by Kabelo Makua &mdash; a Johannesburg-based
              systems builder with a background in business analysis, product
              analytics, and operational software delivery. The work is not
              framed around founder theatre. The standard is simpler: build a
              system the business can actually keep using. Clear roles. Clear
              visibility. A platform that still makes sense a year later.
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
