import React from "react";

interface LabelProps {
  children: React.ReactNode;
  muted?: boolean;
  className?: string;
}

export function Label({ children, muted = false, className = "" }: LabelProps) {
  return (
    <p
      className={`
        font-mono text-[9px] tracking-[0.22em] uppercase
        ${muted ? "text-cyan/50" : "text-cyan"}
        ${className}
      `}
    >
      {children}
    </p>
  );
}
