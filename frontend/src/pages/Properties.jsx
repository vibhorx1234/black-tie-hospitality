import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CTABanner from "../components/home/CTABanner";

const hotels = [
  { id: 1, name: "Tanya Resorts", location: "Jaipur", img: "https://picsum.photos/seed/h1/300/220" },
  { id: 2, name: "The Orion", location: "Jaipur", img: "https://picsum.photos/seed/h2/300/220" },
  { id: 3, name: "The Queen's", location: "Jaipur", img: "https://picsum.photos/seed/h3/300/220" },
  { id: 4, name: "Reeve Inn", location: "Jaipur", img: "https://picsum.photos/seed/h4/300/220" },
  { id: 5, name: "Shivir", location: "Jaipur", img: "https://picsum.photos/seed/h5/300/220" },
  { id: 6, name: "Mark Inn", location: "Jaipur", img: "https://picsum.photos/seed/h6/300/220" },
  { id: 7, name: "2 Glassy", location: "Jaipur", img: "https://picsum.photos/seed/h7/300/220" },
  { id: 8, name: "Crown Plaza", location: "Jaipur", img: "https://picsum.photos/seed/h8/300/220" },
  { id: 9, name: "Devensh", location: "Jaipur", img: "https://picsum.photos/seed/h9/300/220" },
  { id: 10, name: "Yatrik", location: "Jaipur", img: "https://picsum.photos/seed/h10/300/220" },
  { id: 11, name: "Jaipur One", location: "Jaipur", img: "https://picsum.photos/seed/h11/300/220" },
  { id: 12, name: "Carrots and Cabbages", location: "Jaipur", img: "https://picsum.photos/seed/h12/300/220" },
  { id: 13, name: "Joker Bar", location: "Jaipur", img: "https://picsum.photos/seed/h13/300/220" },
  { id: 14, name: "Guman Heritage", location: "Jaipur", img: "https://picsum.photos/seed/h14/300/220" },
  { id: 15, name: "And many more hotels...", location: "Jaipur & Nearby", img: null },
];

const apartments = [
  { id: 1, name: "Grand Anukampa", location: "Jaipur", img: "https://picsum.photos/seed/a1/300/220" },
  { id: 2, name: "Avenue 1st", location: "Jaipur", img: "https://picsum.photos/seed/a2/300/220" },
  { id: 3, name: "Solitaire Suites", location: "Jaipur", img: "https://picsum.photos/seed/a3/300/220" },
  { id: 4, name: "Manhattan Rivverra", location: "Jaipur", img: "https://picsum.photos/seed/a4/300/220" },
  { id: 5, name: "Coral Suits", location: "Jaipur", img: "https://picsum.photos/seed/a5/300/220" },
  { id: 6, name: "Redwood's Magnus", location: "Jaipur", img: "https://picsum.photos/seed/a6/300/220" },
  { id: 7, name: "Vega Apartments", location: "Jaipur", img: "https://picsum.photos/seed/a7/300/220" },
  { id: 8, name: "Century 21st Elite", location: "Jaipur", img: "https://picsum.photos/seed/a8/300/220" },
  { id: 9, name: "Balaji Tower", location: "Jaipur", img: "https://picsum.photos/seed/a9/300/220" },
];

const locations = [
  { name: "Jaipur", count: "15+", icon: "🕌" },
  { name: "Sikar", count: "2+", icon: "🏛️" },
  { name: "Kota", count: "2+", icon: "🌉" },
  { name: "Ayodhya", count: "1+", icon: "⛩️" },
  { name: "Mehndipur Balaji", count: "1+", icon: "🛕" },
  { name: "Khatushyam Ji", count: "1+", icon: "🏯" },
];

const stats = [
  { value: "25+", label: "Properties" },
  { value: "Jaipur & Nearby", label: "Key Locations" },
  { value: "500+", label: "Rooms Managed" },
];

function PropertyCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  if (!item.img) {
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

      <div style={{ aspectRatio: "3/2", overflow: "hidden" }}>
        <img
          src={item.img}
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
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
            OUR PROPERTIES
          </p>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#F5F0E8", lineHeight: 1.15, marginBottom: "20px" }}>
            Spaces That Inspire.<br />Experiences That Last.
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", color: "#8a8580", lineHeight: 1.7, maxWidth: "500px", marginBottom: "36px" }}>
            A curated portfolio of premium hotels and studio apartments across Jaipur and nearby cities, designed for comfort, convenience, and community living.
          </p>

          {/* Stats inline */}
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "36px", height: "36px",
                  border: "1.5px solid rgba(201,168,76,0.4)",
                  borderRadius: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#C9A84C", fontSize: "14px",
                }}>🏢</div>
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "15px", color: "#F5F0E8", fontWeight: 700 }}>{s.value}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#6b6560" }}>{s.label}</p>
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
            <button style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#0D1117",
              background: "transparent", border: "1px solid rgba(0,0,0,0.2)",
              padding: "8px 18px", borderRadius: "4px", cursor: "pointer",
              display: "flex", alignItems: "center", gap: "6px",
              transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.color = "#C9A84C"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)"; e.currentTarget.style.color = "#0D1117"; }}
            >
              View All Hotels →
            </button>
          </div>

          <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "12px" }} className="hotels-grid">
            {hotels.slice(0, 8).map((h, i) => <PropertyCard key={h.id} item={h} index={i} />)}
          </div>
          <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "12px" }} className="hotels-grid-2">
            {hotels.slice(8).map((h, i) => <PropertyCard key={h.id} item={h} index={i + 8} />)}
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
            <button style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#0D1117",
              background: "transparent", border: "1px solid rgba(0,0,0,0.2)",
              padding: "8px 18px", borderRadius: "4px", cursor: "pointer",
              display: "flex", alignItems: "center", gap: "6px",
              transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.color = "#C9A84C"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)"; e.currentTarget.style.color = "#0D1117"; }}
            >
              View All Apartments →
            </button>
          </div>
          <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(9, 1fr)", gap: "12px" }} className="apts-grid">
            {apartments.map((a, i) => <PropertyCard key={a.id} item={a} index={i} />)}
          </div>
        </div>
      </section>

      {/* Key Locations */}
      <section style={{ background: "#111827", padding: "72px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              OUR PROPERTIES ACROSS KEY LOCATIONS
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "0", flexWrap: "wrap" }}>
            {locations.map((loc, i) => (
              <div
                key={loc.name}
                style={{
                  textAlign: "center",
                  padding: "24px 32px",
                  borderRight: i < locations.length - 1 ? "1px solid rgba(201,168,76,0.15)" : "none",
                  flex: "0 0 auto",
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{loc.icon}</div>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "14px", color: "#F5F0E8", fontWeight: 600, marginBottom: "4px" }}>{loc.name}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#C9A84C" }}>{loc.count} Properties</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#6b6560", textAlign: "center", marginTop: "32px", maxWidth: "700px", margin: "32px auto 0", lineHeight: 1.7 }}>
            Our properties are spread across key locations in Jaipur and nearby cities, catering to medical tourists, students, corporates, and leisure travelers with well-maintained, fully-equipped accommodations.
          </p>
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