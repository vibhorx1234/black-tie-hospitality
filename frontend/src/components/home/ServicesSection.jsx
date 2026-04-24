import SectionHeader from "../ui/SectionHeader";
import { SERVICES } from "../../data/services";
import React, { useState } from "react";

export default function ServicesSection({ dark = true }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      style={{
        padding: "6rem 2rem",
        background: dark
          ? "linear-gradient(180deg, #0D1117 0%, #111827 100%)"
          : "#f7f5f2",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* HEADER (NOW THEME CONTROLLED) */}
        <SectionHeader
          label="Our Services"
          title="Everything Your Property Needs"
          subtitle="Comprehensive property management solutions designed to maximize returns and deliver hassle-free ownership."
          dark={dark}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="services-grid"
        >
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  padding: "1.75rem 1.5rem",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",

                  /* THEME BASED BACKGROUND */
                  background: dark
                    ? isHovered
                      ? "linear-gradient(180deg, rgba(13,17,23,0.98) 0%, rgba(17,24,39,0.98) 100%)"
                      : "rgba(255,255,255,0.03)"
                    : isHovered
                      ? "#ffffff"
                      : "#f9f8f6",

                  border: dark
                    ? isHovered
                      ? "1px solid rgba(201,168,76,0.45)"
                      : "1px solid rgba(255,255,255,0.06)"
                    : isHovered
                      ? "1px solid rgba(201,168,76,0.35)"
                      : "1px solid rgba(0,0,0,0.06)",

                  boxShadow: isHovered
                    ? dark
                      ? "0 0 0 1px rgba(201,168,76,0.15), 0 14px 40px rgba(0,0,0,0.4)"
                      : "0 12px 32px rgba(0,0,0,0.08)"
                    : "none",
                }}
              >
                {/* GOLD GLOW */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isHovered
                      ? "radial-gradient(circle at top left, rgba(201,168,76,0.08), transparent 60%)"
                      : "transparent",
                    transition: "all 0.4s ease",
                    zIndex: 1,
                  }}
                />

                <div style={{ position: "relative", zIndex: 2 }}>

                  {/* ICON (SVG from data) */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      border: isHovered
                        ? "1px solid #C9A84C"
                        : dark
                          ? "1px solid rgba(201,168,76,0.3)"
                          : "1px solid rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                      color: "#C9A84C",
                      background: isHovered
                        ? "rgba(201,168,76,0.08)"
                        : "transparent",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                        filter:
                          "invert(67%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                      }}
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: dark
                        ? (isHovered ? "#F5F0E8" : "#EDEDED")
                        : "#0D1117",
                      marginBottom: "8px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* SHORT DESC */}
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "13px",
                      color: dark
                        ? (isHovered
                          ? "rgba(245,240,232,0.45)"
                          : "rgba(255,255,255,0.6)")
                        : "#6a6560",
                      lineHeight: 1.6,
                      margin: 0,
                      opacity: isHovered ? 0.4 : 1,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {service.shortDesc}
                  </p>

                  {/* FULL DESC */}
                  <div
                    style={{
                      marginTop: "12px",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.7,
                      color: dark
                        ? "rgba(245,240,232,0.75)"
                        : "#5a5550",

                      opacity: isHovered ? 1 : 0,
                      transform: isHovered
                        ? "translateY(0)"
                        : "translateY(8px)",

                      maxHeight: isHovered ? "200px" : "0px",
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                    }}
                  >
                    {service.fullDesc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}