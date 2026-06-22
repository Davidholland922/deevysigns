import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://www.deevysigns.ie";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Deevy Signs | Signage, Vehicle Graphics & Branding · Portlaoise, Ireland",
    template: "%s | Deevy Signs",
  },
  description:
    "Premium signage, vehicle graphics and branding designed, manufactured and installed across Ireland. Van wrapping, shop front signs and commercial signage in Portlaoise, Laois.",
  keywords: [
    "Signs Portlaoise",
    "Vehicle Graphics Laois",
    "Shop Front Signs Ireland",
    "Van Wrapping Ireland",
    "Commercial Signage Ireland",
    "Vehicle Branding Ireland",
    "Signage Portlaoise",
    "Deevy Signs",
  ],
  authors: [{ name: "Brendan Deevy Signs" }],
  creator: "Brendan Deevy Signs",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: SITE_URL,
    siteName: "Deevy Signs",
    title:
      "Deevy Signs | Signage, Vehicle Graphics & Branding · Ireland",
    description:
      "Premium signage, vehicle graphics and branding — designed, manufactured and installed across Ireland.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Brendan Deevy Signs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deevy Signs | Signage, Vehicle Graphics & Branding",
    description:
      "Premium signage, vehicle graphics and branding across Ireland.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
};

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Brendan Deevy Signs",
  alternateName: "Deevy Signs",
  description:
    "Premium signage, vehicle graphics and branding company designing, manufacturing and installing across Ireland.",
  url: SITE_URL,
  telephone: "+353868600265",
  email: "dvsigns1@gmail.com",
  image: `${SITE_URL}/logo.jpg`,
  logo: `${SITE_URL}/logo.jpg`,
  priceRange: "€€",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+353868600265",
    contactType: "sales",
    areaServed: "IE",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Portlaoise",
    addressRegion: "Co. Laois",
    addressCountry: "IE",
  },
  areaServed: { "@type": "Country", name: "Ireland" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  makesOffer: [
    "Vehicle Graphics",
    "Shop Front Signage",
    "Window Graphics",
    "Commercial Signage",
    "Banners & Displays",
    "Branding & Rebranding",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IE" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
