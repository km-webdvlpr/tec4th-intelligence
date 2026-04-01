import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { contactEmail, locationLabel } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        intro="Keep the first message simple: what the business does, where the admin drag lives, and what kind of system would make things easier."
        label="CONTACT"
        notes={[
          contactEmail.toUpperCase(),
          "SCOPED BUILDS",
          "PHASED DELIVERY AVAILABLE",
        ]}
        title="A clear contact path for businesses ready to replace spreadsheet sprawl with a better system."
      />

      <section className="shell section">
        <div className="contact-grid">
          <div className="contact-card">
            <p className="section-label">EMAIL</p>
            <a className="contact-email" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            <p className="contact-location">{locationLabel}</p>
            <p className="contact-note">
              Scoped builds, phased delivery, and payment plans available where
              needed.
            </p>
          </div>

          <div className="contact-panel">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
