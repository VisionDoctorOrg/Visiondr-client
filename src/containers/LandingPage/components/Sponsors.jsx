import React, { useEffect, useRef, useState } from "react";
import "../styles/Sponsors.css";
const Sponsors = () => {
  const [currentImage, setCurrentImage] = useState('');
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === box1Ref.current) {
              setCurrentImage('/images/item-b-1.png'); // Replace with the actual image URL
            } else if (entry.target === box2Ref.current) {
              setCurrentImage('/images/item-b-2.png'); // Replace with the actual image URL
            } else if (entry.target === box3Ref.current) {
              setCurrentImage('/images/item-b-3.png'); // Replace with the actual image URL
            }
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
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
      className="md:py-16 pt-16 pb-8 w-[100vw] md:w-full mx-auto overflow-hidden"
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
        <p className="font-medium md:w-1/2 my-3 text-[16px] tracking-tight md:pr-16">
          Over time VisionDR has received technical, specialized and innovative
          support and partnerships from top organizations in Nigeria, Rwanda and
          Mauritus.
        </p>
      </section>
      <section className="md:hidden flex flex-row space-x-10 overflow-x-auto overflow-y-hidden px-10">
        <div className="py-5" ref={box1Ref}>
          <div className=" flex-shrink-0 p-5 custom-shadow transition-all ease-in-out duration-500 px-6 ">
            <div className="border-l border-l-black px-3 md:w-[275px] md:h-[236px] w-[264px] h-[196px]  flex flex-col justify-between">
              <p className="font-medium text-gray-400 md:text-[16px]">01</p>
              <p className="md:text-[28px] text-[22px] font-medium leading-tight md:pt-16">
                MTN Foundation
              </p>
              <p className="text-[14px] font-medium  tracking-tight leading-[1.1]">
                MTN Foundation has offered support to VisionDR to improve eye
                health in our society. Providing support in visibility and
                digital enhancement
              </p>
            </div>
          </div>
        </div>
        <div className="py-5" ref={box2Ref}>
          <div className="flex-shrink-0 p-5 custom-shadow transition-all ease-in-out duration-500 px-6 ">
            <div className="border-l border-l-black px-3 md:w-[275px] md:h-[236px] w-[264px] h-[196px] flex flex-col justify-between">
              <p className="font-medium text-gray-400 md:text-[16px]">02</p>
              <p className="md:text-[28px] text-[22px] font-medium leading-tight md:pt-16">
                Sands Technologies{" "}
              </p>
              <p className="text-[14px] font-medium  tracking-tight leading-[1.1]">
                VisionDR has gained technical support and training for our
                digital platforms to offer our best to our users. From mid 2023,
                Sands have provided support to improve our systems.
              </p>
            </div>
          </div>
        </div>
        <div className="py-5" ref={box3Ref}>
          <div className="flex-shrink-0 p-5 custom-shadow transition-all ease-in-out duration-500 px-6 ">
            <div className="border-l border-l-black px-3 md:w-[275px] md:h-[236px] w-[264px] h-[196px] flex flex-col justify-between">
              <p className="font-medium text-gray-400 md:text-[16px]">03</p>
              <p className="md:text-[28px] text-[22px] font-medium leading-tight">
                United Nations Development Programme (UNDP)
              </p>
              <p className="text-[14px] font-medium  tracking-tight leading-[1.1]">
                Supports sustainable development goals and provides strategic
                guidance. For VisionDR, UNDP offers strategic support to improve
                visual outcomes
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="md:hidden flex items-center justify-center">
          <img src={currentImage} alt="" className="h-2 text-white mt-8" />
        </div>
      <section className="hidden md:mx-32 md:grid md:grid-cols-3 md:justify-between md:gap-20 gap-5 md:mt-16 mt-4 md:flex-nowrap">
        <div className="p-5 custom-shadow transition-all ease-in-out duration-500 px-6 h-full">
          <div className="border-l border-l-black px-3 md:w-[275px] md:h-[236px] w-[264px] h-[196px] flex flex-col justify-between">
            <p className="font-medium text-gray-400 md:text-[16px]">03</p>
            <p className="md:text-[28px] text-[22px] font-medium leading-tight">
              United Nations Development Programme (UNDP)
            </p>
            <p className="text-[14px] font-medium  tracking-tight leading-[1.1]">
              Supports sustainable development goals and provides strategic
              guidance. For VisionDR, UNDP offers strategic support to improve
              visual outcomes
            </p>
          </div>
        </div>
        <div className="p-5 custom-shadow transition-all ease-in-out duration-500 px-6 ">
          <div className="border-l border-l-black px-3 md:w-[275px] md:h-[236px] w-[264px] h-[196px]  flex flex-col justify-between">
            <p className="font-medium text-gray-400 md:text-[16px]">01</p>
            <p className="md:text-[28px] text-[22px] font-medium leading-tight md:pt-16">
              MTN Foundation
            </p>
            <p className="text-[14px] font-medium  tracking-tight leading-[1.1]">
              MTN Foundation has offered support to VisionDR to improve eye
              health in our society. Providing support in visibility and digital
              enhancement
            </p>
          </div>
        </div>
        <div className="p-5 custom-shadow transition-all ease-in-out duration-500 px-6 ">
          <div className="border-l border-l-black px-3 md:w-[275px] md:h-[236px] w-[264px] h-[196px] flex flex-col justify-between">
            <p className="font-medium text-gray-400 md:text-[16px]">02</p>
            <p className="md:text-[28px] text-[22px] font-medium leading-tight md:pt-12">
              Sands Technologies{" "}
            </p>
            <p className="text-[14px] font-medium  tracking-tight leading-[1.1]">
              VisionDR has gained technical support and training for our digital
              platforms to offer our best to our users. From mid 2023, Sands
              have provided support to improve our systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
