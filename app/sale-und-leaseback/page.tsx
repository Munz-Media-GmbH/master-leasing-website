import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SaleLeaseBack from "@/components/SaleLeaseBack";
import CTABanner from "@/components/CTABanner";
import SaleLeaseBackForm from "@/components/SaleLeaseBackForm";

export const metadata: Metadata = {
  title: "Sale & Lease Back – Kapital freisetzen | Master Leasing",
  description:
    "Sale & Lease Back mit Master Leasing: Fahrzeug oder Maschine verkaufen und zurückleasen. Sofort Kapital freisetzen – ohne Schufa-Prüfung.",
  alternates: { canonical: "https://master-leasing.com/sale-und-leaseback/" },
  robots: "follow, index",
};

export default function SaleUndLeasebackPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #101010 60%, #1a0a0a 100%)",
            paddingTop: "160px",
            paddingBottom: "80px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container">
            <span className="overline">Sale &amp; Lease Back</span>
            <h1 style={{ color: "#fff", marginBottom: "16px" }}>
              Kapital freisetzen –{" "}
              <span style={{ color: "#E15C55" }}>Fahrzeug behalten</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "18px", maxWidth: "600px" }}>
              Verkaufen Sie Ihr Fahrzeug oder Ihre Maschine an uns und leasen Sie es
              direkt zurück. Sofortige Liquidität – weiterhin volle Nutzung.
            </p>
          </div>
        </section>

        <SaleLeaseBack />
        <SaleLeaseBackForm />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
