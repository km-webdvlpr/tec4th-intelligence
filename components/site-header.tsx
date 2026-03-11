"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-mist/90 backdrop-blur">
      <div className="container-shell py-4">
        <div className="flex min-h-[60px] items-center justify-between gap-6">
          <Link href="/" className="min-w-fit">
            <div className="text-sm uppercase tracking-[0.28em] text-dusk">
              Johannesburg
            </div>
            <div className="font-[var(--font-display)] text-3xl font-semibold leading-none">
              Kopano Intelligence
            </div>
          </Link>
          <nav className="hidden flex-wrap items-center justify-end gap-5 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition ${active ? "text-ink" : "text-dusk hover:text-ink"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-black/20"
          >
            Book a consultation
          </Link>
        </div>
        <nav className="-mx-1 mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-ink text-white"
                    : "border border-black/10 bg-white text-dusk"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
