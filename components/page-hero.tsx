import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Cta = {
  href: string;
  label: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  children?: ReactNode;
}) {
  return (
    <section className="section-space section-divider">
      <div className="container-shell">
        <div className="panel overflow-hidden p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-balance font-[var(--font-display)] text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-base text-dusk sm:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-ink"
                >
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="soft-panel p-6 lg:p-8">
              {children ?? (
                <div className="space-y-4">
                  <p className="eyebrow">What Clients Gain</p>
                  <div className="grid gap-3 text-sm text-dusk">
                    <div className="rounded-2xl bg-white px-4 py-4">
                      Clearer KPI definitions and management language
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-4">
                      Reporting that fits leadership routines and operating decisions
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-4">
                      A practical path from messy data to usable visibility
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
