import { Link } from "react-router-dom";
import React from "react";

export default function CTABanner() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #C9A84C 0%, #a8872e 40%, #8a6e2e 100%)",
      padding: "52px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        pointerEvents: "none",
      }} />

      {/* Decorative chart icon */}
      <div style={{
        position: "absolute", right: "10%", top: "50%", transform: "translateY(-50%)",
        opacity: 0.12,
        fontSize: "80px",
      }}>📊</div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
              fontWeight: 700,
              color: "#0D1117",
              marginBottom: "6px",
              letterSpacing: "0.02em",
            }}>
              Ready to Maximize Your Property Income?
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "rgba(13,17,23,0.7)" }}>
              Let's grow your property's potential together.
            </p>
          </div>

          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#0D1117",
              color: "#C9A84C",
              padding: "14px 32px",
              borderRadius: "4px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.25s ease",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#141924";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0D1117";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}