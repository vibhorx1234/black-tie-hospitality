import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import React from "react";
import { STATS } from "../../data/clients";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#0A0D12",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: loaded ? "scale(1)" : "scale(1.05)",
          transition: "transform 1.5s ease",
        }}
      />

      {/* Overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(10,13,18,0.92) 45%, rgba(10,13,18,0.5) 75%, rgba(10,13,18,0.2) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(201,168,76,0.02) 40px,
            rgba(201,168,76,0.02) 41px
          )`,
        }}
      />

      {/* ── Hero Content — grows to fill available space ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,                  // takes all space above stats bar
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "clamp(80px, 12vh, 140px) clamp(1rem, 5vw, 2rem) clamp(2rem, 4vh, 3rem)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "600px" }}>

          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "1.25rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <div style={{ width: "28px", height: "1px", background: "#C9A84C", flexShrink: 0 }} />
            <span
              style={{
                fontSize: "clamp(10px, 2vw, 13px)",
                fontWeight: "600",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A84C",
              }}
            >
              Managed Spaces. Elevated Experiences.
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2rem, 7vw, 5rem)",
              fontWeight: "700",
              color: "#F5F0E8",
              lineHeight: 1.15,
              margin: "0 0 1rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s ease 0.35s",
            }}
          >
            Welcome To
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Black Tie Hospitality
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(13px, 2.5vw, 15px)",
              color: "rgba(245,240,232,0.65)",
              lineHeight: 1.7,
              margin: "0 0 2rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s ease 0.5s",
            }}
          >
            Hotels, Villas, BNBs & Managed Properties across Jaipur, designed for seamless stays and smarter property management. From hospitality properties to premium living spaces, Black Tie transforms properties into experiences while maximizing value for owners.
          </p>

          {/* CTAs — inline, compact, not full-width */}
          <div
            className="cta-group"
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s ease 0.65s",
            }}
          >
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button variant="primary" size="md">
                Contact Now
              </Button>
            </Link>
            <Link to="/properties" style={{ textDecoration: "none" }}>
              <Button variant="secondary" size="md">
                Explore Properties
              </Button>
            </Link>
          </div>

        </div>
      </div>

      {/* ── Stats Bar — pinned to bottom of section ── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          background: "rgba(0,0,0)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(201,168,76,0.4)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 0.9s",
          width: "100%",
        }}
      >
        <div
          className="stats-bar"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(1rem, 4vw, 2rem)",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            boxSizing: "border-box",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`stat-item stat-item-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "clamp(0.85rem, 2vw, 1.1rem) clamp(0.75rem, 2vw, 1.25rem)",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(201,168,76,0.15)"
                    : "none",
                minWidth: 0,
                overflow: "hidden",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  flexShrink: 0,
                  borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={stat.icon}
                  alt={stat.label}
                  style={{
                    width: "16px",
                    height: "16px",
                    objectFit: "contain",
                    filter: "invert(78%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                  }}
                />
              </div>

              {/* Text */}
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                    fontWeight: "700",
                    color: "#F5F0E8",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "clamp(9px, 1.5vw, 11px)",
                    color: "rgba(245,240,232,0.5)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── CTA sizing ── */
        .cta-group a button {
          padding: 0.6rem 1.4rem !important;
          font-size: 14px !important;
          white-space: nowrap;
        }

        /* Mobile: stack CTAs, but keep them auto-width (not full-width) */
        @media (max-width: 480px) {
          .cta-group {
            flex-direction: column;
            align-items: flex-start;
          }
          .cta-group a {
            width: auto;
          }
        }

        /* ── Stats: 2×2 on mobile / small tablet ── */
        @media (max-width: 768px) {
          .stats-bar {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          /* Remove right border on even items (2nd column) */
          .stat-item-1,
          .stat-item-3 {
            border-right: none !important;
          }

          /* Add top border to bottom row */
          .stat-item-2,
          .stat-item-3 {
            border-top: 1px solid rgba(255,255,255,0.07) !important;
          }
        }

        /* ── Stats: 4 columns on laptop/desktop ── */
        @media (min-width: 769px) {
          .stats-bar {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}