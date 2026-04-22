import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

export default function ModelCard({ model, featured = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        border: featured
          ? "1px solid rgba(201,168,76,0.5)"
          : "1px solid rgba(255,255,255,0.08)",
        background: featured
          ? "linear-gradient(160deg, #1a1f2e, #0f1419)"
          : "rgba(255,255,255,0.03)",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.3)"
          : featured ? "0 8px 30px rgba(201,168,76,0.1)" : "none",
        position: "relative",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {featured && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #C9A84C, #e8c97a)",
          }}
        />
      )}

      {/* Header */}
      <div
        style={{
          padding: "1.75rem 1.75rem 1.25rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid rgba(201,168,76,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            {model.icon}
          </div>
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "18px",
                fontWeight: "700",
                color: "#F5F0E8",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {model.name}
            </h3>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "11px",
                color: "#C9A84C",
                margin: 0,
                letterSpacing: "0.05em",
              }}
            >
              {model.tagline}
            </p>
          </div>
        </div>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "13px",
            color: "rgba(245,240,232,0.6)",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {model.shortDesc}
        </p>
      </div>

      {/* Features */}
      <div style={{ padding: "1.25rem 1.75rem 1.75rem" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "10px" }}>
          {model.features.map((f, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "13px",
                color: "rgba(245,240,232,0.75)",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  color: "#C9A84C",
                  fontSize: "14px",
                  marginTop: "1px",
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div
          style={{
            padding: "10px 14px",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "4px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "12px",
            color: "#C9A84C",
          }}
        >
          <strong>Best For:</strong> {model.bestFor}
        </div>
      </div>
    </div>
  );
}