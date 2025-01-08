import React from 'react';

const Button = ({ children, primary, className, ...props }) => {
  return (
    <button
      className={`
        px-6 py-3 rounded-md font-medium transition-all duration-300
        ${primary 
          ? 'bg-secondary text-primary hover:bg-opacity-80' 
          : 'border-2 border-secondary text-secondary hover:bg-secondary hover:bg-opacity-10'}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;