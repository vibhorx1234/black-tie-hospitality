import React from "react";

export default function StatBadge({ icon, value, label, dark = true }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "0 2rem",
        borderRight: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
      }}
    >
      {icon && (
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            border: "1px solid rgba(201,168,76,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.75rem",
            fontWeight: "700",
            color: dark ? "#F5F0E8" : "#0D1117",
            lineHeight: 1,
          }}
        >
          {value}
        </div>
        <div
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "11px",
            color: dark ? "rgba(245,240,232,0.55)" : "#8a8580",
            marginTop: "2px",
            letterSpacing: "0.03em",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}