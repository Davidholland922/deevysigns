import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { FAQS, SERVICE_AREAS, SERVICES } from "@/lib/data";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://www.deevysigns.com";

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
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Brendan Deevy Signs — vehicle graphics and shop front signage in Portlaoise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deevy Signs | Signage, Vehicle Graphics & Branding",
    description:
      "Premium signage, vehicle graphics and branding across Ireland.",
    images: ["/og.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Deevy Signs",
      description:
        "Premium signage, vehicle graphics and branding in Portlaoise, Co. Laois, serving all of Ireland.",
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en-IE",
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${SITE_URL}/#business`,
      name: "Brendan Deevy Signs",
      alternateName: "Deevy Signs",
      description:
        "Premium signage, vehicle graphics and branding company designing, manufacturing and installing across Ireland. Van wrapping, shop front signs, window graphics and commercial signage in Portlaoise, Co. Laois.",
      url: SITE_URL,
      telephone: "+353868600265",
      email: "dvsigns1@gmail.com",
      image: [
        `${SITE_URL}/signs/sign-2.jpg`,
        `${SITE_URL}/wraps/wrap-1.jpg`,
        `${SITE_URL}/signs/sign-1.jpg`,
      ],
      logo: `${SITE_URL}/logo.jpg`,
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Card, Bank Transfer",
      slogan: "Making businesses impossible to ignore",
      knowsAbout: [
        "Vehicle wrapping",
        "Van graphics",
        "Fleet livery",
        "Shop front signage",
        "Illuminated signs",
        "Window graphics",
        "Commercial signage",
        "Large format printing",
        "Brand identity",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portlaoise",
        addressRegion: "Co. Laois",
        addressCountry: "IE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 53.0344,
        longitude: -7.2997,
      },
      hasMap: "https://www.google.com/maps/place/Portlaoise,+Co.+Laois",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+353868600265",
        contactType: "sales",
        areaServed: "IE",
        availableLanguage: "English",
      },
      areaServed: [
        ...SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
        { "@type": "Country", name: "Ireland" },
      ],
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Signage & Branding Services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            areaServed: { "@type": "Country", name: "Ireland" },
            provider: { "@id": `${SITE_URL}/#business` },
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
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
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
