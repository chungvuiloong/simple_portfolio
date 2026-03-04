import React from "react";
import { NAV_LINKS, HERO_DATA } from "@lib/data";

interface NavbarProps {
  variant?: "hero" | "default";
  showAvailability?: boolean;
  className?: string;
}

export default function Navbar({
  variant = "default",
  showAvailability = false,
  className = ""
}: NavbarProps) {
  const isHero = variant === "hero";

  return (
    <nav
      className={`
        flex justify-between items-center
        ${isHero
          ? 'py-[22px] border-b border-cyan/10 relative z-10 animate-fade-in'
          : 'mb-12 sm:mb-16 md:mb-20 animate-fade-in'}
        ${className}
      `}
    >
      {/* Logo */}
      <a
        href="#"
        className={`
          font-fraunces font-bold no-underline -tracking-[0.02em]
          ${isHero
            ? 'text-[22px] text-cyan hover:text-cyan-light'
            : 'text-[22px] sm:text-[26px] md:text-[32px] text-white hover:text-cyan'}
          transition-colors duration-200
        `}
      >
        {isHero ? HERO_DATA.name.first : "MrJay"}
        {!isHero && <span className="text-cyan">.</span>}
      </a>

      {/* Nav Links */}
      <div className="hidden sm:flex gap-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`
              font-dm text-[11px] sm:text-[12px] md:text-[13px]
              uppercase tracking-[0.06em]
              no-underline transition-colors duration-200
              border-b border-transparent
              ${isHero
                ? 'text-cyan-light hover:text-cyan hover:border-cyan pb-1'
                : 'text-white/60 hover:text-cyan hover:border-cyan'}
            `}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Availability Badge (only in hero variant) */}
      {showAvailability && isHero && (
        <div className="flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-cyan/10">
          <span className="w-[7px] h-[7px] rounded-full bg-cyan shrink-0" />
          <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-cyan">
            {HERO_DATA.availability}
          </span>
        </div>
      )}
    </nav>
  );
}
