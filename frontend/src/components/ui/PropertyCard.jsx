import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

export default function PropertyCard({ property, compact = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.25)" : "0 4px 16px rgba(0,0,0,0.12)",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        background: "#1a1f2e",
        aspectRatio: compact ? "3/4" : "4/3",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number Badge */}
      {property.badge && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 3,
            background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
            color: "#0D1117",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "11px",
            fontWeight: "700",
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {property.badge}
        </div>
      )}

      {/* Image */}
      <img
        src={property.image}
        alt={property.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />

      {/* Gradient Overlay always */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(10,13,18,0.85) 30%, rgba(10,13,18,0.1) 70%)",
          zIndex: 1,
        }}
      />

      {/* Hover Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(201,168,76,0.08)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1rem",
          zIndex: 3,
        }}
      >
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "16px",
            fontWeight: "600",
            color: "#F5F0E8",
            margin: "0 0 4px",
            lineHeight: 1.2,
          }}
        >
          {property.name}
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "11px",
            color: "rgba(245,240,232,0.6)",
          }}
        >
          <span>📍</span>
          <span>{property.location}</span>
        </div>
      </div>
    </div>
  );
}