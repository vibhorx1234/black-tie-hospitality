import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import logo from "../../vectors/logo.svg";
import { contactInfo, SOCIAL_LINKS } from "../../data/about";

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

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Properties", path: "/properties" },
  { label: "Gallery", path: "/gallery" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export default function Footer() {
  const width = useWindowWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  // On mobile: 1 column, tablet: 2 columns, desktop: 3 columns
  const gridCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)";

  return (
    <footer style={{
      background: "#0A0D12",
      borderTop: "1px solid rgba(201,168,76,0.15)",
    }}>

      {/* ── Main Footer Grid ── */}
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: isMobile ? "2.5rem 1rem 1.5rem" : "4rem 2rem 2rem",
        display: "grid",
        gridTemplateColumns: gridCols,
        gap: isMobile ? "2rem" : isTablet ? "2rem" : "3rem",
      }}>

        {/* ── Brand Column ── */}
        <div style={{
          // On tablet, span full width so brand sits above the two link cols
          gridColumn: isTablet ? "1 / -1" : "auto",
        }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "1rem",
            }}
          >
            <img
              src={logo}
              alt="Black Tie Hospitality"
              style={{
                height: isMobile ? "48px" : "64px",
                width: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
          </Link>

          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: isMobile ? "12px" : "13px",
            color: "#8a8580",
            lineHeight: 1.7,
            marginBottom: "1.2rem",
            marginTop: 0,
            maxWidth: isTablet ? "420px" : "100%",
          }}>
            Leading Property Management & Rental Services in Jaipur
          </p>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "34px",
                  height: "34px",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(201,168,76,0.1)";
                  e.currentTarget.style.borderColor = "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                }}
              >
                <img
                  src={social.icon}
                  alt=""
                  style={{
                    width: "26px",
                    height: "26px",
                    filter: "brightness(0) saturate(100%) invert(72%) sepia(47%) saturate(500%) hue-rotate(5deg) brightness(95%)",
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* ── Quick Links ── */}
        <div>
          <h4 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: isMobile ? "12px" : "13px",
            color: "#F5F0E8",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
            marginTop: 0,
            fontWeight: 600,
          }}>
            Quick Links
          </h4>
          {/* Gold underline accent */}
          <div style={{
            width: 28,
            height: 1.5,
            background: "linear-gradient(90deg, #C9A84C, transparent)",
            marginBottom: "1rem",
          }} />
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            flexWrap: isMobile ? "wrap" : "nowrap",
            gap: isMobile ? "8px 20px" : "8px",
          }}>
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: isMobile ? "12px" : "13px",
                    color: "#8a8580",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8580")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ── */}
        <div>
          <h4 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: isMobile ? "12px" : "13px",
            color: "#F5F0E8",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
            marginTop: 0,
            fontWeight: 600,
          }}>
            Contact Us
          </h4>
          {/* Gold underline accent */}
          <div style={{
            width: 28,
            height: 1.5,
            background: "linear-gradient(90deg, #C9A84C, transparent)",
            marginBottom: "1rem",
          }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {contactInfo.map((c) => (
              <div
                key={c.title}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: c.href ? "center" : "flex-start",
                }}
              >
                <div style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <img
                    src={c.icon}
                    alt={c.title}
                    style={{
                      width: "13px",
                      height: "13px",
                      objectFit: "contain",
                      filter: "invert(67%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                    }}
                  />
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: isMobile ? "12px" : "13px",
                      color: "#8a8580",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8580")}
                  >
                    {c.lines[0]}
                  </a>
                ) : (
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: isMobile ? "12px" : "13px",
                    color: "#8a8580",
                    lineHeight: 1.6,
                    margin: 0,
                    paddingTop: "5px",
                  }}>
                    {c.lines[0]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: isMobile ? "1rem 1rem" : "1.2rem 2rem",
        maxWidth: "1280px",
        margin: "0 auto",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
        gap: isMobile ? "10px" : "1rem",
      }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "11px",
          color: "#5a5550",
          margin: 0,
        }}>
          © 2026 Black Tie Hospitality. The Young Marketers. All Rights Reserved.
        </p>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a
            href="/privacy-policy"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "11px",
              color: "#5a5550",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5a5550")}
          >
            Privacy Policy
          </a>
          <span style={{ color: "#5a5550", fontSize: "11px" }}>|</span>
          <a
            href="/terms"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "11px",
              color: "#5a5550",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5a5550")}
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}