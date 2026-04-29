import SectionHeader from "../ui/SectionHeader";
import { SERVICES } from "../../data/services";
import React, { useState } from "react";

export default function ServicesSection({ dark = true }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      style={{
        padding: "clamp(2.5rem, 6vw, 5rem) clamp(1rem, 5vw, 2rem)",
        background: dark
          ? "linear-gradient(180deg, #0D1117 0%, #111827 100%)"
          : "#f7f5f2",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        <SectionHeader
          label="Our Services"
          title="Everything Your Property Needs"
          subtitle="Comprehensive property management solutions designed to maximize returns and deliver hassle-free ownership."
          dark={dark}
        />

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(1rem, 2vw, 1.5rem)",
          }}
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
                  padding: "clamp(1.25rem, 3vw, 1.75rem) clamp(1rem, 2.5vw, 1.5rem)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
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
                  // On touch devices we keep full desc always visible
                  // (handled via CSS class .services-card-touch below)
                }}
              >
                {/* Gold glow overlay */}
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

                  {/* Icon */}
                  <div
                    style={{
                      width: "clamp(40px, 6vw, 48px)",
                      height: "clamp(40px, 6vw, 48px)",
                      flexShrink: 0,
                      borderRadius: "50%",
                      border: isHovered
                        ? "1px solid #C9A84C"
                        : dark
                          ? "1px solid rgba(201,168,76,0.3)"
                          : "1px solid rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "clamp(0.75rem, 2vw, 1rem)",
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
                        width: "clamp(18px, 3vw, 24px)",
                        height: "clamp(18px, 3vw, 24px)",
                        objectFit: "contain",
                        filter:
                          "invert(67%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(16px, 2.5vw, 18px)",
                      fontWeight: 600,
                      color: dark
                        ? isHovered ? "#F5F0E8" : "#EDEDED"
                        : "#0D1117",
                      marginBottom: "8px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Short desc */}
                  <p
                    className="service-short-desc"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "clamp(12px, 1.8vw, 13px)",
                      color: dark
                        ? isHovered
                          ? "rgba(245,240,232,0.45)"
                          : "rgba(255,255,255,0.6)"
                        : "#6a6560",
                      lineHeight: 1.6,
                      margin: 0,
                      opacity: isHovered ? 0.4 : 1,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {service.shortDesc}
                  </p>

                  {/* Full desc — hover-revealed on desktop, always visible on touch */}
                  <div
                    className="service-full-desc"
                    style={{
                      marginTop: "12px",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "clamp(12px, 1.8vw, 13px)",
                      lineHeight: 1.7,
                      color: dark
                        ? "rgba(245,240,232,0.75)"
                        : "#5a5550",
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateY(0)" : "translateY(8px)",
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

      <style>{`
        /* Tablet: 2 columns */
        @media (max-width: 960px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 560px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /*
          Touch devices: hover doesn't exist, so always show full desc
          and keep short desc fully visible too
        */
        @media (hover: none) {
          .service-full-desc {
            opacity: 1 !important;
            transform: translateY(0) !important;
            max-height: none !important;
            overflow: visible !important;
          }
          .service-short-desc {
            opacity: 0.6 !important;
          }
        }
      `}</style>
    </section>
  );
}