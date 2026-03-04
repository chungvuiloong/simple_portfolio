import React from "react";

const C = {
  blue: "#00224C",
  cyan: "#00D8D6",
};

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center mb-12 sm:mb-16 md:mb-20"
      style={{
        animation: "fadeIn 0.35s ease both",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-fraunces text-[22px] sm:text-[26px] md:text-[32px] font-bold no-underline"
        style={{
          color: "#fff",
          letterSpacing: "-0.01em",
        }}
      >
        MrJay<span style={{ color: C.cyan }}>.</span>
      </a>

      {/* Links */}
      <div className="flex gap-4 sm:gap-6 md:gap-8">
        {["Work", "Portfolio", "Tech", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-dm text-[11px] sm:text-[12px] md:text-[13px] no-underline transition-colors duration-200"
            style={{
              color: "rgba(255,255,255,0.6)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = C.cyan;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.6)";
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
