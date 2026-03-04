import React from "react";

type BadgeVariant = "default" | "tenure" | "stack" | "stackDark";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-blue text-cyan",
  tenure: "bg-cyan/10 text-cyan",
  stack: "bg-cream-border text-navy",
  stackDark: "bg-blue/55 text-cyan",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        font-mono text-[9px] tracking-[0.14em] uppercase
        inline-block px-[9px] py-[3px] rounded-[2px]
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
