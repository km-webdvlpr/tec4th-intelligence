import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Kopano Intelligence | Operational Intelligence for Growing Organisations",
    template: "%s | Kopano Intelligence",
  },
  description:
    "Kopano Intelligence is a Johannesburg-based solo analytics consultancy helping schools, SMEs, service businesses, and digital products build KPI clarity, reporting systems, and operational visibility.",
  metadataBase: new URL("https://kopano-intelligence.co.za"),
  openGraph: {
    title: "Kopano Intelligence",
    description:
      "Operational intelligence, KPI design, dashboards, and reporting systems for growing organisations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kopano Intelligence",
    description:
      "Operational intelligence for growing organisations across South Africa and beyond.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-[var(--font-body)] text-[15px] leading-7 sm:text-base">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
