import React from "react";

const C = {
  cyan: "#00D8D6",
};

export default function Footer() {
  return (
    <footer
      className="mt-20 sm:mt-28 md:mt-32 pt-8 sm:pt-10 md:pt-12"
      style={{
        borderTop: "1px solid rgba(0,216,214,0.15)",
      }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        {/* Copyright */}
        <p
          className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-center sm:text-left"
          style={{
            color: "rgba(255,255,255,0.4)",
          }}
        >
          © 2026 MrJay. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex gap-4 sm:gap-5">
          {[
            { label: "GitHub", url: "https://github.com/chungvuiloong" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/jason-vu-42b7b7156/" },
            { label: "Email", url: "mailto:chungvuiloong@gmail.com" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-[11px] sm:text-[12px] no-underline transition-colors duration-200"
              style={{
                color: "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.cyan;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
