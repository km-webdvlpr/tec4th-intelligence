type PageHeroProps = {
  label: string;
  title: string;
  intro: string;
  notes: string[];
};

export function PageHero({ label, title, intro, notes }: PageHeroProps) {
  return (
    <section className="shell section hero-page-section">
      <div className="page-hero-panel corner-panel">
        <div className="page-hero-copy">
          <p className="hero-kicker">{label}</p>
          <h1 className="page-title">{title}</h1>
          <p className="page-intro">{intro}</p>
        </div>
        <aside className="page-hero-rail">
          <p className="rail-label">PAGE SIGNAL</p>
          <ul className="rail-list">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
