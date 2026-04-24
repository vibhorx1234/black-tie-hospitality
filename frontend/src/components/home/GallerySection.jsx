import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { GALLERY_ITEMS } from "../../data/gallery";

export default function GallerySection() {
  const VISIBLE = 5;
  const ITEM_WIDTH = 100 / VISIBLE;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const total = GALLERY_ITEMS.length;
  const mod = (n, m) => ((n % m) + m) % m;

  const next = () => setIndex((prev) => mod(prev + 1, total));
  const prev = () => setIndex((prev) => mod(prev - 1, total));

  const selectedIndex = selected
    ? GALLERY_ITEMS.findIndex((i) => i.id === selected.id)
    : -1;

  const nextModal = () => {
    const nextIdx = mod(selectedIndex + 1, total);
    setSelected(GALLERY_ITEMS[nextIdx]);
    setIndex(nextIdx);
  };

  const prevModal = () => {
    const prevIdx = mod(selectedIndex - 1, total);
    setSelected(GALLERY_ITEMS[prevIdx]);
    setIndex(prevIdx);
  };

  // swipe support
  let startX = 0;
  let dragging = false;

  const onStart = (e) => {
    dragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onEnd = (e) => {
    if (!dragging) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - startX;
    if (diff > 50) prev();
    if (diff < -50) next();
    dragging = false;
  };

  return (
    <section style={{ background: "#0D1117", padding: "72px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "28px" }}>
          <p style={{ color: "#C9A84C", fontSize: "0.85rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
            GALLERY
          </p>
          <Link
            to="/gallery"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#C9A84C", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", transition: "gap 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
            onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
          >
            View Full Gallery <span>→</span>
          </Link>
        </div>

        {/* CAROUSEL */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <button onClick={prev} style={arrowStyle("left")}>←</button>

          {/* TRACK */}
          <div
            onMouseDown={onStart}
            onMouseUp={onEnd}
            onMouseLeave={() => (dragging = false)}
            onTouchStart={onStart}
            onTouchEnd={onEnd}
            style={{
              display: "flex",
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: `translateX(-${index * ITEM_WIDTH}%)`,
            }}
          >
            {GALLERY_ITEMS.concat(GALLERY_ITEMS).map((item, i) => (
              <div key={i} style={{ minWidth: `${ITEM_WIDTH}%`, padding: "6px" }}>
                <div
                  onClick={() => setSelected(item)}
                  className="gallery-card"
                  style={{
                    position: "relative",
                    borderRadius: "8px",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <div className="gallery-overlay" />
                  <div className="gallery-plus">+</div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={next} style={arrowStyle("right")}>→</button>
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.82)",
            display: "flex", justifyContent: "center", alignItems: "center",
            zIndex: 1000,
            padding: "24px",
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
              maxWidth: "520px",
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
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
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "#C9A84C",
                textTransform: "uppercase",
                margin: "0 0 4px 0",
              }}>
                {selected.category}
              </p>

              {/* property */}
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "rgba(201,168,76,0.6)",
                textTransform: "uppercase",
                margin: "0 0 10px 0",
              }}>
                {selected.property}
              </p>

              {/* title */}
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#F5F0E8",
                margin: "0 0 12px 0",
                lineHeight: 1.3,
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
                fontSize: "0.8rem",
                color: "#8a8580",
                lineHeight: 1.75,
                margin: 0,
              }}>
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-card:hover .gallery-img { transform: scale(1.06); }

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
      `}</style>
    </section>
  );
}

function arrowStyle(side) {
  return {
    position: "absolute",
    top: "50%", transform: "translateY(-50%)",
    [side]: "10px",
    width: "38px", height: "38px",
    borderRadius: "50%",
    border: "1px solid rgba(201,168,76,0.3)",
    background: "rgba(13,17,23,0.7)",
    color: "#C9A84C",
    cursor: "pointer",
    zIndex: 10,
  };
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