import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollProgress from "@/components/ScrollProgress";
import CookieNotice from "@/components/CookieNotice";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  keywords: ["Beyondexa", "Beyondexa LLC", "operating group", "consumer brands", "global commerce", "Wyoming"],
  openGraph: { type: "website", siteName: site.name, title: `${site.name} — ${site.tagline}`, description: site.description, url: site.url },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: { index: true, follow: true },
};
const org = { "@context": "https://schema.org", "@type": "Organization", name: site.legalName, url: site.url, email: site.email, foundingDate: site.founded,
  address: { "@type": "PostalAddress", streetAddress: site.address.line1, addressLocality: site.address.city, addressRegion: site.address.region, postalCode: site.address.postal, addressCountry: "US" } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" />
      </head>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <ScrollProgress /><SiteNav /><main>{children}</main><SiteFooter /><CookieNotice />
      </body>
    </html>
  );
}
