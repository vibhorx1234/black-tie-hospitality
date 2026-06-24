import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import React from "react";
import CTABanner from "../components/home/CTABanner";
import { GALLERY_ITEMS } from "../data/gallery";
import vidhyadeep1 from './../assets/vidhyadeep/8.jpeg';

const ALL_CATEGORIES = ["All", ...Array.from(new Set(GALLERY_ITEMS.map((g) => g.category)))];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [columns, setColumns] = useState(4);

  // Responsive column count derived from window width
  const updateColumns = useCallback(() => {
    const w = window.innerWidth;
    if (w < 480) setColumns(1);
    else if (w < 768) setColumns(2);
    else if (w < 1024) setColumns(3);
    else if (w < 1440) setColumns(4);
    else setColumns(5);
  }, []);

  useEffect(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [updateColumns]);

  // Keyboard nav on modal
  useEffect(() => {
    if (!selected) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") nextModal();
      if (e.key === "ArrowLeft") prevModal();
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const filtered =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === activeFilter);

  const total = filtered.length;
  const mod = (n, m) => ((n % m) + m) % m;
  const selectedIndex = selected ? filtered.findIndex((i) => i.id === selected.id) : -1;
  const nextModal = () => setSelected(filtered[mod(selectedIndex + 1, total)]);
  const prevModal = () => setSelected(filtered[mod(selectedIndex - 1, total)]);

  return (
    <div style={{ outline: "none" }}>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: "clamp(56px, 8vw, 72px)",
        minHeight: "clamp(280px, 40vw, 420px)",
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
          backgroundImage: `url(${vidhyadeep1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
          zIndex: 0,
        }} />

        {/* Dot texture */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }} />

        {/* Bottom fade */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, #0D1117 20%, transparent 80%)",
          zIndex: 0,
        }} />

        {/* Content */}
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "clamp(32px, 5vw, 60px) clamp(16px, 4vw, 2rem) clamp(36px, 5vw, 52px)",
          position: "relative",
          zIndex: 1,
          width: "100%",
          boxSizing: "border-box",
        }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "clamp(10px, 2vw, 16px)",
          }}>
            OUR GALLERY
          </p>

          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.6rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#F5F0E8",
            lineHeight: 1.2,
            marginBottom: "clamp(10px, 2vw, 16px)",
          }}>
            A Visual Tour of<br />Our Spaces
          </h1>

          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(13px, 1.5vw, 15px)",
            color: "#8a8580",
            lineHeight: 1.7,
            maxWidth: "min(480px, 90%)",
            margin: 0,
          }}>
            Explore the elegance and comfort of Black Tie Hospitality's curated
            property collection across India.
          </p>
        </div>
      </section>

      {/* ── FILTER + COLLAGE ── */}
      <section style={{ background: "#0D1117", padding: "clamp(32px, 5vw, 60px) 0 clamp(48px, 7vw, 80px)" }}>
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 2rem)",
          boxSizing: "border-box",
        }}>

          {/* Filter pills — scrollable on small screens */}
          <div style={{
            display: "flex",
            gap: "8px",
            marginBottom: "clamp(24px, 4vw, 40px)",
            flexWrap: "wrap",
            // On very small screens, allow horizontal scroll
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: "4px", // prevent pill border clipping on scroll
          }}>
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(11px, 1.2vw, 13px)",
                  fontWeight: activeFilter === cat ? 600 : 400,
                  padding: "clamp(6px, 1vw, 8px) clamp(14px, 2vw, 20px)",
                  borderRadius: "100px",
                  border: `1px solid ${activeFilter === cat ? "#C9A84C" : "rgba(255,255,255,0.12)"}`,
                  background: activeFilter === cat ? "rgba(201,168,76,0.1)" : "transparent",
                  color: activeFilter === cat ? "#C9A84C" : "#8a8580",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry collage */}
          {filtered.length > 0 ? (
            <div
              style={{
                columns: columns,
                columnGap: "clamp(8px, 1vw, 12px)",
              }}
            >
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className="gallery-card"
                  style={{
                    breakInside: "avoid",
                    marginBottom: "clamp(8px, 1vw, 12px)",
                    borderRadius: "clamp(4px, 0.6vw, 8px)",
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
                    loading="lazy"
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
              textAlign: "center",
              fontFamily: "'Outfit', sans-serif",
              color: "#6b6560",
              padding: "clamp(32px, 6vw, 60px) 0",
              fontSize: "clamp(13px, 1.5vw, 15px)",
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
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "clamp(12px, 3vw, 24px)",
            boxSizing: "border-box",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setSelected(null)}
            style={{
              position: "absolute",
              top: "clamp(12px, 2vw, 20px)",
              right: "clamp(12px, 2vw, 24px)",
              background: "rgba(13,17,23,0.6)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "50%",
              width: "clamp(36px, 5vw, 44px)",
              height: "clamp(36px, 5vw, 44px)",
              color: "#C9A84C",
              fontSize: "clamp(18px, 2.5vw, 22px)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
              zIndex: 10,
            }}
          >×</button>

          {/* Modal card */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              background: "#111827",
              maxWidth: "clamp(300px, 90vw, 560px)",
              width: "100%",
              borderRadius: "clamp(8px, 1.5vw, 12px)",
              overflow: "hidden",
              maxHeight: "calc(100vh - clamp(48px, 8vw, 80px))",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img
                src={selected.image}
                alt={selected.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "80vh",
                  objectFit: "contain", // or "cover" if you prefer cropping over letterboxing
                  display: "block",
                }}
              />

              {/* Prev / Next arrows */}
              <button onClick={prevModal} style={modalArrow("left")}>←</button>
              <button onClick={nextModal} style={modalArrow("right")}>→</button>
            </div>

            {/* Text content — scrollable if needed */}
            {/* <div style={{
              padding: "clamp(16px, 3vw, 24px) clamp(18px, 3.5vw, 28px) clamp(20px, 3.5vw, 28px)",
              color: "#F5F0E8",
              overflowY: "auto",
              flexShrink: 1,
            }}>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(0.55rem, 1vw, 0.6rem)",
                letterSpacing: "0.25em",
                color: "#C9A84C",
                textTransform: "uppercase",
                margin: "0 0 4px 0",
              }}>
                {selected.category}
              </p>

              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(0.65rem, 1.1vw, 0.7rem)",
                letterSpacing: "0.08em",
                color: "rgba(201,168,76,0.6)",
                textTransform: "uppercase",
                margin: "0 0 clamp(6px, 1.5vw, 10px) 0",
              }}>
                {selected.property}
              </p>

              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                fontWeight: 600,
                color: "#F5F0E8",
                margin: "0 0 clamp(8px, 1.5vw, 12px) 0",
                lineHeight: 1.3,
              }}>
                {selected.title}
              </h3>

              <div style={{
                width: "36px",
                height: "1px",
                background: "rgba(201,168,76,0.4)",
                marginBottom: "clamp(10px, 2vw, 14px)",
              }} />

              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(0.75rem, 1.3vw, 0.8rem)",
                color: "#8a8580",
                lineHeight: 1.75,
                margin: 0,
              }}>
                {selected.description}
              </p>

              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(10px, 1.2vw, 11px)",
                color: "rgba(201,168,76,0.4)",
                margin: "clamp(12px, 2vw, 16px) 0 0",
                letterSpacing: "0.1em",
                textAlign: "right",
              }}>
                {selectedIndex + 1} / {total}
              </p>
            </div> */}
          </div>
        </div>
      )}

      <CTABanner />

      <style>{`
        /* Scrollbar hide for filter row */
        div::-webkit-scrollbar { display: none; }

        /* Gallery card hover effects */
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
          width: clamp(28px, 4vw, 36px);
          height: clamp(28px, 4vw, 36px);
          border-radius: 50%;
          border: 1px solid #C9A84C;
          color: #C9A84C;
          display: flex; align-items: center; justify-content: center;
          font-size: clamp(14px, 2vw, 18px);
          background: rgba(13,17,23,0.3);
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }
        .gallery-card:hover .gallery-plus {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        /* Touch devices: always show label (no hover) */
        @media (hover: none) {
          .gallery-plus { display: none; }
          .gallery-label {
            opacity: 1 !important;
          }
        }

        .gallery-label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: clamp(24px, 5vw, 40px) clamp(10px, 1.5vw, 14px) clamp(10px, 1.5vw, 14px);
          background: linear-gradient(transparent, rgba(0,0,0,0.88));
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .gallery-card:hover .gallery-label { opacity: 1; }

        .gallery-label-cat {
          font-family: 'Cinzel', serif;
          font-size: clamp(7px, 1vw, 9px);
          color: #C9A84C;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin: 0 0 3px;
        }
        .gallery-label-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(10px, 1.2vw, 12px);
          color: #F5F0E8;
          font-weight: 600;
          margin: 0 0 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .gallery-label-prop {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(8px, 1vw, 10px);
          color: rgba(201,168,76,0.7);
          margin: 0;
          letter-spacing: 0.06em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Modal arrow focus styles */
        button:focus-visible {
          outline: 1px solid #C9A84C;
          outline-offset: 2px;
        }

        /* Prevent iOS rubber-band scroll when modal is open */
        body.modal-open { position: fixed; width: 100%; }
      `}</style>
    </div>
  );
}

function modalArrow(side) {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "clamp(6px, 1.5vw, 10px)",
    width: "clamp(32px, 5vw, 40px)",
    height: "clamp(32px, 5vw, 40px)",
    borderRadius: "50%",
    border: "1px solid rgba(201,168,76,0.3)",
    background: "rgba(13,17,23,0.65)",
    color: "#C9A84C",
    cursor: "pointer",
    fontSize: "clamp(14px, 2vw, 18px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    backdropFilter: "blur(4px)",
    transition: "background 0.2s, border-color 0.2s",
  };
}