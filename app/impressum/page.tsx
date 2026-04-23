import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – Master Leasing",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://master-leasing.com/impressum/" },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main>
        <section
          style={{
            background: "#0a0a0a",
            paddingTop: "160px",
            paddingBottom: "100px",
            minHeight: "80vh",
          }}
        >
          <div className="container" style={{ maxWidth: "800px" }}>
            <h1 style={{ color: "#fff", marginBottom: "48px" }}>
              <span style={{ color: "#E15C55" }}>Impressum</span>
            </h1>

            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", lineHeight: 1.8, fontFamily: "'Inter', sans-serif" }}>

              <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "20px", marginBottom: "12px", marginTop: "40px" }}>
                Angaben gemäß § 5 TMG
              </h2>
              <p>Master Leasing<br />Am Waldrand 10<br />16278 Angermünde</p>

              <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "20px", marginBottom: "12px", marginTop: "40px" }}>
                Inhaber
              </h2>
              <p>Gregor Wernicke</p>

              <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "20px", marginBottom: "12px", marginTop: "40px" }}>
                Kontakt
              </h2>
              <p>
                Telefon: <a href="tel:+4903331297792" style={{ color: "#E15C55" }}>+49 3331 297792</a><br />
                E-Mail: <a href="mailto:anfrage@master-leasing.com" style={{ color: "#E15C55" }}>anfrage@master-leasing.com</a><br />
                Web: www.master-leasing.com
              </p>

              <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "20px", marginBottom: "12px", marginTop: "40px" }}>
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
                DE172630384<br />
                Finanzamt Angermünde
              </p>

              <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "20px", marginBottom: "12px", marginTop: "40px" }}>
                Zuständiges Gericht
              </h2>
              <p>AG Schwedt</p>

              <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "20px", marginBottom: "12px", marginTop: "40px" }}>
                Öffnungszeiten
              </h2>
              <p>Montag – Freitag: 9:00 – 18:00 Uhr</p>

              <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "20px", marginBottom: "12px", marginTop: "40px" }}>
                Haftungsausschluss
              </h2>
              <p>
                Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch
                keine Gewähr übernommen werden. Master Leasing bietet keine Rechts- oder
                Steuerberatung im Sinne des § 1 UWG bzw. des RBerG an.
              </p>
              <p style={{ marginTop: "16px" }}>
                Für die Inhalte verlinkter externer Websites wird keine Haftung übernommen.
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>

              <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "20px", marginBottom: "12px", marginTop: "40px" }}>
                Urheberrecht
              </h2>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
              </p>

              <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "20px", marginBottom: "12px", marginTop: "40px" }}>
                Hinweis zu unerwünschter Werbung
              </h2>
              <p>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung
                wird hiermit widersprochen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
