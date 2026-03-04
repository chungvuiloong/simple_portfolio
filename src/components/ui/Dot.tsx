import React from "react";

interface DotProps {
  className?: string;
}

export function Dot({ className = "" }: DotProps) {
  return (
    <span
      className={`
        flex-shrink-0 rounded-full mt-[7px]
        w-[5px] h-[5px] bg-cyan
        ${className}
      `}
    />
  );
}
