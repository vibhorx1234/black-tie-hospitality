import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import CTABanner from "../components/home/CTABanner";
import { GALLERY_ITEMS } from "../data/gallery";

const ALL_CATEGORIES = ["All", ...Array.from(new Set(GALLERY_ITEMS.map((g) => g.category)))];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === activeFilter);

  const total = filtered.length;
  const mod = (n, m) => ((n % m) + m) % m;

  const selectedIndex = selected
    ? filtered.findIndex((i) => i.id === selected.id)
    : -1;

  const nextModal = () => setSelected(filtered[mod(selectedIndex + 1, total)]);
  const prevModal = () => setSelected(filtered[mod(selectedIndex - 1, total)]);

  return (
    <div
      tabIndex={-1}
      style={{ outline: "none" }}
      onKeyDown={(e) => {
        if (!selected) return;
        if (e.key === "ArrowRight") nextModal();
        if (e.key === "ArrowLeft") prevModal();
        if (e.key === "Escape") setSelected(null);
      }}
    >

      {/* ── HERO ── */}
      <section style={{
        paddingTop: "72px",
        minHeight: "380px",
        background: "#0D1117",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}>

        {/* Background image */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(https://picsum.photos/seed/prop-hero/1400/600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          zIndex: 0,
        }} />

        {/* Optional subtle texture overlay (radial dots) */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }} />

        {/* Gradient overlay (to improve text readability) */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, #0D1117 30%, transparent 80%)",
          zIndex: 0,
        }} />

        {/* Content */}
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "60px 2rem 52px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}>

          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "16px",
          }}>
            OUR GALLERY
          </p>

          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#F5F0E8",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}>
            A Visual Tour of<br />Our Spaces
          </h1>

          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "15px",
            color: "#8a8580",
            lineHeight: 1.7,
            maxWidth: "480px",
          }}>
            Explore the elegance and comfort of Black Tie Hospitality's curated
            property collection across India.
          </p>

        </div>
      </section>

      {/* ── FILTER + COLLAGE ── */}
      <section style={{ background: "#0D1117", padding: "60px 0 80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

          {/* filter pills */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
            {ALL_CATEGORIES.map((cat) => (
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

          {/* masonry collage */}
          {filtered.length > 0 ? (
            <div className="masonry-grid" style={{ columns: "4", columnGap: "12px" }}>
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className="gallery-card"
                  style={{
                    breakInside: "avoid",
                    marginBottom: "12px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-img"
                    style={{ width: "100%", display: "block", transition: "transform 0.5s ease" }}
                  />

                  <div className="gallery-overlay" />
                  <div className="gallery-plus">+</div>

                  <div className="gallery-label">
                    <p className="gallery-label-cat">{item.category}</p>
                    <p className="gallery-label-title">{item.title}</p>
                    <p className="gallery-label-prop">{item.property}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{
              textAlign: "center", fontFamily: "'Outfit', sans-serif",
              color: "#6b6560", padding: "60px 0",
            }}>
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* ── MODAL ── */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.82)",
            display: "flex", justifyContent: "center", alignItems: "center",
            zIndex: 1000, padding: "24px",
          }}
        >
          <button
            onClick={() => setSelected(null)}
            style={{
              position: "absolute", top: "20px", right: "24px",
              background: "none", border: "none",
              color: "#C9A84C", fontSize: "28px", cursor: "pointer",
            }}
          >×</button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              background: "#111827",
              maxWidth: "520px", width: "100%",
              borderRadius: "12px", overflow: "hidden",
            }}
          >
            <img
              src={selected.image}
              alt={selected.title}
              style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
            />

            <button onClick={prevModal} style={modalArrow("left")}>←</button>
            <button onClick={nextModal} style={modalArrow("right")}>→</button>

            <div style={{ padding: "24px 28px 28px", color: "#F5F0E8" }}>

              {/* eyebrow — category */}
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem", letterSpacing: "0.25em",
                color: "#C9A84C", textTransform: "uppercase",
                margin: "0 0 4px 0",
              }}>
                {selected.category}
              </p>

              {/* property */}
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem", letterSpacing: "0.08em",
                color: "rgba(201,168,76,0.6)", textTransform: "uppercase",
                margin: "0 0 10px 0",
              }}>
                {selected.property}
              </p>

              {/* title */}
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1.25rem", fontWeight: 600,
                color: "#F5F0E8", margin: "0 0 12px 0", lineHeight: 1.3,
              }}>
                {selected.title}
              </h3>

              {/* gold divider */}
              <div style={{
                width: "36px", height: "1px",
                background: "rgba(201,168,76,0.4)",
                marginBottom: "14px",
              }} />

              {/* description */}
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem", color: "#8a8580",
                lineHeight: 1.75, margin: 0,
              }}>
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <CTABanner />

      <style>{`
        .gallery-card:hover .gallery-img { transform: scale(1.05); }

        .gallery-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0);
          transition: background 0.35s ease;
        }
        .gallery-card:hover .gallery-overlay { background: rgba(0,0,0,0.45); }

        .gallery-plus {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid #C9A84C;
          color: #C9A84C;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          background: rgba(13,17,23,0.3);
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }
        .gallery-card:hover .gallery-plus {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .gallery-label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 40px 14px 14px;
          background: linear-gradient(transparent, rgba(0,0,0,0.88));
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .gallery-card:hover .gallery-label { opacity: 1; }

        .gallery-label-cat {
          font-family: 'Cinzel', serif;
          font-size: 9px;
          color: #C9A84C;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin: 0 0 3px;
        }
        .gallery-label-title {
          font-family: 'Cinzel', serif;
          font-size: 12px;
          color: #F5F0E8;
          font-weight: 600;
          margin: 0 0 2px;
        }
        .gallery-label-prop {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          color: rgba(201,168,76,0.7);
          margin: 0;
          letter-spacing: 0.06em;
        }

        @media (max-width: 1024px) { .masonry-grid { columns: 3 !important; } }
        @media (max-width: 768px)  { .masonry-grid { columns: 2 !important; } }
        @media (max-width: 480px)  { .masonry-grid { columns: 1 !important; } }
      `}</style>
    </div>
  );
}

function modalArrow(side) {
  return {
    position: "absolute",
    top: "40%", transform: "translateY(-50%)",
    [side]: "10px",
    width: "38px", height: "38px",
    borderRadius: "50%",
    border: "1px solid rgba(201,168,76,0.3)",
    background: "rgba(13,17,23,0.6)",
    color: "#C9A84C",
    cursor: "pointer",
    fontSize: "18px",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 10,
  };
}