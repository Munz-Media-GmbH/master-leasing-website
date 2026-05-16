import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SaleLeaseBack from "@/components/SaleLeaseBack";
import CTABanner from "@/components/CTABanner";
import SaleLeaseBackCTA from "@/components/SaleLeaseBackCTA";
import SaleLeaseBackHero from "@/components/SaleLeaseBackHero";

export const metadata: Metadata = {
  title: "Fahrzeug-Beleihung für Gewerbekunden – Ohne Bank, ohne SCHUFA | Master Leasing",
  description:
    "Fahrzeug beleihen statt verkaufen: Liquiditätsbestätigung in 24 Stunden – ohne Bankprüfung, ohne SCHUFA-Abfrage, ohne BWA. Diskret und bankenunabhängig.",
  alternates: { canonical: "https://master-leasing.com/sale-und-leaseback/" },
  robots: "follow, index",
};

export default function SaleUndLeasebackPage() {
  return (
    <>
      <Header />
      <main>
        <SaleLeaseBackHero />
        <SaleLeaseBack />
        <SaleLeaseBackCTA />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
