import { useState } from "react";
import React from "react";
import { contactInfo, SOCIAL_LINKS } from "../data/about";
import grandAnukampa5 from './../assets/grand anukampa/2.jpeg';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const SERVICES = [
  { id: "1", title: "Lease Management" },
  { id: "2", title: "Tenant Management" },
  { id: "3", title: "Rent Collection" },
  { id: "4", title: "Property Maintenance" },
  { id: "5", title: "Financial Reporting" },
  { id: "6", title: "Legal Compliance" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", propertyType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
    setApiError("");
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (form.email.trim() && !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    setApiError("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.service || "General Enquiry",       // service → subject
          propertyInterest: form.propertyType || "Not specified", // propertyType → propertyInterest
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setApiError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setApiError("Unable to reach the server. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    boxSizing: "border-box",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${hasError ? "#e05a5a" : "rgba(255,255,255,0.1)"}`,
    borderRadius: "6px",
    padding: "clamp(10px, 1.5vw, 13px) clamp(12px, 2vw, 16px)",
    fontFamily: "'Outfit', sans-serif",
    fontSize: "clamp(13px, 1.3vw, 14px)",
    color: "#F5F0E8",
    outline: "none",
    transition: "border-color 0.2s",
  });

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
                  backgroundImage: `url(${grandAnukampa5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.65,
                  zIndex: 0,
                }} />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, #0D1117 0%, transparent 80%)",
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
          }}>GET IN TOUCH</p>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.6rem, 5vw, 3.2rem)",
            fontWeight: 700,
            color: "#F5F0E8",
            lineHeight: 1.15,
            marginBottom: "clamp(12px, 2vw, 20px)",
          }}>
            Let's Build Something<br />Exceptional
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(13px, 1.5vw, 15px)",
            color: "#8a8580",
            lineHeight: 1.7,
            maxWidth: "min(560px, 90%)",
            margin: 0,
          }}>
            Connect with Black Tie to discuss your property goals.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "#0D1117", padding: "clamp(40px, 7vw, 80px) 0" }}>
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 2rem)",
          boxSizing: "border-box",
        }}>
          <div className="contact-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "clamp(32px, 5vw, 60px)",
            alignItems: "start",
          }}>

            {/* ── LEFT: Contact Info ── */}
            <div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                color: "#F5F0E8",
                fontWeight: 600,
                marginBottom: "clamp(20px, 3vw, 32px)",
              }}>Contact Information</h2>

              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(18px, 3vw, 28px)",
                marginBottom: "clamp(28px, 4vw, 48px)",
              }}>
                {contactInfo.map((c) => (
                  <div key={c.title} style={{ display: "flex", gap: "clamp(12px, 2vw, 16px)", alignItems: "flex-start" }}>
                    <div style={{
                      width: "clamp(38px, 5vw, 48px)",
                      height: "clamp(38px, 5vw, 48px)",
                      borderRadius: "50%",
                      border: "1px solid rgba(201,168,76,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <img
                        src={c.icon}
                        alt={c.title}
                        style={{
                          width: "clamp(16px, 2vw, 20px)",
                          height: "clamp(16px, 2vw, 20px)",
                          objectFit: "contain",
                          filter: "invert(67%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                        }}
                      />
                    </div>
                    <div>
                      <p style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "clamp(10px, 1.2vw, 12px)",
                        color: "#C9A84C",
                        fontWeight: 600,
                        marginBottom: "6px",
                        letterSpacing: "0.06em",
                      }}>{c.title}</p>
                      {c.lines.map((line, i) => (
                        <p key={i} style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "clamp(12px, 1.3vw, 13px)",
                          color: "#8a8580",
                          lineHeight: 1.6,
                          margin: 0,
                        }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div style={{ display: "flex", gap: "clamp(8px, 1.5vw, 12px)", flexWrap: "wrap" }}>
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "clamp(30px, 4vw, 34px)",
                      height: "clamp(30px, 4vw, 34px)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      transition: "all 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(201,168,76,0.1)";
                      e.currentTarget.style.borderColor = "#C9A84C";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                    }}
                  >
                    <img
                      src={social.icon}
                      alt=""
                      style={{
                        width: "clamp(18px, 2.5vw, 26px)",
                        height: "clamp(18px, 2.5vw, 26px)",
                        filter: "brightness(0) saturate(100%) invert(72%) sepia(47%) saturate(500%) hue-rotate(5deg) brightness(95%)",
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "clamp(20px, 4vw, 40px)",
              boxSizing: "border-box",
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "clamp(24px, 5vw, 40px) 0" }}>
                  <div style={{ fontSize: "clamp(36px, 6vw, 48px)", marginBottom: "16px" }}>✅</div>
                  <h3 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    color: "#F5F0E8",
                    marginBottom: "12px",
                  }}>Thank You!</h3>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(13px, 1.3vw, 14px)",
                    color: "#8a8580",
                    lineHeight: 1.7,
                    maxWidth: "320px",
                    margin: "0 auto",
                  }}>
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
                    color: "#F5F0E8",
                    fontWeight: 600,
                    marginBottom: "clamp(18px, 3vw, 28px)",
                  }}>Reach Out to Us</h2>

                  {/* ── API error banner ── */}
                  {apiError && (
                    <div style={{
                      background: "rgba(224,90,90,0.1)",
                      border: "1px solid rgba(224,90,90,0.35)",
                      borderRadius: "6px",
                      padding: "10px 14px",
                      marginBottom: "16px",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "13px",
                      color: "#e05a5a",
                      lineHeight: 1.5,
                    }}>
                      ⚠️ {apiError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 2.5vw, 20px)" }}>

                    {/* Name + Email */}
                    <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(10px, 2vw, 16px)" }}>
                      <div>
                        <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.1vw, 12px)", color: "#8a8580", display: "block", marginBottom: "6px", letterSpacing: "0.05em" }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          style={inputStyle(errors.name)}
                          onFocus={(e) => e.target.style.borderColor = "#C9A84C"}
                          onBlur={(e) => e.target.style.borderColor = errors.name ? "#e05a5a" : "rgba(255,255,255,0.1)"}
                        />
                        {errors.name && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#e05a5a", marginTop: "4px" }}>{errors.name}</p>}
                      </div>
                      <div>
                        <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.1vw, 12px)", color: "#8a8580", display: "block", marginBottom: "6px", letterSpacing: "0.05em" }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          style={inputStyle(errors.email)}
                          onFocus={(e) => e.target.style.borderColor = "#C9A84C"}
                          onBlur={(e) => e.target.style.borderColor = errors.email ? "#e05a5a" : "rgba(255,255,255,0.1)"}
                        />
                        {errors.email && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#e05a5a", marginTop: "4px" }}>{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone + Service */}
                    <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(10px, 2vw, 16px)" }}>
                      <div>
                        <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.1vw, 12px)", color: "#8a8580", display: "block", marginBottom: "6px" }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX (WhatsApp preferred)"
                          style={inputStyle(errors.phone)}
                          onFocus={(e) => e.target.style.borderColor = "#C9A84C"}
                          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                        />
                        {errors.phone && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#e05a5a", marginTop: "4px" }}>{errors.phone}</p>} 
                      </div>
                      <div>
                        <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.1vw, 12px)", color: "#8a8580", display: "block", marginBottom: "6px" }}>
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          style={{ ...inputStyle(false), cursor: "pointer" }}
                          onFocus={(e) => e.target.style.borderColor = "#C9A84C"}
                          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                        >
                          <option value="" style={{ background: "#111827" }}>Select a service</option>
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title} style={{ background: "#111827" }}>{s.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Property type */}
                    <div>
                      <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.1vw, 12px)", color: "#8a8580", display: "block", marginBottom: "8px" }}>
                        Property Type
                      </label>
                      <div style={{ display: "flex", gap: "clamp(6px, 1vw, 10px)", flexWrap: "wrap" }}>
                        {["Hotel", "Studio Apartment", "Villa", "Commercial", "Other"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, propertyType: type }))}
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "clamp(11px, 1.1vw, 12px)",
                              padding: "clamp(5px, 1vw, 7px) clamp(12px, 1.5vw, 16px)",
                              borderRadius: "100px",
                              border: `1px solid ${form.propertyType === type ? "#C9A84C" : "rgba(255,255,255,0.1)"}`,
                              background: form.propertyType === type ? "rgba(201,168,76,0.12)" : "transparent",
                              color: form.propertyType === type ? "#C9A84C" : "#8a8580",
                              cursor: "pointer",
                              transition: "all 0.2s",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(11px, 1.1vw, 12px)", color: "#8a8580", display: "block", marginBottom: "6px" }}>
                        Message / Property Name
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your property and what you're looking for..."
                        rows={4}
                        style={{ ...inputStyle(errors.message), resize: "vertical", fontFamily: "'Outfit', sans-serif" }}
                        onFocus={(e) => e.target.style.borderColor = "#C9A84C"}
                        onBlur={(e) => e.target.style.borderColor = errors.message ? "#e05a5a" : "rgba(255,255,255,0.1)"}
                      />
                      {errors.message && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#e05a5a", marginTop: "4px" }}>{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        background: loading
                          ? "rgba(201,168,76,0.4)"
                          : "linear-gradient(135deg, #C9A84C, #e8c97a)",
                        color: "#0D1117",
                        border: "none",
                        borderRadius: "6px",
                        padding: "clamp(12px, 2vw, 15px)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "clamp(12px, 1.3vw, 14px)",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        cursor: loading ? "not-allowed" : "pointer",
                        transition: "opacity 0.2s, transform 0.2s",
                        width: "100%",
                      }}
                      onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                      {loading ? "Sending…" : "Send Message & Get a Quote"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section style={{ background: "#0D1117", padding: "0 0 clamp(40px, 7vw, 80px)" }}>
        <div style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 2rem)",
          boxSizing: "border-box",
        }}>
          <div style={{
            height: "clamp(220px, 35vw, 340px)",
            borderRadius: "clamp(8px, 1.5vw, 12px)",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "#111827",
            position: "relative",
          }}>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=26.877931811514728,75.76191436748&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: "none", display: "block", opacity: 0.85 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-card" style={{
              position: "absolute",
              bottom: "clamp(10px, 2vw, 16px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(13,17,23,0.92)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "10px",
              padding: "clamp(10px, 2vw, 16px) clamp(14px, 3vw, 24px)",
              textAlign: "center",
              width: "max-content",
              maxWidth: "calc(100% - clamp(24px, 4vw, 48px))",
              boxSizing: "border-box",
            }}>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(11px, 1.3vw, 14px)", color: "#C9A84C", fontWeight: 600, marginBottom: "4px" }}>
                📍 Our Office
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(10px, 1.2vw, 12px)", color: "#8a8580", lineHeight: 1.5, margin: "0 0 6px", whiteSpace: "normal", maxWidth: "320px" }}>
                N-266, 2nd Floor, New Aatish Market, Mansarovar, Jaipur, Rajasthan 302020
              </p>
              <a
                href="https://www.google.com/maps?q=26.877931811514728,75.76191436748"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(9px, 1.1vw, 11px)", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", borderBottom: "1px solid rgba(201,168,76,0.4)", paddingBottom: "1px" }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 560px) { .form-row { grid-template-columns: 1fr !important; } }
        @media (max-width: 400px) { .map-card { width: calc(100% - 24px) !important; left: 12px !important; transform: none !important; bottom: 10px !important; } }
        input, select, textarea { max-width: 100%; box-sizing: border-box; }
        select { -webkit-appearance: none; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238a8580' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px !important; }
        @media (min-width: 1440px) { .contact-grid { grid-template-columns: 360px 1fr !important; } }
        @media (hover: none) { button:hover { transform: none !important; opacity: 1 !important; } }
        textarea { min-height: 100px; }
      `}</style>
    </>
  );
}