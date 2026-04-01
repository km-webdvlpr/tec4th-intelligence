import Link from "next/link";

import { contactEmail, locationLabel } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-mark">TEC4TH</p>
          <p className="footer-copy">
            Bespoke workflow, admin, and reporting systems for businesses
            that have outgrown spreadsheets.
          </p>
        </div>
        <div className="footer-meta">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <p>{locationLabel}</p>
          <p>Copyright {new Date().getFullYear()} Tec4th</p>
        </div>
        <div className="footer-links">
          <Link href="/services">Systems</Link>
          <Link href="/proof">Proof</Link>
          <Link href="/contact">Start a build</Link>
        </div>
      </div>
    </footer>
  );
}
