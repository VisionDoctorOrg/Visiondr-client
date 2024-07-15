import React, { useState, useEffect } from 'react';

const SlideshowBackground = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="relative z-10 text-white text-center p-5">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Slideshow Background</h1>
        <p className="text-xl">This is some sample content on top of the slideshow.</p>
      </div>
    </div>
  );
};



export default SlideshowBackground;