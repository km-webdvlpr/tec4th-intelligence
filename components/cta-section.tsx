import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  return (
    <AnimatedSection className="section-space">
      <div className="container-shell">
        <div className="panel p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow">Next Step</p>
              <h2 className="mt-3 text-balance font-[var(--font-display)] text-4xl font-semibold sm:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-dusk">{description}</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href={primary.href}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
              >
                {primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-ink"
              >
                {secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
