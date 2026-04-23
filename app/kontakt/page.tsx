import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – Master Leasing",
  description:
    "Kontaktieren Sie Master Leasing für Ihre Leasinganfrage. Tel: 03331 29 77 92 · Am Waldrand 10, 16278 Angermünde · anfrage@master-leasing.com",
  alternates: { canonical: "https://master-leasing.com/kontakt/" },
  robots: "follow, index",
};

export default function KontaktPage() {
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
            <span className="overline">Kontakt</span>
            <h1 style={{ color: "#fff", marginBottom: "16px" }}>
              Nehmen Sie{" "}
              <span style={{ color: "#E15C55" }}>Kontakt auf</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "18px", maxWidth: "600px" }}>
              Wir beraten Sie gerne – kostenlos und unverbindlich.
              Leasingzusage oft schon in 24 Stunden.
            </p>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
