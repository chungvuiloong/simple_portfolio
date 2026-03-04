import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  backgroundColor?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  backgroundColor = "#00dcda",
}) => {
  return (
    <section
      id={id}
      className="py-24 sm:py-32 px-6 lg:px-10"
      style={{ backgroundColor }}
    >
      <div className="mx-auto container">{children}</div>
    </section>
  );
};
