import { useState } from "react";
import React from "react";

const contactInfo = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["23S, Netaji Puram Prasad,", "Banipark, Jaipur,", "Rajasthan 302016"],
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+91 01555 58899"],
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["info@blacktiehospitality.com"],
  },
  {
    icon: "⏰",
    title: "Business Hours",
    lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
  },
];

const services = [
  "Lease Management",
  "Tenant Management",
  "Rent Collection",
  "Property Maintenance",
  "Financial Reporting",
  "Legal Compliance",
  "Custom Solution",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", propertyType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${hasError ? "#e05a5a" : "rgba(255,255,255,0.1)"}`,
    borderRadius: "6px",
    padding: "13px 16px",
    fontFamily: "'Outfit', sans-serif",
    fontSize: "14px",
    color: "#F5F0E8",
    outline: "none",
    transition: "border-color 0.2s",
  });

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: "120px", paddingBottom: "60px",
        background: "linear-gradient(135deg, #0D1117, #111827)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1, textAlign: "center" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
            GET IN TOUCH
          </p>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#F5F0E8", lineHeight: 1.2, marginBottom: "16px" }}>
            Let's Build Something<br />Great Together
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", color: "#8a8580", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
            Reach out to discuss how we can help maximize your property's potential.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: "#0D1117", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "60px" }} className="contact-grid">

            {/* Left: info */}
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#F5F0E8", fontWeight: 600, marginBottom: "32px" }}>
                Contact Information
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
                {contactInfo.map((c) => (
                  <div key={c.title} style={{ display: "flex", gap: "16px" }}>
                    <div style={{
                      width: "44px", height: "44px", flexShrink: 0,
                      borderRadius: "10px",
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "18px",
                    }}>{c.icon}</div>
                    <div>
                      <p style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", color: "#C9A84C", fontWeight: 600, marginBottom: "6px", letterSpacing: "0.06em" }}>{c.title}</p>
                      {c.lines.map((line, i) => (
                        <p key={i} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#8a8580", lineHeight: 1.6 }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", color: "#C9A84C", fontWeight: 600, marginBottom: "14px", letterSpacing: "0.06em" }}>FOLLOW US</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  {[
                    { label: "in", href: "https://linkedin.com", title: "LinkedIn" },
                    { label: "ig", href: "https://instagram.com", title: "Instagram" },
                    { label: "fb", href: "https://facebook.com", title: "Facebook" },
                    { label: "yt", href: "https://youtube.com", title: "YouTube" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      title={s.title}
                      style={{
                        width: "38px", height: "38px",
                        border: "1px solid rgba(201,168,76,0.3)",
                        borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Outfit', sans-serif", fontSize: "11px",
                        fontWeight: 700, color: "#C9A84C", textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor = "#C9A84C"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "40px",
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "20px", color: "#F5F0E8", marginBottom: "12px" }}>Thank You!</h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#8a8580", lineHeight: 1.7, maxWidth: "320px", margin: "0 auto" }}>
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", color: "#F5F0E8", fontWeight: 600, marginBottom: "28px" }}>
                    Get a Free Proposal
                  </h2>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {/* Name + Email */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                      <div>
                        <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#8a8580", display: "block", marginBottom: "6px", letterSpacing: "0.05em" }}>
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
                        <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#8a8580", display: "block", marginBottom: "6px", letterSpacing: "0.05em" }}>
                          Email Address *
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
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                      <div>
                        <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#8a8580", display: "block", marginBottom: "6px" }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          style={inputStyle(false)}
                          onFocus={(e) => e.target.style.borderColor = "#C9A84C"}
                          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                        />
                      </div>
                      <div>
                        <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#8a8580", display: "block", marginBottom: "6px" }}>
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
                          {services.map((s) => (
                            <option key={s} value={s} style={{ background: "#111827" }}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Property type */}
                    <div>
                      <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#8a8580", display: "block", marginBottom: "8px" }}>
                        Property Type
                      </label>
                      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        {["Hotel", "Studio Apartment", "Villa", "Commercial", "Other"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, propertyType: type }))}
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "12px",
                              padding: "7px 16px",
                              borderRadius: "100px",
                              border: `1px solid ${form.propertyType === type ? "#C9A84C" : "rgba(255,255,255,0.1)"}`,
                              background: form.propertyType === type ? "rgba(201,168,76,0.12)" : "transparent",
                              color: form.propertyType === type ? "#C9A84C" : "#8a8580",
                              cursor: "pointer",
                              transition: "all 0.2s",
                            }}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#8a8580", display: "block", marginBottom: "6px" }}>
                        Message *
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
                      style={{
                        background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
                        color: "#0D1117",
                        border: "none",
                        borderRadius: "6px",
                        padding: "15px",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "opacity 0.2s, transform 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                      Send Message & Get Free Proposal
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ background: "#0D1117", padding: "0 0 80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{
            height: "300px",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}>
            <img
              src="https://picsum.photos/seed/map/1280/300"
              alt="Office location"
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
            />
            <div style={{
              position: "absolute",
              background: "rgba(13,17,23,0.9)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "10px",
              padding: "16px 24px",
              textAlign: "center",
            }}>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "14px", color: "#C9A84C", fontWeight: 600, marginBottom: "4px" }}>📍 Our Office</p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#8a8580" }}>23S, Netaji Puram Prasad, Banipark, Jaipur</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}