import React from 'react';

interface SpecialLinkProps {
  href: string;
  navigate(): void;
}
const SpecialLink: React.FC<SpecialLinkProps> = ({ children, navigate }) => {
  return <button onClick={navigate}>{children}</button>;
};

export default SpecialLink;
