import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { clientProfiles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Who It's For",
};

export default function WhoItsForPage() {
  return (
    <>
      <PageHero
        intro="This is for operators who know the admin is growing faster than the structure around it and need a system that is shaped to the work."
        label="WHO IT'S FOR"
        notes={[
          "SALONS",
          "TRAINING BUSINESSES",
          "SERVICE OPERATORS",
          "ADMIN-HEAVY TEAMS",
        ]}
        title="A good fit for businesses where spreadsheets still exist, but no longer make the operation feel manageable."
      />

      <section className="shell section">
        <SectionHeading
          intro="Each profile tile starts with the friction point, then names the sort of system Tec4th builds to address it."
          label="OPERATOR PROFILES"
          title="The site speaks to businesses with enough complexity to need structure, but not enough appetite for enterprise software."
        />

        <div className="profile-grid">
          {clientProfiles.map((profile) => (
            <article className="profile-card" key={profile.title}>
              <h2>{profile.title}</h2>
              <p className="profile-label">PAIN STATEMENT</p>
              <p>{profile.pain}</p>
              <p className="profile-label">WHAT TEC4TH BUILDS</p>
              <p>{profile.build}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
