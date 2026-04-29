import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CTABanner from "../components/home/CTABanner";
import ClientsSection from "../components/home/ClientsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import { SERVICES, HOW_WE_WORK, WHY_CHOOSE, FUTURE_PROJECTIONS } from "../data/services";
import { HOTELS, APARTMENTS } from "../data/properties";
import { models, compareData } from "../data/models";
import ModelsSection from "../components/home/ModelsSection";

const Icons = {
  fixed: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 9h10M6 13h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  revenue: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 16L8 10L12 13L18 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 5h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  management: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 19c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  custom: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2l2 4.5 4.5.7-3.25 3.15.77 4.5L11 12.5l-4.02 2.35.77-4.5L4.5 7.2l4.5-.7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 19h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  close: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  check: (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M1.25 5.5L4 8L9.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cross: (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M2.5 2.5l6 6M8.5 2.5l-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

function CompareModal({ onClose }) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  const isMobile = windowWidth < 640;

  const cols = ["fixed", "revenue", "management", "custom"];

  // Shorter labels on mobile so columns don't overflow
  const colLabels = {
    fixed: isMobile ? "Fixed" : "Fixed Lease",
    revenue: isMobile ? "Revenue" : "Revenue Share",
    management: isMobile ? "Mgmt Fee" : "Mgmt Fee",
    custom: isMobile ? "Custom" : "Custom",
  };

  function renderCell(val) {
    if (val === true) {
      return (
        <span style={cellStyle("rgba(201,168,76,0.15)", "1px solid rgba(201,168,76,0.4)", "#C9A84C")}>
          {Icons.check}
        </span>
      );
    }
    if (val === false) {
      return (
        <span style={cellStyle("rgba(255,255,255,0.04)", "1px solid rgba(255,255,255,0.08)", "rgba(255,255,255,0.2)")}>
          {Icons.cross}
        </span>
      );
    }
    return (
      <span style={{
        ...cellStyle("rgba(201,168,76,0.06)", "1px dashed rgba(201,168,76,0.3)", "rgba(201,168,76,0.5)"),
        fontSize: 10,
        fontFamily: "'Outfit', sans-serif",
      }}>
        ~
      </span>
    );
  }

  function cellStyle(bg, border, color) {
    return {
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: isMobile ? 20 : 22,
      height: isMobile ? 20 : 22,
      borderRadius: "50%", background: bg, border, color,
    };
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(8,10,14,0.82)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: isMobile ? "12px" : "24px",
        overflowY: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0D1117",
          border: "1px solid rgba(201,168,76,0.18)",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "760px",
          // No horizontal overflow — padding shrinks on mobile
          padding: isMobile
            ? "20px 14px 20px"
            : "clamp(20px, 5vw, 40px) clamp(16px, 5vw, 40px) clamp(20px, 4vw, 36px)",
          position: "relative",
          margin: "auto",
          boxSizing: "border-box",
        }}
      >
        {/* Decorative corner glow */}
        <div style={{
          position: "absolute", top: 0, right: 0, width: 120, height: 120,
          background: "radial-gradient(circle at top right, rgba(201,168,76,0.07), transparent 70%)",
          borderRadius: "0 16px 0 0", pointerEvents: "none",
        }} />

        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: isMobile ? 18 : "clamp(20px, 4vw, 32px)",
          gap: "12px",
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: isMobile ? "0.7rem" : "0.8rem",
              fontWeight: 700, letterSpacing: "0.22em",
              color: "#C9A84C", marginBottom: 6,
              textTransform: "uppercase",
            }}>
              Model Comparison
            </p>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: isMobile ? "1.25rem" : "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 600, color: "#F0EAD6",
              lineHeight: 1.2, margin: 0,
            }}>
              Choose Your Partnership Model
            </h3>
          </div>
          {/* flexShrink:0 + marginLeft so it never gets squished */}
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8, color: "#8a8580", cursor: "pointer",
              padding: "8px 10px",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
              flexShrink: 0,
              marginLeft: 12,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.color = "#C9A84C"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#8a8580"; }}
          >
            {Icons.close}
          </button>
        </div>

        {/* Table — NO horizontal scroll, adapts via font/padding */}
        <div style={{ width: "100%" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              {/* Feature label col takes ~38% on mobile, 36% on desktop */}
              <col style={{ width: isMobile ? "38%" : "36%" }} />
              <col /><col /><col /><col />
            </colgroup>
            <thead>
              <tr>
                <th style={{
                  textAlign: "left", paddingBottom: isMobile ? 10 : 16,
                  paddingRight: isMobile ? 6 : 12,
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: isMobile ? "9px" : "11px",
                  color: "rgba(255,255,255,0.25)", fontWeight: 500,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  Feature
                </th>
                {cols.map(col => (
                  <th key={col} style={{
                    textAlign: "center",
                    paddingBottom: isMobile ? 10 : 16,
                    paddingLeft: isMobile ? 2 : 6,
                    paddingRight: isMobile ? 2 : 6,
                    fontFamily: "'Cinzel', serif",
                    fontSize: isMobile ? "8.5px" : "10px",
                    color: "#C9A84C", fontWeight: 600,
                    letterSpacing: "0.02em",
                    // Allow wrapping on tiny screens
                    wordBreak: "break-word",
                    lineHeight: 1.3,
                  }}>
                    {colLabels[col]}
                  </th>
                ))}
              </tr>
              <tr>
                <td colSpan={5} style={{ padding: 0 }}>
                  <div style={{ height: 1, background: "rgba(201,168,76,0.12)", marginBottom: 4 }} />
                </td>
              </tr>
            </thead>
            <tbody>
              {compareData.features.map((row, i) => (
                <tr key={row.label} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.012)" : "transparent" }}>
                  <td style={{
                    padding: isMobile ? "9px 6px 9px 0" : "10px 12px 10px 0",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: isMobile ? "10.5px" : "12px",
                    color: "rgba(240,234,214,0.75)",
                    letterSpacing: "0.01em",
                    lineHeight: 1.35,
                    // Allow label to wrap rather than push width
                    wordBreak: "break-word",
                  }}>
                    {row.label}
                  </td>
                  {cols.map(col => (
                    <td key={col} style={{
                      textAlign: "center",
                      padding: isMobile ? "9px 2px" : "10px 6px",
                    }}>
                      {renderCell(row[col])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          gap: isMobile ? "8px 14px" : "12px 20px",
          marginTop: 20, paddingTop: 18,
          borderTop: "1px solid rgba(201,168,76,0.1)",
        }}>
          {[
            { symbol: "✓", label: "Included", color: "rgba(201,168,76,0.8)" },
            { symbol: "—", label: "Not included", color: "rgba(255,255,255,0.2)" },
            { symbol: "~", label: "Partial / On request", color: "rgba(201,168,76,0.45)" },
          ].map(({ symbol, label, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontFamily: "monospace", color, fontSize: isMobile ? 12 : 13 }}>{symbol}</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: isMobile ? 10 : 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.03em" }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: isMobile ? 20 : 24, textAlign: "center" }}>
          <Link
            to="/contact"
            onClick={onClose}
            style={{
              display: "inline-block",
              padding: isMobile ? "11px 20px" : "12px 28px",
              background: "linear-gradient(135deg, #C9A84C, #e0be78)",
              color: "#0D1117",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: isMobile ? "11px" : "12px",
              letterSpacing: "0.12em",
              textDecoration: "none",
              borderRadius: "8px",
              textTransform: "uppercase",
              transition: "opacity 0.2s",
              // Full width on very small screens
              width: windowWidth < 380 ? "100%" : "auto",
              boxSizing: "border-box",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Discuss a Model With Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeModel, setActiveModel] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        paddingTop: "72px",
        minHeight: "clamp(280px, 40vw, 380px)",
        background: "#0D1117",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://picsum.photos/seed/svc-hero/1400/600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #0D1117 30%, transparent 80%)",
        }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(36px, 6vw, 60px) clamp(1rem, 4vw, 2rem) clamp(36px, 5vw, 52px)", position: "relative", zIndex: 1, width: "100%", boxSizing: "border-box" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
            OUR SERVICES
          </p>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.6rem, 4vw, 3.2rem)", fontWeight: 700, color: "#F5F0E8", lineHeight: 1.15, marginBottom: "16px" }}>
            Comprehensive Solutions.<br />Stress-Free Ownership.
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(13px, 2vw, 15px)", color: "#8a8580", lineHeight: 1.7, maxWidth: "500px", margin: 0 }}>
            Comprehensive property management solutions designed to maximize returns and deliver hassle-free ownership across Jaipur and beyond.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ background: "#F5F0E8", padding: "clamp(48px, 8vw, 80px) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 48px)" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              WHAT WE OFFER
            </p>
            <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#e8c97a)", margin: "0 auto" }} />
          </div>

          <div className="services-grid" style={{ display: "grid", gap: "1.25rem" }}>
            {SERVICES.map((service, index) => {
              const isHovered = hoveredService === index;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    position: "relative",
                    padding: "clamp(1.25rem, 3vw, 1.75rem) clamp(1rem, 2.5vw, 1.5rem)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    background: isHovered ? "#ffffff" : "#f9f8f6",
                    border: isHovered
                      ? "1px solid rgba(201,168,76,0.35)"
                      : "1px solid rgba(0,0,0,0.06)",
                    boxShadow: isHovered ? "0 12px 32px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  <div style={{
                    position: "absolute", inset: 0,
                    background: isHovered
                      ? "radial-gradient(circle at top left, rgba(201,168,76,0.06), transparent 60%)"
                      : "transparent",
                    transition: "all 0.4s ease",
                    zIndex: 1,
                  }} />

                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{
                      width: "48px", height: "48px",
                      borderRadius: "50%",
                      border: isHovered ? "1px solid #C9A84C" : "1px solid rgba(0,0,0,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "1rem",
                      background: isHovered ? "rgba(201,168,76,0.08)" : "transparent",
                      transition: "all 0.3s ease",
                    }}>
                      <img
                        src={service.icon}
                        alt={service.title}
                        style={{ width: "24px", height: "24px", objectFit: "contain", filter: "invert(67%) sepia(40%) saturate(500%) hue-rotate(2deg)" }}
                      />
                    </div>

                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(16px, 2vw, 18px)", fontWeight: 600,
                      color: "#0D1117",
                      marginBottom: "8px",
                      transition: "color 0.3s ease",
                    }}>
                      {service.title}
                    </h3>

                    <p style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: "clamp(12px, 1.5vw, 13px)",
                      color: "#6a6560", lineHeight: 1.6, margin: 0,
                      opacity: isHovered ? 0.4 : 1,
                      transition: "all 0.3s ease",
                    }}>
                      {service.shortDesc}
                    </p>

                    <div style={{
                      marginTop: "12px",
                      fontFamily: "'Outfit', sans-serif", fontSize: "clamp(12px, 1.5vw, 13px)",
                      lineHeight: 1.7, color: "#5a5550",
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateY(0)" : "translateY(8px)",
                      maxHeight: isHovered ? "200px" : "0px",
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                    }}>
                      {service.fullDesc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP MODELS ── */}
      <section style={{ background: "#111827", padding: "clamp(48px, 8vw, 80px) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 48px)" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              PARTNERSHIP MODELS
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(13px, 2vw, 14px)", color: "#8a8580", margin: 0 }}>
              Flexible models tailored to your goals.
            </p>
          </div>

          <div className="models-4col" style={{ display: "grid", gap: "16px", marginBottom: "clamp(28px, 4vw, 40px)" }}>
            {models.map((m) => {
              const isActive = activeModel === m.id;
              return (
                <div
                  key={m.id}
                  onMouseEnter={() => setActiveModel(m.id)}
                  onMouseLeave={() => setActiveModel(null)}
                  style={{
                    padding: "clamp(18px, 3vw, 24px) clamp(14px, 2.5vw, 20px)",
                    borderRadius: "12px",
                    background: isActive ? "rgba(201,168,76,0.06)" : "rgba(255,255,255,0.02)",
                    border: isActive ? "1px solid rgba(201,168,76,0.35)" : "1px solid rgba(255,255,255,0.07)",
                    transform: isActive ? "translateY(-5px)" : "none",
                    boxShadow: isActive ? "0 10px 28px rgba(0,0,0,0.3)" : "none",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                >
                  <div style={{ color: "#C9A84C", marginBottom: "12px" }}>{Icons[m.icon]}</div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(11px, 1.5vw, 13px)", fontWeight: 600, color: "#F5F0E8", marginBottom: "6px" }}>
                    {m.label}
                  </p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.5vw, 12px)", color: "#6b6560", lineHeight: 1.5, margin: 0 }}>
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "transparent", color: "#C9A84C",
                border: "1.5px solid #C9A84C",
                padding: "12px clamp(20px, 4vw, 28px)", borderRadius: "4px",
                fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.5vw, 13px)",
                fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", transition: "all 0.25s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#0D1117"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
            >
              Compare Models
            </button>
          </div>
        </div>
      </section>

      {modalOpen && <CompareModal onClose={() => setModalOpen(false)} />}

      {/* ── HOW WE WORK ── */}
      <section style={{ background: "#0D1117", padding: "clamp(48px, 8vw, 80px) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)", boxSizing: "border-box" }}>
          <div className="how-grid" style={{ display: "grid", gap: "clamp(32px, 5vw, 60px)", alignItems: "center" }}>
            {/* Left image */}
            <div style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "4/5", maxHeight: "500px" }}>
              <img
                src="https://picsum.photos/seed/how-work/600/750"
                alt="How we work"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Right steps */}
            <div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
                HOW WE WORK
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 3vw, 24px)", marginTop: "clamp(16px, 3vw, 28px)" }}>
                {HOW_WE_WORK.map((step) => (
                  <div key={step.step} style={{ display: "flex", gap: "clamp(14px, 2.5vw, 20px)", alignItems: "flex-start" }}>
                    <div style={{
                      width: "44px", height: "44px", flexShrink: 0,
                      borderRadius: "8px",
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <span style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", color: "#C9A84C", fontWeight: 700 }}>{step.step}</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 600, color: "#F5F0E8", marginBottom: "4px", marginTop: 0 }}>{step.title}</h3>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(12px, 1.5vw, 13px)", color: "#6b6560", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section style={{ background: "#F5F0E8", padding: "clamp(48px, 8vw, 80px) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 48px)" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              WHY CHOOSE BLACK TIE HOSPITALITY?
            </p>
            <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#e8c97a)", margin: "0 auto" }} />
          </div>
          <div className="why-grid" style={{ display: "grid", gap: "16px" }}>
            {WHY_CHOOSE.map((w) => (
              <div
                key={w.title}
                style={{
                  textAlign: "center",
                  padding: "clamp(20px, 3vw, 28px) clamp(12px, 2vw, 16px)",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "10px",
                  transition: "all 0.35s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.09)";
                  const ring = e.currentTarget.querySelector(".why-icon-ring");
                  if (ring) { ring.style.background = "rgba(201,168,76,0.12)"; ring.style.borderColor = "#C9A84C"; }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  const ring = e.currentTarget.querySelector(".why-icon-ring");
                  if (ring) { ring.style.background = "transparent"; ring.style.borderColor = "rgba(201,168,76,0.3)"; }
                }}
              >
                <div className="why-icon-ring" style={{
                  width: "48px", height: "48px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 14px",
                  transition: "all 0.35s ease",
                }}>
                  <img
                    src={w.icon}
                    alt={w.title}
                    style={{ width: "24px", height: "24px", objectFit: "contain", filter: "invert(67%) sepia(40%) saturate(500%) hue-rotate(2deg)" }}
                  />
                </div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(10px, 1.2vw, 12px)", color: "#0D1117", fontWeight: 600, marginBottom: "6px", marginTop: 0 }}>{w.title}</h3>
                <div style={{ width: "24px", height: "1.5px", background: "linear-gradient(90deg, #C9A84C, #e8c97a)", margin: "6px auto 8px", borderRadius: "2px" }} />
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.3vw, 12px)", color: "#6b6560", lineHeight: 1.5, margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROPERTY PORTFOLIO ── */}
      <section style={{ background: "#000000", padding: "clamp(48px, 8vw, 80px) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 48px)" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              OUR PROPERTY PORTFOLIO
            </p>
          </div>

          <div className="portfolio-grid" style={{ display: "grid", gap: "clamp(20px, 4vw, 40px)" }}>
            {/* Hotels */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ height: "clamp(120px, 15vw, 160px)", overflow: "hidden" }}>
                <img src="https://picsum.photos/seed/hotels-port/600/200" alt="Hotels" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "clamp(16px, 3vw, 24px)" }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(12px, 1.8vw, 14px)", color: "#F5F0E8", fontWeight: 600, marginBottom: "16px", marginTop: 0 }}>Hotels</h3>
                <div className="property-list-grid" style={{ display: "grid", gap: "4px 20px" }}>
                  {HOTELS.map((h, i) => (
                    <p key={h.id} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.3vw, 12px)", color: "#8a8580", margin: 0 }}>
                      <span style={{ color: "#C9A84C", marginRight: "6px" }}>{String(i + 1).padStart(2, "0")}</span>{h.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Apartments */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ height: "clamp(120px, 15vw, 160px)", overflow: "hidden" }}>
                <img src="https://picsum.photos/seed/apts-port/600/200" alt="Studio Apartments" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "clamp(16px, 3vw, 24px)" }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(12px, 1.8vw, 14px)", color: "#F5F0E8", fontWeight: 600, marginBottom: "16px", marginTop: 0 }}>Studio Apartments</h3>
                <div className="property-list-grid" style={{ display: "grid", gap: "4px 20px" }}>
                  {APARTMENTS.map((a, i) => (
                    <p key={a.id} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.3vw, 12px)", color: "#8a8580", margin: 0 }}>
                      <span style={{ color: "#C9A84C", marginRight: "6px" }}>{String(i + 1).padStart(2, "0")}</span>{a.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(12px, 1.5vw, 13px)", color: "#6b6560", textAlign: "center", marginTop: "24px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            Our properties are spread across key locations in Jaipur and nearby cities, catering to medical tourists, students, corporates, and leisure travelers with well-maintained, fully-equipped accommodations.
          </p>
        </div>
      </section>

      {/* ── FUTURE PROJECTIONS ── */}
      <section style={{ background: "#111827", padding: "clamp(48px, 8vw, 80px) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 48px)" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              FUTURE PROJECTIONS
            </p>
          </div>
          <div className="proj-grid" style={{ display: "grid", gap: "clamp(12px, 2vw, 20px)" }}>
            {FUTURE_PROJECTIONS.map((p) => (
              <div
                key={p.num}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  padding: "clamp(16px, 3vw, 24px)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{
                  width: "44px", height: "44px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "16px",
                }}>
                  <span style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", color: "#C9A84C", fontWeight: 700 }}>{p.num}</span>
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(12px, 1.5vw, 13px)", fontWeight: 600, color: "#F5F0E8", marginBottom: "8px", marginTop: 0, lineHeight: 1.4 }}>{p.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.3vw, 12px)", color: "#6b6560", lineHeight: 1.5, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />
      <TestimonialsSection />
      <CTABanner />

      <style>{`
        /* ── Services Grid ── */
        .services-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Partnership Models ── */
        .models-4col {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 900px) {
          .models-4col { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 420px) {
          .models-4col { grid-template-columns: 1fr !important; }
        }

        /* ── How We Work ── */
        .how-grid {
          grid-template-columns: 1fr 1.4fr;
        }
        @media (max-width: 768px) {
          .how-grid { grid-template-columns: 1fr !important; }
          .how-grid > div:first-child { aspect-ratio: 16/9 !important; max-height: 280px !important; }
        }

        /* ── Why Choose ── */
        .why-grid {
          grid-template-columns: repeat(6, 1fr);
        }
        @media (max-width: 1100px) {
          .why-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 360px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Portfolio Grid ── */
        .portfolio-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 640px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Property list inside portfolio ── */
        .property-list-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 400px) {
          .property-list-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Future Projections ── */
        .proj-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 420px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}