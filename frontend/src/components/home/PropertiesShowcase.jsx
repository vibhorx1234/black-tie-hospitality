import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { ALL_PROPERTIES } from "../../data/properties";

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

// ── Visible cards by breakpoint ────────────────────────────────────────────────
function getVisible(width) {
  if (width < 480) return 1.2;
  if (width < 768) return 2.1;
  if (width < 1024) return 3.1;
  return 4;
}

// ─────────────────────────────────────────────────────────────
//  PropertyModal — full detail overlay (ported from properties.jsx)
// ─────────────────────────────────────────────────────────────
function PropertyModal({ selected, onClose, onPrev, onNext }) {
  const width = useWindowWidth();
  const isMobile = width < 768;

  const [activeTab, setActiveTab] = useState("photos");
  const [activeImg, setActiveImg] = useState(0);

  // Reset gallery when a new property is opened
  useEffect(() => {
    setActiveImg(0);
    setActiveTab("photos");
  }, [selected?.id]);

  // Lock body scroll
  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  if (!selected) return null;

  const hasImages = selected.images && selected.images.length > 0;
  const hasVideo = !!selected.video;
  const hasMedia = hasImages || hasVideo;

  const heroSrc = hasImages
    ? selected.images[activeImg]
    : selected.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80";

  const galleryPrev = (e) => {
    e.stopPropagation();
    setActiveImg((i) => (i - 1 + selected.images.length) % selected.images.length);
  };
  const galleryNext = (e) => {
    e.stopPropagation();
    setActiveImg((i) => (i + 1) % selected.images.length);
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

        {/* ── MEDIA AREA ── */}
        <div style={{ position: "relative", flexShrink: 0 }}>

          {/* Tab switcher — only when both images and video exist */}
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

          {/* Modal prev/next property nav arrows */}
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }} style={modalNavArrow("left")}>‹</button>
          <button onClick={(e) => { e.stopPropagation(); onNext(); }} style={modalNavArrow("right")}>›</button>

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
                  <button onClick={galleryPrev} style={galleryArrow("left")}>‹</button>
                  <button onClick={galleryNext} style={galleryArrow("right")}>›</button>

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

          {/* ── VIDEO VIEW ── */}
          {activeTab === "video" && hasVideo && (
            <video
              src={selected.video}
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
          )}

          {/* Only video, no photos */}
          {!hasImages && hasVideo && activeTab === "photos" && (
            <video
              src={selected.video}
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
          )}

          {/* No media placeholder */}
          {!hasMedia && !selected.image && (
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

        {/* ── SCROLLABLE CONTENT ── */}
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
              {selected.units && (
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#F5F0E8", margin: 0 }}>{selected.units}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Units</p>
                </div>
              )}
              <div>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#C9A84C", margin: 0 }}>{selected.rating} ★</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", margin: "2px 0 0" }}>Rating</p>
              </div>
            </div>

            {/* Amenities */}
            {selected.amenities && selected.amenities.length > 0 && (
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
            )}

            {/* Video section — bottom of content when in photos tab */}
            {hasVideo && activeTab === "photos" && hasImages && (
              <div style={{ marginTop: 20 }}>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem",
                  letterSpacing: "0.18em", color: "#C9A84C",
                  textTransform: "uppercase", marginBottom: 10, marginTop: 0,
                }}>
                  Property Video
                </p>
                <video
                  src={selected.video}
                  controls
                  style={{
                    width: "100%",
                    borderRadius: 8,
                    border: "1px solid rgba(201,168,76,0.15)",
                    background: "#000",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Gallery arrow (within the image, for multi-image cycling) ─────────────────
function galleryArrow(side) {
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

// ── Property nav arrow (prev/next property inside modal) ──────────────────────
function modalNavArrow(side) {
  return {
    position: "absolute",
    bottom: 12,
    [side]: 12,
    width: 34, height: 34,
    borderRadius: "50%",
    background: "rgba(13,17,23,0.65)",
    border: "1px solid rgba(201,168,76,0.3)",
    color: "#C9A84C",
    cursor: "pointer",
    fontSize: 20,
    display: "flex", alignItems: "center", justifyContent: "center",
    backdropFilter: "blur(4px)",
    lineHeight: 1,
    zIndex: 10,
  };
}

// ─────────────────────────────────────────────────────────────
//  PropertiesShowcase — main export
// ─────────────────────────────────────────────────────────────
export default function PropertiesShowcase() {
  const width = useWindowWidth();
  const isMobile = width < 768;

  const VISIBLE = getVisible(width);
  const ITEM_WIDTH = 100 / VISIBLE;

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const total = ALL_PROPERTIES.length;
  const mod = (n, m) => ((n % m) + m) % m;

  const next = () => setIndex((p) => mod(p + 1, total));
  const prev = () => setIndex((p) => mod(p - 1, total));

  const selectedIndex = selected
    ? ALL_PROPERTIES.findIndex((p) => p.id === selected.id)
    : -1;

  const nextModal = () => {
    const nextIdx = mod(selectedIndex + 1, total);
    setSelected(ALL_PROPERTIES[nextIdx]);
    setIndex(nextIdx);
  };
  const prevModal = () => {
    const prevIdx = mod(selectedIndex - 1, total);
    setSelected(ALL_PROPERTIES[prevIdx]);
    setIndex(prevIdx);
  };

  // ── Swipe handlers ────────────────────────────────────────────────────────
  const onStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const onEnd = (e) => {
    if (!isDragging.current) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - startX.current;
    if (diff > 50) prev();
    if (diff < -50) next();
    isDragging.current = false;
  };

  // Helper: get the thumbnail to show on the carousel card
  // Prefers images[0], falls back to legacy `image` field
  const getThumb = (p) =>
    (p.images && p.images.length > 0) ? p.images[0] : (p.image || "");

  return (
    <section style={{ background: "#0D1117", padding: "clamp(2.5rem, 6vw, 5rem) clamp(1rem, 5vw, 2rem)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 1rem" : "0 2rem" }}>

        {/* ── HEADER ── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: isMobile ? "20px" : "28px",
        }}>
          <div>
            <p style={{
              fontFamily: "'Cinzel', serif",
              color: "#C9A84C",
              letterSpacing: "0.22em",
              fontSize: isMobile ? "0.7rem" : "0.85rem",
              margin: 0,
              textTransform: "uppercase",
            }}>
              featured Properties
            </p>
            <div style={{
              width: 36,
              height: 1.5,
              background: "linear-gradient(90deg, #C9A84C, transparent)",
              marginTop: 6,
            }} />
          </div>

          {!isMobile && <ViewAllLink />}
        </div>

        {/* ── CAROUSEL ── */}
        <div style={{ position: "relative", overflow: "hidden" }}>

          {!isMobile && (
            <button onClick={prev} style={arrowStyle("left")}>‹</button>
          )}

          {/* TRACK */}
          <div
            onMouseDown={onStart}
            onMouseUp={onEnd}
            onMouseLeave={() => { isDragging.current = false; }}
            onTouchStart={onStart}
            onTouchEnd={onEnd}
            style={{
              display: "flex",
              transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: `translateX(-${index * ITEM_WIDTH}%)`,
              touchAction: "pan-y",
            }}
          >
            {ALL_PROPERTIES.concat(ALL_PROPERTIES).map((p, i) => (
              <div
                key={i}
                style={{
                  minWidth: `${ITEM_WIDTH}%`,
                  padding: isMobile ? "4px" : "6px",
                  flexShrink: 0,
                }}
              >
                <div
                  onClick={() => setSelected(p)}
                  className="prop-card"
                  style={{
                    position: "relative",
                    borderRadius: isMobile ? "8px" : "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                    aspectRatio: "3/2",
                    width: "100%",
                    height: 0,
                    paddingBottom: "66.66%",   // 3:2 ratio enforced via padding trick
                  }}
                >
                  // AFTER
                  <img
                    src={getThumb(p)}
                    alt={p.name}
                    className="prop-img"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      display: "block",
                    }}
                  />

                  <div className="prop-overlay" />
                  <div className="prop-plus">+</div>

                  {/* Star Rating — top right */}
                  {p.rating && (
                    <div style={{
                      position: "absolute",
                      top: isMobile ? 8 : 10,
                      right: isMobile ? 8 : 10,
                      background: "rgba(13,17,23,0.75)",
                      borderRadius: "4px",
                      padding: isMobile ? "3px 6px" : "4px 8px",
                      backdropFilter: "blur(4px)",
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                    }}>
                      {Array.from({ length: 5 }).map((_, i) => {
                        const fill = i < Math.floor(p.rating) ? "#C9A84C"
                          : i < p.rating ? "url(#half-gold)" : "rgba(201,168,76,0.2)";
                        return (
                          <svg key={i} width={isMobile ? 9 : 11} height={isMobile ? 9 : 11} viewBox="0 0 20 20">
                            <defs>
                              <linearGradient id="half-gold" x1="0" x2="1" y1="0" y2="0">
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
                        {p.rating}
                      </span>
                    </div>
                  )}

                  {/* Text */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    padding: isMobile ? "28px 10px 10px" : "40px 12px 12px",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.88))",
                    boxSizing: "border-box",
                  }}>
                    <p style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: isMobile ? 13 : 15,
                      color: "#fff",
                      fontWeight: 600,
                      margin: "0 0 2px",
                      lineHeight: 1.3,
                    }}>
                      {p.name}
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: isMobile ? 11.5 : 13.5,
                      color: "#C9A84C",
                      margin: 0,
                    }}>
                      📍 {p.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!isMobile && (
            <button onClick={next} style={arrowStyle("right")}>›</button>
          )}
        </div>

        {/* ── Mobile: dot indicators + swipe hint ── */}
        {isMobile && (
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", gap: 6 }}>
              {ALL_PROPERTIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    width: i === index % total ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === index % total ? "#C9A84C" : "rgba(201,168,76,0.25)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "10px",
              color: "rgba(201,168,76,0.35)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              margin: 0,
            }}>
              Swipe to explore
            </p>
          </div>
        )}

        {/* ── Mobile: View All button below carousel ── */}
        {isMobile && (
          <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
            <ViewAllLink fullWidth />
          </div>
        )}
      </div>

      {/* ── MODAL ── */}
      <PropertyModal
        selected={selected}
        onClose={() => setSelected(null)}
        onPrev={prevModal}
        onNext={nextModal}
      />

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        .prop-card:hover .prop-img,
        .prop-card:focus .prop-img {
          transform: scale(1.06);
        }

        .prop-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0);
          transition: background 0.3s ease;
        }
        .prop-card:hover .prop-overlay {
          background: rgba(0,0,0,0.42);
        }

        .prop-plus {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #C9A84C;
          color: #C9A84C;
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          background: rgba(13,17,23,0.3);
          backdrop-filter: blur(4px);
          pointer-events: none;
        }
        .prop-card:hover .prop-plus {
          opacity: 1;
        }

        @media (max-width: 767px) {
          .prop-plus { display: none; }
        }
      `}</style>
    </section>
  );
}

// ── View All Link ─────────────────────────────────────────────────────────────
function ViewAllLink({ fullWidth = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/properties"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: hovered ? "#0D1117" : "#C9A84C",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: hovered ? "12px" : "7px",
        transition: "all 0.25s ease",
        ...(fullWidth ? {
          width: "100%",
          maxWidth: 320,
          padding: "12px 24px",
          border: "1px solid rgba(201,168,76,0.45)",
          borderRadius: "8px",
          background: hovered ? "#C9A84C" : "transparent",
        } : {
          padding: "8px 0",
          borderBottom: "1px solid",
          borderColor: hovered ? "#C9A84C" : "transparent",
        }),
      }}
    >
      View All Properties <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
    </Link>
  );
}

// ── Carousel arrow button styles ──────────────────────────────────────────────
function arrowStyle(side) {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "8px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "rgba(13,17,23,0.75)",
    border: "1px solid rgba(201,168,76,0.35)",
    color: "#C9A84C",
    cursor: "pointer",
    zIndex: 10,
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    transition: "background 0.2s",
    lineHeight: 1,
  };
}