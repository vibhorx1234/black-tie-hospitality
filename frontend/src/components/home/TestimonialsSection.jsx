import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "Black Tie Hospitality has transformed the way we manage our properties. Their professionalism and ROI focus is unmatched.",
    name: "Vikram Mehta",
    role: "Property Investor",
    img: "https://picsum.photos/seed/test1/80/80",
  },
  {
    id: 2,
    stars: 5,
    text: "Transparent, reliable and result-driven team. Our property income has significantly increased since we partnered with them.",
    name: "Neha Kapoor",
    role: "NRI Investor",
    img: "https://picsum.photos/seed/test2/80/80",
  },
  {
    id: 3,
    stars: 5,
    text: "From tenant management to maintenance, everything is handled seamlessly. Highly recommended to every property owner!",
    name: "Arjun Malhotra",
    role: "Real Estate Developer",
    img: "https://picsum.photos/seed/test3/80/80",
  },
  {
    id: 4,
    stars: 5,
    text: "Exceptional service! They found quality tenants within days and have maintained a zero-vacancy record for our portfolio.",
    name: "Priya Sharma",
    role: "Portfolio Owner",
    img: "https://picsum.photos/seed/test4/80/80",
  },
  {
    id: 5,
    stars: 5,
    text: "Best decision we made was partnering with Black Tie. The revenue share model has given us 30% higher returns.",
    name: "Rajesh Gupta",
    role: "Hotel Owner",
    img: "https://picsum.photos/seed/test5/80/80",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const max = testimonials.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <section style={{ background: "#0D1117", padding: "72px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "36px" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C" }}>
            WHAT OUR CLIENTS SAY
          </p>
          <Link
            to="/about"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#C9A84C", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
            onMouseEnter={(e) => e.currentTarget.style.gap = "12px"}
            onMouseLeave={(e) => e.currentTarget.style.gap = "6px"}
          >
            View All Testimonials <span>→</span>
          </Link>
        </div>

        {/* Carousel */}
        <div style={{ position: "relative" }}>
          {/* Prev */}
          <button
            onClick={prev}
            disabled={current === 0}
            style={{
              position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)",
              zIndex: 2, width: "36px", height: "36px", borderRadius: "50%",
              background: current === 0 ? "rgba(255,255,255,0.03)" : "rgba(201,168,76,0.1)",
              border: `1px solid ${current === 0 ? "rgba(255,255,255,0.08)" : "rgba(201,168,76,0.3)"}`,
              color: current === 0 ? "#444" : "#C9A84C",
              cursor: current === 0 ? "not-allowed" : "pointer",
              fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >‹</button>

          <div style={{ overflow: "hidden" }}>
            <div style={{
              display: "flex",
              gap: "20px",
              transform: `translateX(calc(-${current * (100 / visible)}% - ${current * 20 / visible}px))`,
              transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}>
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  style={{
                    flex: `0 0 calc(${100 / visible}% - ${20 * (visible - 1) / visible}px)`,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    padding: "28px",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
                >
                  {/* Stars */}
                  <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} style={{ color: "#C9A84C", fontSize: "14px" }}>★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#b8b0a0", lineHeight: 1.7, marginBottom: "24px" }}>
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <img
                      src={t.img}
                      alt={t.name}
                      style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(201,168,76,0.2)" }}
                    />
                    <div>
                      <p style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", color: "#F5F0E8", fontWeight: 600, marginBottom: "2px" }}>{t.name}</p>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#C9A84C" }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={current >= max}
            style={{
              position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)",
              zIndex: 2, width: "36px", height: "36px", borderRadius: "50%",
              background: current >= max ? "rgba(255,255,255,0.03)" : "rgba(201,168,76,0.1)",
              border: `1px solid ${current >= max ? "rgba(255,255,255,0.08)" : "rgba(201,168,76,0.3)"}`,
              color: current >= max ? "#444" : "#C9A84C",
              cursor: current >= max ? "not-allowed" : "pointer",
              fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >›</button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "28px" }}>
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: current === i ? "20px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: current === i ? "#C9A84C" : "rgba(201,168,76,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          /* show 2 cards */
        }
        @media (max-width: 600px) {
          /* show 1 card */
        }
      `}</style>
    </section>
  );
}