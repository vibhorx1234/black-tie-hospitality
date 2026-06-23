import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Properties from "./pages/Properties";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import WhatsAppIcon from "../src/vectors/whatsapp.svg";

// ── Responsive hook ────────────────────────────────────────────────────────────
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

// ── Scroll to top on route change ─────────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// ── WhatsApp Floating Button ───────────────────────────────────────────────────
function WhatsAppButton() {
  const width = useWindowWidth();
  const isMobile = width < 768;

  if (isMobile) {
    // ── Mobile: icon-only circle ───────────────────────────────────────────
    return (
      <a
        href="https://wa.me/919982931469"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          right: "16px",
          bottom: "20px",
          zIndex: 9999,

          width: "50px",
          height: "50px",
          borderRadius: "50%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background: "#C9A84C",
          border: "1px solid rgba(201,168,76,0.4)",
          boxShadow: "0 4px 18px rgba(201,168,76,0.28)",
          textDecoration: "none",
        }}
      >
        <img
          src={WhatsAppIcon}
          alt="WhatsApp"
          style={{
            width: "26px",
            height: "26px",
            display: "block",
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
      </a>
    );
  }

  // ── Desktop: static pill with icon + label, no hover animations ───────────
  return (
    <a
      href="https://wa.me/919982931469"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "32px",
        zIndex: 9999,

        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",

        height: "54px",
        padding: "0 22px 0 16px",

        background: "#C9A84C",
        border: "1px solid rgba(201,168,76,0.4)",
        borderRadius: "27px",
        boxSizing: "border-box",
        boxShadow: "0 4px 18px rgba(201,168,76,0.28)",

        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
    >
      <img
        src={WhatsAppIcon}
        alt="WhatsApp"
        style={{
          width: "28px",
          height: "28px",
          display: "block",
          objectFit: "contain",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          color: "#0D1117",
          letterSpacing: "0.06em",
          userSelect: "none",
        }}
      >
        Chat with us
      </span>
    </a>
  );
}

// ── App Layout ─────────────────────────────────────────────────────────────────
function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  minHeight: "70vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#0D1117",
                  padding: "80px 1rem 2rem",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(3rem, 10vw, 5rem)",
                    color: "rgba(201,168,76,0.2)",
                    fontWeight: 700,
                    margin: "0 0 8px",
                    lineHeight: 1,
                  }}
                >
                  404
                </p>
                <h2
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
                    color: "#F5F0E8",
                    margin: "0 0 12px",
                  }}
                >
                  Page Not Found
                </h2>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "#6b6560",
                    fontSize: "clamp(13px, 2vw, 15px)",
                    margin: "0 0 28px",
                  }}
                >
                  The page you're looking for doesn't exist.
                </p>
                <a
                  href="/"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#0D1117",
                    background: "#C9A84C",
                    padding: "12px 28px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Back to Home
                </a>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

// ── Root ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}