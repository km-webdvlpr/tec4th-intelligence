import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Mono, Lora } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteDescription } from "@/lib/site-data";

import "./globals.css";

const display = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const body = Lora({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://km-webdvlpr.github.io/tec4th-intelligence"
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tec4th | Bespoke Operations Platforms",
    template: "%s | Tec4th",
  },
  description: siteDescription,
  icons: {
    icon: `${siteUrl}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${display.variable} ${body.variable} ${mono.variable}`} lang="en">
      <body>
        <div className="site-frame">
          <SiteHeader />
          <main className="site-main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
