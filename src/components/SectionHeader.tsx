import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface SectionHeaderProps {
  eyebrow?: string;
  as?: HeadingLevel;
  title: string;
  titleAccent?: string;
  accentPosition?: "start" | "end";
  actions?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  as: HeadingTag = "h1",
  title,
  titleAccent,
  accentPosition = "end",
  actions,
  className = ""
}: SectionHeaderProps) {
  const hasActions = !!actions;

  return (
    <header className={`mb-10 sm:mb-14 ${hasActions ? 'flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 mb-4' : ''} ${className}`}>
      {/* Title block */}
      <div>
        {/* Eyebrow */}
        {eyebrow && (
          <p className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase flex items-center gap-2 md:gap-3 mb-2 md:mb-3 text-current opacity-60">
            <span className={`block h-px ${hasActions ? 'w-4 md:w-6' : 'w-6'} bg-current opacity-60`} />
            {eyebrow}
          </p>
        )}

        {/* Title */}
        <HeadingTag className="font-bold text-[clamp(48px,11vw,148px)] leading-[0.88] -tracking-[0.02em]">
          {accentPosition === "end" ? (
            <>
              <span className="text-current">{title}</span>
              {titleAccent && (
                <em className={`not-italic font-light text-cyan ${hasActions ? 'block' : ''}`}>{titleAccent}</em>
              )}
            </>
          ) : (
            <>
              {titleAccent && (
                <em className={`not-italic font-light text-cyan ${hasActions ? 'block' : ''}`}>{titleAccent}</em>
              )}
              <span className="text-current">{title}</span>
            </>
          )}
        </HeadingTag>
      </div>

      {/* Actions slot */}
      {actions && actions}
    </header>
  );
}
