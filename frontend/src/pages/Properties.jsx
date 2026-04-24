import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CTABanner from "../components/home/CTABanner";
import { HOTELS, APARTMENTS, ALL_PROPERTIES } from "../data/properties";
import { STATS } from "../data/clients";

// Modal arrow style helper
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

function PropertyModal({ selected, onClose, onPrev, onNext }) {
  if (!selected) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "#111827",
          maxWidth: "650px",
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* IMAGE */}
        <img
          src={selected.image}
          alt={selected.name}
          style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(13,17,23,0.7)",
            border: "1px solid rgba(201,168,76,0.3)",
            color: "#C9A84C",
            cursor: "pointer",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          ×
        </button>

        {/* Carousel arrows on image */}
        <button onClick={onPrev} style={modalArrow("left")}>‹</button>
        <button onClick={onNext} style={modalArrow("right")}>›</button>

        {/* CONTENT */}
        <div style={{ padding: "24px 28px 28px", color: "#F5F0E8" }}>

          {/* EYEBROW */}
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            color: "#C9A84C",
            textTransform: "uppercase",
            margin: "0 0 8px 0",
          }}>
            {selected.type} · {selected.category}
          </p>

          {/* TITLE */}
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "1.35rem",
            fontWeight: 600,
            color: "#F5F0E8",
            margin: "0 0 6px 0",
            lineHeight: 1.3,
          }}>
            {selected.name}
          </h2>

          {/* LOCATION */}
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.75rem",
            color: "#C9A84C",
            margin: "0 0 14px 0",
            letterSpacing: "0.05em",
          }}>
            📍 {selected.location}
          </p>

          {/* DIVIDER */}
          <div style={{
            width: "36px",
            height: "1px",
            background: "rgba(201,168,76,0.4)",
            marginBottom: "14px",
          }} />

          {/* DESCRIPTION */}
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.8rem",
            color: "#8a8580",
            lineHeight: 1.75,
            margin: "0 0 16px 0",
          }}>
            {selected.description}
          </p>

          {/* STATS ROW */}
          <div style={{
            display: "flex",
            gap: "20px",
            marginBottom: "16px",
            padding: "12px 0",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            {selected.rooms && (
              <div>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#F5F0E8", margin: 0 }}>{selected.rooms}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Rooms</p>
              </div>
            )}
            {selected.units && (
              <div>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#F5F0E8", margin: 0 }}>{selected.units}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Units</p>
              </div>
            )}
            <div>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#C9A84C", margin: 0 }}>{selected.rating} ★</p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Rating</p>
            </div>
          </div>

          {/* AMENITIES */}
          <div>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              color: "#C9A84C",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}>
              Amenities
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {selected.amenities.map((a, i) => (
                <span key={i} style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.7rem",
                  color: "#8a8580",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "4px",
                  padding: "4px 10px",
                }}>
                  {a}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function PropertyCard({ item, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  // "And many more" placeholder card
  if (!item.image) {
    return (
      <div
        style={{
          background: "#111827",
          border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "8px",
          overflow: "hidden",
          cursor: "default",
        }}
      >
        <div style={{
          background: "#0D1117",
          aspectRatio: "3/2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}>
          <span style={{ fontSize: "32px" }}>🏨</span>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", color: "#C9A84C" }}>+More</span>
        </div>
        <div style={{ padding: "12px" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#F5F0E8", fontWeight: 600 }}>{item.name}</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#C9A84C" }}>📍 {item.location}</p>
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
        width: "24px", height: "24px", borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Cinzel', serif", fontSize: "10px", fontWeight: 700,
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Hover plus icon */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "36px", height: "36px", borderRadius: "50%",
        border: "1px solid #C9A84C", color: "#C9A84C",
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
        background: "rgba(13,17,23,0.3)",
        backdropFilter: "blur(4px)",
        zIndex: 3,
        fontSize: "18px",
      }}>+</div>

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
      <div style={{ padding: "12px 14px" }}>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", color: "#F5F0E8", fontWeight: 600, marginBottom: "4px" }}>{item.name}</p>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#C9A84C", display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ fontSize: "10px" }}>📍</span> {item.location}
        </p>
      </div>
    </div>
  );
}

export default function Properties() {
  const [selected, setSelected] = useState(null);

  const mod = (n, m) => ((n % m) + m) % m;

  const openModal = (item) => {
    setSelected(item);
  };

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
      {/* Hero */}
      <section style={{
        paddingTop: "72px",
        minHeight: "380px",
        background: "#0D1117",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}>
        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://picsum.photos/seed/prop-hero/1400/600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #0D1117 30%, transparent 80%)",
        }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 2rem 52px", position: "relative", zIndex: 1, width: "100%" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
            OUR PROPERTIES
          </p>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#F5F0E8", lineHeight: 1.15, marginBottom: "20px" }}>
            Spaces That Inspire.<br />Experiences That Last.
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", color: "#8a8580", lineHeight: 1.7, maxWidth: "500px", marginBottom: "36px" }}>
            A curated portfolio of premium hotels and studio apartments across Jaipur and nearby cities, designed for comfort, convenience, and community living.
          </p>
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                {/* ICON */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1.5px solid rgba(201,168,76,0.4)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={s.icon}
                    alt={s.label}
                    style={{
                      width: "18px",
                      height: "18px",
                      objectFit: "contain",
                      filter: "invert(78%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                    }}
                  />
                </div>

                {/* TEXT */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "15px",
                      color: "#F5F0E8",
                      fontWeight: 700,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "11px",
                      color: "#6b6560",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section style={{ background: "#F5F0E8", padding: "72px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "8px" }}>
            <div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "22px", color: "#0D1117", fontWeight: 700 }}>HOTELS</h2>
              <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#e8c97a)", margin: "8px 0" }} />
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#6b6560" }}>Premium stays for every kind of traveler.</p>
            </div>
          </div>
          <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }} className="hotels-grid">
            {HOTELS.map((h, i) => (
              <PropertyCard key={h.id} item={h} index={i} onClick={openModal} />
            ))}
          </div>
        </div>
      </section>

      {/* Studio Apartments */}
      <section style={{ background: "#F5F0E8", padding: "0 0 72px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "8px" }}>
            <div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "22px", color: "#0D1117", fontWeight: 700 }}>STUDIO APARTMENTS</h2>
              <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#e8c97a)", margin: "8px 0" }} />
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#6b6560" }}>Modern living spaces for professionals, students & long-term stays.</p>
            </div>
          </div>
          <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }} className="apts-grid">
            {APARTMENTS.map((a, i) => (
              <PropertyCard key={a.id} item={a} index={i} onClick={openModal} />
            ))}
          </div>
        </div>
      </section>

      {/* List your property CTA */}
      <section style={{ padding: "56px 0", background: "#0D1117" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.05))",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "12px",
            padding: "48px 56px",
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
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", color: "#F5F0E8", fontWeight: 700, marginBottom: "8px" }}>
                Don't See the Property You're Looking For?
              </h2>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#8a8580", lineHeight: 1.6 }}>
                We're always onboarding new properties in prime locations.<br />Let's connect and explore opportunities together.
              </p>
            </div>
            <Link
              to="/contact"
              style={{
                position: "relative", zIndex: 1,
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#C9A84C", color: "#0D1117",
                padding: "14px 28px", borderRadius: "4px",
                fontFamily: "'Outfit', sans-serif", fontSize: "13px",
                fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.2s",
                whiteSpace: "nowrap", flexShrink: 0,
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              List Your Property With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Property Detail Modal */}
      <PropertyModal
        selected={selected}
        onClose={closeModal}
        onPrev={prevModal}
        onNext={nextModal}
      />

      <style>{`
        @media (max-width: 1200px) {
          .hotels-grid { grid-template-columns: repeat(5, 1fr) !important; }
          .hotels-grid-2 { grid-template-columns: repeat(5, 1fr) !important; }
          .apts-grid { grid-template-columns: repeat(5, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .hotels-grid, .hotels-grid-2, .apts-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .hotels-grid, .hotels-grid-2, .apts-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}