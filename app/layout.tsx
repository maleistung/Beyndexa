import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollProgress from "@/components/ScrollProgress";
import CookieNotice from "@/components/CookieNotice";
import { site } from "@/lib/site";
const plus = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-plus", display: "swap", adjustFontFallback: false });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap", adjustFontFallback: false });
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
    <html lang="en" className={`${plus.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <ScrollProgress /><SiteNav /><main>{children}</main><SiteFooter /><CookieNotice />
      </body>
    </html>
  );
}
