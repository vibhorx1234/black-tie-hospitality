import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import logo from "../../vectors/logo.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Properties", path: "/properties" },
  { label: "Gallery", path: "/gallery" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled
          ? "rgba(13, 17, 23, 0.97)"
          : "rgba(13, 17, 23, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={logo}
            alt="Black Tie Hospitality"
            style={{
              height: "56px",
              width: "auto",
              filter: "brightness(0) invert(1)",
            }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: isActive ? "#C9A84C" : "#d0ccc4",
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: "4px",
                  transition: "color 0.25s ease",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#F5F0E8";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#d0ccc4";
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, #C9A84C, #e8c97a)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </Link>
            );
          })}

          <Link
            to="/contact"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              color: "#0D1117",
              background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
              marginRight: "-70px",
              marginLeft: "30px",
              padding: "9px 16px",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "opacity 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get Free Proposal
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            flexDirection: "column",
            gap: "5px",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: "24px", height: "2px", background: "#C9A84C", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#C9A84C", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#C9A84C", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(13, 17, 23, 0.98)",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            padding: "1rem 2rem 1.5rem",
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: "block",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "15px",
                  color: isActive ? "#C9A84C" : "#d0ccc4",
                  textDecoration: "none",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "14px",
              fontWeight: "600",
              color: "#0D1117",
              background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
              padding: "10px 24px",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            Get Free Proposal
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}