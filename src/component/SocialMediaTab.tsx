import React from 'react';

interface SocialMediaTabProps {
  name: string;
  href: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const SocialMediaTab: React.FC<SocialMediaTabProps> = ({ href, icon: Icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-tab">
      <Icon className="social-tab__icon" />
    </a>
  );
};

export default SocialMediaTab;
