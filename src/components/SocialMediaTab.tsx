// import React from "react";

interface SocialMediaTabProps {
  name: string;
  href: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const SocialMediaTab: React.FC<SocialMediaTabProps> = ({
  name,
  href,
  icon: Icon,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-black no-underline mr-2"
    >
      <Icon className="w-5 h-5 mr-1" />
      {/* <span className="text-sm">{name}</span> */}
    </a>
  );
};

export default SocialMediaTab;
