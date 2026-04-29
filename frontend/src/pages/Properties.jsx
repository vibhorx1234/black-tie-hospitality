import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CTABanner from "../components/home/CTABanner";
import { HOTELS, APARTMENTS, ALL_PROPERTIES } from "../data/properties";
import { STATS } from "../data/clients";

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

// ── Modal arrow style helper ───────────────────────────────────────────────────
function modalArrow(side) {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "10px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "rgba(13,17,23,0.6)",
    border: "1px solid rgba(201,168,76,0.3)",
    color: "#C9A84C",
    cursor: "pointer",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  };
}

// ── Property Modal ─────────────────────────────────────────────────────────────
function PropertyModal({ selected, onClose, onPrev, onNext }) {
  const width = useWindowWidth();
  const isMobile = width < 768;

  // Lock body scroll when open
  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  if (!selected) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(6px)",
        display: "flex",
        justifyContent: "center",
        alignItems: isMobile ? "flex-end" : "center",
        zIndex: 1000,
        padding: isMobile ? 0 : "20px",
        overflowY: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "#111827",
          maxWidth: isMobile ? "100%" : "650px",
          width: "100%",
          borderRadius: isMobile ? "16px 16px 0 0" : "12px",
          overflow: "hidden",
          maxHeight: isMobile ? "92vh" : "90vh",
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        {/* Drag handle — mobile only */}
        {isMobile && (
          <div style={{
            position: "absolute",
            top: 10, left: "50%",
            transform: "translateX(-50%)",
            width: 36, height: 4,
            borderRadius: 2,
            background: "rgba(255,255,255,0.15)",
            zIndex: 2,
          }} />
        )}

        {/* IMAGE */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <img
            src={selected.image}
            alt={selected.name}
            style={{
              width: "100%",
              aspectRatio: isMobile ? "4/3" : "16/9",
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Image gradient */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "40%",
            background: "linear-gradient(transparent, rgba(17,24,39,0.9))",
            pointerEvents: "none",
          }} />

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 14, right: 14,
              width: 32, height: 32, borderRadius: "50%",
              background: "rgba(13,17,23,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff", fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(4px)", lineHeight: 1, zIndex: 10,
            }}
          >
            ×
          </button>

          {/* Nav arrows */}
          <button onClick={onPrev} style={modalArrow("left")}>‹</button>
          <button onClick={onNext} style={modalArrow("right")}>›</button>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div style={{ overflowY: "auto", flexGrow: 1, WebkitOverflowScrolling: "touch" }}>
          <div style={{ padding: isMobile ? "20px 18px 32px" : "24px 28px 28px", color: "#F5F0E8" }}>

            {/* Eyebrow */}
            <p style={{
              fontFamily: "'Cinzel', serif", fontSize: "0.6rem",
              letterSpacing: "0.25em", color: "#C9A84C",
              textTransform: "uppercase", margin: "0 0 8px 0",
            }}>
              {selected.type} · {selected.category}
            </p>

            {/* Title */}
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: isMobile ? "1.1rem" : "1.35rem",
              fontWeight: 600, color: "#F5F0E8",
              margin: "0 0 6px 0", lineHeight: 1.3,
            }}>
              {selected.name}
            </h2>

            {/* Location */}
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem",
              color: "#C9A84C", margin: "0 0 14px 0", letterSpacing: "0.05em",
            }}>
              📍 {selected.location}
            </p>

            {/* Divider */}
            <div style={{ width: 36, height: 1, background: "rgba(201,168,76,0.4)", marginBottom: 14 }} />

            {/* Description */}
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: isMobile ? "0.78rem" : "0.8rem",
              color: "#8a8580", lineHeight: 1.75, margin: "0 0 16px 0",
            }}>
              {selected.description}
            </p>

            {/* Stats row */}
            <div style={{
              display: "flex", gap: isMobile ? 16 : 20,
              marginBottom: 16, padding: "12px 0",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              flexWrap: "wrap",
            }}>
              {selected.rooms && (
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#F5F0E8", margin: 0 }}>{selected.rooms}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Rooms</p>
                </div>
              )}
              {selected.units && (
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#F5F0E8", margin: 0 }}>{selected.units}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Units</p>
                </div>
              )}
              <div>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#C9A84C", margin: 0 }}>{selected.rating} ★</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Rating</p>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem",
                letterSpacing: "0.18em", color: "#C9A84C",
                textTransform: "uppercase", marginBottom: 10, marginTop: 0,
              }}>
                Amenities
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {selected.amenities.map((a, i) => (
                  <span key={i} style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: isMobile ? "0.68rem" : "0.7rem",
                    color: "#8a8580",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "4px", padding: "4px 10px",
                  }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Property Card ──────────────────────────────────────────────────────────────
function PropertyCard({ item, index, onClick, isMobile }) {
  const [hovered, setHovered] = useState(false);

  // "And many more" placeholder card
  if (!item.image) {
    return (
      <div style={{
        background: "#111827",
        border: "1px solid rgba(201,168,76,0.2)",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "default",
      }}>
        <div style={{
          background: "#0D1117", aspectRatio: "3/2",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "8px",
        }}>
          <span style={{ fontSize: isMobile ? "24px" : "32px" }}>🏨</span>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", color: "#C9A84C" }}>+More</span>
        </div>
        <div style={{ padding: isMobile ? "10px" : "12px" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: isMobile ? "11px" : "12px", color: "#F5F0E8", fontWeight: 600, margin: "0 0 2px" }}>{item.name}</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: isMobile ? "10px" : "11px", color: "#C9A84C", margin: 0 }}>📍 {item.location}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick && onClick(item)}
      style={{
        background: "#111827",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.35)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.5)" : "none",
        transition: "all 0.3s ease",
        position: "relative",
      }}
    >
      {/* Number badge */}
      <div style={{
        position: "absolute", top: "10px", left: "10px", zIndex: 2,
        background: "#C9A84C", color: "#0D1117",
        width: isMobile ? "20px" : "24px",
        height: isMobile ? "20px" : "24px",
        borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Cinzel', serif",
        fontSize: isMobile ? "9px" : "10px",
        fontWeight: 700,
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Hover plus — desktop only */}
      {!isMobile && (
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "36px", height: "36px", borderRadius: "50%",
          border: "1px solid #C9A84C", color: "#C9A84C",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          background: "rgba(13,17,23,0.3)", backdropFilter: "blur(4px)",
          zIndex: 3, fontSize: "18px",
        }}>+</div>
      )}

      <div style={{ aspectRatio: "3/2", overflow: "hidden" }}>
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
      </div>

      <div style={{ padding: isMobile ? "10px 10px" : "12px 14px" }}>
        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: isMobile ? "11px" : "12px",
          color: "#F5F0E8", fontWeight: 600,
          marginBottom: "4px", marginTop: 0,
          lineHeight: 1.3,
          // Prevent very long names from overflowing
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}>
          {item.name}
        </p>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: isMobile ? "10px" : "11px",
          color: "#C9A84C", margin: 0,
          display: "flex", alignItems: "center", gap: "4px",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>
          <span style={{ fontSize: "10px" }}>📍</span> {item.location}
        </p>
      </div>
    </div>
  );
}

// ── Section Header ─────────────────────────────────────────────────────────────
function SectionHeader({ title, subtitle, isMobile }) {
  return (
    <div style={{ marginBottom: isMobile ? "16px" : "8px" }}>
      <h2 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: isMobile ? "clamp(16px, 4vw, 22px)" : "22px",
        color: "#0D1117", fontWeight: 700, margin: 0,
      }}>
        {title}
      </h2>
      <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#e8c97a)", margin: "8px 0" }} />
      <p style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: isMobile ? "12px" : "13px",
        color: "#6b6560", margin: 0,
      }}>
        {subtitle}
      </p>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function Properties() {
  const [selected, setSelected] = useState(null);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isSmall = width < 480;

  const mod = (n, m) => ((n % m) + m) % m;

  const openModal = (item) => setSelected(item);
  const closeModal = () => setSelected(null);

  const nextModal = () => {
    if (!selected) return;
    const idx = ALL_PROPERTIES.findIndex((p) => p.id === selected.id);
    setSelected(ALL_PROPERTIES[mod(idx + 1, ALL_PROPERTIES.length)]);
  };

  const prevModal = () => {
    if (!selected) return;
    const idx = ALL_PROPERTIES.findIndex((p) => p.id === selected.id);
    setSelected(ALL_PROPERTIES[mod(idx - 1, ALL_PROPERTIES.length)]);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        paddingTop: "72px",
        minHeight: "clamp(280px, 40vw, 380px)",
        background: "#0D1117",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://picsum.photos/seed/prop-hero/1400/600)",
          backgroundSize: "cover", backgroundPosition: "center", opacity: 0.25,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #0D1117 30%, transparent 80%)",
        }} />

        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "clamp(36px, 6vw, 60px) clamp(1rem, 4vw, 2rem) clamp(36px, 5vw, 52px)",
          position: "relative", zIndex: 1, width: "100%", boxSizing: "border-box",
        }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
            fontWeight: 600, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px",
          }}>
            OUR PROPERTIES
          </p>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.6rem, 4vw, 3.2rem)",
            fontWeight: 700, color: "#F5F0E8",
            lineHeight: 1.15, marginBottom: "16px",
          }}>
            Spaces That Inspire.<br />Experiences That Last.
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(13px, 2vw, 15px)",
            color: "#8a8580", lineHeight: 1.7,
            maxWidth: "500px", marginBottom: "clamp(20px, 4vw, 36px)",
          }}>
            A curated portfolio of premium hotels and studio apartments across Jaipur and nearby cities, designed for comfort, convenience, and community living.
          </p>

          {/* Stats */}
          <div style={{
            display: "flex",
            gap: isMobile ? "20px" : "40px",
            flexWrap: "wrap",
          }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: isMobile ? "30px" : "36px",
                  height: isMobile ? "30px" : "36px",
                  border: "1.5px solid rgba(201,168,76,0.4)",
                  borderRadius: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <img
                    src={s.icon} alt={s.label}
                    style={{
                      width: isMobile ? "15px" : "18px",
                      height: isMobile ? "15px" : "18px",
                      objectFit: "contain",
                      filter: "invert(78%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                    }}
                  />
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: isMobile ? "13px" : "15px",
                    color: "#F5F0E8", fontWeight: 700, margin: 0,
                  }}>
                    {s.value}
                  </p>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: isMobile ? "10px" : "11px",
                    color: "#6b6560", margin: 0,
                  }}>
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOTELS + STUDIO APARTMENTS — single unified section ── */}
      {/* 
        FIX: Both hotel and apartments sections were both background: #F5F0E8
        with separate padding. On mobile the padding gap between them created 
        a visible line/gap. Merged into ONE section with a single bg + padding,
        with an internal divider between the two grids instead.
      */}
      <section style={{ background: "#F5F0E8", padding: "clamp(40px, 6vw, 72px) 0 clamp(40px, 6vw, 72px)" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
          boxSizing: "border-box",
        }}>

          {/* ── HOTELS ── */}
          <SectionHeader
            title="HOTELS"
            subtitle="Premium stays for every kind of traveler."
            isMobile={isMobile}
          />
          <div
            className="prop-grid"
            style={{ marginTop: isMobile ? "16px" : "20px", display: "grid", gap: isMobile ? "10px" : "12px" }}
          >
            {HOTELS.map((h, i) => (
              <PropertyCard key={h.id} item={h} index={i} onClick={openModal} isMobile={isMobile} />
            ))}
          </div>

          {/* ── Internal divider — replaces the buggy gap between two sections ── */}
          <div style={{
            margin: isMobile ? "32px 0" : "52px 0",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
          }} />

          {/* ── STUDIO APARTMENTS ── */}
          <SectionHeader
            title="STUDIO APARTMENTS"
            subtitle="Modern living spaces for professionals, students & long-term stays."
            isMobile={isMobile}
          />
          <div
            className="prop-grid"
            style={{ marginTop: isMobile ? "16px" : "20px", display: "grid", gap: isMobile ? "10px" : "12px" }}
          >
            {APARTMENTS.map((a, i) => (
              <PropertyCard key={a.id} item={a} index={i} onClick={openModal} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LIST YOUR PROPERTY CTA ── */}
      <section style={{ padding: "clamp(36px, 6vw, 56px) 0", background: "#0D1117" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
          boxSizing: "border-box",
        }}>
          <div style={{
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "12px",
            padding: isMobile ? "28px 20px" : "clamp(28px, 5vw, 48px) clamp(24px, 5vw, 56px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            backgroundImage: "url(https://picsum.photos/seed/prop-cta/1200/200)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(13,17,23,0.92), rgba(13,17,23,0.7))",
            }} />
            <div style={{ position: "relative", zIndex: 1, flex: 1, minWidth: 0 }}>
              <h2 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
                color: "#F5F0E8", fontWeight: 700,
                marginBottom: "8px", marginTop: 0,
              }}>
                Don't See the Property You're Looking For?
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: isMobile ? "13px" : "14px",
                color: "#8a8580", lineHeight: 1.6, margin: 0,
              }}>
                We're always onboarding new properties in prime locations.
                Let's connect and explore opportunities together.
              </p>
            </div>
            <Link
              to="/contact"
              style={{
                position: "relative", zIndex: 1,
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#C9A84C", color: "#0D1117",
                padding: isMobile ? "12px 20px" : "14px 28px",
                borderRadius: "4px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: isMobile ? "12px" : "13px",
                fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.2s",
                whiteSpace: "nowrap", flexShrink: 0,
                width: isMobile ? "100%" : "auto",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              List Your Property With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROPERTY DETAIL MODAL ── */}
      <PropertyModal
        selected={selected}
        onClose={closeModal}
        onPrev={prevModal}
        onNext={nextModal}
      />

      <style>{`
        /* ── Property grid: 5 cols desktop → 4 → 3 → 2 → 1 ── */
        .prop-grid {
          grid-template-columns: repeat(5, 1fr);
        }
        @media (max-width: 1100px) {
          .prop-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .prop-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .prop-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 340px) {
          .prop-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

