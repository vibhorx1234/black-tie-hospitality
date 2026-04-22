import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const models = [
  {
    id: "fixed",
    color: "#4a90d9",
    colorBg: "rgba(74,144,217,0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 12h12M8 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    label: "Fixed Lease Model",
    tagline: "Guaranteed Income",
    points: ["Zero Vacancy Risk", "Full Control", "Predictable Income"],
  },
  {
    id: "revenue",
    color: "#4caf82",
    colorBg: "rgba(76,175,130,0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 20 L10 13 L15 16 L22 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 7h4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Revenue Share Model",
    tagline: "Higher Returns",
    points: ["Performance Driven", "Aligned Growth", "Shared Risk"],
  },
  {
    id: "management",
    color: "#b57bee",
    colorBg: "rgba(181,123,238,0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 22c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    label: "Management Fee Model",
    tagline: "Full Control",
    points: ["Expert Handling", "Complete Support", "Owner Earns Directly"],
  },
  {
    id: "custom",
    color: "#C9A84C",
    colorBg: "rgba(201,168,76,0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.5 5 5.5.8-4 3.9.95 5.5L14 15.5l-4.95 2.7.95-5.5L6 8.8l5.5-.8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 22h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    label: "Custom Solutions",
    tagline: "Tailored Approach",
    points: ["Flexible Terms", "Scalable Solutions", "Personalized Strategy"],
  },
];

const circleItems = [
  "Marketing", "Tenant Screening", "Rent Collection",
  "Legal Compliance", "Maintenance", "Compliance",
  "Financial Reporting", "24/7 Support",
];

export default function ModelsSection() {
  const [active, setActive] = useState(null);

  return (
    <section style={{ background: "linear-gradient(180deg, #0D1117 0%, #111827 100%)", padding: "90px 0 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", minHeight: "520px" }} className="models-grid">
          {/* Left: Models */}
          <div style={{ background: "#0D1117", padding: "56px 48px 56px 0", borderRight: "1px solid rgba(201,168,76,0.1)" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
              WORKING MODELS
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "28px" }}>
              {models.map((m) => (
                <div
                  key={m.id}
                  onMouseEnter={() => setActive(m.id)}
                  onMouseLeave={() => setActive(null)}
                  style={{
                    background: active === m.id ? m.colorBg : "rgba(255,255,255,0.02)",
                    border: `1px solid ${active === m.id ? m.color + "55" : "rgba(255,255,255,0.06)"}`,
                    borderRadius: "10px",
                    padding: "20px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ color: m.color, marginBottom: "10px" }}>{m.icon}</div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", color: m.color, fontWeight: 600, marginBottom: "4px" }}>{m.label}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#8a8580", marginBottom: "10px" }}>{m.tagline}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {m.points.map((pt) => (
                      <li key={pt} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11.5px", color: "#b8b0a0", paddingLeft: "14px", position: "relative", lineHeight: "1.8" }}>
                        <span style={{ position: "absolute", left: 0, color: m.color, fontSize: "8px", top: "5px" }}>◆</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              to="/models"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "28px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "13px",
                color: "#C9A84C",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => e.currentTarget.style.gap = "14px"}
              onMouseLeave={(e) => e.currentTarget.style.gap = "8px"}
            >
              Compare Models <span style={{ fontSize: "16px" }}>→</span>
            </Link>
          </div>

          {/* Right: 360° visual */}
          <div style={{ padding: "56px 0 56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 600, color: "#F5F0E8", lineHeight: 1.25, marginBottom: "32px" }}>
              Our 360° Approach for<br />Maximum Returns
            </h2>

            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              {/* Circle diagram */}
              <div style={{ position: "relative", width: "180px", height: "180px", flexShrink: 0 }}>
                <div style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.2)",
                  background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
                }} />
                {/* Center */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "72px", height: "72px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: "18px", color: "#0D1117" }}>360°</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "8px", color: "#0D1117", letterSpacing: "0.1em" }}>SOLUTION</span>
                </div>
                {/* Orbit dots */}
                {circleItems.map((item, i) => {
                  const angle = (i / circleItems.length) * 2 * Math.PI - Math.PI / 2;
                  const r = 80;
                  const x = 90 + r * Math.cos(angle);
                  const y = 90 + r * Math.sin(angle);
                  return (
                    <div key={item} style={{
                      position: "absolute",
                      left: x - 5, top: y - 5,
                      width: "10px", height: "10px",
                      borderRadius: "50%",
                      background: "rgba(201,168,76,0.5)",
                      border: "1px solid #C9A84C",
                    }} title={item} />
                  );
                })}
              </div>

              {/* Benefits list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {["Expert Management", "Transparent Communication", "Timely Maintenance", "Maximum Returns"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", border: "1.5px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13.5px", color: "#b8b0a0" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .models-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}