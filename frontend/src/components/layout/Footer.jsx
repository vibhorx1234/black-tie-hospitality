import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import logo from "../../vectors/logo.svg";
import { contactInfo, SOCIAL_LINKS } from "../../data/about";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Properties", path: "/properties" },
  { label: "Gallery", path: "/gallery" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  "Lease Management",
  "Tenant Management",
  "Rent Collection",
  "Property Maintenance",
  "Financial Reporting",
  "Legal Compliance",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer style={{ background: "#0A0D12", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
      {/* Main Footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 2rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "3rem",
        }}
        className="footer-grid"
      >
        {/* Brand Column */}
        <div>
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.2rem" }}>
            <img
              src={logo}
              alt="Black Tie Hospitality"
              style={{
                height: "64px",
                width: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
          </Link>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Premium Property Management Solutions Across India
          </p>
          {/* Social Icons */}
          <div style={{ display: "flex", gap: "12px" }}>
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "34px",
                  height: "34px",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(201,168,76,0.1)";
                  e.currentTarget.style.borderColor = "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                }}
              >
                <img
                  src={social.icon}
                  alt=""
                  style={{
                    width: "26px",
                    height: "26px",
                    filter:
                      "brightness(0) saturate(100%) invert(72%) sepia(47%) saturate(500%) hue-rotate(5deg) brightness(95%)",
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", color: "#F5F0E8", letterSpacing: "0.08em", marginBottom: "1.2rem", fontWeight: "600" }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "13px",
                    color: "#8a8580",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8580")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", color: "#F5F0E8", letterSpacing: "0.08em", marginBottom: "1.2rem", fontWeight: "600" }}>
            Contact Us
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {contactInfo.map((c) => (
              <div key={c.title} style={{ display: "flex", gap: "10px", alignItems: c.href ? "center" : "flex-start" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <img src={c.icon} alt={c.title} style={{ width: "14px", height: "14px", objectFit: "contain", filter: "invert(67%) sepia(40%) saturate(500%) hue-rotate(2deg)" }} />
                </div>
                {c.href ? (
                  <a href={c.href} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", textDecoration: "none" }}>
                    {c.lines[0]}
                  </a>
                ) : (
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", lineHeight: 1.6, margin: 0, paddingTop: "6px" }}>
                    {c.lines[0]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.2rem 2rem",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#5a5550", margin: 0 }}>
          © 2026 Black Tie Hospitality. All Rights Reserved.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#5a5550", textDecoration: "none" }}>Privacy Policy</a>
          <span style={{ color: "#5a5550" }}>|</span>
          <a href="#" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#5a5550", textDecoration: "none" }}>Terms & Conditions</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}