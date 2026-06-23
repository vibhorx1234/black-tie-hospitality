import React, { useEffect, useState } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("guests");

  const guestTerms = [
    {
      id: "01",
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing our website, making a booking, or using any services provided by Black Tie Hospitality, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.",
        },
        {
          subtitle: "Amendments",
          text: "Black Tie Hospitality reserves the right to update or modify these terms at any time without prior notice. Continued use of our services following any changes constitutes your acceptance of the revised terms. The date of the most recent revision appears at the top of this page.",
        },
      ],
    },
    {
      id: "02",
      title: "Booking & Reservations",
      content: [
        {
          subtitle: "Booking Confirmation",
          text: "A booking is confirmed only upon receipt of a written confirmation from Black Tie Hospitality and full or partial payment as specified at the time of reservation. We reserve the right to decline any booking at our sole discretion.",
        },
        {
          subtitle: "Accuracy of Information",
          text: "You are responsible for ensuring that all information provided during the booking process is accurate and complete. Black Tie Hospitality accepts no liability for issues arising from incorrect information supplied by the guest.",
        },
        {
          subtitle: "Minimum Stay",
          text: "Certain properties may be subject to minimum stay requirements, particularly during peak seasons and holidays. These requirements will be communicated clearly at the time of booking.",
        },
      ],
    },
    {
      id: "03",
      title: "Cancellation & Refunds",
      content: [
        {
          subtitle: "Cancellation Policy",
          text: "Cancellations made more than 14 days before the check-in date will receive a full refund minus a processing fee. Cancellations within 7–14 days will receive a 50% refund. Cancellations within 7 days of check-in are non-refundable. Specific properties may carry different policies, which will be stated at the time of booking.",
        },
        {
          subtitle: "No-Show Policy",
          text: "Failure to arrive on the confirmed check-in date without prior notification will be treated as a cancellation, and no refund will be issued. The full booking amount will be forfeited.",
        },
        {
          subtitle: "Force Majeure",
          text: "In the event of circumstances beyond our reasonable control — including natural disasters, government restrictions, or public health emergencies — Black Tie Hospitality will work in good faith to offer rescheduling or credit options, though no refund is guaranteed.",
        },
      ],
    },
    {
      id: "04",
      title: "Guest Conduct & Property Care",
      content: [
        {
          subtitle: "Respectful Use",
          text: "Guests are expected to treat all managed properties with care and respect. Any damage caused intentionally or through negligence will be the financial responsibility of the guest. An inspection will be conducted upon departure.",
        },
        {
          subtitle: "Prohibited Activities",
          text: "Smoking inside properties, hosting unauthorised events, exceeding the stated maximum occupancy, keeping pets (unless explicitly permitted), and any illegal activity on the premises are strictly prohibited and may result in immediate eviction without refund.",
        },
        {
          subtitle: "Noise & Neighbours",
          text: "Guests must observe quiet hours as specified at each property, typically between 10 PM and 7 AM. Disturbances that affect neighbouring residents may result in termination of the stay.",
        },
      ],
    },
    {
      id: "05",
      title: "Liability",
      content: [
        {
          subtitle: "Limitation of Liability",
          text: "Black Tie Hospitality shall not be held liable for any loss, theft, damage to personal belongings, injury, or inconvenience suffered by guests during their stay. Guests stay at their own risk and are encouraged to maintain appropriate travel insurance.",
        },
        {
          subtitle: "Third-Party Services",
          text: "Where we arrange third-party services — transportation, tours, housekeeping, or maintenance — we act solely as an intermediary. We are not liable for the quality or conduct of third-party providers.",
        },
      ],
    },
  ];

  const ownerTerms = [
    {
      id: "01",
      title: "Onboarding & Property Registration",
      content: [
        {
          subtitle: "Eligibility",
          text: "Property owners must provide valid ownership documentation, a government-issued identity proof, and complete the onboarding process before any property is listed or managed by Black Tie Hospitality. We reserve the right to decline properties that do not meet our quality standards.",
        },
        {
          subtitle: "Accuracy of Property Information",
          text: "Owners are responsible for providing accurate and current information about their property, including legal encumbrances, pending disputes, structural conditions, and any restrictions on occupancy. Misrepresentation may result in immediate termination of the management agreement.",
        },
      ],
    },
    {
      id: "02",
      title: "Management Agreement",
      content: [
        {
          subtitle: "Scope of Services",
          text: "Black Tie Hospitality provides property management services including tenant sourcing, lease management, rent collection, maintenance coordination, financial reporting, and legal compliance support. The exact scope is defined in the individual management agreement signed with each owner.",
        },
        {
          subtitle: "Exclusive Management",
          text: "During the term of the management agreement, owners agree not to engage another property management company for the same property, or to self-manage in a manner that conflicts with the services being provided. Breach of this clause may result in early termination penalties.",
        },
        {
          subtitle: "Agreement Duration & Renewal",
          text: "Management agreements are typically entered for a minimum period of 12 months and renew automatically unless terminated with 60 days' written notice by either party. Early termination by the owner may incur a fee as specified in the individual agreement.",
        },
      ],
    },
    {
      id: "03",
      title: "Fees & Revenue Sharing",
      content: [
        {
          subtitle: "Management Fee Models",
          text: "Black Tie Hospitality offers multiple fee structures: a fixed monthly management fee, a revenue-share model, or a custom model tailored to specific portfolios. The applicable model and rate are agreed upon and documented before service commencement.",
        },
        {
          subtitle: "Rent Disbursement",
          text: "Collected rent, net of applicable fees and deductions, will be disbursed to the property owner's registered bank account within the timeline specified in the management agreement, typically within 7 working days of collection.",
        },
        {
          subtitle: "Deductions",
          text: "Authorised deductions from owner disbursements include management fees, maintenance expenses pre-approved by the owner, legal fees where applicable, and any statutory dues payable on the owner's behalf.",
        },
      ],
    },
    {
      id: "04",
      title: "Maintenance & Upkeep",
      content: [
        {
          subtitle: "Routine Maintenance",
          text: "Black Tie Hospitality will coordinate routine and preventive maintenance to uphold property standards. Routine maintenance costs up to a pre-agreed threshold may be actioned without prior owner approval for efficiency.",
        },
        {
          subtitle: "Major Repairs",
          text: "For repairs or improvements exceeding the agreed threshold, written owner approval is required before work commences. We will obtain at least one quote and provide a recommendation, but the final decision rests with the owner.",
        },
      ],
    },
    {
      id: "05",
      title: "Termination",
      content: [
        {
          subtitle: "Termination by Owner",
          text: "Owners may terminate the management agreement with 60 days' written notice. Early termination during the minimum contract period will attract an exit fee as stipulated in the individual agreement. Ongoing tenant leases will need to be novated or transitioned appropriately.",
        },
        {
          subtitle: "Termination by Black Tie Hospitality",
          text: "We reserve the right to terminate any management agreement immediately in the event of owner fraud, misrepresentation, non-cooperation that prevents us from meeting our obligations, or illegal activity connected to the property.",
        },
      ],
    },
    {
      id: "06",
      title: "Governing Law",
      content: [
        {
          subtitle: "Jurisdiction",
          text: "All management agreements and these Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Jaipur, Rajasthan.",
        },
        {
          subtitle: "Dispute Resolution",
          text: "Before pursuing legal action, both parties agree to attempt resolution through good-faith negotiation. Failing that, disputes may be referred to a mutually agreed arbitrator in accordance with the Arbitration and Conciliation Act, 1996.",
        },
      ],
    },
  ];

  const activeTerms = activeTab === "guests" ? guestTerms : ownerTerms;

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <span style={styles.logoBlack}>BLACK</span>
            <span style={styles.logoTie}> TIE</span>
          </div>
          <a href="/" style={styles.navBack}>← Back to Home</a>
        </div>
      </nav>

      {/* Hero */}
      <header style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <p style={styles.heroEyebrow}>LEGAL &amp; COMPLIANCE</p>
          <h1 style={styles.heroTitle}>
            Terms &amp; <span style={styles.gold}>Conditions</span>
          </h1>
          <p style={styles.heroSub}>
            The rules and obligations that govern your relationship with Black Tie Hospitality —
            whether you're a guest or a property owner.
          </p>
          <p style={styles.heroMeta}>Last updated: June 2026</p>
        </div>
      </header>

      {/* Tab Selector */}
      <div style={styles.tabBar}>
        <div style={styles.tabInner}>
          <p style={styles.tabLabel}>VIEW TERMS FOR:</p>
          <div style={styles.tabs}>
            <button
              style={{ ...styles.tab, ...(activeTab === "guests" ? styles.tabActive : {}) }}
              onClick={() => setActiveTab("guests")}
            >
              Guests &amp; Travellers
            </button>
            <button
              style={{ ...styles.tab, ...(activeTab === "owners" ? styles.tabActive : {}) }}
              onClick={() => setActiveTab("owners")}
            >
              Property Owners
            </button>
          </div>
        </div>
      </div>

      {/* Intro strip */}
      <section style={styles.introStrip}>
        <div style={styles.introInner}>
          <p style={styles.introText}>
            {activeTab === "guests"
              ? "These terms govern the use of our booking platform and the experience within our managed properties. Please read them carefully before confirming your reservation."
              : "These terms govern the property management relationship between Black Tie Hospitality and property owners. They form part of the master management agreement."}
          </p>
        </div>
      </section>

      {/* Terms Sections */}
      <main style={styles.main}>
        <div style={styles.mainInner}>
          {activeTerms.map((section, i) => (
            <div key={`${activeTab}-${section.id}`} style={{ ...styles.section, ...(i % 2 === 1 ? styles.sectionAlt : {}) }}>
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

      {/* General Clauses */}
      <section style={styles.generalSection}>
        <div style={styles.generalInner}>
          <p style={styles.generalEye}>GENERAL PROVISIONS</p>
          <h2 style={styles.generalTitle}>Applicable to All Parties</h2>
          <div style={styles.generalGrid}>
            {[
              {
                icon: "⚖️",
                title: "Governing Law",
                text: "These terms are governed by the laws of India and subject to the jurisdiction of courts in Jaipur, Rajasthan.",
              },
              {
                icon: "📄",
                title: "Entire Agreement",
                text: "These terms, together with any signed service agreement, constitute the entire understanding between the parties and supersede all prior discussions.",
              },
              {
                icon: "✂️",
                title: "Severability",
                text: "If any provision of these terms is found unenforceable, the remaining provisions continue in full force and effect.",
              },
              {
                icon: "📬",
                title: "Notices",
                text: "All formal notices must be delivered in writing to our registered office address or via email to legal@blacktiehospitality.in.",
              },
            ].map((item, i) => (
              <div key={i} style={styles.generalCard}>
                <span style={styles.generalIcon}>{item.icon}</span>
                <h3 style={styles.generalCardTitle}>{item.title}</h3>
                <p style={styles.generalCardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={styles.ctaBanner}>
        <div style={styles.ctaInner}>
          <p style={styles.ctaEye}>READY TO GET STARTED?</p>
          <h2 style={styles.ctaTitle}>
            Elevate Your <span style={styles.gold}>Property Experience.</span>
          </h2>
          <p style={styles.ctaSub}>
            Whether you're a guest looking for a premium stay or an owner seeking professional management — we're here.
          </p>
          <div style={styles.ctaButtons}>
            <a href="/contact" style={styles.btnGold}>Contact Us</a>
            <a href="/privacy" style={styles.btnOutline}>Privacy Policy →</a>
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
  logoBlack: { color: white },
  logoTie: { color: gold },
  navBack: {
    color: gold,
    textDecoration: "none",
    fontSize: 13,
    letterSpacing: "0.05em",
    fontWeight: 500,
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
  gold: { color: gold },
  // TAB BAR
  tabBar: {
    backgroundColor: darkBg,
    borderBottom: `1px solid rgba(201,168,76,0.2)`,
    padding: "0 40px",
  },
  tabInner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: 32,
    padding: "20px 0",
  },
  tabLabel: {
    color: "rgba(255,255,255,0.35)",
    fontSize: 11,
    letterSpacing: "0.2em",
    margin: 0,
    whiteSpace: "nowrap",
  },
  tabs: {
    display: "flex",
    gap: 4,
  },
  tab: {
    backgroundColor: "transparent",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "rgba(255,255,255,0.55)",
    padding: "10px 28px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: "0.03em",
    transition: "all 0.2s",
    fontFamily: "inherit",
  },
  tabActive: {
    backgroundColor: gold,
    borderColor: gold,
    color: black,
  },
  // INTRO STRIP
  introStrip: {
    backgroundColor: gold,
    padding: "36px 40px",
  },
  introInner: {
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center",
  },
  introText: {
    color: black,
    fontSize: 15,
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
  // GENERAL SECTION
  generalSection: {
    backgroundColor: darkBg,
    padding: "80px 40px",
  },
  generalInner: {
    maxWidth: 1100,
    margin: "0 auto",
  },
  generalEye: {
    color: gold,
    fontSize: 11,
    letterSpacing: "0.3em",
    fontWeight: 600,
    marginBottom: 12,
  },
  generalTitle: {
    color: white,
    fontSize: 32,
    fontWeight: 800,
    margin: "0 0 48px",
    letterSpacing: "-0.02em",
  },
  generalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 24,
  },
  generalCard: {
    border: "1px solid rgba(201,168,76,0.2)",
    padding: "32px 28px",
    backgroundColor: "rgba(255,255,255,0.03)",
  },
  generalIcon: {
    fontSize: 28,
    display: "block",
    marginBottom: 16,
  },
  generalCardTitle: {
    color: white,
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
    letterSpacing: "-0.01em",
  },
  generalCardText: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 14,
    lineHeight: 1.75,
    margin: 0,
  },
  // CTA BANNER
  ctaBanner: {
    backgroundColor: black,
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
    border: "1px solid rgba(255,255,255,0.3)",
    color: white,
    padding: "14px 36px",
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: "0.05em",
    textDecoration: "none",
    display: "inline-block",
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

export default Terms;