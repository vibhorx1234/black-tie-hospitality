import React from "react";
import { FOUNDERS, MISSION_QUOTE } from "../../data/founders";
import LinkedInIcon from "../../vectors/linkedin.svg";

const LinkedInBtn = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      // justifyContent: "center",
      // width: "30px",
      // height: "30px",
      // borderRadius: "6px",
      // background: "rgba(201,168,76,0.1)",
      // border: "1px solid rgba(201,168,76,0.3)",
      textDecoration: "none",
      // transition: "all 0.2s",
    }}
    // onMouseEnter={(e) =>
    //   (e.currentTarget.style.background = "rgba(201,168,76,0.2)")
    // }
    // onMouseLeave={(e) =>
    //   (e.currentTarget.style.background = "rgba(201,168,76,0.1)")
    // }
  >
    <img
      src={LinkedInIcon}
      alt="LinkedIn"
      style={{
        width: "24px",
        height: "24px",
        filter:
          "brightness(0) saturate(100%) invert(72%) sepia(47%) saturate(500%) hue-rotate(5deg)",
      }}
    />
  </a>
);

const QuoteBlock = () => (
  <div
    style={{
      background:
        "linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))",
      border: "1px solid rgba(201,168,76,0.15)",
      borderRadius: "12px",
      padding: "36px 40px",
      textAlign: "center",
      position: "relative",
    }}
  >
    <div
      style={{
        fontSize: "48px",
        color: "rgba(201,168,76,0.3)",
        fontFamily: "Georgia, serif",
        lineHeight: 0.8,
        marginBottom: "16px",
      }}
    >
      "
    </div>
    <p
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: "16px",
        color: "#d0ccc4",
        lineHeight: 1.7,
        fontStyle: "italic",
      }}
    >
      {MISSION_QUOTE}
    </p>
    <div
      style={{
        fontSize: "48px",
        color: "rgba(201,168,76,0.3)",
        fontFamily: "Georgia, serif",
        lineHeight: 0.8,
        marginTop: "16px",
        textAlign: "right",
      }}
    >
      "
    </div>
  </div>
);

const FounderCard = ({ founder }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center", // improved alignment
        gap: "20px",
      }}
    >
      {/* Avatar */}
      <div style={{ flexShrink: 0 }}>
        {founder.image ? (
          <img
            src={founder.image}
            alt={founder.name}
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(201,168,76,0.3)",
            }}
          />
        ) : (
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))",
              border: "2px solid rgba(201,168,76,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              color: "#C9A84C",
              letterSpacing: "0.05em",
            }}
          >
            {founder.avatar}
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <h3
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "16px",
            color: "#F5F0E8",
            fontWeight: 600,
            marginBottom: "4px",
          }}
        >
          {founder.name}
        </h3>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "12px",
            color: "#C9A84C",
            marginBottom: "10px",
            letterSpacing: "0.04em",
          }}
        >
          {founder.role}
        </p>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "13px",
            color: "#8a8580",
            lineHeight: 1.6,
            marginBottom: "14px",
            maxWidth: "260px",
          }}
        >
          {founder.bio}
        </p>
        <LinkedInBtn href={founder.linkedin} />
      </div>
    </div>
  );
};

export default function FoundersSection() {
  return (
    <section style={{ background: "#111827", padding: "90px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Label */}
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "16px",
          }}
        >
          OUR FOUNDER
        </p>

        {/* Single Founder Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="founders-grid"
        >
          <FounderCard founder={FOUNDERS[0]} />
          <QuoteBlock />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .founders-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}