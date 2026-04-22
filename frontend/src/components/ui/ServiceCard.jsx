import { useState } from "react";
import React from "react";

export default function ServiceCard({ service, dark = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        padding: "1.75rem 1.5rem",
        borderRadius: "8px",
        background: dark
          ? hovered ? "rgba(201,168,76,0.06)" : "rgba(255,255,255,0.03)"
          : hovered ? "#fff" : "#f9f8f6",
        border: dark
          ? hovered ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(255,255,255,0.06)"
          : hovered ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        cursor: "default",
        boxShadow: hovered
          ? dark ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.08)"
          : "none",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: `1px solid ${hovered ? "#C9A84C" : "rgba(201,168,76,0.3)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          marginBottom: "1rem",
          transition: "border-color 0.3s",
          background: hovered ? "rgba(201,168,76,0.08)" : "transparent",
        }}
      >
        {service.icon}
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "17px",
          fontWeight: "600",
          color: dark ? "#F5F0E8" : "#0D1117",
          margin: "0 0 8px",
          transition: "color 0.3s",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "13px",
          color: dark ? "rgba(245,240,232,0.55)" : "#6a6560",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {service.shortDesc}
      </p>
    </div>
  );
}