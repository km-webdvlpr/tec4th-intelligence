import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { proofPlaceholders, proofPoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Proof",
};

export default function ProofPage() {
  return (
    <>
      <PageHero
        intro="One live flagship build shows the platform shape in the market. The two placeholders stay visible so the page stays honest about what is still in progress."
        label="PROOF"
        notes={[
          "FLAGSHIP BUILD LIVE",
          "CLIENT SIGNALS, NOT HYPE",
          "MORE PROOF NOW IN BUILD",
        ]}
        title="Proof presented with one live system, clear scope, and no fabricated case study theatre."
      />

      <section className="shell section">
        <SectionHeading
          intro="One shipped retail operations platform anchors the page. The supporting cards stay visible as future proof without pretending they are already final."
          label="CASE STUDY SIGNAL"
          title="A live flagship build with room for the practice to grow around it."
        />

        <article className="proof-feature">
          <div className="proof-copy">
            <p className="card-eyebrow">FLAGSHIP BUILD</p>
            <h2>RETAIL OPERATIONS PLATFORM</h2>
            <p className="proof-location">
              JOHANNESBURG, SOUTH AFRICA &mdash; SHIPPED
            </p>
            <ul className="proof-list">
              {proofPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="proof-stamp-wrap">
            <div className="proof-stamp">SHIPPED</div>
          </div>
        </article>

        <p className="proof-callout">
          This system is live. The same platform shape can be scoped for your
          business.
        </p>

        <div className="placeholder-grid">
          {proofPlaceholders.map((item) => (
            <article className="placeholder-card" key={item.title}>
              <p className="placeholder-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
