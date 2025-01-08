import React from 'react';

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-sm rounded-lg p-6 
        hover:shadow-lg transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;