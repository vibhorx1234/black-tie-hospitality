import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CTABanner from "../components/home/CTABanner";
import { HOTELS, APARTMENTS, ALL_PROPERTIES } from "../data/properties";
import { STATS } from "../data/clients";

// ── Responsive hook ────────────────────────────────────────────────────────────
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

// ─────────────────────────────────────────────────────────────
//  PropertyModal — full detail overlay with image gallery,
//  video player, Google Maps link, and amenities
// ─────────────────────────────────────────────────────────────

function PropertyModal({ selected, onClose, onPrev, onNext }) {
  const width = useWindowWidth();
  const isMobile = width < 768;

  // Gallery state
  const [activeTab, setActiveTab] = useState("photos"); // "photos" | "video"
  const [activeImg, setActiveImg] = useState(0);
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);

  // Reset gallery when a new property is opened
  useEffect(() => {
    setActiveImg(0);
    setActiveTab("photos");
    setActiveVideoIdx(0);
  }, [selected?.id]);

  // Lock body scroll
  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  if (!selected) return null;

  const hasImages = selected.images && selected.images.length > 0;

  // Normalise video: support string (single) or array (multiple)
  const videos = Array.isArray(selected.videos)
    ? selected.videos
    : selected.videos ? [selected.videos] : [];
  const hasVideo = videos.length > 0;

  const hasMedia = hasImages || hasVideo;

  // The image shown in the hero area
  const heroSrc = hasImages
    ? selected.images[activeImg]
    : "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80";

  // Prev / next within the image gallery
  const galleryPrev = (e) => {
    e.stopPropagation();
    setActiveImg((i) => (i - 1 + selected.images.length) % selected.images.length);
  };
  const galleryNext = (e) => {
    e.stopPropagation();
    setActiveImg((i) => (i + 1) % selected.images.length);
  };

  // Prev / next within the video gallery
  const videoPrev = (e) => {
    e.stopPropagation();
    setActiveVideoIdx((i) => (i - 1 + videos.length) % videos.length);
  };
  const videoNext = (e) => {
    e.stopPropagation();
    setActiveVideoIdx((i) => (i + 1) % videos.length);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
        display: "flex",
        justifyContent: "center",
        alignItems: isMobile ? "flex-end" : "center",
        zIndex: 1000,
        padding: isMobile ? 0 : "20px",
        overflowY: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "#111827",
          maxWidth: isMobile ? "100%" : "680px",
          width: "100%",
          borderRadius: isMobile ? "16px 16px 0 0" : "14px",
          overflow: "hidden",
          maxHeight: isMobile ? "92vh" : "90vh",
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(201,168,76,0.18)",
        }}
      >
        {/* Drag handle — mobile only */}
        {isMobile && (
          <div style={{
            position: "absolute",
            top: 10, left: "50%",
            transform: "translateX(-50%)",
            width: 36, height: 4,
            borderRadius: 2,
            background: "rgba(255,255,255,0.15)",
            zIndex: 10,
          }} />
        )}

        {/* ── MEDIA AREA ───────────────────────────────────────── */}
        <div style={{ position: "relative", flexShrink: 0 }}>

          {/* Tab switcher — only shown when both images and video exist */}
          {hasImages && hasVideo && (
            <div style={{
              position: "absolute", top: 14, left: 14,
              display: "flex", gap: 6, zIndex: 10,
            }}>
              {["photos", "video"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    border: `1px solid ${activeTab === tab ? "#C9A84C" : "rgba(255,255,255,0.18)"}`,
                    background: activeTab === tab ? "#C9A84C" : "rgba(13,17,23,0.7)",
                    color: activeTab === tab ? "#0D1117" : "#F5F0E8",
                    cursor: "pointer",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 14, right: 14,
              width: 32, height: 32, borderRadius: "50%",
              background: "rgba(13,17,23,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff", fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(4px)", lineHeight: 1, zIndex: 10,
            }}
          >
            ×
          </button>

          {/* ── PHOTO VIEW ── */}
          {(activeTab === "photos" || !hasVideo) && (
            <>
              <img
                src={heroSrc}
                alt={selected.name}
                style={{
                  width: "100%",
                  aspectRatio: isMobile ? "4/3" : "16/9",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Gradient overlay */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: "40%",
                background: "linear-gradient(transparent, rgba(17,24,39,0.95))",
                pointerEvents: "none",
              }} />

              {/* Gallery arrows — only when multiple images */}
              {hasImages && selected.images.length > 1 && (
                <>
                  <button onClick={galleryPrev} style={modalArrow("left")}>‹</button>
                  <button onClick={galleryNext} style={modalArrow("right")}>›</button>

                  {/* Image counter */}
                  <div style={{
                    position: "absolute", bottom: 12, left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.6)",
                    background: "rgba(0,0,0,0.45)",
                    padding: "3px 10px", borderRadius: "20px",
                    pointerEvents: "none",
                    zIndex: 4,
                  }}>
                    {activeImg + 1} / {selected.images.length}
                  </div>
                </>
              )}

              {/* Thumbnail strip — desktop, when 2+ images */}
              {!isMobile && hasImages && selected.images.length > 1 && (
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  display: "flex", gap: 4, padding: "8px 12px 8px",
                  overflowX: "auto", zIndex: 5,
                  scrollbarWidth: "none",
                }}>
                  {selected.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      onClick={() => setActiveImg(i)}
                      style={{
                        width: 48, height: 34,
                        objectFit: "cover",
                        borderRadius: 4,
                        flexShrink: 0,
                        cursor: "pointer",
                        border: `2px solid ${i === activeImg ? "#C9A84C" : "transparent"}`,
                        opacity: i === activeImg ? 1 : 0.6,
                        transition: "all 0.2s ease",
                      }}
                    />
                  ))}
                </div>
              )}
            </>
          )}

          {/* ── VIDEO VIEW — supports multiple videos ── */}
          {activeTab === "video" && hasVideo && (
            <div style={{ position: "relative" }}>
              <video
                key={activeVideoIdx}
                src={videos[activeVideoIdx]}
                preload="metadata"
                muted
                controls
                autoPlay
                style={{
                  width: "100%",
                  aspectRatio: isMobile ? "4/3" : "16/9",
                  objectFit: "cover",
                  display: "block",
                  background: "#000",
                }}
              />

              {/* Navigation arrows — only when multiple videos */}
              {videos.length > 1 && (
                <>
                  <button onClick={videoPrev} style={modalArrow("left")}>‹</button>
                  <button onClick={videoNext} style={modalArrow("right")}>›</button>

                  {/* Video counter */}
                  <div style={{
                    position: "absolute", bottom: 12, left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.6)",
                    background: "rgba(0,0,0,0.45)",
                    padding: "3px 10px", borderRadius: "20px",
                    pointerEvents: "none",
                    zIndex: 4,
                  }}>
                    {activeVideoIdx + 1} / {videos.length}
                  </div>

                  {/* Video thumbnail strip — desktop only */}
                  {!isMobile && (
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      display: "flex", gap: 4, padding: "8px 12px 8px",
                      overflowX: "auto", zIndex: 5,
                      scrollbarWidth: "none",
                    }}>
                      {videos.map((src, i) => (
                        <video
                          key={i}
                          src={src}
                          muted
                          onClick={() => setActiveVideoIdx(i)}
                          style={{
                            width: 64, height: 38,
                            objectFit: "cover",
                            borderRadius: 4,
                            flexShrink: 0,
                            cursor: "pointer",
                            border: `2px solid ${i === activeVideoIdx ? "#C9A84C" : "transparent"}`,
                            opacity: i === activeVideoIdx ? 1 : 0.6,
                            transition: "all 0.2s ease",
                          }}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* When only videos exist (no photos), show video directly in photos tab */}
          {!hasImages && hasVideo && activeTab === "photos" && (
            <div style={{ position: "relative" }}>
              <video
                key={i}
                src={videos[i]}
                preload="metadata"
                muted
                controls
                autoPlay
                style={{
                  width: "100%",
                  aspectRatio: isMobile ? "4/3" : "16/9",
                  objectFit: "cover",
                  display: "block",
                  background: "#000",
                }}
              />

              {videos.length > 1 && (
                <>
                  <button onClick={videoPrev} style={modalArrow("left")}>‹</button>
                  <button onClick={videoNext} style={modalArrow("right")}>›</button>

                  <div style={{
                    position: "absolute", bottom: 12, left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.6)",
                    background: "rgba(0,0,0,0.45)",
                    padding: "3px 10px", borderRadius: "20px",
                    pointerEvents: "none",
                    zIndex: 4,
                  }}>
                    {activeVideoIdx + 1} / {videos.length}
                  </div>

                  {!isMobile && (
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      display: "flex", gap: 4, padding: "8px 12px 8px",
                      overflowX: "auto", zIndex: 5,
                      scrollbarWidth: "none",
                    }}>
                      {videos.map((src, i) => (
                        <video
                          key={i}
                          src={src}
                          muted
                          onClick={() => setActiveVideoIdx(i)}
                          style={{
                            width: 64, height: 38,
                            objectFit: "cover",
                            borderRadius: 4,
                            flexShrink: 0,
                            cursor: "pointer",
                            border: `2px solid ${i === activeVideoIdx ? "#C9A84C" : "transparent"}`,
                            opacity: i === activeVideoIdx ? 1 : 0.6,
                            transition: "all 0.2s ease",
                          }}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* No media placeholder */}
          {!hasMedia && (
            <div style={{
              width: "100%",
              aspectRatio: isMobile ? "4/3" : "16/9",
              background: "#0D1117",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: 48, opacity: 0.25 }}>🏨</span>
            </div>
          )}
        </div>

        {/* ── SCROLLABLE CONTENT ────────────────────────────────── */}
        <div style={{ overflowY: "auto", flexGrow: 1, WebkitOverflowScrolling: "touch" }}>
          <div style={{ padding: isMobile ? "20px 18px 36px" : "24px 28px 32px", color: "#F5F0E8" }}>

            {/* Eyebrow */}
            <p style={{
              fontFamily: "'Cinzel', serif", fontSize: "0.6rem",
              letterSpacing: "0.25em", color: "#C9A84C",
              textTransform: "uppercase", margin: "0 0 8px 0",
            }}>
              {selected.type} · {selected.category}
            </p>

            {/* Title */}
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: isMobile ? "1.1rem" : "1.35rem",
              fontWeight: 600, color: "#F5F0E8",
              margin: "0 0 8px 0", lineHeight: 1.3,
            }}>
              {selected.name}
            </h2>

            {/* Location + Maps link */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem",
                color: "#C9A84C", margin: 0, letterSpacing: "0.05em",
              }}>
                📍 {selected.location}
              </p>
              {selected.mapsLink && (
                <a
                  href={selected.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#0D1117",
                    background: "#C9A84C",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    flexShrink: 0,
                    fontWeight: 600,
                  }}
                >
                  View on Maps ↗
                </a>
              )}
            </div>

            {/* Divider */}
            <div style={{ width: 36, height: 1, background: "rgba(201,168,76,0.4)", marginBottom: 14 }} />

            {/* Description */}
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: isMobile ? "0.78rem" : "0.8rem",
              color: "#8a8580", lineHeight: 1.8, margin: "0 0 18px 0",
            }}>
              {selected.description}
            </p>

            {/* Stats row */}
            <div style={{
              display: "flex", gap: isMobile ? 16 : 24,
              marginBottom: 18, padding: "12px 0",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              flexWrap: "wrap",
            }}>
              {selected.rooms && (
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#F5F0E8", margin: 0 }}>{selected.rooms}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Rooms</p>
                </div>
              )}
              <div>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#C9A84C", margin: 0 }}>{selected.rating} ★</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Rating</p>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem",
                letterSpacing: "0.18em", color: "#C9A84C",
                textTransform: "uppercase", marginBottom: 10, marginTop: 0,
              }}>
                Amenities
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {selected.amenities.map((a, i) => (
                  <span key={i} style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: isMobile ? "0.68rem" : "0.7rem",
                    color: "#8a8580",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "4px", padding: "4px 10px",
                  }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Video section — shown at the bottom when in photos tab and videos exist */}
            {hasVideo && activeTab === "photos" && hasImages && (
              <div style={{ marginTop: 20 }}>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem",
                  letterSpacing: "0.18em", color: "#C9A84C",
                  textTransform: "uppercase", marginBottom: 10, marginTop: 0,
                }}>
                  {videos.length > 1 ? `Property Videos (${videos.length})` : "Property Video"}
                </p>
                {videos.map((src, i) => (
                  <video
                    key={i}
                    src={src}
                    controls
                    style={{
                      width: "100%",
                      maxHeight: "360px",
                      objectFit: "contain",
                      borderRadius: 8,
                      border: "1px solid rgba(201,168,76,0.15)",
                      background: "#000",
                      display: "block",
                      marginBottom: i < videos.length - 1 ? 10 : 0,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper: arrow button style
function modalArrow(side) {
  return {
    position: "absolute",
    top: "50%",
    [side]: 12,
    transform: "translateY(-50%)",
    width: 36, height: 36,
    borderRadius: "50%",
    background: "rgba(13,17,23,0.65)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff", fontSize: 22,
    cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    backdropFilter: "blur(4px)",
    zIndex: 6,
    lineHeight: 1,
  };
}


// ─────────────────────────────────────────────────────────────
//  PropertyCard — grid card with hover effect
// ─────────────────────────────────────────────────────────────
function PropertyCard({ item, index, onClick, isMobile }) {
  const [hovered, setHovered] = useState(false);

  // Determine the thumbnail: first image, or null
  const thumb = item.images && item.images.length > 0 ? item.images[0] : null;

  // Normalise video: support string (single) or array (multiple)
  const videos = Array.isArray(item.videos)
    ? item.videos
    : item.videos ? [item.videos] : [];
  const hasVideo = videos.length > 0;

  // "And many more" placeholder card (no image AND no video)
  if (!thumb && !hasVideo) {
    return (
      <div style={{
        background: "#111827",
        border: "1px solid rgba(201,168,76,0.2)",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
      }}
        onClick={() => onClick && onClick(item)}
      >
        <div style={{
          background: "#0D1117", aspectRatio: "3/2",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "8px",
        }}>
          <span style={{ fontSize: isMobile ? "24px" : "32px" }}>🏨</span>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", color: "#C9A84C", letterSpacing: "0.1em" }}>View Details</span>
        </div>
        <div style={{ padding: isMobile ? "10px" : "12px" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: isMobile ? "11px" : "12px", color: "#F5F0E8", fontWeight: 600, margin: "0 0 2px" }}>{item.name}</p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: isMobile ? "10px" : "11px", color: "#C9A84C", margin: 0 }}>📍 {item.location}</p>
        </div>
      </div>
    );
  }

  // If no image but has video(s), show the first video as the thumbnail/hero
  const showVideoThumbnail = !thumb && hasVideo;

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

      {/* Star Rating — top right */}
      {item.rating && (
        <div style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 2,
          background: "rgba(13,17,23,0.75)",
          border: "1px solid rgba(201,168,76,0.35)",
          borderRadius: "4px",
          padding: isMobile ? "3px 6px" : "4px 8px",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}>
          {Array.from({ length: 5 }).map((_, i) => {
            const fill = i < Math.floor(item.rating) ? "#C9A84C"
              : i < item.rating ? "url(#half-gold-card)" : "rgba(201,168,76,0.2)";
            return (
              <svg key={i} width={isMobile ? 9 : 10} height={isMobile ? 9 : 10} viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half-gold-card" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="50%" stopColor="#C9A84C" />
                    <stop offset="50%" stopColor="rgba(201,168,76,0.2)" />
                  </linearGradient>
                </defs>
                <polygon
                  points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7"
                  fill={fill}
                />
              </svg>
            );
          })}
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: isMobile ? 9 : 10,
            color: "#C9A84C",
            letterSpacing: "0.04em",
            marginLeft: 1,
          }}>
            {item.rating}
          </span>
        </div>
      )}


      {/* Hover plus — desktop only */}
      {!isMobile && (
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "36px", height: "36px", borderRadius: "50%",
          border: "1px solid #C9A84C", color: "#C9A84C",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          background: "rgba(13,17,23,0.3)", backdropFilter: "blur(4px)",
          zIndex: 3, fontSize: "18px",
        }}>+</div>
      )}

      {/* Media area */}
      <div style={{ aspectRatio: "3/2", overflow: "hidden", position: "relative" }}>
        {showVideoThumbnail ? (
          <video
            src={videos[0]}
            preload="metadata"
            muted
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <img
            src={thumb}
            alt={item.name}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.5s ease",
            }}
          />
        )}
      </div>

      <div style={{ padding: isMobile ? "10px 10px" : "12px 14px" }}>
        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: isMobile ? "11px" : "12px",
          color: "#F5F0E8", fontWeight: 600,
          marginBottom: "4px", marginTop: 0,
          lineHeight: 1.3,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}>
          {item.name}
        </p>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: isMobile ? "10px" : "11px",
          color: "#C9A84C", margin: 0,
          display: "flex", alignItems: "center", gap: "4px",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>
          <span style={{ fontSize: "10px" }}>📍</span> {item.location}
        </p>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────
//  SectionHeader — unchanged
// ─────────────────────────────────────────────────────────────
function SectionHeader({ title, subtitle, isMobile }) {
  return (
    <div style={{ marginBottom: isMobile ? "16px" : "8px" }}>
      <h2 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: isMobile ? "clamp(16px, 4vw, 22px)" : "22px",
        color: "#0D1117", fontWeight: 700, margin: 0,
      }}>
        {title}
      </h2>
      <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#e8c97a)", margin: "8px 0" }} />
      <p style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: isMobile ? "12px" : "13px",
        color: "#6b6560", margin: 0,
      }}>
        {subtitle}
      </p>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function Properties() {
  const [selected, setSelected] = useState(null);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isSmall = width < 480;

  const mod = (n, m) => ((n % m) + m) % m;

  const openModal = (item) => setSelected(item);
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
      {/* ── HERO ── */}
      <section style={{
        paddingTop: "72px",
        minHeight: "clamp(280px, 40vw, 380px)",
        background: "#0D1117",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://picsum.photos/seed/prop-hero/1400/600)",
          backgroundSize: "cover", backgroundPosition: "center", opacity: 0.25,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #0D1117 30%, transparent 80%)",
        }} />

        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "clamp(36px, 6vw, 60px) clamp(1rem, 4vw, 2rem) clamp(36px, 5vw, 52px)",
          position: "relative", zIndex: 1, width: "100%", boxSizing: "border-box",
        }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
            fontWeight: 600, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px",
          }}>
            OUR PROPERTIES
          </p>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.6rem, 4vw, 3.2rem)",
            fontWeight: 700, color: "#F5F0E8",
            lineHeight: 1.15, marginBottom: "16px",
          }}>
            Spaces That Inspire.<br />Experiences That Last.
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(13px, 2vw, 15px)",
            color: "#8a8580", lineHeight: 1.7,
            maxWidth: "500px", marginBottom: "clamp(20px, 4vw, 36px)",
          }}>
            A curated portfolio of premium hotels and studio apartments across Jaipur and nearby cities, designed for comfort, convenience, and community living.
          </p>

          {/* Stats */}
          <div style={{
            display: "flex",
            gap: isMobile ? "20px" : "40px",
            flexWrap: "wrap",
          }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: isMobile ? "30px" : "36px",
                  height: isMobile ? "30px" : "36px",
                  border: "1.5px solid rgba(201,168,76,0.4)",
                  borderRadius: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <img
                    src={s.icon} alt={s.label}
                    style={{
                      width: isMobile ? "15px" : "18px",
                      height: isMobile ? "15px" : "18px",
                      objectFit: "contain",
                      filter: "invert(78%) sepia(40%) saturate(500%) hue-rotate(2deg)",
                    }}
                  />
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: isMobile ? "13px" : "15px",
                    color: "#F5F0E8", fontWeight: 700, margin: 0,
                  }}>
                    {s.value}
                  </p>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: isMobile ? "10px" : "11px",
                    color: "#6b6560", margin: 0,
                  }}>
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOTELS + STUDIO APARTMENTS — single unified section ── */}
      <section style={{ background: "#F5F0E8", padding: "clamp(40px, 6vw, 72px) 0 clamp(40px, 6vw, 72px)" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
          boxSizing: "border-box",
        }}>

          {/* ── HOTELS ── */}
          <SectionHeader
            title="HOTELS"
            subtitle="Premium stays for every kind of traveler."
            isMobile={isMobile}
          />
          <div
            className="prop-grid"
            style={{ marginTop: isMobile ? "16px" : "20px", display: "grid", gap: isMobile ? "10px" : "12px" }}
          >
            {HOTELS.map((h, i) => (
              <PropertyCard key={h.id} item={h} index={i} onClick={openModal} isMobile={isMobile} />
            ))}
          </div>

          {/* ── Internal divider ── */}
          <div style={{
            margin: isMobile ? "32px 0" : "52px 0",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
          }} />

          {/* ── STUDIO APARTMENTS ── */}
          <SectionHeader
            title="STUDIO APARTMENTS"
            subtitle="Modern living spaces for professionals, students & long-term stays."
            isMobile={isMobile}
          />
          <div
            className="prop-grid"
            style={{ marginTop: isMobile ? "16px" : "20px", display: "grid", gap: isMobile ? "10px" : "12px" }}
          >
            {APARTMENTS.map((a, i) => (
              <PropertyCard key={a.id} item={a} index={i} onClick={openModal} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LIST YOUR PROPERTY CTA ── */}
      <section style={{ padding: "clamp(36px, 6vw, 56px) 0", background: "#0D1117" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
          boxSizing: "border-box",
        }}>
          <div style={{
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "12px",
            padding: isMobile ? "28px 20px" : "clamp(28px, 5vw, 48px) clamp(24px, 5vw, 56px)",
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
            <div style={{ position: "relative", zIndex: 1, flex: 1, minWidth: 0 }}>
              <h2 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
                color: "#F5F0E8", fontWeight: 700,
                marginBottom: "8px", marginTop: 0,
              }}>
                Don't See the Property You're Looking For?
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: isMobile ? "13px" : "14px",
                color: "#8a8580", lineHeight: 1.6, margin: 0,
              }}>
                We're always onboarding new properties in prime locations.
                Let's connect and explore opportunities together.
              </p>
            </div>
            <Link
              to="/contact"
              style={{
                position: "relative", zIndex: 1,
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#C9A84C", color: "#0D1117",
                padding: isMobile ? "12px 20px" : "14px 28px",
                borderRadius: "4px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: isMobile ? "12px" : "13px",
                fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.2s",
                whiteSpace: "nowrap", flexShrink: 0,
                width: isMobile ? "100%" : "auto",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              List Your Property With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROPERTY DETAIL MODAL ── */}
      <PropertyModal
        selected={selected}
        onClose={closeModal}
        onPrev={prevModal}
        onNext={nextModal}
      />

      <style>{`
        /* ── Property grid: 5 cols desktop → 4 → 3 → 2 → 1 ── */
        .prop-grid {
          grid-template-columns: repeat(5, 1fr);
        }
        @media (max-width: 1100px) {
          .prop-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .prop-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .prop-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 340px) {
          .prop-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}