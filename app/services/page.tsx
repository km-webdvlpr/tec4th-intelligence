import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Systems",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        intro="Three build shapes cover most of the work: internal workflow systems, reporting layers, and portals that reduce admin drag."
        label="SYSTEMS"
        notes={[
          "BESPOKE BUILDS ONLY",
          "PHASED DELIVERY AVAILABLE",
          "NO ENTERPRISE THEATRE",
        ]}
        title="Systems built for operators who need software that fits the business they already run."
      />

      <section className="shell section">
        <SectionHeading
          intro="Each card below keeps the scope tangible. The point is not to sound broad. The point is to show what Tec4th actually builds."
          label="SERVICE LINES"
          title="The work is practical, specific, and meant to reduce operational friction."
        />

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <p className="card-eyebrow">CUSTOM SYSTEM</p>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <ul className="scope-list">
                {service.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="button button-secondary" href={service.ctaHref}>
                {service.ctaLabel.toUpperCase()}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
