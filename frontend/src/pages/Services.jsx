import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CTABanner from "../components/home/CTABanner";
import ClientsSection from "../components/home/ClientsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

const services = [
  {
    icon: "🏠",
    title: "Lease Management",
    desc: "End-to-end lease handling for hassle-free occupancy and compliance.",
  },
  {
    icon: "👥",
    title: "Tenant Management",
    desc: "Finding the right tenants and ensuring long-term satisfaction.",
  },
  {
    icon: "💰",
    title: "Rent Collection",
    desc: "Timely rent collection with transparency and reporting.",
  },
  {
    icon: "🔧",
    title: "Property Maintenance",
    desc: "Regular inspections and maintenance for a well-maintained asset.",
  },
  {
    icon: "📊",
    title: "Financial Reporting",
    desc: "Detailed reports for better insights and informed decisions.",
  },
  {
    icon: "⚖️",
    title: "Legal Compliance",
    desc: "Statutory compliance and documentation made simple.",
  },
];

const models = [
  {
    id: "fixed",
    color: "#4a90d9",
    bg: "rgba(74,144,217,0.08)",
    border: "rgba(74,144,217,0.25)",
    title: "Fixed Lease Model",
    subtitle: "Guaranteed monthly rental income with zero vacancy risk.",
    points: [
      "Predictable & stable income",
      "Risk mitigation for vacant periods",
      "No hassle with tenant management",
      "We handle maintenance & repairs",
    ],
  },
  {
    id: "revenue",
    color: "#4caf82",
    bg: "rgba(76,175,130,0.08)",
    border: "rgba(76,175,130,0.25)",
    title: "Revenue Share Model",
    subtitle: "Earn more with high demand. We grow together.",
    points: [
      "Potential for higher returns",
      "Performance-based rewards",
      "Reduced risk with shared income",
      "Continuous marketing & tenant management",
    ],
  },
  {
    id: "management",
    color: "#b57bee",
    bg: "rgba(181,123,238,0.08)",
    border: "rgba(181,123,238,0.25)",
    title: "Management Fee Model",
    subtitle: "You earn, we manage your property, complete operational support.",
    points: [
      "Full control over revenue",
      "Expert management without daily involvement",
      "Transparent reporting & invoicing",
      "Hands-off operational oversight",
    ],
  },
];

const howWeWork = [
  {
    num: "01",
    title: "Comprehensive Property Management",
    desc: "End-to-end services including tenant screening, rent collection, maintenance, and repairs — ensuring a stress-free experience.",
  },
  {
    num: "02",
    title: "Seamless Tenant Screening & Placement",
    desc: "Rigorous background checks, credit assessments, and reference verifications to ensure reliable tenants.",
  },
  {
    num: "03",
    title: "Proactive Maintenance & Repairs",
    desc: "Regular inspections and timely maintenance to prevent issues and keep your property in top condition.",
  },
  {
    num: "04",
    title: "Technology Integration & Transparency",
    desc: "Owner portal & tenant app for real-time updates, maintenance requests, payments, and reports.",
  },
  {
    num: "05",
    title: "Marketing & Tenant Retention",
    desc: "Multi-channel marketing, community events, and personalized experiences for higher retention and occupancy.",
  },
  {
    num: "06",
    title: "Timely Rent Payment & Financial Transparency",
    desc: "Direct credit transfers before the 5th of every month with detailed financial reports and complete transparency.",
  },
];

const whyChoose = [
  { icon: "🏦", title: "Guaranteed Rental Income", desc: "Consistent rent, even during vacancy." },
  { icon: "📈", title: "Maximized Revenue", desc: "High occupancy & better returns." },
  { icon: "✅", title: "Zero Hassle Management", desc: "We handle everything, you enjoy returns." },
  { icon: "💻", title: "Tech-Enabled Transparency", desc: "Real-time portal for complete visibility." },
  { icon: "🏆", title: "Proven Track Record", desc: "10+ years of experience & 500+ rooms managed." },
  { icon: "🤝", title: "Tenant Retention & Community", desc: "Happy tenants, steady income." },
];

const hotelsList = [
  "Tanya Resorts", "The Orion", "The Queen's", "Reeve Inn", "Shivir",
  "Mark Inn", "2 Glassy", "Crown Plaza", "Devensh", "Yatrik",
  "Jaipur One", "Carrots and Cabbages", "Joker Bar", "Guman Heritage", "And many more hotels...",
];

const apartmentsList = [
  "Grand Anukampa", "Avenue 1st", "Solitaire Suites", "Manhattan Rivverra", "Coral Suits",
  "Redwood's Magnus", "Vega Apartments", "Century 21st Elite", "Balaji Tower",
];

const futureProjections = [
  { num: "01", title: "Expansion in Tier 2 & 5 Cities", desc: "Expanding to smaller towns with growing rental demand." },
  { num: "02", title: "International Expansion", desc: "Venturing into Southeast Asia & the Middle East." },
  { num: "03", title: "Increase Revenue-Share Properties", desc: "Scaling our network to deliver better returns to owners." },
  { num: "04", title: "Collaboration with Rental Brokers", desc: "Partnering with brokers to source quality properties across India." },
  { num: "05", title: "Integration of IoT Solutions", desc: "Smart homes with automation, security & energy efficiency." },
  { num: "06", title: "Sustainability Initiatives", desc: "Eco-friendly practices for cost-efficient & responsible property management." },
  { num: "07", title: "Managed Homes for Senior Living & Women's Housing", desc: "Safe, community-oriented living spaces with support services." },
  { num: "08", title: "Co-Living Spaces in Metro Cities", desc: "Co-living for students & young professionals in Delhi, Mumbai & Bangalore." },
];

export default function Services() {
  const [activeModel, setActiveModel] = useState(null);

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: "120px",
        paddingBottom: "80px",
        background: "linear-gradient(135deg, #0D1117 0%, #111827 60%, #0D1117 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "360px",
        display: "flex",
        alignItems: "center",
      }}>
        {/* Background image */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "50%",
          backgroundImage: "url(https://picsum.photos/seed/svc-hero/900/500)",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.12,
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.6), transparent)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.6), transparent)",
        }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#e8c97a)", marginBottom: "20px" }} />
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#F5F0E8", lineHeight: 1.15, marginBottom: "20px" }}>
            Our Services
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "#8a8580", lineHeight: 1.7, maxWidth: "480px" }}>
            Comprehensive property management solutions designed to maximize returns and deliver hassle-free ownership.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: "#F5F0E8", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              OUR SERVICES
            </p>
            <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#e8c97a)", margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "16px" }} className="services-grid-6">
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "10px",
                  padding: "28px 16px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", color: "#0D1117", fontWeight: 600, marginBottom: "8px", letterSpacing: "0.03em" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#6b6560", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Models */}
      <section style={{ background: "#111827", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              WORKING MODELS
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#8a8580" }}>Flexible models tailored to your goals.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "40px" }} className="models-3col">
            {models.map((m) => (
              <div
                key={m.id}
                style={{
                  background: activeModel === m.id ? m.bg : "rgba(255,255,255,0.02)",
                  border: `1px solid ${activeModel === m.id ? m.border : "rgba(255,255,255,0.07)"}`,
                  borderRadius: "12px",
                  padding: "32px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={() => setActiveModel(m.id)}
                onMouseLeave={() => setActiveModel(null)}
              >
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "15px", color: m.color, fontWeight: 600, marginBottom: "8px" }}>{m.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", marginBottom: "20px", lineHeight: 1.5 }}>{m.subtitle}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {m.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#b8b0a0" }}>
                      <span style={{ color: m.color, fontSize: "12px", marginTop: "2px", flexShrink: 0 }}>✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              to="/models"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "transparent", color: "#C9A84C",
                border: "1.5px solid #C9A84C",
                padding: "12px 28px", borderRadius: "4px",
                fontFamily: "'Outfit', sans-serif", fontSize: "13px",
                fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.25s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#0D1117"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
            >
              Compare Models
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ background: "#0D1117", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "60px", alignItems: "center" }} className="how-grid">
            {/* Left image */}
            <div style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "4/5" }}>
              <img
                src="https://picsum.photos/seed/how-work/600/750"
                alt="How we work"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Right steps */}
            <div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
                HOW WE WORK
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "28px" }}>
                {howWeWork.map((step) => (
                  <div key={step.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <div style={{
                      width: "44px", height: "44px", flexShrink: 0,
                      borderRadius: "8px",
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <span style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", color: "#C9A84C", fontWeight: 700 }}>{step.num}</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", fontWeight: 600, color: "#F5F0E8", marginBottom: "4px" }}>{step.title}</h3>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#6b6560", lineHeight: 1.6 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#F5F0E8", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              WHY CHOOSE BLACK TIE HOSPITALITY?
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "16px" }} className="why-grid">
            {whyChoose.map((w) => (
              <div key={w.title} style={{ textAlign: "center", padding: "24px 12px" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{w.icon}</div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", color: "#0D1117", fontWeight: 600, marginBottom: "6px" }}>{w.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#6b6560", lineHeight: 1.5 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Portfolio */}
      <section style={{ background: "#0D1117", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              OUR PROPERTY PORTFOLIO
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }} className="portfolio-grid">
            {/* Hotels */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ height: "160px", overflow: "hidden" }}>
                <img src="https://picsum.photos/seed/hotels-port/600/200" alt="Hotels" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "14px", color: "#F5F0E8", fontWeight: 600, marginBottom: "16px" }}>Hotels</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 20px" }}>
                  {hotelsList.map((h, i) => (
                    <p key={h} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#8a8580" }}>
                      <span style={{ color: "#C9A84C", marginRight: "6px" }}>{String(i + 1).padStart(2, "0")}</span>{h}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Apartments */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ height: "160px", overflow: "hidden" }}>
                <img src="https://picsum.photos/seed/apts-port/600/200" alt="Studio Apartments" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "14px", color: "#F5F0E8", fontWeight: 600, marginBottom: "16px" }}>Studio Apartments</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 20px" }}>
                  {apartmentsList.map((a, i) => (
                    <p key={a} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#8a8580" }}>
                      <span style={{ color: "#C9A84C", marginRight: "6px" }}>{String(i + 1).padStart(2, "0")}</span>{a}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#6b6560", textAlign: "center", marginTop: "24px", maxWidth: "700px", margin: "24px auto 0", lineHeight: 1.6 }}>
            Our properties are spread across key locations in Jaipur and nearby cities, catering to medical tourists, students, corporates, and leisure travelers with well-maintained, fully-equipped accommodations.
          </p>
        </div>
      </section>

      {/* Future Projections */}
      <section style={{ background: "#111827", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
              FUTURE PROJECTIONS
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="proj-grid">
            {futureProjections.map((p) => (
              <div
                key={p.num}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  padding: "24px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{
                  width: "44px", height: "44px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "16px",
                }}>
                  <span style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", color: "#C9A84C", fontWeight: 700 }}>{p.num}</span>
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, color: "#F5F0E8", marginBottom: "8px", lineHeight: 1.4 }}>{p.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#6b6560", lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />
      <TestimonialsSection />
      <CTABanner />

      <style>{`
        @media (max-width: 1024px) {
          .services-grid-6 { grid-template-columns: repeat(3, 1fr) !important; }
          .why-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .proj-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .models-3col { grid-template-columns: 1fr !important; }
          .how-grid { grid-template-columns: 1fr !important; }
          .portfolio-grid { grid-template-columns: 1fr !important; }
          .services-grid-6 { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}