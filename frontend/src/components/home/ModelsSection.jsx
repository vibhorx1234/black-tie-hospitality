import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { models, wheelSegments, compareData } from "../../data/models.js";

// ── Icons ──────────────────────────────────────────────────────────────────────
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

// ── Wheel SVG icons — one function per icon type ──────────────────────────────
const WheelIcons = {
  clipboard: (cx, cy) => (
    <g transform={`translate(${cx - 10.5},${cy - 10.5}) scale(1.25)`}>
      <rect x="2" y="2" width="10" height="12" rx="1.25" stroke="#111" strokeWidth="1.4" strokeOpacity="0.9" fill="none" />
      <path d="M5 6h4M5 9h3" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.9" />
      <rect x="4.5" y="1" width="5" height="2.5" rx="1" stroke="#111" strokeWidth="1.2" strokeOpacity="0.9" fill="none" />
    </g>
  ),
  search: (cx, cy) => (
    <g transform={`translate(${cx - 10.5},${cy - 10.5}) scale(1.25)`}>
      <circle cx="6" cy="6" r="4" stroke="#111" strokeWidth="1.4" strokeOpacity="0.9" fill="none" />
      <path d="M9 9l3.5 3.5" stroke="#111" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.9" />
    </g>
  ),
  document: (cx, cy) => (
    <g transform={`translate(${cx - 10.5},${cy - 10.5}) scale(1.25)`}>
      <rect x="2" y="1" width="10" height="13" rx="1.25" stroke="#111" strokeWidth="1.4" strokeOpacity="0.9" fill="none" />
      <path d="M4 5h6M4 8h4M4 11h5" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.9" />
    </g>
  ),
  cash: (cx, cy) => (
    <g transform={`translate(${cx - 10.5},${cy - 10.5}) scale(1.25)`}>
      <rect x="1" y="3" width="12" height="9" rx="1.25" stroke="#111" strokeWidth="1.4" strokeOpacity="0.9" fill="none" />
      <circle cx="7" cy="7.5" r="2" stroke="#111" strokeWidth="1.2" strokeOpacity="0.9" fill="none" />
    </g>
  ),
  chat: (cx, cy) => (
    <g transform={`translate(${cx - 10.5},${cy - 10.5}) scale(1.25)`}>
      <path
        d="M1 2a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1H8l-3 3v-3H2a1 1 0 01-1-1V2z"
        stroke="#111" strokeWidth="1.4" strokeOpacity="0.9" fill="none"
      />
    </g>
  ),
  wrench: (cx, cy) => (
    <g transform={`translate(${cx - 10.5},${cy - 10.5}) scale(1.25)`}>
      <path
        d="M10 2a4 4 0 00-3.87 5L2 11l1.25 1.25 1.25-1.25 1 1-1.25 1.25L6 15l4.13-4.13A4 4 0 1010 2zm0 6a2 2 0 110-4 2 2 0 010 4z"
        fill="#111" fillOpacity="0.9"
      />
    </g>
  ),
  keys: (cx, cy) => (
    <g transform={`translate(${cx - 10.5},${cy - 10.5}) scale(1.25)`}>
      <circle cx="5" cy="5" r="3.5" stroke="#111" strokeWidth="1.4" strokeOpacity="0.9" fill="none" />
      <path d="M7.5 7.5l4.5 4.5M10 10l1.25 1" stroke="#111" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.9" />
    </g>
  ),
  sign: (cx, cy) => (
    <g transform={`translate(${cx - 10.5},${cy - 10.5}) scale(1.25)`}>
      <rect x="1" y="2" width="10" height="6" rx="1" stroke="#111" strokeWidth="1.4" strokeOpacity="0.9" fill="none" />
      <path d="M6 8v5M4 13h4" stroke="#111" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.9" />
    </g>
  ),
};

// ── Wheel360 ──────────────────────────────────────────────────────────────────
function Wheel360({ hovered, setHovered }) {
  const cx = 160, cy = 160, R = 150, r = 72, gap = 0.03;
  const n = wheelSegments.length;
  const sliceAngle = (2 * Math.PI) / n;

  const tones = [
    "rgba(201,168,76,0.55)", "rgba(201,168,76,0.30)",
    "rgba(201,168,76,0.45)", "rgba(201,168,76,0.22)",
    "rgba(201,168,76,0.50)", "rgba(201,168,76,0.28)",
    "rgba(201,168,76,0.42)", "rgba(201,168,76,0.20)",
  ];
  const tonesHover = [
    "rgba(201,168,76,0.85)", "rgba(201,168,76,0.65)",
    "rgba(201,168,76,0.80)", "rgba(201,168,76,0.58)",
    "rgba(201,168,76,0.82)", "rgba(201,168,76,0.62)",
    "rgba(201,168,76,0.76)", "rgba(201,168,76,0.55)",
  ];

  function polarToCart(angle, radius) {
    return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
  }

  function segmentPath(i) {
    const start = i * sliceAngle - Math.PI / 2 + gap;
    const end = (i + 1) * sliceAngle - Math.PI / 2 - gap;
    const [ox1, oy1] = polarToCart(start, r + 5);
    const [ox2, oy2] = polarToCart(end, r + 5);
    const [ix1, iy1] = polarToCart(end, R);
    const [ix2, iy2] = polarToCart(start, R);
    return `M ${ox1} ${oy1} A ${r + 5} ${r + 5} 0 0 1 ${ox2} ${oy2}
            L ${ix1} ${iy1} A ${R} ${R} 0 0 0 ${ix2} ${iy2} Z`;
  }

  function labelPos(i) {
    const mid = i * sliceAngle - Math.PI / 2 + sliceAngle / 2;
    const labelR = (r + R) / 2;
    return [cx + labelR * Math.cos(mid), cy + labelR * Math.sin(mid)];
  }

  return (
    <svg width="360" height="360" viewBox="0 0 320 320">
      {/* Outer decorative ring */}
      <circle cx={cx} cy={cy} r={R + 10} fill="none" stroke="rgba(201,168,76,0.15)" />

      {wheelSegments.map((seg, i) => {
        const [lx, ly] = labelPos(i);
        const isActive = hovered === i;

        return (
          <g
            key={seg.id}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              cursor: "pointer",
              transform: isActive ? "scale(1.06)" : "scale(1)",
              transformOrigin: `${cx}px ${cy}px`,
              transition: "all 0.25s ease",
            }}
          >
            <path
              d={segmentPath(i)}
              fill={isActive ? tonesHover[i] : tones[i]}
              stroke={isActive ? "#C9A84C" : "rgba(0,0,0,0.35)"}
              strokeWidth={isActive ? 2.5 : 1}
            />
            {/* Render the correct icon for this segment */}
            {WheelIcons[seg.icon] ? WheelIcons[seg.icon](lx, ly) : null}
          </g>
        );
      })}

      {/* Centre circle */}
      <circle cx={cx} cy={cy} r={68} fill="#0D1117" />
      <text x={cx} y={cy - 6} textAnchor="middle" fill="#C9A84C" fontSize="22" fontWeight="700">
        360°
      </text>
      <text x={cx} y={cy + 14} textAnchor="middle" fill="rgba(201,168,76,0.5)" fontSize="9" letterSpacing="0.1em">
        Solution
      </text>
    </svg>
  );
}

// ── Compare Modal ─────────────────────────────────────────────────────────────
function CompareModal({ onClose }) {
  const cols = ["fixed", "revenue", "management", "custom"];
  const colLabels = { fixed: "Fixed Lease", revenue: "Revenue Share", management: "Mgmt Fee", custom: "Custom" };

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
    // "partial"
    return (
      <span style={{ ...cellStyle("rgba(201,168,76,0.06)", "1px dashed rgba(201,168,76,0.3)", "rgba(201,168,76,0.5)"), fontSize: 10, fontFamily: "'Outfit', sans-serif" }}>
        ~
      </span>
    );
  }

  function cellStyle(bg, border, color) {
    return {
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 22, height: 22, borderRadius: "50%", background: bg, border, color,
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
        padding: "24px",
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
          padding: "40px 40px 36px",
          position: "relative",
        }}
      >
        {/* Decorative corner glow */}
        <div style={{
          position: "absolute", top: 0, right: 0, width: 120, height: 120,
          background: "radial-gradient(circle at top right, rgba(201,168,76,0.07), transparent 70%)",
          borderRadius: "0 16px 0 0", pointerEvents: "none",
        }} />

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
          <div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.22em", color: "#C9A84C", marginBottom: 6, textTransform: "uppercase" }}>
              Model Comparison
            </p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 600, color: "#F0EAD6", lineHeight: 1.2, margin: 0 }}>
              Choose Your Partnership Model
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#8a8580", cursor: "pointer", padding: "8px 10px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.color = "#C9A84C"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#8a8580"; }}
          >
            {Icons.close}
          </button>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", paddingBottom: 16, paddingRight: 20, fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.25)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", width: "36%" }}>
                  Feature
                </th>
                {cols.map(col => (
                  <th key={col} style={{ textAlign: "center", paddingBottom: 16, paddingLeft: 8, paddingRight: 8, fontFamily: "'Cinzel', serif", fontSize: "11px", color: "#C9A84C", fontWeight: 600, letterSpacing: "0.06em" }}>
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
                  <td style={{ padding: "12px 20px 12px 0", fontFamily: "'Outfit', sans-serif", fontSize: "12.5px", color: "rgba(240,234,214,0.75)", letterSpacing: "0.01em" }}>
                    {row.label}
                  </td>
                  {cols.map(col => (
                    <td key={col} style={{ textAlign: "center", padding: "12px 8px" }}>
                      {renderCell(row[col])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 20, marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(201,168,76,0.1)" }}>
          {[
            { symbol: "✓", label: "Included", color: "rgba(201,168,76,0.8)" },
            { symbol: "—", label: "Not included", color: "rgba(255,255,255,0.2)" },
            { symbol: "~", label: "Partially / On request", color: "rgba(201,168,76,0.45)" },
          ].map(({ symbol, label, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ fontFamily: "monospace", color, fontSize: 13 }}>{symbol}</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11.25, color: "rgba(255,255,255,0.3)", letterSpacing: "0.03em" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 28, textAlign: "center" }}>
          <Link
            to="/contact"
            style={{
              display: "inline-block",
              padding: "12px 32px",
              background: "linear-gradient(135deg, #C9A84C, #e0be78)",
              color: "#0D1117",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "12.5px",
              letterSpacing: "0.12em",
              textDecoration: "none",
              borderRadius: "8px",
              textTransform: "uppercase",
              transition: "opacity 0.2s",
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

// ── Main Section ──────────────────────────────────────────────────────────────
export default function ModelsSection() {
  const [active, setActive] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: "#f7f5f2", padding: "80px 0" }}>
      <div style={{ maxWidth: "1240px", margin: "auto", padding: "0 2rem" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1px 1fr",
          gap: "0",
        }}>

          {/* ── LEFT ── */}
          <div style={{ paddingRight: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.22em", color: "#C9A84C", marginBottom: 8, textTransform: "uppercase" }}>
              Partnership Models
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, color: "#1a1714", marginBottom: 24, lineHeight: 1.2 }}>
              Choose How We Work Together
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
              {models.map((m) => {
                const isActive = active === m.id;
                return (
                  <div
                    key={m.id}
                    onMouseEnter={() => setActive(m.id)}
                    onMouseLeave={() => setActive(null)}
                    style={{
                      padding: 18,
                      borderRadius: 12,
                      background: "#fff",
                      border: isActive ? "2px solid #C9A84C" : "1px solid #ddd",
                      transform: isActive ? "translateY(-6px) scale(1.02)" : "none",
                      boxShadow: isActive ? "0 8px 24px rgba(201,168,76,0.12)" : "none",
                      transition: "all 0.3s",
                      cursor: "default",
                    }}
                  >
                    <div style={{ color: "#C9A84C", marginBottom: 10 }}>{Icons[m.icon]}</div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, color: "#1a1714", marginBottom: 4 }}>
                      {m.label}
                    </p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#777", lineHeight: 1.25 }}>
                      {m.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setModalOpen(true)}
              style={{
                padding: "11px 28px",
                background: "linear-gradient(135deg, #C9A84C, #e0be78)",
                color: "#0D1117",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Compare All Models
            </button>
          </div>

          {/* ── VERTICAL SEPARATOR ── */}
          <div style={{ background: "rgba(201,168,76,0.45)", width: "1.25px", alignSelf: "stretch" }} />

          {/* ── RIGHT ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingLeft: "48px" }}>

            {/* Wheel heading */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 600, color: "#1a1714", lineHeight: 1.25, margin: 0 }}>
                Our 360° Approach for<br />Maximum Returns
              </h2>
            </div>
            <Wheel360 hovered={hovered} setHovered={setHovered} />

            <div style={{
              marginTop: 18,
              fontSize: 16,
              fontWeight: 700,
              color: "#1a1714",
              letterSpacing: "0.05em",
              fontFamily: "'Outfit', sans-serif",
              minHeight: 28,
              transition: "all 0.2s",
            }}>
              {hovered !== null && wheelSegments[hovered]
                ? wheelSegments[hovered].label.toUpperCase()
                : "HOVER TO EXPLORE"}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && <CompareModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}