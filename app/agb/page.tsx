import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AGB – Master Leasing",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://master-leasing.com/agb/" },
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

export default function AgbPage() {
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
            <h1 style={{ color: "#fff", marginBottom: "16px" }}>
              <span style={{ color: "#E15C55" }}>Allgemeine Geschäftsbedingungen</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", marginBottom: "32px" }}>
              Stand: Juni 2026
            </p>

            <div
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "16px",
                lineHeight: 1.8,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Section title="§ 1 Geltungsbereich">
                <p>
                  Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für
                  sämtliche Geschäftsbeziehungen zwischen Master Leasing, Inhaber Gregor
                  Wernicke, Am Waldrand 10, 16278 Angermünde (nachfolgend
                  „Master Leasing") und ihren Kunden (nachfolgend „Kunde").
                </p>
                <p style={{ marginTop: "12px" }}>
                  Master Leasing wird ausschließlich gegenüber Unternehmern im Sinne des
                  § 14 BGB tätig. Verbraucher im Sinne des § 13 BGB sind von der
                  Geschäftsbeziehung ausgeschlossen.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Abweichende, entgegenstehende oder ergänzende Allgemeine
                  Geschäftsbedingungen des Kunden werden nur dann und insoweit
                  Vertragsbestandteil, als Master Leasing ihrer Geltung ausdrücklich
                  schriftlich zugestimmt hat.
                </p>
              </Section>

              <Section title="§ 2 Leistungen / Vermittlertätigkeit">
                <p>
                  Master Leasing ist als unabhängiger Leasingmakler tätig. Master
                  Leasing vermittelt zwischen dem Kunden und unabhängigen
                  Leasinggesellschaften, Banken und Finanzierungspartnern
                  Leasing-, Mietkauf- und Finanzierungsverträge.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Master Leasing ist <strong>keine</strong> Leasinggesellschaft, kein
                  Kreditinstitut und nicht Vertragspartner des eigentlichen
                  Leasing- oder Finanzierungsvertrages. Der Leasingvertrag kommt
                  ausschließlich zwischen dem Kunden und der vermittelten
                  Leasinggesellschaft zustande.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Master Leasing schuldet keinen Vermittlungserfolg. Eine
                  Annahmepflicht der Leasinggesellschaft besteht nicht; die
                  Entscheidung über den Vertragsschluss liegt allein bei der
                  jeweiligen Leasinggesellschaft.
                </p>
              </Section>

              <Section title="§ 3 Zustandekommen des Vermittlungsvertrages">
                <p>
                  Die Anfrage des Kunden über das Online-Formular, per E-Mail oder per
                  Telefon stellt ein Angebot zum Abschluss eines unentgeltlichen
                  Vermittlungsauftrags dar. Der Vermittlungsvertrag kommt durch
                  Bestätigung von Master Leasing oder durch Aufnahme der Tätigkeit
                  zustande.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Der Kunde versichert mit der Anfrage, dass er Unternehmer ist und die
                  übermittelten Daten (Fahrzeug-/Objektdaten, Bonitätsangaben,
                  Kontaktdaten) vollständig und richtig sind.
                </p>
              </Section>

              <Section title="§ 4 Vergütung">
                <p>
                  Für den Kunden ist die Vermittlung in der Regel kostenfrei. Master
                  Leasing erhält im Erfolgsfall eine Vergütung von der jeweiligen
                  Leasinggesellschaft (Courtage).
                </p>
                <p style={{ marginTop: "12px" }}>
                  Abweichende Vergütungsvereinbarungen mit dem Kunden bedürfen der
                  Schriftform und werden vor Vertragsschluss gesondert vereinbart.
                </p>
              </Section>

              <Section title="§ 5 Mitwirkungspflichten des Kunden">
                <p>
                  Der Kunde ist verpflichtet, alle für die Vermittlung erforderlichen
                  Unterlagen und Auskünfte (insbesondere Handelsregisterauszug, BWA,
                  Jahresabschlüsse soweit angefordert, Objektdaten) vollständig,
                  wahrheitsgemäß und unverzüglich beizubringen.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Änderungen seiner wirtschaftlichen Verhältnisse oder der angefragten
                  Objektdaten teilt der Kunde Master Leasing unverzüglich mit.
                </p>
              </Section>

              <Section title="§ 6 Haftung">
                <p>
                  Master Leasing haftet unbeschränkt für Vorsatz und grobe
                  Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des
                  Körpers oder der Gesundheit.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Bei leichter Fahrlässigkeit haftet Master Leasing nur bei Verletzung
                  einer wesentlichen Vertragspflicht (Kardinalpflicht) und beschränkt
                  auf den bei Vertragsschluss vorhersehbaren, vertragstypischen
                  Schaden.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Master Leasing haftet nicht für die Bonität des Kunden, für die
                  Genehmigungsentscheidung der Leasinggesellschaft, für den
                  wirtschaftlichen Erfolg des vermittelten Vertrages oder für
                  steuerliche und rechtliche Folgen des Leasingvertrages.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Master Leasing erbringt keine Rechts-, Steuer- oder
                  Anlageberatung im Sinne des § 1 Rechtsdienstleistungsgesetz (RDG)
                  bzw. § 1 StBerG.
                </p>
              </Section>

              <Section title="§ 7 Datenschutz / Bonität">
                <p>
                  Der Kunde willigt ein, dass Master Leasing die zur Anfrage
                  notwendigen personen- und unternehmensbezogenen Daten zur Anbahnung,
                  Durchführung und Abwicklung des Vermittlungsvertrages erhebt,
                  speichert und an die jeweils angefragten Leasinggesellschaften,
                  Banken und Finanzierungspartner übermittelt.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Eine SCHUFA-Abfrage erfolgt durch Master Leasing nicht.
                  Bonitätsprüfungen werden ggf. eigenständig durch die
                  Leasinggesellschaft vorgenommen.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Weitere Informationen zur Datenverarbeitung enthält die{" "}
                  <a href="/datenschutz/" style={{ color: "#E15C55" }}>
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </Section>

              <Section title="§ 8 Vertraulichkeit">
                <p>
                  Beide Parteien verpflichten sich, alle im Rahmen der
                  Geschäftsbeziehung erhaltenen vertraulichen Informationen, Daten und
                  Unterlagen vertraulich zu behandeln und nicht unbefugt an Dritte
                  weiterzugeben. Dies gilt auch nach Beendigung des
                  Vermittlungsvertrages.
                </p>
              </Section>

              <Section title="§ 9 Schlussbestimmungen">
                <p>
                  Es gilt ausschließlich das Recht der Bundesrepublik Deutschland unter
                  Ausschluss des UN-Kaufrechts.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im
                  Zusammenhang mit dieser Geschäftsbeziehung ist – soweit gesetzlich
                  zulässig – der Sitz von Master Leasing in Angermünde.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden,
                  bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die
                  Stelle der unwirksamen Bestimmung tritt eine Regelung, die dem
                  wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
                </p>
              </Section>

              <Section title="§ 10 Anbieter">
                <p>
                  Master Leasing<br />
                  Inhaber: Gregor Wernicke<br />
                  Am Waldrand 10<br />
                  16278 Angermünde<br />
                  Telefon: <a href="tel:+4903331297792" style={{ color: "#E15C55" }}>+49 3331 297792</a><br />
                  E-Mail:{" "}
                  <a href="mailto:anfrage@master-leasing.com" style={{ color: "#E15C55" }}>
                    anfrage@master-leasing.com
                  </a><br />
                  USt-IdNr.: DE172630384
                </p>
                <p style={{ marginTop: "12px" }}>
                  Vollständige Anbieterkennzeichnung siehe{" "}
                  <a href="/impressum/" style={{ color: "#E15C55" }}>
                    Impressum
                  </a>
                  .
                </p>
              </Section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
