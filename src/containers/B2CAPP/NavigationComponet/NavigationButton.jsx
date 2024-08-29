import React from 'react';

function NavigationButton({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`flex gap-1 items-center self-stretch my-auto text-sm leading-tight whitespace-nowrap text-gray-950 ${className}`}
    >
      {children}
    </button>
  );
}

export default NavigationButton;