import React, { useEffect, useRef, useState } from "react";
import "../styles/Features.css";
import { RiBookOpenFill } from "react-icons/ri";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { RiFolder4Fill } from "react-icons/ri";

const Features = () => {
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
              setCurrentImage('/images/item-1.png'); // Replace with the actual image URL
            } else if (entry.target === box2Ref.current) {
              setCurrentImage('/images/item-2.png'); // Replace with the actual image URL
            } else if (entry.target === box3Ref.current) {
              setCurrentImage('/images/item-3.png'); // Replace with the actual image URL
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
    <div className="body">
      <section
        className="features-bg lg:py-20 py-10 text-white lg:min-h-[100vh] w-[100vw]"
        id="feature"
      >
        <div className="flex flex-col gap-4 items-center justify-center lg:w-[55%] w-[80%] mx-auto ">
          <span className="inline-flex items-center justify-center rounded-full bg-white lg:px-6 px-3 lg:py-1 text-slate-900">
            <svg
              className="h-5 w-5 text-primary"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="20" className="fill-current" />
            </svg>

            <p className="whitespace-nowrap lg:text-[12px] text-[8px] tracking-tight">
              Features
            </p>
          </span>
          <h1 className="lg:mt-4 font-medium lg:text-[36px] text-[22px] text-center lg:tracking-tight">
            We Offer A Variety of Services
          </h1>
          <p className="text-slate-300 text-center text-[16px] lg:tracking-tight">
            Our unique eye health offerings have features for anyone and
            everyone with an eye care needs.
          </p>
        </div>
        <div className="lg:hidden flex flex-col overflow-y-hidden mt-10 justify-center items-center gap-5 text-[#6a6c78]">
          <div>
            <div class="card w-[296px] h-[280px] flex-shrink-0 border-[1px] hover:border-[#0231d9] border-[#0231d981] rounded-[8px] hover:text-white " ref={box1Ref}>
              <div className="icon flex items-center justify-center flex-col w-full mt-20">
                <RiBookOpenFill className="h-[48px] w-[48px]" />
                <h2 className="mt-5 lg:text-[28px] text-[22px]">
                  Educational Resources
                </h2>
              </div>
              <div class="card-container px-8 mt-16">
                <div className="text-[12px] text-[#d2dafe] lg:text-[16px] tracking-tight ">
                  Through our platform you learn about eye health, conditions,
                  and treatments with articles, videos, audios and one on one
                  sessions.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card  w-[296px] h-[280px] flex-shrink-0 border-[1px] hover:border-[#0231d9] border-[#0231d981] rounded-[8px] hover:text-white" ref={box2Ref}>
              <div className="icon flex items-center justify-center flex-col w-full mt-20">
                <RiFolder4Fill className="h-[48px] w-[48px]" />
                <h2 className=" mt-5 lg:text-[28px] text-[22px]">
                  Eyecare Advisory
                </h2>
              </div>
              <div class="card-container px-8 mt-16 flex flex-col gap-1">
                <div className="text-[12px] text-[#d2dafe] lg:text-[16px] tracking-tight leading-tight">
                  Connect with our eye care team online for personalised advice
                  on vision concerns, pre-appointment questions, and post-care
                  guidance.
                </div>
                <div className="text-[12px] text-[#d2dafe] lg:text-[16px] tracking-tight leading-tight">
                  Additionally, gain access to a safe space to share your
                  stories.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card w-[296px] h-[280px] flex-shrink-0 border-[1px] hover:border-[#0231d9] border-[#0231d981] rounded-[8px] hover:text-white" ref={box3Ref}>
              <div className="icon flex items-center justify-center flex-col w-full mt-20">
                <RiUploadCloud2Fill className="h-[48px] w-[48px]" />
                <h2 className=" mt-5 lg:text-[28px] text-[22px]">
                  Online Care
                </h2>
              </div>
              <div class="card-container px-8 mt-16">
                <div className="text-[12px] text-[#d2dafe] lg:text-[16px] tracking-tight leading-normal">
                  To eliminate wait time, schedule virtual consultations for
                  your individual needs. As a business, manage appointments, and
                  access your eye health records - all in one place.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden  lg:flex gap-20 lg:gap-5 lg:mt-28 mt-12 mx-auto lg:w-[80%] w-[80%] lg:justify-between min-h-44 flex-wrap lg:flex-nowrap justify-center">
          <div class="card">
            <div className="icon flex items-center justify-center flex-col w-full">
              <RiBookOpenFill className="h-[67px] w-[67px]" />
              <h2 className="mt-5 lg:text-[28px] text-[22px]">
                Educational Resources
              </h2>
            </div>
            <div class="card-container px-6">
              <div className="text-sm text-gray-300 lg:text-[16px] tracking-tight leading-normal">
                Through our platform you learn about eye health, conditions, and
                treatments with articles, videos, audios and one on one
                sessions.
              </div>
            </div>
          </div>
          <div class="card">
            <div className="icon flex items-center justify-center flex-col w-full">
              <RiFolder4Fill className="h-[67px] w-[67px]" />
              <h2 className=" mt-5 lg:text-[28px] text-[22px]">
                Eyecare Advisory
              </h2>
            </div>
            <div class="card-container px-6">
              <div className="text-sm text-gray-300 lg:text-[16px] tracking-tight leading-normal">
                Connect with our eye care team online for personalised advice on
                vision concerns, pre-appointment questions, and post-care
                guidance.
              </div>
              <div className="text-sm text-gray-300 lg:text-[16px] tracking-tight leading-normal">
                Additionally, gain access to a safe space to share your stories.
              </div>
            </div>
          </div>
          <div class="card">
            <div className="icon flex items-center justify-center flex-col w-full">
              <RiUploadCloud2Fill className="h-[67px] w-[67px]" />
              <h2 className=" mt-5 lg:text-[28px] text-[22px]">Online Care</h2>
            </div>
            <div class="card-container px-6">
              <div className="text-sm text-gray-300 lg:text-[16px] tracking-tight leading-normal">
                To eliminate wait time, schedule virtual consultations for your
                individual needs. As a business, manage appointments, and access
                your eye health records - all in one place.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
