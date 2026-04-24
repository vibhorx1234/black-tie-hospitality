import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import React from "react";

export default function AboutSection() {
  return (
    <section
      style={{
        padding: "6rem 2rem",
        background: "#f7f5f2",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left - Text */}
        <div>
          <SectionHeader
            label="About Us"
            title="Leading Property Management Company in India"
            align="left"
            style={{ marginBottom: "1.5rem" }}
          />
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "15px",
              color: "#5a5550",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            With a strong base in Jaipur, expanding to metros and high-growth cities, we specialize in maximizing property ROI through seamless management. Our team of experts ensures every property under our care delivers consistent returns while maintaining the highest standards of hospitality.
          </p>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "15px",
              color: "#5a5550",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            From tenant screening to financial reporting, we handle every aspect of property management so you can enjoy passive income without the hassle.
          </p>
          <Link to="/about">
            <Button variant="dark" size="md">
              Read More →
            </Button>
          </Link>
        </div>

        {/* Right - Images */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "240px 160px",
            gap: "12px",
            position: "relative",
          }}
          className="about-images"
        >
          <img
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&q=80"
            alt="Property"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
              gridColumn: "1",
              gridRow: "1 / 3",
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80"
            alt="Property"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <div
            style={{
              background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#0D1117",
                lineHeight: 1,
              }}
            >
              10+
            </div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "12px",
                fontWeight: "600",
                color: "rgba(13,17,23,0.7)",
                textAlign: "center",
                letterSpacing: "0.05em",
                marginTop: "4px",
              }}
            >
              Years of Excellence
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-images { grid-template-rows: 200px 140px !important; }
        }
      `}</style>
    </section>
  );
}