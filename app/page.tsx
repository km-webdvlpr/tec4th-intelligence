import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { capabilityStrip, platformLayers, whyTec4th } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="shell section hero-section">
        <div className="hero-panel corner-panel">
          <div className="hero-copy-wrap">
            <p className="hero-kicker">JOHANNESBURG BESPOKE SYSTEMS</p>
            <h1 className="hero-title">
              BESPOKE BUSINESS SYSTEMS. WITHOUT ENTERPRISE OVERHEAD.
            </h1>
            <p className="hero-copy">
              We build live, web-based operations platforms for service
              businesses &mdash; booking, workflow, oversight, and reporting in
              one system your whole team can use.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/contact">
                DISCUSS A SYSTEM
              </Link>
              <Link className="button button-secondary" href="/proof">
                SEE THE PROOF
              </Link>
            </div>
          </div>

          <aside className="hero-rail">
            <div className="signal-panel">
              <p className="rail-label">SYSTEM SIGNAL</p>
              <p className="signal-value">SYSTEMS BUILT: 01</p>
              <p className="signal-copy">
                Built close to the operator. Scoped honestly. Shipped to be
                used.
              </p>
            </div>

            <div className="signal-panel">
              <p className="rail-label">FOCUS</p>
              <ul className="rail-list">
                <li>SME OPERATORS</li>
                <li>CUSTOM WORKFLOW</li>
                <li>LOCAL-FIRST THINKING</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="shell section">
        <div className="platform-panel">
          <div className="platform-heading">
            <p className="section-label">PLATFORM SHAPE</p>
            <p className="platform-intro">
              Each system Tec4th builds follows the same structure: one
              platform, multiple roles, visible from every level of the
              business.
            </p>
          </div>

          <div className="platform-grid">
            {platformLayers.map((layer) => (
              <article className="platform-card" key={layer.title}>
                <h2>{layer.title}</h2>
                <p>{layer.copy}</p>
              </article>
            ))}
          </div>

          <p className="platform-note">
            Built as a live web application. Accessible from any device. No
            installation required.
          </p>
        </div>
      </section>

      <section className="shell section">
        <div className="capability-grid">
          {capabilityStrip.map((item) => (
            <article className="capability-card" key={item.title}>
              <div className={`glyph glyph-${item.glyph}`} aria-hidden="true" />
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <SectionHeading
          intro="Four reasons the work is framed the way it is: clear scope, grounded delivery, and systems built around the business rather than borrowed software categories."
          label="WHY TEC4TH"
          title="A build model that keeps the work close to the actual operation."
        />

        <div className="value-grid">
          {whyTec4th.map((item) => (
            <article className="value-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="signal-quote">
          <p className="quote-label">CLIENT SIGNAL</p>
          <blockquote>
            &ldquo;This feels like someone who can actually build the system.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell cta-band-inner">
          <div>
            <p className="band-label">START WHERE THE DRAG STARTS</p>
            <h2>
              If the business has outgrown spreadsheets, that is the place to
              start.
            </h2>
          </div>
          <Link className="button button-dark" href="/contact">
            START A BUILD CONVERSATION
          </Link>
        </div>
      </section>
    </>
  );
}
