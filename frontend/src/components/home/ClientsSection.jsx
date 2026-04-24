import { Link } from "react-router-dom";
import React from "react";
import { CLIENTS } from "../../data/clients";

export default function ClientsSection() {
  return (
    <section style={{ background: "#0D1117", padding: "72px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "36px" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C" }}>
            OUR CLIENTS
          </p>
        </div>

        {/* Client logos */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "80px",
          flexWrap: "wrap",
          padding: "32px 40px",
          background: "rgba(0,0,0)",
          border: "1px solid rgba(201,168,76,0.3)",
          borderRadius: "10px",
        }}>
          {CLIENTS.map((client) => (
            <img
              key={client.id}
              src={client.logo}
              alt={client.id}
              style={{
                height: "72px",
                width: "auto  ",
                objectFit: "contain",
                opacity: 0.6,
                transition: "opacity 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "0.6"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}