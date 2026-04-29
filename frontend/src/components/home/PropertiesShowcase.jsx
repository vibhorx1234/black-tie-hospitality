import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { ALL_PROPERTIES } from "../../data/properties";

// ── Responsive hook ────────────────────────────────────────────────────────────
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

// ── Visible cards by breakpoint ────────────────────────────────────────────────
function getVisible(width) {
  if (width < 480) return 1.2;   // mobile: peek effect
  if (width < 768) return 2.1;   // large phone / small tablet
  if (width < 1024) return 3.1;  // tablet
  return 4;                       // desktop
}

export default function PropertiesShowcase() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isDesktop = width >= 1024;

  const VISIBLE = getVisible(width);
  const ITEM_WIDTH = 100 / VISIBLE;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  // Fix: use refs for drag state so they persist across renders
  const startX = useRef(0);
  const isDragging = useRef(false);

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

  // ── Swipe handlers (fixed with refs) ─────────────────────────────────────
  const onStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const onEnd = (e) => {
    if (!isDragging.current) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - startX.current;
    if (diff > 50) prev();
    if (diff < -50) next();
    isDragging.current = false;
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section style={{ background: "#0D1117", padding: "clamp(2.5rem, 6vw, 5rem) clamp(1rem, 5vw, 2rem)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 1rem" : "0 2rem" }}>

        {/* ── HEADER: desktop shows label + link inline; mobile shows label only ── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: isMobile ? "20px" : "28px",
        }}>
          <div>
            <p style={{
              fontFamily: "'Cinzel', serif",
              color: "#C9A84C",
              letterSpacing: "0.22em",
              fontSize: isMobile ? "0.7rem" : "0.85rem",
              margin: 0,
              textTransform: "uppercase",
            }}>
              Properties Showcase
            </p>
            {/* Subtle gold underline accent */}
            <div style={{
              width: 36,
              height: 1.5,
              background: "linear-gradient(90deg, #C9A84C, transparent)",
              marginTop: 6,
            }} />
          </div>

          {/* View All — only on desktop in header */}
          {!isMobile && (
            <ViewAllLink />
          )}
        </div>

        {/* ── CAROUSEL ── */}
        <div style={{ position: "relative", overflow: "hidden" }}>

          {/* Left arrow — hidden on mobile (swipe instead) */}
          {!isMobile && (
            <button onClick={prev} style={arrowStyle("left")}>‹</button>
          )}

          {/* TRACK */}
          <div
            onMouseDown={onStart}
            onMouseUp={onEnd}
            onMouseLeave={() => { isDragging.current = false; }}
            onTouchStart={onStart}
            onTouchEnd={onEnd}
            style={{
              display: "flex",
              transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: `translateX(-${index * ITEM_WIDTH}%)`,
              // On mobile, allow touch-pan
              touchAction: "pan-y",
            }}
          >
            {/* Duplicate for infinite feel */}
            {ALL_PROPERTIES.concat(ALL_PROPERTIES).map((p, i) => (
              <div
                key={i}
                style={{
                  minWidth: `${ITEM_WIDTH}%`,
                  padding: isMobile ? "4px" : "6px",
                  flexShrink: 0,
                }}
              >
                <div
                  onClick={() => setSelected(p)}
                  className="prop-card"
                  style={{
                    position: "relative",
                    borderRadius: isMobile ? "8px" : "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                    aspectRatio: "3/2",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="prop-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      display: "block",
                    }}
                  />

                  <div className="prop-overlay" />
                  <div className="prop-plus">+</div>

                  {/* Badge */}
                  <div style={{
                    position: "absolute",
                    top: isMobile ? 8 : 10,
                    left: isMobile ? 8 : 10,
                    background: "rgba(13,17,23,0.75)",
                    border: "1px solid rgba(201,168,76,0.35)",
                    color: "#C9A84C",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: isMobile ? 9 : 11,
                    padding: isMobile ? "3px 6px" : "4px 8px",
                    borderRadius: "4px",
                    letterSpacing: "0.06em",
                    backdropFilter: "blur(4px)",
                  }}>
                    {p.badge}
                  </div>

                  {/* Text */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    padding: isMobile ? "28px 10px 10px" : "40px 12px 12px",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.88))",
                    boxSizing: "border-box",
                  }}>
                    <p style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: isMobile ? 13 : 15,
                      color: "#fff",
                      fontWeight: 600,
                      margin: "0 0 2px",
                      lineHeight: 1.3,
                    }}>
                      {p.name}
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: isMobile ? 11.5 : 13.5,
                      color: "#C9A84C",
                      margin: 0,
                    }}>
                      📍 {p.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow — hidden on mobile */}
          {!isMobile && (
            <button onClick={next} style={arrowStyle("right")}>›</button>
          )}
        </div>

        {/* ── Mobile: dot indicators + swipe hint ── */}
        {isMobile && (
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            {/* Dot indicators */}
            <div style={{ display: "flex", gap: 6 }}>
              {ALL_PROPERTIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    width: i === index % total ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === index % total ? "#C9A84C" : "rgba(201,168,76,0.25)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            {/* Swipe hint — shown briefly */}
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "10px",
              color: "rgba(201,168,76,0.35)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              margin: 0,
            }}>
              Swipe to explore
            </p>
          </div>
        )}

        {/* ── Mobile: View All button below carousel ── */}
        {isMobile && (
          <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
            <ViewAllLink fullWidth />
          </div>
        )}
      </div>

      {/* ── MODAL ── */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(6px)",
            display: "flex",
            justifyContent: "center",
            alignItems: isMobile ? "flex-end" : "center",
            zIndex: 1000,
            padding: isMobile ? 0 : "20px",
            overflowY: "auto",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              background: "#111827",
              maxWidth: isMobile ? "100%" : "650px",
              width: "100%",
              borderRadius: isMobile ? "16px 16px 0 0" : "14px",
              overflow: "hidden",
              maxHeight: isMobile ? "92vh" : "90vh",
              display: "flex",
              flexDirection: "column",
              // Subtle gold border
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            {/* Drag handle on mobile */}
            {isMobile && (
              <div style={{
                position: "absolute",
                top: 10,
                left: "50%",
                transform: "translateX(-50%)",
                width: 36,
                height: 4,
                borderRadius: 2,
                background: "rgba(255,255,255,0.15)",
                zIndex: 2,
              }} />
            )}

            {/* IMAGE */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img
                src={selected.image}
                alt={selected.name}
                style={{
                  width: "100%",
                  aspectRatio: isMobile ? "4/3" : "16/9",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Image gradient overlay */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(transparent, rgba(17,24,39,0.9))",
                pointerEvents: "none",
              }} />

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(13,17,23,0.7)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                  fontSize: 18,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                  lineHeight: 1,
                }}
              >
                ×
              </button>

              {/* Modal nav arrows */}
              <button onClick={prevModal} style={modalArrowStyle("left")}>‹</button>
              <button onClick={nextModal} style={modalArrowStyle("right")}>›</button>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div style={{ overflowY: "auto", flexGrow: 1, WebkitOverflowScrolling: "touch" }}>
              <div style={{ padding: isMobile ? "20px 18px 28px" : "24px 28px 28px", color: "#F5F0E8" }}>

                {/* Eyebrow */}
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

                {/* Title */}
                <h2 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: isMobile ? "1.1rem" : "1.35rem",
                  fontWeight: 600,
                  color: "#F5F0E8",
                  margin: "0 0 6px 0",
                  lineHeight: 1.3,
                }}>
                  {selected.name}
                </h2>

                {/* Location */}
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.75rem",
                  color: "#C9A84C",
                  margin: "0 0 14px 0",
                  letterSpacing: "0.05em",
                }}>
                  📍 {selected.location}
                </p>

                {/* Divider */}
                <div style={{ width: 36, height: 1, background: "rgba(201,168,76,0.4)", marginBottom: 14 }} />

                {/* Description */}
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: isMobile ? "0.78rem" : "0.8rem",
                  color: "#8a8580",
                  lineHeight: 1.75,
                  margin: "0 0 16px 0",
                }}>
                  {selected.description}
                </p>

                {/* Stats row */}
                <div style={{
                  display: "flex",
                  gap: isMobile ? 16 : 20,
                  marginBottom: 16,
                  padding: "12px 0",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  flexWrap: "wrap",
                }}>
                  {selected.rooms && (
                    <div>
                      <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#F5F0E8", margin: 0 }}>{selected.rooms}</p>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Rooms</p>
                    </div>
                  )}
                  {selected.units && (
                    <div>
                      <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#F5F0E8", margin: 0 }}>{selected.units}</p>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Units</p>
                    </div>
                  )}
                  <div>
                    <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#C9A84C", margin: 0 }}>{selected.rating} ★</p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Rating</p>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    color: "#C9A84C",
                    textTransform: "uppercase",
                    marginBottom: 10,
                    marginTop: 0,
                  }}>
                    Amenities
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {selected.amenities.map((a, i) => (
                      <span key={i} style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.68rem",
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
        </div>
      )}

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        .prop-card:hover .prop-img,
        .prop-card:focus .prop-img {
          transform: scale(1.06);
        }

        .prop-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0);
          transition: background 0.3s ease;
        }
        .prop-card:hover .prop-overlay {
          background: rgba(0,0,0,0.42);
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
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          background: rgba(13,17,23,0.3);
          backdrop-filter: blur(4px);
          pointer-events: none;
        }
        .prop-card:hover .prop-plus {
          opacity: 1;
        }

        @media (max-width: 767px) {
          .prop-plus { display: none; }
        }
      `}</style>
    </section>
  );
}

// ── View All Link — reusable, supports full-width mobile variant ──────────────
function ViewAllLink({ fullWidth = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/properties"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: hovered ? "#0D1117" : "#C9A84C",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: hovered ? "12px" : "7px",
        transition: "all 0.25s ease",
        // Mobile full-width button style
        ...(fullWidth ? {
          width: "100%",
          maxWidth: 320,
          padding: "12px 24px",
          border: "1px solid rgba(201,168,76,0.45)",
          borderRadius: "8px",
          background: hovered ? "#C9A84C" : "transparent",
        } : {
          // Desktop inline link style
          padding: "8px 0",
          borderBottom: "1px solid",
          borderColor: hovered ? "#C9A84C" : "transparent",
        }),
      }}
    >
      View All Properties <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
    </Link>
  );
}

// ── Arrow button styles ────────────────────────────────────────────────────────
function arrowStyle(side) {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "8px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "rgba(13,17,23,0.75)",
    border: "1px solid rgba(201,168,76,0.35)",
    color: "#C9A84C",
    cursor: "pointer",
    zIndex: 10,
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    transition: "background 0.2s",
    lineHeight: 1,
  };
}

function modalArrowStyle(side) {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "10px",
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "rgba(13,17,23,0.65)",
    border: "1px solid rgba(201,168,76,0.3)",
    color: "#C9A84C",
    cursor: "pointer",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    lineHeight: 1,
    zIndex: 2,
  };
}