import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Master Leasing",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://master-leasing.com/datenschutzerklaerung/" },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginTop: "40px" }}>
    <h2
      style={{
        color: "#fff",
        fontFamily: "'Quantico', sans-serif",
        fontSize: "20px",
        marginBottom: "12px",
      }}
    >
      {title}
    </h2>
    <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", lineHeight: 1.8 }}>
      {children}
    </div>
  </div>
);

export default function DatenschutzPage() {
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
          <div className="container" style={{ maxWidth: "800px", fontFamily: "'Inter', sans-serif" }}>
            <h1 style={{ color: "#fff", marginBottom: "12px" }}>
              <span style={{ color: "#E15C55" }}>Datenschutz</span>erklärung
            </h1>
            <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "48px" }}>
              Stand: April 2025
            </p>

            <Section title="Verantwortlicher">
              <p>
                Master Leasing<br />
                Gregor Wernicke<br />
                Am Waldrand 10<br />
                16278 Angermünde<br />
                Telefon: <a href="tel:+4903331297792" style={{ color: "#E15C55" }}>03331 297792</a><br />
                E-Mail: <a href="mailto:anfrage@master-leasing.com" style={{ color: "#E15C55" }}>anfrage@master-leasing.com</a>
              </p>
            </Section>

            <Section title="Erhebung und Verarbeitung personenbezogener Daten">
              <p>
                Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer
                Anfrage freiwillig mitteilen (z.B. Name, E-Mail-Adresse, Telefonnummer).
                Darüber hinaus werden beim Besuch unserer Website automatisch technische
                Daten erfasst (Browser-Typ, Betriebssystem, IP-Adresse, Zugriffszeit).
              </p>
            </Section>

            <Section title="Zwecke der Datenverarbeitung">
              <ul style={{ paddingLeft: "20px" }}>
                <li>Beantwortung von Anfragen und Vertragsabwicklung</li>
                <li>Bereitstellung und Verbesserung unserer Website</li>
                <li>Analyse des Nutzerverhaltens zur Optimierung unserer Angebote</li>
                <li>Erfüllung gesetzlicher Verpflichtungen</li>
              </ul>
            </Section>

            <Section title="Rechtsgrundlagen">
              <p>
                Die Verarbeitung Ihrer Daten erfolgt auf Basis Ihrer Einwilligung (Art. 6
                Abs. 1 lit. a DSGVO), zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO),
                zur Erfüllung rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO)
                sowie auf Basis unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f
                DSGVO).
              </p>
            </Section>

            <Section title="Hosting">
              <p>
                Diese Website wird bei Vercel Inc. gehostet. Beim Abruf unserer Website
                werden automatisch Verbindungsdaten (IP-Adresse, Datum, Uhrzeit,
                abgerufene Seite) in Server-Logfiles gespeichert. Diese Daten werden nicht
                mit anderen Datenquellen zusammengeführt.
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                Unsere Website verwendet Cookies, um die Nutzung zu erleichtern. Sie können
                die Speicherung von Cookies in Ihrem Browser deaktivieren. Dies kann jedoch
                die Funktionalität der Website einschränken.
              </p>
            </Section>

            <Section title="Drittanbieter-Dienste">
              <p>Wir setzen folgende Drittanbieter-Dienste ein:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
                <li><strong style={{ color: "#fff" }}>Google Analytics / Tag Manager:</strong> Analyse des Nutzerverhaltens (Opt-out möglich)</li>
                <li><strong style={{ color: "#fff" }}>Google Fonts:</strong> Darstellung von Schriftarten (lokal eingebunden)</li>
                <li><strong style={{ color: "#fff" }}>Cloudflare:</strong> Sicherheit und Performance</li>
              </ul>
              <p style={{ marginTop: "12px" }}>
                Einige dieser Dienste übertragen Daten in die USA. Die Übertragung erfolgt
                auf Basis von Standardvertragsklauseln gem. Art. 46 DSGVO.
              </p>
            </Section>

            <Section title="Ihre Rechte">
              <p>Sie haben das Recht auf:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
                <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten (soweit keine gesetzlichen Aufbewahrungspflichten bestehen)</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerruf erteilter Einwilligungen</li>
                <li>Beschwerde bei der zuständigen Datenschutzbehörde</li>
              </ul>
            </Section>

            <Section title="Kontakt Datenschutz">
              <p>
                Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br />
                <a href="mailto:anfrage@master-leasing.com" style={{ color: "#E15C55" }}>
                  anfrage@master-leasing.com
                </a>
              </p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
