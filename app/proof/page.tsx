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
        intro="The page stays honest: one flagship proof card, two in-progress placeholders, and no fabricated testimonials."
        label="PROOF"
        notes={[
          "FLAGSHIP: BONTLE",
          "CLIENT SIGNALS, NOT HYPE",
          "MORE PROOF NOW IN BUILD",
        ]}
        title="Proof presented with enough confidence to show the work, and enough restraint to avoid theatre."
      />

      <section className="shell section">
        <SectionHeading
          intro="Bontle anchors the page as the first shipped proof marker. The supporting cards stay visible as future proof without pretending they are already final."
          label="CASE STUDY SIGNAL"
          title="A flagship proof card with room for the practice to grow around it."
        />

        <article className="proof-feature">
          <div className="proof-copy">
            <p className="card-eyebrow">FLAGSHIP BUILD</p>
            <h2>BONTLE</h2>
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
