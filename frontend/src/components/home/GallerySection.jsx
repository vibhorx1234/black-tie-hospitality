import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { GALLERY_ITEMS } from "../../data/gallery";

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
  return 5;                       // desktop (original 5)
}

export default function GallerySection() {
  const width = useWindowWidth();
  const isMobile = width < 768;

  const VISIBLE = getVisible(width);
  const ITEM_WIDTH = 100 / VISIBLE;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  // Fix: use refs for drag state so they persist across renders
  const startX = useRef(0);
  const isDragging = useRef(false);

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
    <section style={{ background: "#000000", padding: "clamp(2.5rem, 6vw, 5rem) clamp(1rem, 5vw, 2rem)" }}>
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
              Gallery
            </p>
            {/* Subtle gold underline accent */}
            <div style={{
              width: 36,
              height: 1.5,
              background: "linear-gradient(90deg, #C9A84C, transparent)",
              marginTop: 6,
            }} />
          </div>

          {/* View Full Gallery — only on desktop in header */}
          {!isMobile && (
            <ViewGalleryLink />
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
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: `translateX(-${index * ITEM_WIDTH}%)`,
              touchAction: "pan-y",
            }}
          >
            {GALLERY_ITEMS.concat(GALLERY_ITEMS).map((item, i) => (
              <div
                key={i}
                style={{
                  minWidth: `${ITEM_WIDTH}%`,
                  padding: isMobile ? "4px" : "6px",
                  flexShrink: 0,
                }}
              >
                <div
                  onClick={() => setSelected(item)}
                  className="gallery-card"
                  style={{
                    position: "relative",
                    borderRadius: isMobile ? "8px" : "8px",
                    overflow: "hidden",
                    aspectRatio: "7/4",
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
                      display: "block",
                    }}
                  />
                  <div className="gallery-overlay" />
                  <div className="gallery-plus">+</div>

                  {/* Title overlay at bottom */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    padding: isMobile ? "24px 10px 10px" : "32px 12px 10px",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.82))",
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
                      {item.title}
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: isMobile ? 11.5 : 13.5,
                      color: "#C9A84C",
                      margin: 0,
                    }}>
                      {item.category}
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
              {GALLERY_ITEMS.map((_, i) => (
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

            {/* Swipe hint */}
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

        {/* ── Mobile: View Full Gallery button below carousel ── */}
        {isMobile && (
          <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
            <ViewGalleryLink fullWidth />
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
            background: "rgba(0,0,0,0.82)",
            backdropFilter: "blur(6px)",
            display: "flex",
            justifyContent: "center",
            alignItems: isMobile ? "flex-end" : "center",
            zIndex: 1000,
            padding: isMobile ? 0 : "24px",
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
              borderRadius: isMobile ? "16px 16px 0 0" : "12px",
              overflow: "hidden",
              maxHeight: isMobile ? "92vh" : "90vh",
              display: "flex",
              flexDirection: "column",
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
                alt={selected.title}
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

                {/* Eyebrow — category */}
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

                {/* Property */}
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

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: isMobile ? "1.05rem" : "1.25rem",
                  fontWeight: 600,
                  color: "#F5F0E8",
                  margin: "0 0 12px 0",
                  lineHeight: 1.3,
                }}>
                  {selected.title}
                </h3>

                {/* Gold divider */}
                <div style={{
                  width: 36,
                  height: 1,
                  background: "rgba(201,168,76,0.4)",
                  marginBottom: 14,
                }} />

                {/* Description */}
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: isMobile ? "0.78rem" : "0.8rem",
                  color: "#8a8580",
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {selected.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        .gallery-card:hover .gallery-img,
        .gallery-card:focus .gallery-img {
          transform: scale(1.06);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0);
          transition: background 0.35s ease;
        }
        .gallery-card:hover .gallery-overlay {
          background: rgba(0,0,0,0.45);
        }

        .gallery-plus {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #C9A84C;
          color: #C9A84C;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          background: rgba(13,17,23,0.3);
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
          pointer-events: none;
        }
        .gallery-card:hover .gallery-plus {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        @media (max-width: 767px) {
          .gallery-plus { display: none; }
        }
      `}</style>
    </section>
  );
}

// ── View Full Gallery Link — reusable, supports full-width mobile variant ──────
function ViewGalleryLink({ fullWidth = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/gallery"
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
        ...(fullWidth ? {
          width: "100%",
          maxWidth: 320,
          padding: "12px 24px",
          border: "1px solid rgba(201,168,76,0.45)",
          borderRadius: "8px",
          background: hovered ? "#C9A84C" : "transparent",
        } : {
          padding: "8px 0",
          borderBottom: "1px solid",
          borderColor: hovered ? "#C9A84C" : "transparent",
        }),
      }}
    >
      View Full Gallery <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
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