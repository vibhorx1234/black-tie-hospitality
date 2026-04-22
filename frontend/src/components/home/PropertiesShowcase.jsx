import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";

const properties = [
  { id: 1, name: "Luxury Residence", location: "Jaipur", img: "https://picsum.photos/seed/prop1/420/280" },
  { id: 2, name: "Urban Living", location: "Bengaluru", img: "https://picsum.photos/seed/prop2/420/280" },
  { id: 3, name: "Premium Stay", location: "Mumbai", img: "https://picsum.photos/seed/prop3/420/280" },
  { id: 4, name: "Smart Homes", location: "Pune", img: "https://picsum.photos/seed/prop4/420/280" },
  { id: 5, name: "Business Stay", location: "Delhi", img: "https://picsum.photos/seed/prop5/420/280" },
  { id: 6, name: "Heritage Suites", location: "Jaipur", img: "https://picsum.photos/seed/prop6/420/280" },
];

export default function PropertiesShowcase() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 5;
  const maxIndex = properties.length - visibleCount;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section style={{ background: "#0D1117", padding: "72px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
          <div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "4px" }}>
              PROPERTIES SHOWCASE
            </p>
          </div>
          <Link
            to="/properties"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#C9A84C", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
            onMouseEnter={(e) => e.currentTarget.style.gap = "12px"}
            onMouseLeave={(e) => e.currentTarget.style.gap = "6px"}
          >
            View All Properties <span>→</span>
          </Link>
        </div>

        {/* Carousel */}
        <div style={{ position: "relative" }}>
          {/* Prev button */}
          <button
            onClick={prev}
            disabled={current === 0}
            style={{
              position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)",
              zIndex: 2, width: "40px", height: "40px", borderRadius: "50%",
              background: current === 0 ? "rgba(255,255,255,0.05)" : "rgba(201,168,76,0.15)",
              border: `1px solid ${current === 0 ? "rgba(255,255,255,0.1)" : "rgba(201,168,76,0.4)"}`,
              color: current === 0 ? "#555" : "#C9A84C",
              cursor: current === 0 ? "not-allowed" : "pointer",
              fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
          >‹</button>

          {/* Cards */}
          <div style={{ overflow: "hidden" }}>
            <div style={{
              display: "flex",
              gap: "16px",
              transform: `translateX(calc(-${current * (100 / visibleCount)}% - ${current * 16 / visibleCount}px))`,
              transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
              {properties.map((p) => (
                <div
                  key={p.id}
                  style={{
                    flex: `0 0 calc(${100 / visibleCount}% - ${16 * (visibleCount - 1) / visibleCount}px)`,
                    minWidth: 0,
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                  }}
                  className="prop-card"
                >
                  <div style={{ aspectRatio: "3/2", overflow: "hidden" }}>
                    <img
                      src={p.img}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                      className="prop-img"
                    />
                  </div>
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
                    padding: "40px 14px 14px",
                  }}>
                    <p style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", color: "#F5F0E8", fontWeight: 600, marginBottom: "2px" }}>{p.name}</p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#C9A84C", display: "flex", alignItems: "center", gap: "4px" }}>
                      <span>📍</span> {p.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            disabled={current >= maxIndex}
            style={{
              position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)",
              zIndex: 2, width: "40px", height: "40px", borderRadius: "50%",
              background: current >= maxIndex ? "rgba(255,255,255,0.05)" : "rgba(201,168,76,0.15)",
              border: `1px solid ${current >= maxIndex ? "rgba(255,255,255,0.1)" : "rgba(201,168,76,0.4)"}`,
              color: current >= maxIndex ? "#555" : "#C9A84C",
              cursor: current >= maxIndex ? "not-allowed" : "pointer",
              fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
          >›</button>
        </div>
      </div>

      <style>{`
        .prop-card:hover .prop-img { transform: scale(1.06); }
        @media (max-width: 900px) {
          .prop-card { flex: 0 0 calc(33.33% - 11px) !important; }
        }
        @media (max-width: 600px) {
          .prop-card { flex: 0 0 calc(50% - 8px) !important; }
        }
      `}</style>
    </section>
  );
}