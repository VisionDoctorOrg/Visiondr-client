import React, { useState, useEffect } from 'react';

const SlideshowBackground = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[256px] overflow-hidden rounded-[8px]">
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SlideshowBackground;
