import React, { useState, useEffect } from "react";
import { FOUNDERS } from "../../data/founders";
import InstagramIcon from "../../vectors/instagram.svg";
import LinkedInIcon from "../../vectors/linkedin.svg";

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

const InstagramBtn = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
  >
    <img
      src={InstagramIcon}
      alt="Instagram"
      style={{
        width: "22px",
        height: "22px",
        filter: "brightness(0) saturate(100%) invert(72%) sepia(47%) saturate(500%) hue-rotate(5deg)",
      }}
    />
  </a>
);

const LinkedInBtn = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
  >
    <img
      src={LinkedInIcon}
      alt="LinkedIn"
      style={{
        width: "22px",
        height: "22px",
        filter: "brightness(0) saturate(100%) invert(72%) sepia(47%) saturate(500%) hue-rotate(5deg)",
      }}
    />
  </a>
);

export default function FoundersSection() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isStacked = width < 900;

  const founder = FOUNDERS[0];

  return (
    <section
      style={{
        background: "#0D1117",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isStacked ? "1fr" : "1fr 1fr",
          gap: 0,
          alignItems: "stretch",
          padding: isStacked ? "48px 0" : "60px 48px",
        }}
      >
        {/* ── LEFT: Image ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isStacked ? "0 24px 32px" : "0 40px 0 0",
          }}
        >
          {/* Decorative gold border frame */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: isStacked ? "340px" : "100%",
              margin: "0 auto",
            }}
          >
            {/* Thin gold accent line top-left */}
            <div
              style={{
                position: "absolute",
                top: "-10px",
                left: "-10px",
                width: "60px",
                height: "60px",
                borderTop: "2px solid #C9A84C",
                borderLeft: "2px solid #C9A84C",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            {/* Thin gold accent line bottom-right */}
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "-10px",
                width: "60px",
                height: "60px",
                borderBottom: "2px solid #C9A84C",
                borderRight: "2px solid #C9A84C",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />

            {founder.image ? (
              <img
                src={founder.image}
                alt={founder.name}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: isStacked ? "420px" : "520px",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  display: "block",
                  borderRadius: "2px",
                  filter: "brightness(0.95)",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "480px",
                  background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.03))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "64px",
                  fontWeight: 700,
                  color: "#C9A84C",
                }}
              >
                {founder.avatar}
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: isStacked ? "0 24px" : "0 0 0 48px",
            borderLeft: isStacked ? "none" : "1px solid rgba(201,168,76,0.1)",
          }}
        >
          {/* Label */}
          <div style={{ marginBottom: "24px" }}>
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: isMobile ? "0.65rem" : "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C9A84C",
                margin: 0,
              }}
            >
              Meet the Founder
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

          {/* Headline */}
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: isMobile ? "1.5rem" : "clamp(1.6rem, 2.5vw, 2.2rem)",
              fontWeight: 700,
              color: "#F5F0E8",
              lineHeight: 1.25,
              margin: "0 0 16px",
            }}
          >
            Own a Property?{" "}
            <span style={{ color: "#C9A84C" }}>Let's Unlock Its Potential.</span>
          </h2>

          {/* Sub-headline */}
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: isMobile ? "0.88rem" : "0.98rem",
              color: "#8a8580",
              lineHeight: 1.75,
              margin: "0 0 36px",
              maxWidth: "400px",
            }}
          >
            Turn unused spaces into high-performing hospitality and rental assets with Black Tie.
          </p>

          {/* Divider */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "linear-gradient(90deg, rgba(201,168,76,0.2), transparent)",
              marginBottom: "28px",
            }}
          />

          {/* Founder identity */}
          <div style={{ marginBottom: "36px" }}>
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: isMobile ? "0.95rem" : "1.05rem",
                fontWeight: 600,
                color: "#F5F0E8",
                margin: "0 0 4px",
              }}
            >
              {founder.name}
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                color: "#C9A84C",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "0 0 14px",
              }}
            >
              {founder.role}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <LinkedInBtn href={founder.linkedin} />
              <InstagramBtn href={founder.instagram} />
            </div>
          </div>
          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "linear-gradient(135deg, #C9A84C, #a8863a)",
                color: "#0D1117",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "14px 28px",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Become a Partner
            </a>

            <a
              href="https://wa.me/9198982931469"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "transparent",
                color: "#C9A84C",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "14px 28px",
                borderRadius: "2px",
                border: "1px solid rgba(201,168,76,0.4)",
                textDecoration: "none",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#C9A84C";
                e.currentTarget.style.background = "rgba(201,168,76,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Request Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}