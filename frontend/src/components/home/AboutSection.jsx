import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import React from "react";

import team1 from "./../../assets/team/team1.jpeg";
import team3 from "./../../assets/team/team3.jpeg";
import ceo from "./../../assets/team/ceo.jpeg";

export default function AboutSection() {
  return (
    <section
      style={{
        padding: "clamp(2.5rem, 6vw, 5rem) clamp(1rem, 5vw, 2rem)",
        background: "#f7f5f2",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem, 5vw, 5rem)",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left — Text */}
        <div>
          <SectionHeader
            label="About BLACK TIE"
            title="Leading Property Management & Rental Services in Jaipur"
            align="left"
            style={{ marginBottom: "1.5rem" }}
          />

          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(14px, 2vw, 15px)",
              color: "#5a5550",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            As a leading property management and rental service provider in Jaipur, Black Tie Hospitality manages and operates a diverse portfolio of hotels, studio apartments, villas, BNBs, and residential properties with a focus on operational excellence, guest satisfaction, and long-term value creation. 
          </p>

          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(14px, 2vw, 15px)",
              color: "#5a5550",
              lineHeight: 1.8,
              marginBottom: "8rem",
            }}
          >
            From tenant screening to financial reporting, we handle every aspect
            of property management so you can enjoy passive income without the
            hassle.
          </p>

          {/* CTA Buttons — flex row with wrap + gap */}
          <div
            className="about-cta-group"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button variant="dark" size="md">
                Read More →
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button variant="light" size="md">
                Book A Property →
              </Button>
            </Link>
          </div>
        </div>

        {/* Right — Images */}
        <div className="about-images-wrapper">
          <div
            className="about-images"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto auto",
              gap: "12px",
              position: "relative",
            }}
          >
            {/* Tall left image — spans 2 rows */}
            <div
              style={{
                gridColumn: "1",
                gridRow: "1 / 3",
                minHeight: "clamp(260px, 35vw, 400px)",
              }}
            >
              <img
                src={ceo}
                alt="Founder"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>

            {/* Top-right image */}
            <div style={{ minHeight: "clamp(120px, 18vw, 190px)" }}>
              <img
                src={team3}
                alt="Hotel property exterior"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>

            {/* Bottom-right — Years badge */}
            <div
              style={{
                background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                minHeight: "clamp(100px, 14vw, 160px)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: "700",
                  color: "#0D1117",
                  lineHeight: 1,
                }}
              >
                10+
              </div>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(10px, 1.5vw, 12px)",
                  fontWeight: "600",
                  color: "rgba(13,17,23,0.7)",
                  textAlign: "center",
                  letterSpacing: "0.05em",
                  marginTop: "4px",
                }}
              >
                Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`

        /* ── Tablet: single column, images shrink gracefully ── */
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          /* Images come second on mobile — natural DOM order is text first */
          .about-images-wrapper {
            order: 2;
          }
        }

        /* ── Small tablet / large mobile ── */
        @media (max-width: 600px) {
          .about-images {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        /* ── Mobile: stack images vertically ── */
        @media (max-width: 420px) {
          .about-images {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }

          /* Reset the tall left image row-span */
          .about-images > div:first-child {
            grid-column: 1 !important;
            grid-row: auto !important;
            min-height: 200px !important;
          }

          /* Stack CTAs full-width on very small screens */
          .about-cta-group {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}