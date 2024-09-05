import React, { useEffect } from "react";

const Report = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <section className="flex flex-col self-stretch mt-6 w-full max-md:max-w-full relative">
      <div class="text-gray-950 text-[22px] font-medium font-['Plus Jakarta Sans'] leading-relaxed mb-5">Recommendation:</div>
      <div class="text-gray-950 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Differential Diagnosis</div>
      <p className="mt-4 leading-6  max-md:max-w-full mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. <br />
      </p>
      <div class="text-gray-950 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Recommended Eye Care Management</div>
      <p className="mt-4 leading-6  max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. <br />
      </p>
    </section>
  );
};

export default Report;
