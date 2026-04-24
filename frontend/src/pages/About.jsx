import { Link } from "react-router-dom";
import CTABanner from "../components/home/CTABanner";
import ClientsSection from "../components/home/ClientsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import React from "react";
import { STATS } from "../data/clients";
import { values, milestones, teamMembers } from "../data/about";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: "72px", minHeight: "420px",
        background: "#0D1117", position: "relative", overflow: "hidden",
        display: "flex", alignItems: "flex-end",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://picsum.photos/seed/about-hero/1400/600)",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.18,
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0D1117 40%, rgba(13,17,23,0.6) 100%)" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 2rem 60px", position: "relative", zIndex: 1, width: "100%" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
            ABOUT US
          </p>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#F5F0E8", lineHeight: 1.15, marginBottom: "20px" }}>
            Leading Property Management<br />Company in India
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", color: "#8a8580", lineHeight: 1.7, maxWidth: "560px" }}>
            With a strong base in Jaipur, expanding to metros and high-growth cities, we specialize in maximizing property ROI through seamless management.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#111827", padding: "0" }}>
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
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "1.25rem 1.5rem",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
              }}
            >
              {/* ICON FIXED */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img
                  src={stat.icon}
                  alt={stat.label}
                  style={{
                    width: "18px",
                    height: "18px",
                    objectFit: "contain",
                    filter:
                      "invert(78%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                  }}
                />
              </div>

              {/* TEXT */}
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
      </section>

      {/* Story */}
      <section style={{ background: "#0D1117", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="story-grid">
            <div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
                OUR STORY
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#F5F0E8", fontWeight: 600, lineHeight: 1.25, marginBottom: "24px" }}>
                A Decade of Excellence in Property Management
              </h2>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#8a8580", lineHeight: 1.8, marginBottom: "20px" }}>
                Black Tie Hospitality was born from a simple belief: every property owner deserves exceptional management that maximizes returns while minimizing stress.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#8a8580", lineHeight: 1.8, marginBottom: "32px" }}>
                Founded in 2014 in Jaipur by Ankit Jain and Rahul Sharma, we started with a single hotel and a vision to transform India's property management landscape. Today, we manage 500+ rooms across multiple cities and continue to grow.
              </p>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#C9A84C", color: "#0D1117",
                  padding: "12px 28px", borderRadius: "4px",
                  fontFamily: "'Outfit', sans-serif", fontSize: "13px",
                  fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                  textDecoration: "none", transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                Work With Us
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <img src="https://picsum.photos/seed/about1/400/300" alt="Our story" style={{ borderRadius: "8px", width: "100%", objectFit: "cover" }} />
              <img src="https://picsum.photos/seed/about2/400/300" alt="Our team" style={{ borderRadius: "8px", width: "100%", objectFit: "cover", marginTop: "24px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#111827", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              OUR VALUES
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#F5F0E8", fontWeight: 600 }}>
              What Drives Everything We Do
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="values-grid">
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "32px 24px",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "1px solid rgba(201,168,76,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    margin: "0 auto 20px",
                  }}
                >
                  <img
                    src={v.icon}
                    alt={v.title}
                    style={{
                      width: "18px",
                      height: "18px",
                      objectFit: "contain",
                      filter: "invert(67%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                    }}
                  />
                </div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", color: "#F5F0E8", fontWeight: 600, marginBottom: "10px" }}>{v.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#6b6560", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "#0D1117", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              OUR JOURNEY
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#F5F0E8", fontWeight: 600 }}>
              Milestones That Define Us
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Central line */}
            <div style={{
              position: "absolute", left: "50%", top: 0, bottom: 0,
              width: "1px", background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)",
              transform: "translateX(-50%)",
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  style={{
                    display: "flex",
                    justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                    paddingLeft: i % 2 === 0 ? "0" : "50%",
                    paddingRight: i % 2 === 0 ? "50%" : "0",
                    position: "relative",
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    position: "absolute",
                    left: "50%", top: "16px",
                    transform: "translate(-50%, -50%)",
                    width: "12px", height: "12px",
                    borderRadius: "50%",
                    background: "#C9A84C",
                    border: "3px solid #0D1117",
                    boxShadow: "0 0 0 2px rgba(201,168,76,0.3)",
                  }} />

                  <div
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "10px",
                      padding: "20px 24px",
                      maxWidth: "420px",
                      marginLeft: i % 2 === 0 ? "0" : "24px",
                      marginRight: i % 2 === 0 ? "24px" : "0",
                      width: "100%",
                    }}
                  >
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", color: "#C9A84C", fontWeight: 700, display: "block", marginBottom: "6px" }}>{m.year}</span>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#F5F0E8", fontWeight: 600, marginBottom: "6px" }}>{m.title}</h3>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#6b6560", lineHeight: 1.5 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section style={{ background: "#111827", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              LEADERSHIP TEAM
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#F5F0E8", fontWeight: 600 }}>
              The People Behind Black Tie
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }} className="team-grid">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "32px 24px",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: "80px", height: "80px", borderRadius: "50%",
                    objectFit: "cover", margin: "0 auto 16px",
                    border: `2px solid ${member.color}44`,
                    display: "block",
                  }}
                />
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "14px", color: "#F5F0E8", fontWeight: 600, marginBottom: "4px" }}>{member.name}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: member.color }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />
      <TestimonialsSection />
      <CTABanner />

      <style>{`
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr 1fr !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .values-grid, .team-grid, .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}