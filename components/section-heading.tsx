export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-[var(--font-display)] text-4xl font-semibold sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-dusk">{description}</p>
    </div>
  );
}
