import { useState } from "react";
import CTABanner from "../components/home/CTABanner";
import React from "react";

const categories = ["All", "Hotels", "Apartments", "Interiors", "Common Areas", "Amenities"];

const galleryItems = [
  { id: 1, cat: "Hotels", src: "https://picsum.photos/seed/g1/600/400", alt: "Hotel Exterior", size: "wide" },
  { id: 2, cat: "Interiors", src: "https://picsum.photos/seed/g2/400/400", alt: "Luxury Suite", size: "square" },
  { id: 3, cat: "Apartments", src: "https://picsum.photos/seed/g3/400/600", alt: "Studio Apartment", size: "tall" },
  { id: 4, cat: "Common Areas", src: "https://picsum.photos/seed/g4/600/400", alt: "Lobby", size: "wide" },
  { id: 5, cat: "Interiors", src: "https://picsum.photos/seed/g5/400/400", alt: "Bedroom", size: "square" },
  { id: 6, cat: "Hotels", src: "https://picsum.photos/seed/g6/400/400", alt: "Hotel View", size: "square" },
  { id: 7, cat: "Amenities", src: "https://picsum.photos/seed/g7/600/400", alt: "Pool Area", size: "wide" },
  { id: 8, cat: "Interiors", src: "https://picsum.photos/seed/g8/400/600", alt: "Living Room", size: "tall" },
  { id: 9, cat: "Apartments", src: "https://picsum.photos/seed/g9/400/400", alt: "Kitchen", size: "square" },
  { id: 10, cat: "Common Areas", src: "https://picsum.photos/seed/g10/400/400", alt: "Restaurant", size: "square" },
  { id: 11, cat: "Hotels", src: "https://picsum.photos/seed/g11/600/400", alt: "Hotel Night View", size: "wide" },
  { id: 12, cat: "Amenities", src: "https://picsum.photos/seed/g12/400/400", alt: "Gym", size: "square" },
  { id: 13, cat: "Interiors", src: "https://picsum.photos/seed/g13/400/400", alt: "Dining", size: "square" },
  { id: 14, cat: "Apartments", src: "https://picsum.photos/seed/g14/600/400", alt: "Apartment Exterior", size: "wide" },
  { id: 15, cat: "Common Areas", src: "https://picsum.photos/seed/g15/400/400", alt: "Conference Room", size: "square" },
  { id: 16, cat: "Hotels", src: "https://picsum.photos/seed/g16/400/600", alt: "Premium Room", size: "tall" },
  { id: 17, cat: "Amenities", src: "https://picsum.photos/seed/g17/400/400", alt: "Spa", size: "square" },
  { id: 18, cat: "Interiors", src: "https://picsum.photos/seed/g18/600/400", alt: "Suite Living", size: "wide" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.cat === activeFilter);

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: "120px", paddingBottom: "80px",
        background: "linear-gradient(135deg, #0D1117, #111827)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
            OUR GALLERY
          </p>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#F5F0E8", lineHeight: 1.2, marginBottom: "16px" }}>
            A Visual Tour of<br />Our Spaces
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", color: "#8a8580", lineHeight: 1.7, maxWidth: "480px" }}>
            Explore the elegance and comfort of Black Tie Hospitality's curated property collection across India.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ background: "#0D1117", padding: "60px 0 80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "13px",
                  fontWeight: activeFilter === cat ? 600 : 400,
                  padding: "8px 20px",
                  borderRadius: "100px",
                  border: `1px solid ${activeFilter === cat ? "#C9A84C" : "rgba(255,255,255,0.12)"}`,
                  background: activeFilter === cat ? "rgba(201,168,76,0.1)" : "transparent",
                  color: activeFilter === cat ? "#C9A84C" : "#8a8580",
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid using CSS columns */}
          <div style={{ columns: "4", columnGap: "12px" }} className="masonry-grid">
            {filtered.map((img) => (
              <div
                key={img.id}
                onClick={() => setLightbox(img)}
                style={{
                  breakInside: "avoid",
                  marginBottom: "12px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                }}
                className="masonry-item"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: "100%",
                    display: "block",
                    transition: "transform 0.5s ease, filter 0.3s ease",
                  }}
                  className="masonry-img"
                />
                <div
                  style={{
                    position: "absolute", inset: 0,
                    background: "rgba(0,0,0,0)",
                    transition: "background 0.3s",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    gap: "8px",
                  }}
                  className="masonry-overlay"
                >
                  <span style={{ fontSize: "22px", opacity: 0, transition: "opacity 0.3s", color: "#C9A84C" }} className="masonry-icon">⊕</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#F5F0E8", opacity: 0, transition: "opacity 0.3s", letterSpacing: "0.1em" }} className="masonry-label">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: "center", fontFamily: "'Outfit', sans-serif", color: "#6b6560", padding: "60px 0" }}>
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "40px",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute", top: "20px", right: "24px",
              background: "none", border: "none",
              color: "#C9A84C", fontSize: "32px", cursor: "pointer",
            }}
          >×</button>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "900px", width: "100%", textAlign: "center" }}>
            <img
              src={lightbox.src.replace(/\/\d+\/\d+$/, "/900/600")}
              alt={lightbox.alt}
              style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: "8px" }}
            />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", marginTop: "12px" }}>{lightbox.alt}</p>
          </div>
        </div>
      )}

      <CTABanner />

      <style>{`
        .masonry-item:hover .masonry-img { transform: scale(1.04); filter: brightness(0.7); }
        .masonry-item:hover .masonry-overlay { background: rgba(0,0,0,0.35) !important; }
        .masonry-item:hover .masonry-icon,
        .masonry-item:hover .masonry-label { opacity: 1 !important; }
        @media (max-width: 1024px) { .masonry-grid { columns: 3 !important; } }
        @media (max-width: 768px) { .masonry-grid { columns: 2 !important; } }
        @media (max-width: 480px) { .masonry-grid { columns: 1 !important; } }
      `}</style>
    </>
  );
}