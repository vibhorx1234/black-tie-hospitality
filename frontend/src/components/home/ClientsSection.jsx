import { Link } from "react-router-dom";
import React from "react";

const clients = [
  { name: "Radisson", color: "#d4001a" },
  { name: "Lemon Tree", color: "#7ab648" },
  { name: "Airbnb", color: "#ff5a5f" },
  { name: "OYO", color: "#d81f26" },
  { name: "Marriott International", color: "#8B1A1A" },
  { name: "IHG Hotels & Resorts", color: "#1a3c6e" },
  { name: "Sarovar", color: "#C9A84C" },
];

export default function ClientsSection() {
  return (
    <section style={{ background: "#0D1117", padding: "72px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "36px" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C" }}>
            OUR CLIENTS
          </p>
          <Link
            to="/about"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#C9A84C", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
            onMouseEnter={(e) => e.currentTarget.style.gap = "12px"}
            onMouseLeave={(e) => e.currentTarget.style.gap = "6px"}
          >
            View All Testimonials <span>→</span>
          </Link>
        </div>

        {/* Client logos */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
          padding: "32px 40px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "10px",
        }}>
          {clients.map((client) => (
            <div
              key={client.name}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "13px",
                fontWeight: 700,
                color: client.color,
                letterSpacing: "0.04em",
                opacity: 0.75,
                transition: "opacity 0.2s",
                whiteSpace: "nowrap",
                cursor: "default",
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "0.75"}
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}