import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  type = "button",
  style = {},
  ...props
}) {
  const sizes = {
    sm: { padding: "7px 16px", fontSize: "12px" },
    md: { padding: "11px 24px", fontSize: "14px" },
    lg: { padding: "14px 32px", fontSize: "15px" },
  };

  const variants = {
    primary: {
      background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
      color: "#0D1117",
      border: "none",
      fontWeight: "600",
    },
    secondary: {
      background: "transparent",
      color: "#F5F0E8",
      border: "1px solid rgba(245,240,232,0.4)",
      fontWeight: "500",
    },
    gold_outline: {
      background: "transparent",
      color: "#C9A84C",
      border: "1px solid #C9A84C",
      fontWeight: "500",
    },
    dark: {
      background: "#0D1117",
      color: "#F5F0E8",
      border: "1px solid rgba(245,240,232,0.15)",
      fontWeight: "500",
    },
  };

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "'Outfit', sans-serif",
    letterSpacing: "0.03em",
    textDecoration: "none",
    transition: "all 0.25s ease",
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const handleHover = (e, enter) => {
    if (variant === "primary") {
      e.currentTarget.style.opacity = enter ? "0.88" : "1";
      e.currentTarget.style.transform = enter ? "translateY(-1px)" : "translateY(0)";
    } else if (variant === "secondary") {
      e.currentTarget.style.borderColor = enter ? "rgba(245,240,232,0.8)" : "rgba(245,240,232,0.4)";
      e.currentTarget.style.background = enter ? "rgba(245,240,232,0.05)" : "transparent";
    } else if (variant === "gold_outline") {
      e.currentTarget.style.background = enter ? "rgba(201,168,76,0.08)" : "transparent";
    } else if (variant === "dark") {
      e.currentTarget.style.background = enter ? "rgba(201,168,76,0.06)" : "#0D1117";
    }
  };

  if (href) {
    return (
      <a
        href={href}
        style={baseStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={baseStyle}
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
      {...props}
    >
      {children}
    </button>
  );
}