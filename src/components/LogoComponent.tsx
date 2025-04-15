
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const LogoComponent: React.FC<LogoProps> = ({ className = '', size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-20 h-20'
  };

  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/9a876bda-d68e-4417-8f56-eb44807c33d8.png" 
        alt="Mya's World Logo" 
        className={`${sizeClasses[size]} object-contain rounded-full`}
      />
      <span className="text-2xl font-bold text-cosmic font-playfair flex items-center gap-1">
        <span className="text-brand-pink">Mya's</span> World
      </span>
    </Link>
  );
};

export default LogoComponent;
