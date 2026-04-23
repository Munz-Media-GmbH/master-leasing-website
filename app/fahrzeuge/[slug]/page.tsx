import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { getVehicleBySlug, getAllVehicleSlugs, urlFor } from "@/lib/sanity";
import VehicleInquiryButton from "@/components/VehicleInquiryButton";
import LightboxGallery from "@/components/LightboxGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllVehicleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = await getVehicleBySlug(slug);
  if (!vehicle) return { title: "Fahrzeug nicht gefunden" };
  return {
    title: `${vehicle.title} – Master Leasing`,
    description: vehicle.description ?? `${vehicle.title} ohne Schufa leasen. Jetzt Angebot anfragen.`,
  };
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = await getVehicleBySlug(slug);

  if (!vehicle) notFound();

  const mainImageUrl = urlFor(vehicle.image).width(900).height(500).fit("crop").url();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #101010 60%, #1a0a0a 100%)",
            paddingTop: "140px",
            paddingBottom: "60px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container">
            <a
              href="/fahrzeuge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "rgba(255,255,255,0.5)",
                fontSize: "14px",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "20px",
                textDecoration: "none",
              }}
            >
              ← Alle Fahrzeuge
            </a>
            <h1 style={{ color: "#fff", marginBottom: "8px" }}>{vehicle.title}</h1>
            {vehicle.monthlyRate && (
              <p
                style={{
                  color: "#E15C55",
                  fontFamily: "'Quantico', sans-serif",
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                ab {vehicle.monthlyRate} €/Monat
              </p>
            )}
          </div>
        </section>

        {/* Main content */}
        <section
          style={{
            background: "#101010",
            paddingTop: "60px",
            paddingBottom: "80px",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                alignItems: "start",
              }}
            >
              {/* Left: Lightbox Gallery */}
              <LightboxGallery
                mainImage={mainImageUrl}
                mainAlt={vehicle.title}
                galleryImages={vehicle.images?.map((img, i) => ({
                  src: urlFor(img).width(900).height(500).fit("crop").url(),
                  alt: `${vehicle.title} Bild ${i + 2}`,
                }))}
              />

              {/* Right: Info */}
              <div>
                {vehicle.description && (
                  <p
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "16px",
                      lineHeight: 1.8,
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "32px",
                    }}
                  >
                    {vehicle.description}
                  </p>
                )}

                {/* Specs */}
                {vehicle.specs && vehicle.specs.length > 0 && (
                  <div style={{ marginBottom: "36px" }}>
                    <h3
                      style={{
                        color: "#fff",
                        fontFamily: "'Quantico', sans-serif",
                        fontSize: "18px",
                        marginBottom: "16px",
                      }}
                    >
                      Technische Daten
                    </h3>
                    <div
                      style={{
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                    >
                      {vehicle.specs.map((spec, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "12px 16px",
                            borderBottom:
                              i < vehicle.specs!.length - 1
                                ? "1px solid rgba(255,255,255,0.06)"
                                : "none",
                            background:
                              i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                          }}
                        >
                          <span
                            style={{
                              color: "rgba(255,255,255,0.5)",
                              fontSize: "14px",
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            {spec.label}
                          </span>
                          <span
                            style={{
                              color: "#fff",
                              fontSize: "14px",
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 500,
                            }}
                          >
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div
                  style={{
                    background: "rgba(225,92,85,0.06)",
                    border: "1px solid rgba(225,92,85,0.2)",
                    borderRadius: "16px",
                    padding: "28px",
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      fontFamily: "'Quantico', sans-serif",
                      fontSize: "18px",
                      marginBottom: "8px",
                    }}
                  >
                    Interesse an diesem Fahrzeug?
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "14px",
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "20px",
                    }}
                  >
                    Ohne Schufa-Prüfung · Zusage in 24 Stunden · Freie Händlerwahl
                  </p>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <VehicleInquiryButton
                      vehicleTitle={vehicle.title}
                      vehicleImg={mainImageUrl}
                    />
                    <a href="tel:+4903331297792" className="btn-outline">
                      03331 – 29 77 92
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 1024px) {
              .vehicle-detail-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
