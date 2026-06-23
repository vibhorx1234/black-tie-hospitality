import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "01",
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you interact with Black Tie Hospitality — whether by booking a property, submitting an enquiry, or creating an account — we may collect personal details including your full name, email address, phone number, postal address, and payment information.",
        },
        {
          subtitle: "Property Owner Information",
          text: "If you register as a property owner, we collect additional information relevant to property management services, including ownership documents, bank account details for rent collection, and property-specific details such as location, size, and amenities.",
        },
        {
          subtitle: "Automatically Collected Data",
          text: "We automatically gather certain technical data when you visit our website: IP address, browser type and version, pages visited, time spent on pages, referring URLs, and device information. This data helps us improve your browsing experience and our service quality.",
        },
      ],
    },
    {
      id: "02",
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "Your information is primarily used to deliver and manage our hospitality and property management services — processing bookings, coordinating with tenants, handling rent collection, and providing financial reporting to property owners.",
        },
        {
          subtitle: "Communication",
          text: "We use your contact details to send service updates, booking confirmations, maintenance notifications, monthly financial reports, and important announcements related to your property or stay. You may opt out of promotional communications at any time.",
        },
        {
          subtitle: "Legal & Compliance",
          text: "Certain data is retained to comply with legal obligations, resolve disputes, enforce our agreements, and maintain the regulatory standards required for property management operations in Jaipur and across our managed locations.",
        },
      ],
    },
    {
      id: "03",
      title: "Data Sharing & Disclosure",
      content: [
        {
          subtitle: "Trusted Service Partners",
          text: "We may share your information with vetted third-party service providers — including maintenance contractors, legal consultants, financial auditors, and payment processors — solely to fulfil our service obligations. These partners are contractually bound to protect your data.",
        },
        {
          subtitle: "We Never Sell Your Data",
          text: "Black Tie Hospitality does not sell, trade, or rent your personal information to third parties for marketing purposes. Your data exists to serve your interests, not ours.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, court order, or governmental authority, or when we believe disclosure is necessary to protect the rights, property, or safety of Black Tie Hospitality, our clients, or others.",
        },
      ],
    },
    {
      id: "04",
      title: "Data Security",
      content: [
        {
          subtitle: "Our Security Standards",
          text: "We implement industry-standard security measures including SSL encryption, secure data storage, access controls, and regular security audits to protect your personal information from unauthorised access, alteration, disclosure, or destruction.",
        },
        {
          subtitle: "Your Responsibility",
          text: "While we take every reasonable precaution, no method of transmission over the internet is 100% secure. We encourage you to use strong, unique passwords for your account and to notify us immediately if you suspect any unauthorised use.",
        },
      ],
    },
    {
      id: "05",
      title: "Cookies & Tracking",
      content: [
        {
          subtitle: "How We Use Cookies",
          text: "Our website uses cookies and similar tracking technologies to enhance functionality, remember your preferences, analyse site traffic, and deliver a personalised experience. Essential cookies are required for the site to function; analytical and preference cookies are optional.",
        },
        {
          subtitle: "Your Choices",
          text: "You may control cookie settings through your browser preferences at any time. Disabling certain cookies may affect the functionality of some features on our website.",
        },
      ],
    },
    {
      id: "06",
      title: "Your Rights",
      content: [
        {
          subtitle: "Access & Correction",
          text: "You have the right to request a copy of the personal information we hold about you and to ask us to correct any inaccuracies. We will respond to all verified requests within 30 days.",
        },
        {
          subtitle: "Deletion & Portability",
          text: "You may request the deletion of your personal data, subject to legal retention requirements. You may also request that we provide your data in a portable, machine-readable format for transfer to another service provider.",
        },
        {
          subtitle: "Withdraw Consent",
          text: "Where processing is based on your consent, you may withdraw it at any time by contacting us directly. Withdrawal does not affect the lawfulness of any processing carried out prior to withdrawal.",
        },
      ],
    },
    {
      id: "07",
      title: "Retention Period",
      content: [
        {
          subtitle: "How Long We Keep Your Data",
          text: "We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Guest booking records are typically retained for 7 years in accordance with financial regulations.",
        },
      ],
    },
    {
      id: "08",
      title: "Contact Us",
      content: [
        {
          subtitle: "Privacy Enquiries",
          text: "If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact our Privacy Officer at privacy@blacktiehospitality.in or write to us at our registered office in Jaipur, Rajasthan.",
        },
      ],
    },
  ];

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <span style={styles.logoBlack}>BLACK</span>
            <span style={styles.logoTie}> TIE</span>
          </div>
          <a href="/" style={styles.navBack}>
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <p style={styles.heroEyebrow}>LEGAL &amp; COMPLIANCE</p>
          <h1 style={styles.heroTitle}>
            Privacy <span style={styles.gold}>Policy</span>
          </h1>
          <p style={styles.heroSub}>
            How Black Tie Hospitality collects, uses, and protects your personal information.
          </p>
          <p style={styles.heroMeta}>Last updated: June 2026</p>
        </div>
      </header>

      {/* Intro strip */}
      <section style={styles.introStrip}>
        <div style={styles.introInner}>
          <p style={styles.introText}>
            At Black Tie Hospitality, your privacy is a matter we treat with the same professionalism we bring to every managed property.
            This policy explains, in plain terms, what data we collect, why we collect it, and how we keep it safe.
          </p>
        </div>
      </section>

      {/* Sections */}
      <main style={styles.main}>
        <div style={styles.mainInner}>
          {sections.map((section, i) => (
            <div key={section.id} style={{ ...styles.section, ...(i % 2 === 1 ? styles.sectionAlt : {}) }}>
              <div style={styles.sectionHead}>
                <span style={styles.sectionNumber}>{section.id}</span>
                <h2 style={styles.sectionTitle}>{section.title}</h2>
              </div>
              <div style={styles.sectionBody}>
                {section.content.map((block, j) => (
                  <div key={j} style={styles.block}>
                    <h3 style={styles.blockTitle}>{block.subtitle}</h3>
                    <p style={styles.blockText}>{block.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA Banner */}
      <section style={styles.ctaBanner}>
        <div style={styles.ctaInner}>
          <p style={styles.ctaEye}>QUESTIONS ABOUT YOUR DATA?</p>
          <h2 style={styles.ctaTitle}>
            We're Here to <span style={styles.gold}>Help.</span>
          </h2>
          <p style={styles.ctaSub}>
            Reach out to our team and we'll address your privacy concerns personally.
          </p>
          <div style={styles.ctaButtons}>
            <a href="/contact" style={styles.btnGold}>Contact Us</a>
            <a href="/terms" style={styles.btnOutline}>Terms of Service →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.logo}>
            <span style={styles.logoBlack}>BLACK</span>
            <span style={styles.logoTie}> TIE</span>
          </div>
          <p style={styles.footerText}>
            © {new Date().getFullYear()} Black Tie Hospitality. All rights reserved.
          </p>
          <div style={styles.footerLinks}>
            <a href="/privacy" style={styles.footerLink}>Privacy Policy</a>
            <span style={styles.footerDivider}>|</span>
            <a href="/terms" style={styles.footerLink}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const gold = "#C9A84C";
const black = "#0d0d0d";
const darkBg = "#111111";
const lightBg = "#f7f5f0";
const white = "#ffffff";

const styles = {
  page: {
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    backgroundColor: lightBg,
    color: black,
    margin: 0,
    padding: 0,
  },
  // NAV
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: black,
    borderBottom: `2px solid ${gold}`,
  },
  navInner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "16px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: "0.1em",
  },
  logoBlack: {
    color: white,
  },
  logoTie: {
    color: gold,
  },
  navBack: {
    color: gold,
    textDecoration: "none",
    fontSize: 13,
    letterSpacing: "0.05em",
    fontWeight: 500,
    transition: "opacity 0.2s",
  },
  // HERO
  hero: {
    position: "relative",
    background: `linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%)`,
    padding: "120px 40px",
    textAlign: "center",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: `radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)`,
    pointerEvents: "none",
  },
  heroContent: {
    position: "relative",
    maxWidth: 760,
    margin: "0 auto",
  },
  heroEyebrow: {
    color: gold,
    fontSize: 11,
    letterSpacing: "0.3em",
    fontWeight: 600,
    marginBottom: 20,
    textTransform: "uppercase",
  },
  heroTitle: {
    fontSize: "clamp(40px, 6vw, 72px)",
    fontWeight: 800,
    color: white,
    margin: "0 0 20px",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },
  heroSub: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 17,
    lineHeight: 1.7,
    marginBottom: 24,
    maxWidth: 560,
    marginLeft: "auto",
    marginRight: "auto",
  },
  heroMeta: {
    color: "rgba(255,255,255,0.35)",
    fontSize: 12,
    letterSpacing: "0.1em",
  },
  gold: {
    color: gold,
  },
  // INTRO STRIP
  introStrip: {
    backgroundColor: gold,
    padding: "40px 40px",
  },
  introInner: {
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center",
  },
  introText: {
    color: black,
    fontSize: 16,
    lineHeight: 1.8,
    fontWeight: 500,
    margin: 0,
  },
  // MAIN
  main: {
    backgroundColor: lightBg,
  },
  mainInner: {
    maxWidth: 1100,
    margin: "0 auto",
  },
  section: {
    padding: "72px 40px",
    display: "grid",
    gridTemplateColumns: "200px 1fr",
    gap: "40px 80px",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
  },
  sectionAlt: {
    backgroundColor: white,
  },
  sectionHead: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    paddingTop: 4,
  },
  sectionNumber: {
    color: gold,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.2em",
    display: "block",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: black,
    margin: 0,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },
  sectionBody: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
  block: {},
  blockTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: black,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: 10,
    borderLeft: `3px solid ${gold}`,
    paddingLeft: 12,
  },
  blockText: {
    fontSize: 15,
    lineHeight: 1.85,
    color: "#3a3a3a",
    margin: 0,
    paddingLeft: 15,
  },
  // CTA BANNER
  ctaBanner: {
    backgroundColor: darkBg,
    padding: "100px 40px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  ctaInner: {
    maxWidth: 640,
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },
  ctaEye: {
    color: gold,
    fontSize: 11,
    letterSpacing: "0.3em",
    fontWeight: 600,
    marginBottom: 16,
    textTransform: "uppercase",
  },
  ctaTitle: {
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: 800,
    color: white,
    margin: "0 0 20px",
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
  },
  ctaSub: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 16,
    lineHeight: 1.7,
    marginBottom: 40,
  },
  ctaButtons: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnGold: {
    backgroundColor: gold,
    color: black,
    padding: "14px 36px",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-block",
  },
  btnOutline: {
    border: `1px solid rgba(255,255,255,0.3)`,
    color: white,
    padding: "14px 36px",
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: "0.05em",
    textDecoration: "none",
    display: "inline-block",
    transition: "border-color 0.2s",
  },
  // FOOTER
  footer: {
    backgroundColor: "#080808",
    padding: "40px",
    borderTop: `2px solid ${gold}`,
  },
  footerInner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
  },
  footerText: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 13,
    margin: 0,
  },
  footerLinks: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  footerLink: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 13,
    textDecoration: "none",
  },
  footerDivider: {
    color: "rgba(255,255,255,0.2)",
    fontSize: 13,
  },
};

export default PrivacyPolicy;