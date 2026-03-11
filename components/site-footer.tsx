import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.28em] text-dusk">
            Operational Intelligence for Growing Organisations
          </div>
          <div className="mt-2 font-[var(--font-display)] text-3xl font-semibold">
            Kopano Intelligence
          </div>
          <p className="mt-3 max-w-xl text-sm text-dusk">
            Johannesburg-based consulting practice focused on KPI clarity,
            reporting systems, workflow visibility, and decision-ready analytics.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-dusk">
          <Link href="/contact">hello@kopanointelligence.co.za</Link>
          <p>Johannesburg, South Africa</p>
          <p>Available for remote consulting, advisory work, and project delivery.</p>
        </div>
      </div>
    </footer>
  );
}
