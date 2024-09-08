import React, { useEffect, useRef, useState } from "react";
import "../styles/Sponsors.css";
const Sponsors = () => {
  const [currentImage, setCurrentImage] = useState("");
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === box1Ref.current) {
              setCurrentImage("/images/item-b-1.png"); // Replace with the actual image URL
            } else if (entry.target === box2Ref.current) {
              setCurrentImage("/images/item-b-2.png"); // Replace with the actual image URL
            } else if (entry.target === box3Ref.current) {
              setCurrentImage("/images/item-b-3.png"); // Replace with the actual image URL
            }
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.8, // Trigger when at least 50% of the target is visible
      }
    );

    if (box1Ref.current) observer.observe(box1Ref.current);
    if (box2Ref.current) observer.observe(box2Ref.current);
    if (box3Ref.current) observer.observe(box3Ref.current);

    return () => {
      if (box1Ref.current) observer.unobserve(box1Ref.current);
      if (box2Ref.current) observer.unobserve(box2Ref.current);
      if (box3Ref.current) observer.unobserve(box3Ref.current);
    };
  }, []);
  return (
    <div
      className="md:py-16 pt-16 pb-8 w-[100vw] lg:w-full mx-auto overflow-hidden"
      id="partners"
    >
      <section className="md:mx-32 w-[80%] mx-auto">
        <span className="inline-flex items-center justify-center rounded-full bg-[#e8e9eb] pr-2 text-slate-900">
          <svg
            className="h-5 w-5 text-primary"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="20" className="fill-current" />
          </svg>

          <p className="whitespace-nowrap text-[0.5rem]">Meet our partners</p>
        </span>
        <h1 className="font-medium md:text-[28px] text-[22px]">
          We have amazing sponsors
        </h1>
        <p className="font-medium md:w-2/3 my-3 text-[16px] tracking-tight md:pr-16">
          Over time VisionDR has received technical, specialized and innovative
          support and partnerships from top organizations in Nigeria, Rwanda and
          Mauritus.
        </p>
      </section>
      <section className="lg:hidden flex flex-row space-x-10 overflow-x-auto overflow-y-hidden px-10">
        <div className="pt-5" ref={box1Ref}>
          <div className=" flex-shrink-0 transition-all ease-in-out duration-500 ">
            <div className=" md:w-[275px] w-[264px] h-[130px]">
              <img
                src="/images/sponsor_img.png"
                alt="UNDP"
                className="h-[120px]"
              />
            </div>
          </div>
        </div>
        <div className="pt-5" ref={box2Ref}>
          <div className=" flex-shrink-0 transition-all ease-in-out duration-500 ">
            <div className=" md:w-[275px] w-[264px] h-[130px]">
              <img
                src="/images/sponsor2_img.png"
                alt="MTN Foundation"
                className="h-[120px]"
              />
            </div>
          </div>
        </div>
        <div className="pt-5" ref={box3Ref}>
          <div className=" flex-shrink-0 transition-all ease-in-out duration-500 ">
            <div className=" md:w-[275px] w-[264px] h-[130px]">
              <img
                src="/images/sponsor3_img.png"
                alt="Sand Technologies"
                className="h-[120px]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden flex items-center justify-center">
        <img src={currentImage} alt="" className="h-2 text-white mt-8" />
      </div>
      <section className="hidden justify-center items-center md:gap-20 lg:px-10 lg:flex gap-5 md:my-20  mt-4">
        <img src="/images/sponsor_img.png" alt="UNDP" className="h-[120px]" />
        <img
          src="/images/sponsor2_img.png"
          alt="MTN Foundation"
          className="h-[120px]"
        />
        <img
          src="/images/sponsor3_img.png"
          alt="Sand Technologies"
          className="h-[120px]"
        />
      </section>
    </div>
  );
};

export default Sponsors;
