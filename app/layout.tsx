import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E15C55",
};

export const metadata: Metadata = {
  title: "Auto Leasing ohne Schufa – Leasing für gewerbliche Kunden | Master Leasing",
  description:
    "Master Leasing: Auto Leasing ohne Schufa für gewerbliche Kunden. Keine Bonitätsprüfung, flexible Konditionen, Zusage in 24h. Jetzt Leasinganfrage stellen!",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  alternates: { canonical: "https://master-leasing.com/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://master-leasing.com/",
    siteName: "Master Leasing",
    title: "Auto Leasing ohne Schufa – Master Leasing",
    description:
      "Keine Schufa, keine Bankprüfung – Leasingzusage in 24h. Für Unternehmen, Selbstständige & Gewerbetreibende.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Master Leasing – Auto Leasing ohne Schufa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Leasing ohne Schufa – Master Leasing",
    description:
      "Keine Schufa, keine Bankprüfung – Leasingzusage in 24h.",
    images: ["/images/hero-bg.jpg"],
  },
  metadataBase: new URL("https://master-leasing.com"),
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Master Leasing",
  description:
    "Auto Leasing ohne Schufa für gewerbliche Kunden. Keine Bonitätsprüfung, flexible Konditionen.",
  url: "https://master-leasing.com",
  telephone: "+49-3331-29-77-92",
  email: "anfrage@master-leasing.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Am Waldrand 10",
    postalCode: "16278",
    addressLocality: "Angermünde",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.0378,
    longitude: 13.9997,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "€€",
  areaServed: {
    "@type": "Country",
    name: "DE",
  },
  serviceType: [
    "Auto Leasing ohne Schufa",
    "Fahrzeug Leasing",
    "Geräteleasing",
    "Sale und Lease Back",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
