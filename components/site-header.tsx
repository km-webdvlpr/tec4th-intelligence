"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="logo-mark" href="/">
          TEC4TH
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                className={isActive ? "nav-link is-active" : "nav-link"}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link className="button button-primary nav-button" href="/contact">
            START A BUILD
          </Link>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
            <span />
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>

      <div
        className={menuOpen ? "mobile-nav is-open" : "mobile-nav"}
        id="mobile-navigation"
      >
        <div className="shell mobile-nav-inner">
          {navigation.map((item) => (
            <Link key={item.href} className="mobile-link" href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-primary mobile-cta" href="/contact">
            START A BUILD
          </Link>
        </div>
      </div>
    </header>
  );
}
