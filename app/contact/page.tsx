import { Mail, MapPin, MessageSquareMore } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Contact",
  description:
    "Contact Kopano Intelligence to discuss dashboard projects, KPI audits, monthly reporting, and operational intelligence consulting.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with the reporting problem that is costing the most clarity."
        description="Use the form to enquire about a dashboard project, KPI audit, monthly reporting support, or a scoped operational intelligence review."
        primaryCta={{ href: "#contact-form", label: "Send an enquiry" }}
        secondaryCta={{ href: "mailto:hello@kopanointelligence.co.za", label: "Email directly" }}
      />

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            <div className="panel p-7">
              <Mail className="h-6 w-6 text-ember" />
              <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                Email
              </h2>
              <p className="mt-3 text-dusk">hello@kopanointelligence.co.za</p>
            </div>
            <div className="panel p-7">
              <MapPin className="h-6 w-6 text-ember" />
              <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                Base
              </h2>
              <p className="mt-3 text-dusk">
                Johannesburg, South Africa
                <br />
                Available for remote consulting and selective on-site sessions.
              </p>
            </div>
            <div className="panel p-7">
              <MessageSquareMore className="h-6 w-6 text-ember" />
              <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                Typical enquiries
              </h2>
              <ul className="mt-3 space-y-2 text-dusk">
                <li>Dashboard setup projects</li>
                <li>Reporting audits and KPI clarification</li>
                <li>Monthly reporting retainers</li>
                <li>Learning intelligence for schools and academies</li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </AnimatedSection>
    </>
  );
}
