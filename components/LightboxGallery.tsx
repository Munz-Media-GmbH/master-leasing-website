"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Props {
  mainImage: string;
  mainAlt: string;
  galleryImages?: Array<{ src: string; alt: string }>;
}

export default function LightboxGallery({ mainImage, mainAlt, galleryImages }: Props) {
  const allImages = [
    { src: mainImage, alt: mainAlt },
    ...(galleryImages ?? []),
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbHover, setThumbHover] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const prev = useCallback(() =>
    setActiveIndex((i) => (i - 1 + allImages.length) % allImages.length),
    [allImages.length]
  );

  const next = useCallback(() =>
    setActiveIndex((i) => (i + 1) % allImages.length),
    [allImages.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, closeLightbox, prev, next]);

  return (
    <>
      {/* Main image */}
      <div
        onClick={() => openLightbox(0)}
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: "16px",
          cursor: "pointer",
        }}
      >
        <Image
          src={mainImage}
          alt={mainAlt}
          width={900}
          height={500}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
      </div>

      {/* Thumbnail grid */}
      {galleryImages && galleryImages.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
          }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i + 1)}
              onMouseEnter={() => setThumbHover(i)}
              onMouseLeave={() => setThumbHover(null)}
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                opacity: thumbHover === i ? 0.8 : 1,
                transition: "opacity 0.2s",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={180}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox overlay */}
      {lightboxOpen && (
        <div
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "#fff",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
            aria-label="Schließen"
          >
            ✕
          </button>

          {/* Left arrow */}
          {allImages.length > 1 && (
            <button
              onClick={prev}
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "#fff",
                fontSize: "22px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
              aria-label="Vorheriges Bild"
            >
              ‹
            </button>
          )}

          {/* Active image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "85vh", position: "relative" }}
          >
            <img
              src={allImages[activeIndex].src}
              alt={allImages[activeIndex].alt}
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                objectFit: "contain",
                display: "block",
                borderRadius: "8px",
              }}
            />
          </div>

          {/* Right arrow */}
          {allImages.length > 1 && (
            <button
              onClick={next}
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "#fff",
                fontSize: "22px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
              aria-label="Nächstes Bild"
            >
              ›
            </button>
          )}

          {/* Image counter */}
          {allImages.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "rgba(255,255,255,0.6)",
                fontSize: "13px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {activeIndex + 1} / {allImages.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
