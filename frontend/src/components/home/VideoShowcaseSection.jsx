import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { SHOWCASE_VIDEOS } from "../../data/videoShowcase";

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

// ── Single autoplay iframe card ────────────────────────────────────────────────
function VideoCard({ video, isMobile }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play/pause based on visibility
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (visible) {
      vid.play().catch(() => { }); // catch autoplay policy errors silently
    } else {
      vid.pause();
    }
  }, [visible]);

  return (
    <div
      ref={containerRef}
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(201,168,76,0.18)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,168,76,0.14)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)";
      }}
    >
      {/* Video wrapper — portrait 9:13 */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "9/13", background: "#f7f5f2" }}>
        <video
          ref={videoRef}
          src={video.videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Gold corner accent */}
        <div style={{ position: "absolute", top: 10, left: 10, width: 28, height: 2, background: "#C9A84C", borderRadius: 1, pointerEvents: "none", zIndex: 2 }} />
        <div style={{ position: "absolute", top: 10, left: 10, width: 2, height: 28, background: "#C9A84C", borderRadius: 1, pointerEvents: "none", zIndex: 2 }} />
      </div>

      {/* Card footer */}
      {/* <div style={{
        padding: isMobile ? "8px 10px" : "10px 14px",
        borderTop: "1px solid rgba(201,168,76,0.12)",
        background: "#fff",
      }}>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: isMobile ? 12 : 13, fontWeight: 600, color: "#1a1714", margin: "0 0 2px", lineHeight: 1.3 }}>
          {video.title}
        </p>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: isMobile ? 10 : 11, color: "#C9A84C", margin: 0, letterSpacing: "0.06em" }}>
          {video.subtitle}
        </p>
      </div> */}
    </div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────────
export default function VideoShowcaseSection() {
  const width = useWindowWidth();
  const isMobile = width < 640;

  return (
    <section style={{
      background: "#f7f5f2",
      padding: isMobile ? "32px 0" : "48px 0",
    }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.25rem" }}>

        {/* ── Header ── */}
        <div style={{
          marginBottom: isMobile ? 14 : 20,
        }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            color: "#C9A84C",
            marginBottom: 4,
            textTransform: "uppercase",
          }}>
            What We Create
          </p>
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}>
            <div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: isMobile ? "1.6rem" : "clamp(1.6rem, 2.6vw, 2.2rem)",
                fontWeight: 600,
                color: "#1a1714",
                margin: 0,
                lineHeight: 1.2,
              }}>
                Premium Spaces, Perfectly Managed.
              </h2>
              {/* Gold underline accent */}
              <div style={{
                width: 44,
                height: 2,
                background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.2))",
                marginTop: 8,
                borderRadius: 1,
              }} />
            </div>
          </div>
        </div>

        {/* ── Subheading ── */}
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: isMobile ? "0.8rem" : "0.875rem",
          color: "#777",
          lineHeight: 1.6,
          maxWidth: 560,
          marginBottom: isMobile ? 16 : 24,
          marginTop: 0,
        }}>
          Curated properties designed for exceptional guest stays and stronger owner returns.
        </p>

        {/* ── Video Grid — always 4 columns ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: isMobile ? 10 : 16,
        }}>
          {SHOWCASE_VIDEOS.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* ── Global Keyframes ── */}
      <style>{`
          @keyframes shimmer {
            0%   { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}</style>
    </section>
  );
}