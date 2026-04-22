import { Link } from "react-router-dom";
import React from "react";

const galleryImages = [
  { id: 1, src: "https://picsum.photos/seed/gal1/400/280", alt: "Luxury Suite Interior" },
  { id: 2, src: "https://picsum.photos/seed/gal2/400/280", alt: "Premium Bedroom" },
  { id: 3, src: "https://picsum.photos/seed/gal3/400/280", alt: "Modern Living Room" },
  { id: 4, src: "https://picsum.photos/seed/gal4/400/280", alt: "Elegant Corridor" },
  { id: 5, src: "https://picsum.photos/seed/gal5/400/280", alt: "Dining Area" },
];

export default function GallerySection() {
  return (
    <section style={{ background: "#0D1117", padding: "72px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C" }}>
            GALLERY
          </p>
          <Link
            to="/gallery"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#C9A84C", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", transition: "gap 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.gap = "12px"}
            onMouseLeave={(e) => e.currentTarget.style.gap = "6px"}
          >
            View Full Gallery <span>→</span>
          </Link>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }} className="gallery-grid">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              style={{ borderRadius: "6px", overflow: "hidden", aspectRatio: "4/3", cursor: "pointer", position: "relative" }}
              className="gallery-item"
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease, filter 0.3s ease" }}
                className="gallery-img"
              />
              <div
                style={{
                  position: "absolute", inset: 0,
                  background: "rgba(0,0,0,0)",
                  transition: "background 0.3s ease",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
                className="gallery-overlay"
              >
                <span style={{ color: "#C9A84C", fontSize: "20px", opacity: 0, transition: "opacity 0.3s" }} className="gallery-icon">⊕</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-item:hover .gallery-img { transform: scale(1.08); filter: brightness(0.7); }
        .gallery-item:hover .gallery-overlay { background: rgba(0,0,0,0.3) !important; }
        .gallery-item:hover .gallery-icon { opacity: 1 !important; }
        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}