import React from "react";

type TechnologyLogos = { [key: string]: string };

const TechnologiesUsed = ({ array }: { array?: string[] }) => {
  const technologyLogos: TechnologyLogos = {
    React: "devicon:react-wordmark",
  };

  return (
    <div>{array?.map((tech, index) => <span key={index}>{tech}</span>)}</div>
  );
};

export default TechnologiesUsed;
