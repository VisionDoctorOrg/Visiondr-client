import React, { useRef, useState } from 'react';
import './FAQ.css'
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details className="group" open={isOpen}>
      <summary 
        onClick={toggleDropdown} 
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      >
        <h2 className="font-medium">
          Why should I choose VisionDoctors for my eye care?
        </h2>
        <svg
          className={`size-5 shrink-0 transition duration-300 ${isOpen ? '-rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div 
        ref={contentRef} 
        className="content-wrapper" 
        style={{ maxHeight: isOpen ? contentRef.current.scrollHeight : 0 }}
      >
        <p className="mt-4 px-4 leading-relaxed text-[#295BFF]">
          At VisionDoctors, we prioritize your vision and well-being. We offer exceptional, personalized care from experienced professionals, utilize advanced technology for urgent advisory sessions, and believe in empowering you with knowledge about your eye health. We are committed to improving your quality of life through clear vision.
        </p>
      </div>
    </details>
  );
};

export default Dropdown;
