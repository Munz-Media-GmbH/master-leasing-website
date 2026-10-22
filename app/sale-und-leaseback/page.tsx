import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SaleLeaseBack from "@/components/SaleLeaseBack";
import CTABanner from "@/components/CTABanner";
import SaleLeaseBackCTA from "@/components/SaleLeaseBackCTA";
import SaleLeaseBackHero from "@/components/SaleLeaseBackHero";
import RatgeberLinks from "@/components/RatgeberLinks";

export const metadata: Metadata = {
  title: "Sale & Leaseback / Fahrzeugbeleihung – Auto beleihen",
  description:
    "Auto beleihen und weiterfahren: Mit Sale & Leaseback setzen Unternehmen Kapital aus PKW, LKW und Maschinen frei – ohne Bank und ohne Schufa.",
  alternates: { canonical: "https://master-leasing.com/sale-und-leaseback" },
  robots: "follow, index",
};

export default function SaleUndLeasebackPage() {
  return (
    <>
      <Header />
      <main>
        <SaleLeaseBackHero />
        <SaleLeaseBack />
        <RatgeberLinks topic="slb" title={<>Fragen zu <span style={{ color: "#E15C55" }}>Sale &amp; Leaseback / Fahrzeugbeleihung</span></>} />
        <SaleLeaseBackCTA />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
