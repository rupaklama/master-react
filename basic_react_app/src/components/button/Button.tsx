import React from 'react';
import './button.style.css';

interface ButtonProps {
  type?: 'primary' | 'default';
}

// type = 'default' arg - works for both, pass in prop or default prop as initial prop
const Button: React.FC<ButtonProps> = ({ type = 'default', children }) => {
  const className = type === 'primary' ? 'primary' : '';

  return <button className={className}>{children}</button>;
};

export default Button;
