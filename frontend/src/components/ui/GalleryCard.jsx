import { useState } from "react";
import React from "react";

export default function GalleryCard({ item }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{
        perspective: "1000px",
        aspectRatio: "4/3",
        cursor: "pointer",
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          borderRadius: "8px",
        }}
      >
        {/* Front - Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => {
              e.target.parentElement.style.background = "#1a1f2e";
              e.target.style.display = "none";
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(10,13,18,0.7) 25%, transparent 60%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "14px",
              right: "14px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "15px",
                fontWeight: "600",
                color: "#F5F0E8",
                margin: 0,
              }}
            >
              {item.title}
            </h3>
          </div>
        </div>

        {/* Back - Description */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #0D1117, #1a1f2e)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "1.5rem",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "2px",
              background: "linear-gradient(90deg, #C9A84C, #e8c97a)",
              borderRadius: "2px",
            }}
          />
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "17px",
              fontWeight: "600",
              color: "#C9A84C",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "13px",
              color: "rgba(245,240,232,0.7)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {item.description}
          </p>
          {item.category && (
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#C9A84C",
                background: "rgba(201,168,76,0.1)",
                padding: "3px 10px",
                borderRadius: "20px",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              {item.category}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}