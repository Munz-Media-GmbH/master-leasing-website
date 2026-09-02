import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SaleLeaseBack from "@/components/SaleLeaseBack";
import CTABanner from "@/components/CTABanner";
import SaleLeaseBackCTA from "@/components/SaleLeaseBackCTA";
import SaleLeaseBackHero from "@/components/SaleLeaseBackHero";

export const metadata: Metadata = {
  title: "Sale & Leaseback / Fahrzeugbeleihung – Kapital freisetzen | Master Leasing",
  description:
    "Fahrzeug beleihen und weiterfahren: Sale & Leaseback / Fahrzeugbeleihung mit Master Leasing. Auto, Transporter oder Maschine verkaufen und zurückleasen – sofort Kapital freisetzen, ohne Bank & Schufa.",
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
