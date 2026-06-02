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
              <span style={{ color: "#E15C55" }}>AGB</span>
            </h1>

            <div
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "16px",
                lineHeight: 1.8,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <p>
                Die AGB sind nur in der aktuellen, von uns veröffentlichten Fassung
                gültig. Alle vorangegangenen Versionen sind nicht mehr gültig. Mit der
                Vergabe eines Auftrages bestätigt der Kunde nochmals diese AGB gelesen
                und verstanden zu haben und akzeptiert die nachfolgenden Konditionen.
              </p>

              <Section title="§ 1">
                <p>
                  Die Master Leasing tritt ausschließlich als Agentur zur Vermittlung
                  von gewerblichen Leasingverträgen ohne Schufa und ohne Bankauskunft
                  unserer Partner auf. Die Master Leasing ist keine Bank,
                  Leasinggesellschaft o.ä.. Sie wickelt keine Geldgeschäfte ab und
                  betreibt kein Gewerbe im Sinne eines Bankwesengesetzes oder
                  EU-Geldgesetzes.
                </p>
              </Section>

              <Section title="§ 2">
                <p>
                  Für das Verhältnis zwischen dem Leasinggeber und dem Leasingnehmer /
                  Auftraggeber gelten ausschließlich die AGB´S und die im
                  Leasingvertrag festgelegten Nutzungsbedingungen des jeweiligen
                  Leasinggebers. Die Master Leasing übernimmt keine Haftung für
                  eventuelle Schäden, die aus einem Vertragsverhältnis zwischen dem
                  Leasingnehmer / Auftraggeber und dem jeweiligen Leasinggeber
                  entstehen können.
                </p>
              </Section>

              <Section title="§ 3">
                <p>
                  Persönliche Daten von Interessenten, Antragstellern und Auftraggebern
                  werden ausschließlich zum Zweck der Antragstellung und
                  Auftragsdurchführung erhoben und gespeichert.
                </p>
              </Section>

              <Section title="§ 4">
                <p>
                  Es werden Aufträge und Vermittlungsvereinbarungen gesondert
                  schriftlich festgelegt und geregelt.
                </p>
              </Section>

              <Section title="§ 5">
                <p>
                  Der Auftraggeber versichert mit Einreichung der Selbstauskunft die
                  Richtigkeit und Belegbarkeit der darin gemachten Angaben. Dies
                  betrifft insbesondere die Angaben zu seinen monatlichen
                  Nettoeinkünften, die zur Vermittlung eines Leasingvertrages ohne
                  Schufa und ohne Bankauskunft erforderlich sind. Die monatlichen
                  Nettoeinkünfte errechnen sich vom Jahresgewinn nach Abzug aller
                  Steuern und Abgaben geteilt durch 12 Monate.
                </p>
              </Section>

              <Section title="§ 6">
                <p>
                  Dem Auftraggeber stehen verschiedene Leasingtarife zur möglichen
                  Verfügung. Hierbei handelt es sich um die Tarife LSZ10, LSZ25, LSZ30,
                  LSZ35, LSZ40, LSZ45, LSZ50. Die Tarife unterscheiden sich in erster
                  Linie durch die Leasingsonderzahlung. Die im Tarif aufgeführte Zahl
                  ist hierbei bezeichnend für die Höhe in Prozent (z. B. LSZ10 = 10 %
                  Leasingsonderzahlung usw.).
                </p>
                <p style={{ marginTop: "12px" }}>
                  Bei gebrauchten Pkws, die älter als 45 Monate sind, ist mindestens
                  der Tarif LSZ30, LSZ40 oder LSZ50 erforderlich. Bei Fahrzeugen ab
                  einem Fahrzeugpreis von fünfzigtausend EURO ist mindestens der Tarif
                  LSZ30 erforderlich. Die Laufzeit der Verträge wird ebenfalls immer
                  individuell für jeden Kunden kalkuliert.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Der Tarif LSZ10 ist nur dann möglich, wenn ein Gebrauchtwagen
                  angeschafft wird, dessen vom Leasingnehmer mit dem Verkäufer
                  ausgehandelter Anschaffungspreis 15 % unterhalb des
                  Händlerverkaufswertes liegt, oder bei Neufahrzeugen ein Rabatt
                  ausgehandelt wurde, der mindestens 15 % unterhalb des vom Hersteller
                  vorgegebenen unverbindlichen Richtpreises liegt. Die 15 %, die ein
                  Gebrauchtwagen preiswerter ist als der Händlerverkaufswert nach
                  Gutachten, und die 15 % Rabatt bei einem Neuwagen werden beim Tarif
                  LSZ10 quasi als Absicherung der Leasing- oder
                  Finanzierungsgesellschaft behandelt, so dass im Ergebnis vom
                  Leasingnehmer selbst nur noch 10 % Leasingsonderzahlung vom
                  vertraglich vereinbarten Anschaffungspreis zu zahlen sind, um für
                  die Leasing- bzw. Finanzierungsgesellschaft eine Absicherung zu
                  erreichen, die ansonsten bei einer Leasingsonderzahlung von
                  mindestens 30 % gegeben wäre.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Bitte tätigen Sie vor Klärung sämtlicher für die Leasingabwicklung
                  nötigen Voraussetzungen keine verbindliche Bestellung, sondern nur
                  eine Reservierung unter Vorbehalt der Leasingabwicklung. Bei Wahl
                  des Tarifs LSZ10 achten Sie bitte bei der Fahrzeugauswahl
                  genauestens darauf, dass die Voraussetzungen für die Erfüllung
                  dieses Tarifes vorliegen. Für Transporter ab 3,5 t Nutzlast ist
                  mindestens der Tarif LSZ30 erforderlich.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Ein Angebot wird für jedes Fahrzeug individuell erstellt. Das
                  betrifft auch eine Fahrzeugbeleihung. Eine Leasingzusage oder
                  Vertragsabschluss erfolgt erst nach positiver Leasingentscheidung
                  aufgrund der einzureichenden Selbstauskunft (Leasingantrag). Die
                  verbindlichen Konditionen und Kalkulationen erfolgen erst durch
                  Übersendung des individuell ausgefertigten Leasingvertrages. Die
                  Leasingsonderzahlung ist entweder an die zusagende
                  Leasinggesellschaft oder an den Händler zu leisten, der das Fahrzeug
                  verkauft. Dies entscheidet die jeweilige Leasinggesellschaft.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Die Kosten für Navigationssysteme, Freisprecheinrichtungen für
                  Telefon, Wartungsverträge, Tuning sowie Räder und Reifen, die nicht
                  vom Hersteller als Normalbereifung vorgesehen sind, sind vom
                  Leasingnehmer außerhalb des Leasingvertrages zu zahlen.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Ein Wechsel des PKW-Leasingtarifes ist bis zur schriftlichen
                  Annahmebestätigung des Leasingvertrages durch die jeweilige Leasing-
                  oder Finanzierungsgesellschaft jederzeit kostenfrei möglich, kann
                  aber nicht garantiert werden.
                </p>
                <p style={{ marginTop: "12px" }}>
                  So genannte Eurofahrzeuge, EU-Reimporte und vergleichbare Fahrzeuge,
                  die üblicherweise am bundesdeutschen Automobilmarkt zu einem
                  niedrigeren Preis als dem vom Hersteller empfohlenen Verkaufspreis
                  gehandelt werden, können nur zum üblichen Marktwert, nicht aber zu
                  einem höheren angesetzt werden. Im Zweifelsfall ist ein Gutachten –
                  vorzugsweise des TÜV – einzuholen. Der Leasingvertrag wird dann so
                  behandelt, dass der übliche Marktwert entsprechend dem
                  Händlerverkaufswert bei Gebrauchtwagen angesetzt wird und der
                  Vertrag dementsprechend nach den obigen diesbezüglichen Regelungen
                  abzuwickeln ist.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Wir behalten uns den Verkauf der Bestandsfahrzeuge vor. Die Bilder
                  der Fahrzeuge sind lediglich Beispielfotos.
                </p>
              </Section>

              <Section title="§ 7">
                <p>
                  Die Master Leasing stellt für ihre Vermittlungstätigkeit dem
                  Auftraggeber eine Gebühr in Höhe von 2,9 % bis max. 4,9 % vom
                  Fahrzeugpreis zuzügl. der jeweils gültigen MwSt in Rechnung. Die
                  jeweilige Gebühr ist immer vorher klar erkennbar und wird im Auftrag
                  auch eingetragen. Diese Gebühr ist nach Erteilung der Leasingzusage
                  durch die von der Master Leasing ausgesuchten Leasinggesellschaft an
                  den Auftraggeber zur Zahlung fällig. Der Auftraggeber erhält hierüber
                  eine Rechnung mit ausgewiesener Mehrwertsteuer.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Sofern nach erfolgter rechtsverbindlicher Leasingzusage durch das
                  Verschulden der Master Leasing und/oder der Leasinggesellschaft mit
                  dem Auftraggeber kein Leasingvertrag zustande kommt, entstehen dem
                  Auftraggeber keine Kosten. Dies gilt ebenso bei einer Ablehnung durch
                  die Leasinggesellschaft. In allen anderen Fällen ist der Auftraggeber
                  zur Zahlung der o.g. Gebühr verpflichtet. Die
                  Bearbeitungsgebühr / Bereitstellungsgebühr der jeweiligen
                  Leasinggesellschaft, ca. drei Prozent des Anschaffungspreises zzgl.
                  der anfallenden MwSt., wird von der jeweiligen Gesellschaft nach
                  Versand der Verträge erhoben.
                </p>
              </Section>

              <Section title="§ 8">
                <p>
                  Die Inhalte dieser Webseite sind sorgfältig und nach bestem Wissen
                  und Gewissen erstellt worden. Dennoch haften wir nicht für Irrtümer,
                  mit denen die Ausführungen behaftet sein könnten.
                </p>
              </Section>

              <Section title="§ 9 Salvatorische Klausel">
                <p>
                  Sollten einzelne Bestimmungen dieses Vertrages unwirksam oder nichtig
                  sein oder werden, so berührt dies die Gültigkeit der übrigen
                  Bestimmungen dieses Vertrages nicht. Die Parteien verpflichten sich,
                  unwirksame und nichtige Bestimmungen durch neue Bestimmungen zu
                  ersetzen, die dem in den unwirksamen oder nichtigen Bestimmungen
                  enthaltenen wirtschaftlichen Regelungsgehalt in rechtlich zulässiger
                  Weise gerecht werden.
                </p>
              </Section>

              <Section title="§ 10">
                <p>
                  Bitte achten Sie auf die korrekte Angabe des Verwendungszwecks, da
                  die Master Leasing nicht verpflichtet ist, Nachforschungen über den
                  Verbleib von Zahlungen anzustellen, wenn diese nicht ordnungsgemäß
                  deklariert wurden. Zahlungen haben ausschließlich in Euro auf die
                  genannten Konten zu erfolgen und müssen derart gekennzeichnet sein,
                  dass der Zahler eindeutig erkennbar ist und der zu bezahlenden
                  Dienstleistung ordnungsgemäß zugeordnet werden kann.
                </p>
                <p style={{ marginTop: "12px" }}>
                  Angebote von Master Leasing sind freibleibend und unverbindlich.
                  Irrtum, Fehler und Zwischenverkauf vorbehalten. Eine Leasingzusage
                  oder Vertragsabschluss erfolgt erst nach positiver
                  Leasingentscheidung aufgrund der einzureichenden Unterlagen
                  (z. B. Selbstauskunft, Leasingantrag). Die verbindlichen
                  Konditionen und Kalkulationen erfolgen erst durch Übersendung des
                  individuell gefertigten Leasingvertrages. Insbesondere behält sich
                  der Leasinggeber vor, die Kalkulation und sonstigen
                  Leasingbedingungen an bis Vertragsabschluss geänderte
                  Refinanzierungsbedingungen anzupassen, sowie den Vertragsabschluss
                  von Auflagen, Sicherheiten und/oder evtl. Nachweisen abhängig zu
                  machen.
                </p>
              </Section>

              <Section title="§ 11">
                <p>
                  Ausschließlicher Gerichtsstand, auch für das Mahnverfahren nach
                  Überleitung in das streitige Verfahren, ist der Sitz der Fa. Master
                  Leasing.
                </p>
              </Section>

              <Section title="Anbieter">
                <p>
                  Master Leasing<br />
                  Inhaber: Gregor Wernicke<br />
                  Am Waldrand 10<br />
                  16278 Angermünde<br />
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
