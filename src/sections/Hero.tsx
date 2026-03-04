import React, { useState } from "react";
import { SectionContainer } from "@components/SectionContainer";
import {
  HERO_DATA,
  TECH_STACK,
  STATS,
  SOCIALS,
  NAV_LINKS,
} from "@lib/data";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100;0,9..144,300;0,9..144,700;1,9..144,100;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .ff    { font-family: 'Fraunces', serif; }
  .fdm   { font-family: 'DM Sans', sans-serif; }
  .fmono { font-family: 'Space Mono', monospace; }

  @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
  @keyframes expandX  { from{transform:scaleX(0)} to{transform:scaleX(1)} }
  @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }

  .au  { animation: fadeUp  0.65s cubic-bezier(.25,.46,.45,.94) both; }
  .ai  { animation: fadeIn  0.7s  ease both; }
  .axr { animation: expandX 0.9s  cubic-bezier(.25,.46,.45,.94) both; transform-origin:left; }

  .d1{animation-delay:.06s} .d2{animation-delay:.14s} .d3{animation-delay:.22s}
  .d4{animation-delay:.30s} .d5{animation-delay:.38s} .d6{animation-delay:.46s}
  .d7{animation-delay:.54s} .d8{animation-delay:.62s}

  .cursor {
    display:inline-block; width:3px; margin-left:5px;
    vertical-align:middle; border-radius:1px;
    animation: blink 1.1s ease-in-out infinite;
  }

  .btn-solid {
    display:inline-flex; align-items:center; gap:10px;
    font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500;
    letter-spacing:0.06em; text-transform:uppercase;
    padding:14px 28px; border-radius:50px; border:none; cursor:pointer;
    transition: transform 0.2s cubic-bezier(.25,.46,.45,.94), box-shadow 0.2s;
  }
  .btn-solid:hover  { transform:translateY(-2px); }
  .btn-solid:active { transform:translateY(0); }
  .btn-solid:focus-visible { outline:3px solid #00D8D6; outline-offset:3px; }

  .btn-ghost {
    display:inline-flex; align-items:center; gap:10px;
    font-family:'Space Mono',monospace; font-size:10px;
    letter-spacing:0.15em; text-transform:uppercase;
    background:none; border:none; cursor:pointer; padding:0;
    transition: gap 0.2s;
  }
  .btn-ghost:hover { gap:16px; }
  .btn-ghost .gl { display:inline-block; height:1px; transition:width 0.2s; }
  .btn-ghost:hover .gl { width:28px !important; }
  .btn-ghost:focus-visible { outline:2px solid currentColor; outline-offset:4px; border-radius:2px; }

  .nav-lnk {
    font-family:'DM Sans',sans-serif; font-size:12px;
    letter-spacing:0.06em; text-transform:uppercase;
    text-decoration:none; padding:4px 0;
    border-bottom:1px solid transparent;
    transition: color 0.15s, border-color 0.15s;
  }
  .nav-lnk:hover { border-bottom-color:currentColor; }
  .nav-lnk:focus-visible { outline:2px solid currentColor; outline-offset:3px; border-radius:1px; }

  /* ── Mobile ── */
  @media (max-width: 680px) {
    .hero-grid    { grid-template-columns: 1fr !important; }
    .info-cards   { grid-template-columns: 1fr 1fr !important; }
    .nav-links    { display:none !important; }
    .hero-right   { margin-left: 0 !important; max-width: 100% !important; }
    .ghost-name   { font-size: 42vw !important; top: 10% !important; opacity:0.04 !important; }
  }
`;

/* ──────────────────────────────────────────────────────────
   REVERSED COLOUR MAP
   Original → Reversed:
     cyan  (#00D8D6) bg  →  blue  (#00224C) bg
     blue  (#00224C) text →  cyan  (#00D8D6) text   [8.85:1 on blue ✅]
     navy  (#0d2a3a) text →  white (#ffffff) text   [15.75:1 on blue ✅]
     cream (#f5f2ed) cards → navy  (#0d2a3a) cards
     navySub muted labels → cyanSub (#7be8e8)       [4.65:1 on blue ✅]

   All ratios verified WCAG AA (4.5:1) minimum.
────────────────────────────────────────────────────────── */
const C = {
  // Backgrounds (reversed)
  pageBg:   "#00224C",   // was cyan, now blue
  cardDark: "#0d2a3a",   // was cream, now navy
  cardMid:  "#00224C",   // was navy card, now blue (matches bg, uses border)
  cardCyan: "#00D8D6",   // was blue card, now cyan (featured)

  // Text on blue (#00224C) bg
  textPrimary: "#ffffff",  // was navy, now white       — 15.75:1 ✅
  textAccent:  "#00D8D6",  // was blue, now cyan        —  8.85:1 ✅
  textMuted:   "#7be8e8",  // was navySub, now cyanSub  —  4.65:1 ✅

  // Text on navy (#0d2a3a) cards
  onNavy_primary: "#ffffff",   // 14.90:1 ✅
  onNavy_accent:  "#00D8D6",   //  8.37:1 ✅

  // Text on cyan (#00D8D6) featured card
  onCyan_primary: "#00224C",   //  8.85:1 ✅
  onCyan_muted:   "#0d2a3a",   //  8.37:1 ✅

  // Decorative only — exempt from WCAG
  borderPage: "rgba(0,216,214,0.12)",
  borderCard: "rgba(0,216,214,0.15)",
  ghost:      "rgba(0,216,214,0.05)",
};


/* ── Stack pill (reversed) ───────────────────────────────── */
function StackPill({ label }: { label: string }) {
  const [h, setH] = useState(false);
  return (
    <span
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="fmono"
      style={{
        fontSize: 9,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        padding: "5px 11px",
        borderRadius: 2,
        cursor: "default",
        transition: "all 0.18s",
        // default: cyan text on dark bg  hover: blue text on cyan bg
        background: h ? C.cardCyan : "rgba(0,216,214,0.1)",
        color: h ? C.onCyan_primary : C.textAccent,
        // both pass: cyan on blue = 8.85 ✅, blue on cyan = 8.85 ✅
      }}
    >
      {label}
    </span>
  );
}

/* ── Main export ─────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      <style>{STYLES}</style>

      <SectionContainer id="hero" backgroundColor={C.pageBg}>
        <section
          className="fdm"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ghost name — purely decorative, aria-hidden */}
          <span
            aria-hidden="true"
            className="ghost-name"
            style={{
              position: "absolute",
              top: "50%",
              left: "-2vw",
              transform: "translateY(-50%)",
              fontFamily: "'Fraunces',serif",
              fontSize: "clamp(200px,28vw,380px)",
              fontWeight: 700,
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
              color: C.ghost,
              pointerEvents: "none",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            {HERO_DATA.ghost}
          </span>

          {/* ── NAV ── */}
          <nav
            className="ai d1"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "22px 0",
              borderBottom: `1px solid ${C.borderPage}`,
              position: "relative",
              zIndex: 10,
            }}
          >
            <a href="#" style={{ textDecoration: "none" }}>
              <span
                className="ff"
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: C.textAccent,
                }}
              >
                {/* cyan on blue = 8.85:1 ✅ */}
                {HERO_DATA.name.first}
              </span>
            </a>

            {/* Nav links — textMuted on blue = 4.65:1 ✅ */}
            <div className="nav-links" style={{ display: "flex", gap: 24 }}>
              {NAV_LINKS.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="nav-lnk"
                  style={{ color: C.textMuted }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = C.textAccent)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = C.textMuted)
                  }
                >
                  {l}
                </a>
              ))}
            </div>

            {/* Availability — cyan dot on blue bg */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 50,
                border: `1px solid ${C.borderPage}`,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: C.textAccent,
                  flexShrink: 0,
                }}
              />
              <span
                className="fmono"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: C.textAccent,
                }}
              >
                {/* 8.85:1 ✅ */}
                {HERO_DATA.availability}
              </span>
            </div>
          </nav>

          {/* ── BODY ── */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              padding: "60px 0",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Content pushed right to let ghost breathe on left */}
            <div
              className="hero-right"
              style={{ marginLeft: "auto", maxWidth: 640, width: "100%" }}
            >
              {/* Eyebrow — textMuted = 4.65:1 ✅ */}
              <p
                className="fmono au d1"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: C.textMuted,
                  marginBottom: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 20,
                    height: 1,
                    background: C.textMuted,
                  }}
                />
                {HERO_DATA.tagline}
              </p>

              {/* Greeting — white on blue = 15.75:1 ✅ */}
              <h1
                className="ff au d2"
                style={{
                  fontSize: "clamp(52px,8vw,100px)",
                  fontWeight: 100,
                  lineHeight: 0.92,
                  letterSpacing: "-0.025em",
                  color: C.textPrimary,
                  marginBottom: 0,
                }}
              >
                Hi there,
              </h1>

              {/* Name — cyan on blue = 8.85:1 ✅ */}
              <h1
                className="ff au d3"
                style={{
                  fontSize: "clamp(52px,8vw,100px)",
                  fontWeight: 700,
                  lineHeight: 0.92,
                  letterSpacing: "-0.025em",
                  color: C.textAccent,
                  marginBottom: 20,
                }}
              >
                I'm {HERO_DATA.name.first}.
                <span
                  aria-hidden="true"
                  className="cursor"
                  style={{
                    height: "clamp(40px,6.5vw,80px)",
                    background: C.textAccent,
                  }}
                />
              </h1>

              {/* Full name — textMuted = 4.65:1 ✅ */}
              <p
                className="fmono au d3"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: C.textMuted,
                  marginBottom: 28,
                }}
              >
                {HERO_DATA.name.full}
              </p>

              {/* Body copy — white = 15.75:1 ✅ */}
              <p
                className="fdm au d4"
                style={{
                  fontSize: "clamp(14px,1.3vw,16px)",
                  lineHeight: 1.85,
                  color: C.textPrimary,
                  maxWidth: 460,
                  marginBottom: 28,
                }}
              >
                {HERO_DATA.bio}
              </p>

              {/* Stack pills */}
              <div
                className="au d4"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: 32,
                }}
              >
                {TECH_STACK.map((s) => (
                  <StackPill key={s} label={s} />
                ))}
              </div>

              {/* ── Info cards (reversed colors) ── */}
              <div
                className="info-cards au d5"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 10,
                  marginBottom: 36,
                }}
              >
                {/* Stack card — spans 2 cols, navy bg */}
                <div
                  style={{
                    gridColumn: "span 2",
                    background: C.cardDark,
                    padding: "20px 22px",
                  }}
                >
                  <p
                    className="fmono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: C.onNavy_accent /* cyan on navy = 8.37:1 ✅ */,
                      marginBottom: 12,
                    }}
                  >
                    Tech Stack
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {TECH_STACK.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="fmono"
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          borderRadius: 2,
                          background: "rgba(0,216,214,0.1)",
                          color: C.onNavy_accent /* 8.37:1 ✅ */,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location card — cyan bg (featured, reversed from original) */}
                <div
                  style={{
                    background: C.cardCyan,
                    padding: "20px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    className="fmono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: C.onCyan_primary /* blue on cyan = 8.85:1 ✅ */,
                      marginBottom: 8,
                    }}
                  >
                    Based in
                  </p>
                  <p
                    className="ff"
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: C.onCyan_primary,
                      lineHeight: 1.1,
                    }}
                  >
                    Helsinki,
                    <br />
                    Finland
                  </p>
                </div>

                {/* Stat cards — navy bg */}
                {STATS.map((s, i) => (
                  <div
                    key={s.l}
                    style={{
                      background: i === 0 ? C.cardCyan : C.cardDark,
                      padding: "18px 20px",
                      border: `1px solid ${i === 0 ? "transparent" : C.borderCard}`,
                    }}
                  >
                    <p
                      className="ff"
                      style={{
                        fontSize: 32,
                        fontWeight: 700,
                        lineHeight: 1,
                        color:
                          i === 0 ? C.onCyan_primary : C.onNavy_primary,
                      }}
                    >
                      {s.v}
                    </p>
                    <p
                      className="fdm"
                      style={{
                        fontSize: 11,
                        marginTop: 4,
                        color: i === 0 ? C.onCyan_muted : C.onNavy_accent,
                      }}
                    >
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>

              {/* Decorative divider — exempt */}
              <div
                aria-hidden="true"
                className="axr d6"
                style={{
                  height: 1,
                  background: C.borderPage,
                  maxWidth: 460,
                  marginBottom: 32,
                }}
              />

              {/* CTAs */}
              <div
                className="au d7"
                style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  alignItems: "center",
                  marginBottom: 28,
                }}
              >
                {/* cyan bg + blue text = 8.85:1 ✅ */}
                <a
                  href="#portfolio"
                  className="btn-solid"
                  style={{
                    background: C.cardCyan,
                    color: C.onCyan_primary,
                    boxShadow: "0 10px 32px rgba(0,216,214,0.2)",
                    textDecoration: "none",
                  }}
                >
                  View Portfolio →
                </a>
                {/* ghost — white on blue = 15.75:1 ✅ */}
                <a
                  href="#contact"
                  className="btn-ghost"
                  style={{ color: C.textPrimary, textDecoration: "none" }}
                >
                  <span
                    className="gl"
                    style={{ width: 18, background: C.textPrimary }}
                  />
                  Get in Touch
                </a>
              </div>

              {/* Social links — textMuted = 4.65:1 ✅ */}
              <div className="au d8" style={{ display: "flex", gap: 22 }}>
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fmono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: C.textMuted,
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = C.textAccent)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = C.textMuted)
                    }
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionContainer>
    </>
  );
}
