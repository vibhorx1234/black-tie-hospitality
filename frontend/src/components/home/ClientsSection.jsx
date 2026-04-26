import React, { useState, useRef, useEffect } from "react";
import { CLIENTS } from "../../data/clients";

const VISIBLE = 5; // logos visible at once
const ITEM_WIDTH = 100 / VISIBLE;

export default function ClientsSection() {
  const total = CLIENTS.length;
  // Clone: [...CLIENTS, ...CLIENTS, ...CLIENTS] — start in the middle clone
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  const [index, setIndex] = useState(total); // start at middle set
  const [animated, setAnimated] = useState(true);
  const dragging = useRef(false);
  const startX = useRef(0);
  const trackRef = useRef(null);

  const prev = () => {
    setAnimated(true);
    setIndex((i) => i - 1);
  };

  const next = () => {
    setAnimated(true);
    setIndex((i) => i + 1);
  };

  // When we reach the edges of the middle clone, silently jump back to center
  useEffect(() => {
    if (index <= 0) {
      // jumped past left edge — silently reset to equivalent position in middle
      const timer = setTimeout(() => {
        setAnimated(false);
        setIndex(total);
      }, 600);
      return () => clearTimeout(timer);
    }
    if (index >= total * 2) {
      // jumped past right edge — silently reset
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

  const arrowStyle = (side) => ({
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

  return (
    <section style={{ background: "#0D1117", padding: "72px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "36px" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C" }}>
            OUR CLIENTS
          </p>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "32px 40px",
            background: "rgba(0,0,0)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "10px",
          }}
        >
          <button
            onClick={prev}
            style={arrowStyle("left")}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.15)")}
          >
            ←
          </button>

          {/* Track */}
          <div
            ref={trackRef}
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
                  padding: "0 16px",
                }}
              >
                <img
                  src={client.logo}
                  alt={client.id}
                  draggable={false}
                  style={{
                    height: "72px",
                    width: "auto",
                    objectFit: "contain",
                    opacity: 0.6,
                    transition: "opacity 0.2s",
                    cursor: "default",
                    pointerEvents: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
                />
              </div>
            ))}
          </div>

          <button
            onClick={next}
            style={arrowStyle("right")}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.15)")}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}