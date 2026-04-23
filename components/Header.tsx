"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Über uns", href: "/ueberuns" },
  { label: "Fahrzeuge", href: "/fahrzeuge" },
  { label: "Geräteleasing", href: "/geraeteleasing" },
  { label: "Sale & Lease Back", href: "/sale-und-leaseback" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, box-shadow 0.3s, padding 0.3s",
        background: scrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.08)" : "none",
        padding: scrolled ? "14px 0" : "24px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/images/LogoFinalFile-01-1024x305.png"
            alt="Master Leasing Logo"
            width={200}
            height={60}
            style={{ height: "52px", width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "36px" }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Quantico', sans-serif",
                fontSize: "16px",
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "-0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#E15C55")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.85)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="/kontakt"
            className="btn-primary"
            style={{ fontSize: "14px", padding: "12px 24px" }}
          >
            Leasinganfrage stellen
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "none",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: "#000",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "20px 40px 30px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "18px",
                color: "white",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/kontakt"
            className="btn-primary"
            style={{ marginTop: "20px", display: "inline-flex" }}
          >
            Leasinganfrage stellen
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
