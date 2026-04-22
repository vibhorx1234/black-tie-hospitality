import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
// import Models from "./pages/Models";
import Properties from "./pages/Properties";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/models" element={<Models />} /> */}
          <Route path="/properties" element={<Properties />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 fallback */}
          <Route path="*" element={
            <div style={{
              minHeight: "70vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "#0D1117",
              paddingTop: "80px",
            }}>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "5rem", color: "rgba(201,168,76,0.2)", fontWeight: 700 }}>404</p>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.5rem", color: "#F5F0E8", marginBottom: "12px" }}>Page Not Found</h2>
              <p style={{ fontFamily: "'Outfit', sans-serif", color: "#6b6560", marginBottom: "28px" }}>The page you're looking for doesn't exist.</p>
              <a
                href="/"
                style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600,
                  color: "#0D1117", background: "#C9A84C",
                  padding: "12px 28px", borderRadius: "4px",
                  textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase",
                }}
              >
                Back to Home
              </a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}