import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

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

export default function CTABanner() {
  const width = useWindowWidth();
  const isMobile = width < 640;
  const [hovered, setHovered] = useState(false);

  return (
    <section style={{
      background: "linear-gradient(135deg, #C9A84C 0%, #a8872e 40%, #8a6e2e 100%)",
      padding: "clamp(2.5rem, 6vw, 5rem) clamp(1rem, 5vw, 2rem)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: isMobile ? "0 1rem" : "0 2rem",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: isMobile ? "24px" : "32px",
        }}>

          {/* Text */}
          <div>
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: isMobile ? "1.2rem" : "clamp(1.3rem, 2.5vw, 1.8rem)",
              fontWeight: 700,
              color: "#0D1117",
              marginBottom: "6px",
              marginTop: 0,
              letterSpacing: "0.02em",
              lineHeight: 1.3,
            }}>
              Ready to Maximize Your Property Income?
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: isMobile ? "13px" : "14px",
              color: "rgba(13,17,23,0.7)",
              margin: 0,
            }}>
              Let's grow your property's potential together.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              background: hovered ? "#141924" : "#0D1117",
              color: "#C9A84C",
              padding: isMobile ? "13px 24px" : "14px 32px",
              borderRadius: "4px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: isMobile ? "12px" : "14px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.25s ease",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transform: hovered ? "translateY(-2px)" : "translateY(0)",
              boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.3)" : "none",
              // Full width on mobile
              ...(isMobile && { width: "100%", boxSizing: "border-box" }),
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}