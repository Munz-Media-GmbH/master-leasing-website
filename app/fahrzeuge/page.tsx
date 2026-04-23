import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehiclesSection from "@/components/VehiclesSection";
import CTABanner from "@/components/CTABanner";
import { getVehicles } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Fahrzeuge – Master Leasing",
  description: "Entdecken Sie unsere aktuellen Leasingfahrzeuge. PKW, Transporter, LKW – ohne Schufa, ohne Bankprüfung.",
  alternates: { canonical: "https://master-leasing.com/fahrzeuge/" },
  robots: "follow, index",
};

export default async function FahrzeugePage() {
  const vehicles = await getVehicles();

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
            <span className="overline">Unsere Fahrzeuge</span>
            <h1 style={{ color: "#fff", marginBottom: "16px" }}>
              Ihr Wunsch<span style={{ color: "#E15C55" }}>fahrzeug</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "18px", maxWidth: "600px" }}>
              Freie Fahrzeugwahl – PKW, Transporter, LKW, Maschinen und mehr.
              Alle Fahrzeuge ohne Schufa-Prüfung leasbar.
            </p>
          </div>
        </section>

        <VehiclesSection vehicles={vehicles} />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
