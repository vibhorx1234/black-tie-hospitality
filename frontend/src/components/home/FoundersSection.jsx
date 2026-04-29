import React, { useState, useEffect } from "react";
import { FOUNDERS, MISSION_QUOTE } from "../../data/founders";
import LinkedInIcon from "../../vectors/linkedin.svg";

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

// ── LinkedIn Button ────────────────────────────────────────────────────────────
const LinkedInBtn = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
    }}
  >
    <img
      src={LinkedInIcon}
      alt="LinkedIn"
      style={{
        width: "24px",
        height: "24px",
        filter:
          "brightness(0) saturate(100%) invert(72%) sepia(47%) saturate(500%) hue-rotate(5deg)",
      }}
    />
  </a>
);

// ── Quote Block ────────────────────────────────────────────────────────────────
const QuoteBlock = ({ isMobile }) => (
  <div
    style={{
      background:
        "linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))",
      border: "1px solid rgba(201,168,76,0.15)",
      borderRadius: "12px",
      padding: isMobile ? "24px 20px" : "36px 40px",
      textAlign: "center",
      position: "relative",
    }}
  >
    <div
      style={{
        fontSize: isMobile ? "36px" : "48px",
        color: "rgba(201,168,76,0.3)",
        fontFamily: "Georgia, serif",
        lineHeight: 0.8,
        marginBottom: "16px",
      }}
    >
      "
    </div>
    <p
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: isMobile ? "14px" : "16px",
        color: "#d0ccc4",
        lineHeight: 1.7,
        fontStyle: "italic",
        margin: 0,
      }}
    >
      {MISSION_QUOTE}
    </p>
    <div
      style={{
        fontSize: isMobile ? "36px" : "48px",
        color: "rgba(201,168,76,0.3)",
        fontFamily: "Georgia, serif",
        lineHeight: 0.8,
        marginTop: "16px",
        textAlign: "right",
      }}
    >
      "
    </div>
  </div>
);

// ── Founder Card ───────────────────────────────────────────────────────────────
const FounderCard = ({ founder, isMobile }) => {
  const avatarSize = isMobile ? 72 : 90;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: isMobile ? "16px" : "20px",
      }}
    >
      {/* Avatar */}
      <div style={{ flexShrink: 0 }}>
        {founder.image ? (
          <img
            src={founder.image}
            alt={founder.name}
            style={{
              width: avatarSize,
              height: avatarSize,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(201,168,76,0.3)",
            }}
          />
        ) : (
          <div
            style={{
              width: avatarSize,
              height: avatarSize,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))",
              border: "2px solid rgba(201,168,76,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Outfit', sans-serif",
              fontSize: isMobile ? "18px" : "22px",
              fontWeight: 700,
              color: "#C9A84C",
              letterSpacing: "0.05em",
            }}
          >
            {founder.avatar}
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: isMobile ? "14px" : "16px",
            color: "#F5F0E8",
            fontWeight: 600,
            marginBottom: "4px",
            marginTop: 0,
          }}
        >
          {founder.name}
        </h3>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: isMobile ? "11px" : "12px",
            color: "#C9A84C",
            marginBottom: "10px",
            marginTop: 0,
            letterSpacing: "0.04em",
          }}
        >
          {founder.role}
        </p>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: isMobile ? "12px" : "13px",
            color: "#8a8580",
            lineHeight: 1.6,
            marginBottom: "14px",
            marginTop: 0,
            maxWidth: isMobile ? "100%" : "260px",
          }}
        >
          {founder.bio}
        </p>
        <LinkedInBtn href={founder.linkedin} />
      </div>
    </div>
  );
};

// ── Main Section ───────────────────────────────────────────────────────────────
export default function FoundersSection() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  // Stack vertically on mobile & tablet, side-by-side on desktop
  const isStacked = width < 900;

  return (
    <section style={{ background: "#111827", padding: "clamp(2.5rem, 6vw, 5rem) clamp(1rem, 5vw, 2rem)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 1rem" : "0 2rem" }}>

        {/* Label */}
        <div style={{ marginBottom: isMobile ? "20px" : "28px" }}>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: isMobile ? "0.7rem" : "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C9A84C",
              margin: 0,
            }}
          >
            Our Founder
          </p>
          <div
            style={{
              width: 36,
              height: 1.5,
              background: "linear-gradient(90deg, #C9A84C, transparent)",
              marginTop: 6,
            }}
          />
        </div>

        {/* Grid — side-by-side on desktop, stacked on tablet/mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isStacked ? "1fr" : "1fr 1fr",
            gap: isMobile ? "28px" : isTablet ? "36px" : "48px",
            alignItems: "center",
          }}
        >
          <FounderCard founder={FOUNDERS[0]} isMobile={isMobile} />
          <QuoteBlock isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
}