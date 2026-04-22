import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import React from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0A0D12",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          transform: loaded ? "scale(1)" : "scale(1.05)",
          transition: "transform 1.5s ease",
        }}
      />

      {/* Overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(10,13,18,0.92) 45%, rgba(10,13,18,0.5) 75%, rgba(10,13,18,0.2) 100%)",
        }}
      />
      {/* Diagonal pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(201,168,76,0.02) 40px,
            rgba(201,168,76,0.02) 41px
          )`,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          paddingTop: "72px",
        }}
      >
        <div style={{ maxWidth: "620px" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "1.5rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <div style={{ width: "32px", height: "1px", background: "#C9A84C" }} />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C9A84C",
              }}
            >
              Premium Property Management
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: "700",
              color: "#F5F0E8",
              lineHeight: 1.1,
              margin: "0 0 1.25rem",
              letterSpacing: "-0.02em",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s ease 0.35s",
            }}
          >
            Where Comfort
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Meets Luxury
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "16px",
              color: "rgba(245,240,232,0.7)",
              lineHeight: 1.7,
              margin: "0 0 2.5rem",
              maxWidth: "480px",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s ease 0.5s",
            }}
          >
            Premium Property Management Solutions Across India
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s ease 0.65s",
            }}
          >
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get Free Proposal
              </Button>
            </Link>
            <Link to="/properties">
              <Button variant="secondary" size="lg">
                Explore Properties
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          background: "rgba(10,13,18,0.92)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease 0.9s",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "stretch",
          }}
          className="stats-bar"
        >
          {[
            { icon: "🏠", value: "500+", label: "Rooms Managed" },
            { icon: "⭐", value: "10+", label: "Years Experience" },
            { icon: "🏢", value: "50+", label: "Properties" },
            { icon: "🤝", value: "Trusted by", label: "Top Brands" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "1.25rem 1.5rem",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                {stat.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#F5F0E8",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "11px",
                    color: "rgba(245,240,232,0.5)",
                    marginTop: "2px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-bar { flex-wrap: wrap; }
          .stats-bar > div { flex: 1 1 50%; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); }
        }
      `}</style>
    </section>
  );
}