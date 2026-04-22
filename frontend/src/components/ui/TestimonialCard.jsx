import React from "react";

export default function TestimonialCard({ testimonial, dark = true }) {
  return (
    <div
      style={{
        padding: "1.75rem",
        borderRadius: "8px",
        background: dark ? "rgba(255,255,255,0.03)" : "#fff",
        border: dark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: "4px" }}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} style={{ color: "#C9A84C", fontSize: "14px" }}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "13.5px",
          color: dark ? "rgba(245,240,232,0.75)" : "#4a4540",
          lineHeight: 1.7,
          margin: 0,
          fontStyle: "italic",
          flex: 1,
        }}
      >
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid rgba(201,168,76,0.3)",
          }}
          onError={(e) => {
            e.target.style.background = "#2a2f3e";
            e.target.style.display = "none";
          }}
        />
        <div>
          <div
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "14px",
              fontWeight: "600",
              color: dark ? "#F5F0E8" : "#0D1117",
            }}
          >
            {testimonial.name}
          </div>
          <div
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "11px",
              color: "#C9A84C",
              letterSpacing: "0.03em",
            }}
          >
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}