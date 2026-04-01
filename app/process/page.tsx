import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Process",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        intro="The method is simple on purpose: understand the problem clearly, scope it honestly, build it properly, then stay close enough to keep it useful."
        label="PROCESS"
        notes={[
          "DISCOVERY TO SUPPORT",
          "CLEAR PHASES",
          "DESIGNED TO SHIP",
        ]}
        title="A five-step process that keeps custom software grounded in the business rather than drifting into abstraction."
      />

      <section className="shell section">
        <SectionHeading
          intro="The flow is linear enough to be legible and flexible enough to work across different kinds of operator-led systems."
          label="METHOD"
          title="Discovery, scope, build, ship, support."
        />

        <ol className="timeline">
          {processSteps.map((step) => (
            <li className="timeline-step" key={step.number}>
              <p className="timeline-number">{step.number}</p>
              <h2>{step.title}</h2>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
