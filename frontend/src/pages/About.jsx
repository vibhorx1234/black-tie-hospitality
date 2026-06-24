import { Link } from "react-router-dom";
import CTABanner from "../components/home/CTABanner";
import ClientsSection from "../components/home/ClientsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import React from "react";
import { STATS } from "../data/clients";
import { values, milestones, teamMembers } from "../data/about";
import grace1 from './../assets/grace/5.JPG';

import team1 from "./../assets/team/team1.jpeg";
import team3 from "./../assets/team/team3.jpeg";
import ceo from "./../assets/team/ceo.jpeg";

export default function About() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        paddingTop: "clamp(56px, 8vw, 72px)",
        minHeight: "clamp(300px, 42vw, 420px)",
        background: "#0D1117",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}>
        {/* Background image */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${grace1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, #0D1117 20%, transparent 80%)",
          zIndex: 0,
        }} />

        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "clamp(40px, 7vw, 80px) clamp(16px, 4vw, 2rem) clamp(36px, 5vw, 60px)",
          position: "relative",
          zIndex: 1,
          width: "100%",
          boxSizing: "border-box",
        }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "clamp(10px, 2vw, 16px)",
          }}>
            ABOUT BLACK TIE
          </p>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.6rem, 5vw, 3.2rem)",
            fontWeight: 700,
            color: "#F5F0E8",
            lineHeight: 1.15,
            marginBottom: "clamp(12px, 2vw, 20px)",
          }}>
            Leading Property Management &<br />Rental Services in Jaipur
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(13px, 1.5vw, 15px)",
            color: "#8a8580",
            lineHeight: 1.7,
            maxWidth: "min(560px, 90%)",
            margin: 0,
          }}>
            As a leading property management and rental service provider in Jaipur, Black Tie Hospitality manages and operates a diverse portfolio of hotels, studio apartments, villas, BNBs, and residential properties with a focus on operational excellence, guest satisfaction, and long-term value creation.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#111827", padding: 0 }}>
        <div
          className="stats-bar"
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 2rem)",
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(STATS.length, 4)}, 1fr)`,
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(8px, 1.5vw, 12px)",
                padding: "clamp(16px, 2.5vw, 1.25rem) clamp(12px, 2vw, 1.5rem)",
                borderRight: i < STATS.length - 1
                  ? "1px solid rgba(255,255,255,0.07)"
                  : "none",
              }}
            >
              <div style={{
                width: "clamp(32px, 4vw, 40px)",
                height: "clamp(32px, 4vw, 40px)",
                borderRadius: "50%",
                border: "1px solid rgba(201,168,76,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <img
                  src={stat.icon}
                  alt={stat.label}
                  style={{
                    width: "clamp(14px, 2vw, 18px)",
                    height: "clamp(14px, 2vw, 18px)",
                    objectFit: "contain",
                    filter: "invert(78%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                  }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 700,
                  color: "#F5F0E8",
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(9px, 1.1vw, 11px)",
                  color: "rgba(245,240,232)",
                  marginTop: "2px",
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ background: "#0D1117", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 2rem)",
          boxSizing: "border-box",
        }}>
          <div className="story-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 5vw, 60px)",
            alignItems: "center",
          }}>
            {/* Text */}
            <div>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(0.7rem, 1.3vw, 0.85rem)",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C9A84C",
                marginBottom: "clamp(10px, 1.5vw, 16px)",
              }}>
                OUR STORY
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
                color: "#F5F0E8",
                fontWeight: 600,
                lineHeight: 1.25,
                marginBottom: "clamp(14px, 2vw, 24px)",
              }}>
                A Decade of Excellence in Property Management
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(13px, 1.3vw, 14px)",
                color: "#8a8580",
                lineHeight: 1.8,
                marginBottom: "clamp(12px, 2vw, 20px)",
              }}>
                Black Tie Hospitality was born from a simple belief: every property owner deserves
                exceptional management that maximizes returns while minimizing stress.
              </p>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(13px, 1.3vw, 14px)",
                color: "#8a8580",
                lineHeight: 1.8,
                marginBottom: "clamp(20px, 3vw, 32px)",
              }}>
                Founded in 2014 in Jaipur by Aditya Sharma, we started with a
                single hotel and a vision to transform India's property management landscape.
                Today, we manage 500+ rooms across multiple cities and continue to grow.
              </p>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#C9A84C",
                  color: "#0D1117",
                  padding: "clamp(10px, 1.5vw, 12px) clamp(20px, 3vw, 28px)",
                  borderRadius: "4px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(11px, 1.2vw, 13px)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                Work With Us
              </Link>
            </div>

            {/* Images */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(8px, 1.5vw, 12px)",
            }}>
              <img
                src={team1}
                alt="Our story"
                style={{ borderRadius: "8px", width: "100%", objectFit: "cover" }}
              />
              <img
                src={ceo}
                alt="Our team"
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  objectFit: "cover",
                  marginTop: "clamp(12px, 3vw, 24px)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: "#111827", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 2rem)",
          boxSizing: "border-box",
        }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(28px, 4vw, 48px)" }}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(0.7rem, 1.3vw, 0.85rem)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "8px",
            }}>
              OUR VALUES
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
              color: "#F5F0E8",
              fontWeight: 600,
            }}>
              What Drives Everything We Do
            </h2>
          </div>

          <div className="values-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(12px, 2vw, 24px)",
          }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 24px)",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  width: "clamp(36px, 4vw, 48px)",
                  height: "clamp(36px, 4vw, 48px)",
                  borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  margin: "0 auto clamp(12px, 2vw, 20px)",
                }}>
                  <img
                    src={v.icon}
                    alt={v.title}
                    style={{
                      width: "clamp(14px, 1.8vw, 18px)",
                      height: "clamp(14px, 1.8vw, 18px)",
                      objectFit: "contain",
                      filter: "invert(67%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                    }}
                  />
                </div>
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(11px, 1.2vw, 13px)",
                  color: "#F5F0E8",
                  fontWeight: 600,
                  marginBottom: "clamp(6px, 1vw, 10px)",
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(12px, 1.2vw, 13px)",
                  color: "#6b6560",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: "#0D1117", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 2rem)",
          boxSizing: "border-box",
        }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 56px)" }}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(0.7rem, 1.3vw, 0.85rem)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "8px",
            }}>
              OUR JOURNEY
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
              color: "#F5F0E8",
              fontWeight: 600,
            }}>
              Milestones That Define Us
            </h2>
          </div>

          {/* Desktop timeline (zigzag) */}
          <div className="timeline-desktop" style={{ position: "relative" }}>
            {/* Central line */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)",
              transform: "translateX(-50%)",
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 40px)" }}>
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
                    left: "50%",
                    top: "16px",
                    transform: "translate(-50%, -50%)",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#C9A84C",
                    border: "3px solid #0D1117",
                    boxShadow: "0 0 0 2px rgba(201,168,76,0.3)",
                    zIndex: 1,
                  }} />

                  <div style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    padding: "clamp(14px, 2vw, 20px) clamp(16px, 2.5vw, 24px)",
                    maxWidth: "420px",
                    marginLeft: i % 2 === 0 ? "0" : "clamp(14px, 3vw, 24px)",
                    marginRight: i % 2 === 0 ? "clamp(14px, 3vw, 24px)" : "0",
                    width: "100%",
                    boxSizing: "border-box",
                  }}>
                    <span style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "clamp(10px, 1.2vw, 12px)",
                      color: "#C9A84C",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "6px",
                    }}>
                      {m.year}
                    </span>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "clamp(13px, 1.3vw, 14px)",
                      color: "#F5F0E8",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}>
                      {m.title}
                    </h3>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "clamp(12px, 1.2vw, 13px)",
                      color: "#6b6560",
                      lineHeight: 1.5,
                      margin: 0,
                    }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline (vertical left-aligned) */}
          <div className="timeline-mobile" style={{ display: "none", position: "relative", paddingLeft: "28px" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute",
              left: "5px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)",
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {milestones.map((m) => (
                <div key={m.year} style={{ position: "relative" }}>
                  {/* Dot */}
                  <div style={{
                    position: "absolute",
                    left: "-28px",
                    top: "16px",
                    transform: "translateY(-50%)",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#C9A84C",
                    border: "2px solid #0D1117",
                    boxShadow: "0 0 0 2px rgba(201,168,76,0.3)",
                  }} />
                  <div style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    padding: "16px 18px",
                  }}>
                    <span style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "11px",
                      color: "#C9A84C",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "4px",
                    }}>
                      {m.year}
                    </span>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "13px",
                      color: "#F5F0E8",
                      fontWeight: 600,
                      marginBottom: "4px",
                    }}>
                      {m.title}
                    </h3>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "12px",
                      color: "#6b6560",
                      lineHeight: 1.5,
                      margin: 0,
                    }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ background: "#111827", padding: "clamp(48px, 7vw, 80px) 0" }}>
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 2rem)",
          boxSizing: "border-box",
        }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(28px, 4vw, 48px)" }}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(0.7rem, 1.3vw, 0.85rem)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "8px",
            }}>
              LEADERSHIP TEAM
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
              color: "#F5F0E8",
              fontWeight: 600,
            }}>
              The People Behind Black Tie
            </h2>
          </div>

          <div className="team-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(14px, 2.5vw, 28px)",
          }}>
            {teamMembers.map((member) => (
              <div
                key={member.name}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 24px)",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: "clamp(60px, 8vw, 80px)",
                    height: "clamp(60px, 8vw, 80px)",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0 auto clamp(10px, 2vw, 16px)",
                    border: `2px solid ${member.color}44`,
                    display: "block",
                  }}
                />
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(12px, 1.2vw, 14px)",
                  color: "#F5F0E8",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(11px, 1.1vw, 12px)",
                  color: member.color,
                  margin: 0,
                }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />
      <TestimonialsSection />
      <CTABanner />

      <style>{`
        /* ── Stats bar: 2-col on small screens ── */
        @media (max-width: 640px) {
          .stats-bar {
            grid-template-columns: 1fr 1fr !important;
          }
          .stats-bar > div:nth-child(even) {
            border-right: none !important;
          }
          .stats-bar > div:nth-child(odd):not(:last-child) {
            border-right: 1px solid rgba(255,255,255,0.07) !important;
          }
          /* add top border to bottom row */
          .stats-bar > div:nth-child(n+3) {
            border-top: 1px solid rgba(255,255,255,0.07);
          }
        }

        /* ── Story grid: single column ── */
        @media (max-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* ── Values: 2 cols on tablet, 1 on phone ── */
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .values-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Timeline swap ── */
        @media (max-width: 640px) {
          .timeline-desktop { display: none !important; }
          .timeline-mobile   { display: block !important; }
        }

        /* ── Team: 2 cols on tablet, 1 on small ── */
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Wide screen boost ── */
        @media (min-width: 1440px) {
          .values-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .team-grid   { grid-template-columns: repeat(3, 1fr) !important; }
        }

        /* ── Touch devices: no hover lift ── */
        @media (hover: none) {
          div[style*="translateY(-4px)"] { transform: none !important; }
        }
      `}</style>
    </>
  );
}