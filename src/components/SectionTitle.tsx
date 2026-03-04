import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
}) => {
  return (
    <h2
      className={`xl:text-[16rem] lg:text-[13rem] md:text-[10rem] text-[5rem] break-words
        font-sans font-500 md:leading-[16rem] leading-[5rem] text-[#00224c] self-center tracking-tighter ${className}`}
    >
      {children}
    </h2>
  );
};
