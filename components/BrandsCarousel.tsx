const brands = [
  "Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Toyota",
  "Hyundai", "Ford", "Opel", "Renault", "Peugeot",
  "Škoda", "SEAT", "Kia", "Volvo", "Nissan",
  "Citroën", "Mazda", "Honda", "Mitsubishi", "Fiat",
  "Jeep", "Land Rover", "Porsche", "Dacia", "Tesla",
];

export default function BrandsCarousel() {
  return (
    <section
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 0",
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
                marginRight: "56px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                opacity: 0.45,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#E15C55", display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Quantico', sans-serif", fontSize: "15px", color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
