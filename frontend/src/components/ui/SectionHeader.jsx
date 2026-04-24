import React from "react";

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
  style = {},
}) {
  return (
    <div style={{ textAlign: align, marginBottom: "3rem", ...style }}>
      {label && (
        <div
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "13.6px",
            fontWeight: "600",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: align === "center" ? "center" : "flex-start",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "28px",
              height: "1px",
              background: "#C9A84C",
              opacity: 0.6,
            }}
          />
          {label}
          <span
            style={{
              display: "inline-block",
              width: "28px",
              height: "1px",
              background: "#C9A84C",
              opacity: 0.6,
            }}
          />
        </div>
      )}
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          fontWeight: "700",
          color: dark ? "#F5F0E8" : "#0D1117",
          lineHeight: 1.2,
          margin: subtitle ? "0 0 1rem" : 0,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "15px",
            color: dark ? "rgba(245,240,232,0.65)" : "#5a5550",
            lineHeight: 1.7,
            maxWidth: align === "center" ? "540px" : "none",
            margin: align === "center" ? "0 auto" : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}