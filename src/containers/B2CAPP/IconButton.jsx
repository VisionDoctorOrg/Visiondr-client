import React from 'react';

function IconButton({ src, alt, className, size, children, onMouseEnter }) {
  return (
    <button className={` cursor-pointer ${className}`} onMouseEnter={onMouseEnter}>
      <img loading="lazy" src={src} alt={alt} className={`object-contain shrink-0 self-stretch my-auto aspect-square size-${size}`} />
      {children}
    </button>
  );
}

export default IconButton;