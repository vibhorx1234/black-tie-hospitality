import { useState, useEffect, useRef } from "react";
import React from "react";
import { TESTIMONIALS } from "../../data/testimonials";

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
  if (width < 640) return 1;   // mobile: 1 card at a time
  if (width < 1024) return 2;  // tablet: 2 cards
  return 3;                     // desktop: 3 cards (original)
}

export default function TestimonialsSection() {
  const width = useWindowWidth();
  const isMobile = width < 640;
  const visible = getVisible(width);
  const max = Math.max(0, TESTIMONIALS.length - visible);

  const [current, setCurrent] = useState(0);

  // Swipe support
  const startX = useRef(0);
  const isDragging = useRef(false);

  // Clamp current when visible count changes (e.g. resize)
  useEffect(() => {
    setCurrent((c) => Math.min(c, Math.max(0, TESTIMONIALS.length - visible)));
  }, [visible]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  const onStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const onEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX.current - endX;
    if (diff > 40) next();
    else if (diff < -40) prev();
  };

  // Gap between cards (px)
  const GAP = isMobile ? 16 : 20;

  return (
    <section style={{ background: "#0D1117", padding: "clamp(2.5rem, 6vw, 5rem) clamp(1rem, 5vw, 2rem)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 1rem" : "0 2rem" }}>

        {/* Header */}
        <div style={{ marginBottom: isMobile ? "20px" : "36px" }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: isMobile ? "0.7rem" : "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C9A84C",
            margin: 0,
          }}>
            What Our Clients Say
          </p>
          <div style={{
            width: 36,
            height: 1.5,
            background: "linear-gradient(90deg, #C9A84C, transparent)",
            marginTop: 6,
          }} />
        </div>

        {/* Carousel */}
        <div style={{ position: "relative" }}>

          {/* Prev arrow — hidden on mobile */}
          {!isMobile && (
            <button
              onClick={prev}
              disabled={current === 0}
              style={arrowStyle("left", current === 0)}
            >‹</button>
          )}

          {/* Track wrapper */}
          <div
            style={{ overflow: "hidden" }}
            onMouseDown={onStart}
            onMouseUp={onEnd}
            onMouseLeave={() => { isDragging.current = false; }}
            onTouchStart={onStart}
            onTouchEnd={onEnd}
          >
            <div style={{
              display: "flex",
              gap: `${GAP}px`,
              transform: `translateX(calc(-${current * (100 / visible)}% - ${current * GAP / visible}px))`,
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              touchAction: "pan-y",
            }}>
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  style={{
                    flex: `0 0 calc(${100 / visible}% - ${GAP * (visible - 1) / visible}px)`,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    padding: isMobile ? "20px 18px" : "28px",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
                >
                  {/* Stars */}
                  <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} style={{ color: "#C9A84C", fontSize: isMobile ? "12px" : "14px" }}>★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: isMobile ? "13px" : "14px",
                    color: "#b8b0a0",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                    marginTop: 0,
                  }}>
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {t.img ? (
                      <img
                        src={t.img}
                        alt={t.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "1px solid rgba(201,168,76,0.2)",
                          flexShrink: 0,
                        }}
                      />
                    ) : (
                      <div style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "rgba(201,168,76,0.15)",
                        border: "1px solid rgba(201,168,76,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#C9A84C",
                        textTransform: "uppercase",
                        flexShrink: 0,
                      }}>
                        {t.avatar}
                      </div>
                    )}
                    <div>
                      <p style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: isMobile ? "12px" : "13px",
                        color: "#F5F0E8",
                        fontWeight: 600,
                        margin: "0 0 2px",
                      }}>
                        {t.name}
                      </p>
                      <p style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: isMobile ? "10px" : "11px",
                        color: "#C9A84C",
                        margin: 0,
                      }}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow — hidden on mobile */}
          {!isMobile && (
            <button
              onClick={next}
              disabled={current >= max}
              style={arrowStyle("right", current >= max)}
            >›</button>
          )}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "24px" }}>
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: current === i ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: current === i ? "#C9A84C" : "rgba(201,168,76,0.25)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Swipe hint — mobile only */}
        {isMobile && (
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "10px",
            color: "rgba(201,168,76,0.35)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            textAlign: "center",
            margin: "10px 0 0",
          }}>
            Swipe to explore
          </p>
        )}
      </div>
    </section>
  );
}

// ── Arrow button style ─────────────────────────────────────────────────────────
function arrowStyle(side, disabled) {
  return {
    position: "absolute",
    [side]: "-20px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: disabled ? "rgba(255,255,255,0.03)" : "rgba(201,168,76,0.1)",
    border: `1px solid ${disabled ? "rgba(255,255,255,0.08)" : "rgba(201,168,76,0.3)"}`,
    color: disabled ? "#444" : "#C9A84C",
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    transition: "background 0.2s",
  };
}