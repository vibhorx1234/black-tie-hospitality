import React from "react";

const founders = [
  {
    name: "Ankit Jain",
    role: "Co-Founder & CEO",
    color: "#C9A84C",
    img: "https://picsum.photos/seed/founder1/200/200",
    bio: "Visionary leader with 12+ years of experience in real estate and hospitality management.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rahul Sharma",
    role: "Co-Founder & COO",
    color: "#4caf82",
    img: "https://picsum.photos/seed/founder2/200/200",
    bio: "Operations expert ensuring seamless management and exceptional service delivery.",
    linkedin: "https://linkedin.com",
  },
];

export default function FoundersSection() {
  return (
    <section style={{ background: "#111827", padding: "90px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Label */}
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
          OUR FOUNDERS
        </p>

        {/* Layout: founder | quote | founder */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "40px", alignItems: "center" }} className="founders-grid">
          {/* Left Founder */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img
                src={founders[0].img}
                alt={founders[0].name}
                style={{ width: "90px", height: "90px", borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(201,168,76,0.3)" }}
              />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "16px", color: "#F5F0E8", fontWeight: 600, marginBottom: "4px" }}>{founders[0].name}</h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: founders[0].color, marginBottom: "10px", letterSpacing: "0.04em" }}>{founders[0].role}</p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", lineHeight: 1.6, marginBottom: "14px", maxWidth: "260px" }}>{founders[0].bio}</p>
              <a
                href={founders[0].linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "30px", height: "30px", borderRadius: "6px",
                  background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)",
                  color: "#C9A84C", fontSize: "11px", fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(201,168,76,0.2)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(201,168,76,0.1)"}
              >in</a>
            </div>
          </div>

          {/* Center Quote */}
          <div style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "12px",
            padding: "36px 40px",
            maxWidth: "340px",
            textAlign: "center",
            position: "relative",
          }}>
            <div style={{ fontSize: "48px", color: "rgba(201,168,76,0.3)", fontFamily: "Georgia, serif", lineHeight: 0.8, marginBottom: "16px" }}>"</div>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "16px", color: "#d0ccc4", lineHeight: 1.7, fontStyle: "italic" }}>
              Our mission is to create spaces that deliver value, comfort and long-term growth for property owners and tenants alike.
            </p>
            <div style={{ fontSize: "48px", color: "rgba(201,168,76,0.3)", fontFamily: "Georgia, serif", lineHeight: 0.8, marginTop: "16px", textAlign: "right" }}>"</div>
          </div>

          {/* Right Founder */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", justifyContent: "flex-end" }} className="founder-right">
            <div style={{ textAlign: "right" }}>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "16px", color: "#F5F0E8", fontWeight: 600, marginBottom: "4px" }}>{founders[1].name}</h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: founders[1].color, marginBottom: "10px", letterSpacing: "0.04em" }}>{founders[1].role}</p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", lineHeight: 1.6, marginBottom: "14px", maxWidth: "260px" }}>{founders[1].bio}</p>
              <a
                href={founders[1].linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "30px", height: "30px", borderRadius: "6px",
                  background: "rgba(76,175,130,0.1)", border: "1px solid rgba(76,175,130,0.3)",
                  color: founders[1].color, fontSize: "11px", fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(76,175,130,0.2)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(76,175,130,0.1)"}
              >in</a>
            </div>
            <img
              src={founders[1].img}
              alt={founders[1].name}
              style={{ width: "90px", height: "90px", borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(76,175,130,0.3)", flexShrink: 0 }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .founders-grid { grid-template-columns: 1fr !important; }
          .founder-right { flex-direction: row-reverse !important; justify-content: flex-start !important; }
          .founder-right > div { text-align: left !important; }
        }
      `}</style>
    </section>
  );
}