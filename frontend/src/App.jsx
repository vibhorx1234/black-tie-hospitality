// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import React from "react";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Properties from "./pages/Properties";
// import Gallery from "./pages/Gallery";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// // Scroll to top on route change
// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "instant" });
//   }, [pathname]);
//   return null;
// }

// function AppLayout() {
//   return (
//     <>
//       <ScrollToTop />
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/properties" element={<Properties />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           {/* 404 fallback */}
//           <Route path="*" element={
//             <div style={{
//               minHeight: "70vh",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "#0D1117",
//               paddingTop: "80px",
//             }}>
//               <p style={{ fontFamily: "'Cinzel', serif", fontSize: "5rem", color: "rgba(201,168,76,0.2)", fontWeight: 700 }}>404</p>
//               <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.5rem", color: "#F5F0E8", marginBottom: "12px" }}>Page Not Found</h2>
//               <p style={{ fontFamily: "'Outfit', sans-serif", color: "#6b6560", marginBottom: "28px" }}>The page you're looking for doesn't exist.</p>
//               <a
//                 href="/"
//                 style={{
//                   fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600,
//                   color: "#0D1117", background: "#C9A84C",
//                   padding: "12px 28px", borderRadius: "4px",
//                   textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase",
//                 }}
//               >
//                 Back to Home
//               </a>
//             </div>
//           } />
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <AppLayout />
//     </BrowserRouter>
//   );
// }




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
import WhatsAppIcon from "../src/vectors/whatsapp.svg";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/919982931469"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        right: "24px",
        bottom: "32px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: hovered ? "#b8902e" : "#C9A84C",
        border: "1px solid rgba(201,168,76,0.5)",
        borderRadius: "50px",
        padding: hovered ? "12px 20px 12px 14px" : "14px",
        boxShadow: hovered
          ? "0 8px 32px rgba(201,168,76,0.45)"
          : "0 4px 18px rgba(201,168,76,0.25)",
        textDecoration: "none",
        transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        overflow: "hidden",
        maxWidth: hovered ? "200px" : "52px",
      }}
    >
      {/* WhatsApp SVG icon */}
      <img
        src={WhatsAppIcon}
        alt="WhatsApp"
        style={{ width: "26px", height: "26px", flexShrink: 0 }}
      />

      {/* Label — slides in on hover */}
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "13px",
          fontWeight: 700,
          color: "#0D1117",
          letterSpacing: "0.06em",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-8px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: "none",
        }}
      >
        Chat with us
      </span>
    </a>
  );
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
          <Route path="/properties" element={<Properties />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
      <WhatsAppButton />
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