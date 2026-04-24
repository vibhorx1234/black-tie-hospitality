import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { ALL_PROPERTIES } from "../../data/properties";

export default function PropertiesShowcase() {
  const VISIBLE = 5;
  const ITEM_WIDTH = 100 / VISIBLE;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const total = ALL_PROPERTIES.length;

  const mod = (n, m) => ((n % m) + m) % m;

  const next = () => setIndex((p) => mod(p + 1, total));
  const prev = () => setIndex((p) => mod(p - 1, total));

  const selectedIndex = selected
    ? ALL_PROPERTIES.findIndex((p) => p.id === selected.id)
    : -1;

  const nextModal = () => {
    const nextIdx = mod(selectedIndex + 1, total);
    setSelected(ALL_PROPERTIES[nextIdx]);
    setIndex(nextIdx);
  };

  const prevModal = () => {
    const prevIdx = mod(selectedIndex - 1, total);
    setSelected(ALL_PROPERTIES[prevIdx]);
    setIndex(prevIdx);
  };

  // swipe
  let startX = 0;
  let dragging = false;

  const onStart = (e) => {
    dragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onEnd = (e) => {
    if (!dragging) return;

    const endX = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX;

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
          <p style={{ color: "#C9A84C", letterSpacing: "0.22em", fontSize: "0.85rem" }}>
            PROPERTIES SHOWCASE
          </p>

          <Link
            to="/properties"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#C9A84C", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
            onMouseEnter={(e) => e.currentTarget.style.gap = "12px"}
            onMouseLeave={(e) => e.currentTarget.style.gap = "6px"}
          >
            View All Properties <span>→</span>
          </Link>
        </div>

        {/* CAROUSEL */}
        <div style={{ position: "relative", overflow: "hidden" }}>

          <button onClick={prev} style={arrow("left")}>‹</button>

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
            {ALL_PROPERTIES.concat(ALL_PROPERTIES).map((p, i) => (
              <div key={i} style={{ minWidth: `${ITEM_WIDTH}%`, padding: "6px" }}>
                <div
                  onClick={() => setSelected(p)}
                  className="prop-card"
                  style={{
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                    aspectRatio: "3/2",
                  }}
                >
                  <img
                    src={p.image}
                    className="prop-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />

                  {/* overlay */}
                  <div className="prop-overlay" />

                  {/* + button */}
                  <div className="prop-plus">+</div>

                  {/* badge */}
                  <div className="prop-badge">{p.badge}</div>

                  {/* text */}
                  <div className="prop-text">
                    <p className="prop-name">{p.name}</p>
                    <p className="prop-location">📍 {p.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={next} style={arrow("right")}>›</button>
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              background: "#111827",
              maxWidth: "650px",
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {/* IMAGE */}
            <img
              src={selected.image}
              style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
            />

            <button onClick={prevModal} style={modalArrow("left")}>‹</button>
            <button onClick={nextModal} style={modalArrow("right")}>›</button>

            {/* CONTENT */}
            <div style={{ padding: "24px 28px 28px", color: "#F5F0E8" }}>

  {/* EYEBROW */}
  <p style={{
    fontFamily: "'Cinzel', serif",
    fontSize: "0.6rem",
    letterSpacing: "0.25em",
    color: "#C9A84C",
    textTransform: "uppercase",
    margin: "0 0 8px 0",
  }}>
    {selected.type} · {selected.category}
  </p>

  {/* TITLE */}
  <h2 style={{
    fontFamily: "'Cinzel', serif",
    fontSize: "1.35rem",
    fontWeight: 600,
    color: "#F5F0E8",
    margin: "0 0 6px 0",
    lineHeight: 1.3,
  }}>
    {selected.name}
  </h2>

  {/* LOCATION */}
  <p style={{
    fontFamily: "'Outfit', sans-serif",
    fontSize: "0.75rem",
    color: "#C9A84C",
    margin: "0 0 14px 0",
    letterSpacing: "0.05em",
  }}>
    📍 {selected.location}
  </p>

  {/* DIVIDER */}
  <div style={{
    width: "36px",
    height: "1px",
    background: "rgba(201,168,76,0.4)",
    marginBottom: "14px",
  }} />

  {/* DESCRIPTION */}
  <p style={{
    fontFamily: "'Outfit', sans-serif",
    fontSize: "0.8rem",
    color: "#8a8580",
    lineHeight: 1.75,
    margin: "0 0 16px 0",
  }}>
    {selected.description}
  </p>

  {/* STATS ROW */}
  <div style={{
    display: "flex",
    gap: "20px",
    marginBottom: "16px",
    padding: "12px 0",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  }}>
    {selected.rooms && (
      <div>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#F5F0E8", margin: 0 }}>{selected.rooms}</p>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Rooms</p>
      </div>
    )}
    {selected.units && (
      <div>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#F5F0E8", margin: 0 }}>{selected.units}</p>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Units</p>
      </div>
    )}
    <div>
      <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#C9A84C", margin: 0 }}>{selected.rating} ★</p>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Rating</p>
    </div>
  </div>

  {/* AMENITIES */}
  <div>
    <p style={{
      fontFamily: "'Outfit', sans-serif",
      fontSize: "0.65rem",
      letterSpacing: "0.18em",
      color: "#C9A84C",
      textTransform: "uppercase",
      marginBottom: "10px",
    }}>
      Amenities
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {selected.amenities.map((a, i) => (
        <span key={i} style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.7rem",
          color: "#8a8580",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "4px",
          padding: "4px 10px",
        }}>
          {a}
        </span>
      ))}
    </div>
  </div>

</div>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .prop-card:hover .prop-img { transform: scale(1.06); }

        .prop-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0);
          transition: 0.3s ease;
        }

        .prop-card:hover .prop-overlay {
          background: rgba(0,0,0,0.45);
        }

        .prop-plus {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #C9A84C;
          color: #C9A84C;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.3s ease;
          background: rgba(13,17,23,0.3);
          backdrop-filter: blur(4px);
        }

        .prop-card:hover .prop-plus {
          opacity: 1;
        }

        .prop-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(13,17,23,0.7);
          border: 1px solid rgba(201,168,76,0.3);
          color: #C9A84C;
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .prop-text {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 40px 12px 12px;
          background: linear-gradient(transparent, rgba(0,0,0,0.85));
        }

        .prop-name {
          font-size: 13px;
          color: #fff;
          font-weight: 600;
        }

        .prop-location {
          font-size: 11px;
          color: #C9A84C;
        }
      `}</style>
    </section>
  );
}

/* ARROWS */
function arrow(side) {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "10px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "rgba(13,17,23,0.7)",
    border: "1px solid rgba(201,168,76,0.3)",
    color: "#C9A84C",
    cursor: "pointer",
    zIndex: 10,
  };
}

function modalArrow(side) {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "10px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "rgba(13,17,23,0.6)",
    border: "1px solid rgba(201,168,76,0.3)",
    color: "#C9A84C",
    cursor: "pointer",
  };
}