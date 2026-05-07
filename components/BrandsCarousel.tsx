import Image from "next/image";

const brands = [
  { name: "Volkswagen", logo: "/images/brands/volkswagen.svg" },
  { name: "BMW",        logo: "/images/brands/bmw.svg" },
  { name: "Mercedes-Benz", logo: "/images/brands/mercedes.svg" },
  { name: "Audi",      logo: "/images/brands/audi.svg" },
  { name: "Toyota",    logo: "/images/brands/toyota.svg" },
  { name: "Hyundai",   logo: "/images/brands/hyundai.svg" },
  { name: "Ford",      logo: "/images/brands/ford.svg" },
  { name: "Opel",      logo: "/images/brands/opel.svg" },
  { name: "Renault",   logo: "/images/brands/renault.svg" },
  { name: "Peugeot",   logo: "/images/brands/peugeot.svg" },
  { name: "Škoda",     logo: "/images/brands/skoda.svg" },
  { name: "SEAT",      logo: "/images/brands/seat.svg" },
  { name: "Kia",       logo: "/images/brands/kia.svg" },
  { name: "Volvo",     logo: "/images/brands/volvo.svg" },
  { name: "Nissan",    logo: "/images/brands/nissan.svg" },
  { name: "Citroën",   logo: "/images/brands/citroen.svg" },
  { name: "Mazda",     logo: "/images/brands/mazda.svg" },
  { name: "Honda",     logo: "/images/brands/honda.svg" },
  { name: "Mitsubishi",logo: "/images/brands/mitsubishi.svg" },
  { name: "Fiat",      logo: "/images/brands/fiat.svg" },
  { name: "Jeep",      logo: "/images/brands/jeep.svg" },
  { name: "Land Rover",logo: "/images/brands/landrover.svg" },
  { name: "Porsche",   logo: "/images/brands/porsche.svg" },
  { name: "Dacia",     logo: "/images/brands/dacia.svg" },
  { name: "Tesla",     logo: "/images/brands/tesla.svg" },
];

export default function BrandsCarousel() {
  return (
    <section
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "24px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, #0a0a0a, transparent)", zIndex: 2 }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, #0a0a0a, transparent)", zIndex: 2 }} />

        <div className="marquee-track">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                marginRight: "52px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                opacity: 0.5,
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  filter: "invert(1)",
                }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={44}
                  height={36}
                  unoptimized
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Quantico', sans-serif",
                  fontSize: "10px",
                  color: "#fff",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
