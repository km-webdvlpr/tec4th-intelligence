type SectionHeadingProps = {
  label: string;
  title: string;
  intro?: string;
};

export function SectionHeading({
  label,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
