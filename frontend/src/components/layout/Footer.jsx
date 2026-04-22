import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Models", path: "/models" },
  { label: "Properties", path: "/properties" },
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
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.2fr",
          gap: "3rem",
        }}
        className="footer-grid"
      >
        {/* Brand Column */}
        <div>
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.2rem" }}>
            <div
              style={{
                width: "38px",
                height: "38px",
                background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Cinzel', serif",
                fontWeight: "700",
                fontSize: "17px",
                color: "#0D1117",
              }}
            >
              B
            </div>
            <div>
              <div style={{ fontFamily: "'Cinzel', serif", fontWeight: "700", fontSize: "14px", color: "#F5F0E8", letterSpacing: "0.05em" }}>
                BLACK TIE
              </div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "8px", color: "#C9A84C", letterSpacing: "0.2em" }}>
                HOSPITALITY
              </div>
            </div>
          </Link>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Premium Property Management Solutions Across India
          </p>
          {/* Social Icons */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { icon: "in", href: "https://linkedin.com" },
              { icon: "ig", href: "https://instagram.com" },
              { icon: "fb", href: "https://facebook.com" },
              { icon: "yt", href: "https://youtube.com" },
            ].map((social) => (
              <a
                key={social.icon}
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
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#C9A84C",
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
                {social.icon}
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

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", color: "#F5F0E8", letterSpacing: "0.08em", marginBottom: "1.2rem", fontWeight: "600" }}>
            Services
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8580")}
                >
                  {s}
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
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#C9A84C", fontSize: "14px", marginTop: "2px" }}>📍</span>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", lineHeight: 1.6, margin: 0 }}>
                23S, Netaji Puram Prasad, Banipark, Jaipur, Rajasthan 302016
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "#C9A84C", fontSize: "14px" }}>📞</span>
              <a href="tel:+910155558899" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", textDecoration: "none" }}>
                +91 01555 58899
              </a>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "#C9A84C", fontSize: "14px" }}>✉️</span>
              <a href="mailto:info@blacktiehospitality.com" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", textDecoration: "none" }}>
                info@blacktiehospitality.com
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", color: "#F5F0E8", letterSpacing: "0.08em", marginBottom: "0.5rem", fontWeight: "600" }}>
            Newsletter
          </h4>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", marginBottom: "1rem", lineHeight: 1.5 }}>
            Subscribe to our newsletter for latest updates.
          </p>
          {subscribed ? (
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#C9A84C" }}>
              ✓ Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "0" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRight: "none",
                  borderRadius: "4px 0 0 4px",
                  padding: "9px 12px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                  color: "#F5F0E8",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
                  border: "none",
                  borderRadius: "0 4px 4px 0",
                  padding: "9px 14px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                →
              </button>
            </form>
          )}
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
          © 2024 Black Tie Hospitality LLP. All Rights Reserved.
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