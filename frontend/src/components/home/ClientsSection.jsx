import React, { useState, useRef, useEffect } from "react";
import { CLIENTS } from "../../data/clients";

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

// ── Visible logos by breakpoint ───────────────────────────────────────────────
function getVisible(width) {
  if (width < 480) return 2;   // small mobile: 2 logos
  if (width < 768) return 3;   // large mobile: 3 logos
  if (width < 1024) return 4;  // tablet: 4 logos
  return 5;                     // desktop: 5 logos (original)
}

// ── Logo height by breakpoint ─────────────────────────────────────────────────
function getLogoHeight(width) {
  if (width < 480) return 44;
  if (width < 768) return 54;
  if (width < 1024) return 62;
  return 72;
}

export default function ClientsSection() {
  const width = useWindowWidth();
  const isMobile = width < 768;

  const VISIBLE = getVisible(width);
  const ITEM_WIDTH = 100 / VISIBLE;
  const LOGO_HEIGHT = getLogoHeight(width);

  const total = CLIENTS.length;
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  const [index, setIndex] = useState(total); // start at middle clone
  const [animated, setAnimated] = useState(true);
  const dragging = useRef(false);
  const startX = useRef(0);

  const prev = () => {
    setAnimated(true);
    setIndex((i) => i - 1);
  };

  const next = () => {
    setAnimated(true);
    setIndex((i) => i + 1);
  };

  // Silently reset when reaching clone edges
  useEffect(() => {
    if (index <= 0) {
      const timer = setTimeout(() => {
        setAnimated(false);
        setIndex(total);
      }, 600);
      return () => clearTimeout(timer);
    }
    if (index >= total * 2) {
      const timer = setTimeout(() => {
        setAnimated(false);
        setIndex(total);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [index, total]);

  const onStart = (e) => {
    dragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onEnd = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX.current - endX;
    if (diff > 40) next();
    else if (diff < -40) prev();
  };

  const arrowBtnStyle = (side) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "8px",
    zIndex: 10,
    background: "rgba(201,168,76,0.15)",
    border: "1px solid rgba(201,168,76,0.4)",
    color: "#C9A84C",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "1rem",
    backdropFilter: "blur(4px)",
    transition: "background 0.2s",
  });

  // Current dot index (normalize to 0..total-1)
  const activeDot = ((index - total) % total + total) % total;

  return (
    <section style={{ background: "#000000", padding: "clamp(2.5rem, 6vw, 5rem) clamp(1rem, 5vw, 2rem)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 1rem" : "0 2rem" }}>

        {/* Header */}
        <div style={{ marginBottom: isMobile ? "24px" : "36px" }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: isMobile ? "0.7rem" : "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C9A84C",
            margin: 0,
          }}>
            Our Clients
          </p>
          <div style={{
            width: 36,
            height: 1.5,
            background: "linear-gradient(90deg, #C9A84C, transparent)",
            marginTop: 6,
          }} />
        </div>

        {/* Carousel container */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            padding: isMobile ? "24px 12px" : "32px 40px",
            background: "rgba(0,0,0,0)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "10px",
          }}
        >
          {/* Arrows — desktop/tablet only */}
          {!isMobile && (
            <button
              onClick={prev}
              style={arrowBtnStyle("left")}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.15)")}
            >
              ‹
            </button>
          )}

          {/* Track */}
          <div
            onMouseDown={onStart}
            onMouseUp={onEnd}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={onStart}
            onTouchEnd={onEnd}
            style={{
              display: "flex",
              alignItems: "center",
              transition: animated ? "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
              transform: `translateX(-${index * ITEM_WIDTH}%)`,
              userSelect: "none",
              touchAction: "pan-y",
            }}
          >
            {items.map((client, i) => (
              <div
                key={i}
                style={{
                  minWidth: `${ITEM_WIDTH}%`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: isMobile ? "0 10px" : "0 16px",
                }}
              >
                <img
                  src={client.logo}
                  alt={client.id}
                  draggable={false}
                  style={{
                    height: `${LOGO_HEIGHT}px`,
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                    opacity: 0.6,
                    transition: "opacity 0.2s",
                    cursor: "default",
                    pointerEvents: isMobile ? "none" : "auto",
                  }}
                  onMouseEnter={(e) => !isMobile && (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => !isMobile && (e.currentTarget.style.opacity = "0.6")}
                />
              </div>
            ))}
          </div>

          {/* Arrows — desktop/tablet only */}
          {!isMobile && (
            <button
              onClick={next}
              style={arrowBtnStyle("right")}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.15)")}
            >
              ›
            </button>
          )}
        </div>

        {/* Mobile: dot indicators + swipe hint */}
        {isMobile && (
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", gap: 6 }}>
              {CLIENTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setAnimated(true);
                    setIndex(total + i);
                  }}
                  style={{
                    width: i === activeDot ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === activeDot ? "#C9A84C" : "rgba(201,168,76,0.25)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
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
      </div>
    </section>
  );
}