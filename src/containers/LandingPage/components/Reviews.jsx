import React, { useEffect, useRef, useState } from "react";
import "../styles/Reviews.css";
import { GoLocation } from "react-icons/go";
const Reviews = () => {
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
    <div>
      <section className="md:py-20 py-4 w-[100vw]">
        <div className="flex flex-col gap-4 items-center justify-center md:w-[50%] w-[80%] mx-auto">
          <h1 className="font-semibold md:text-4xl text-[22px]">Reviews</h1>
        </div>
        <div className="md:hidden flex flex-row space-x-10 overflow-x-auto overflow-y-hidden px-10 mt-8">
          <div className="flex-shrink-0" ref={box1Ref}>
            <div className="group relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>
              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 reviews-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-center items-center">
                    <p className="md:text-xl text-[22px]">Lilian Mokaya</p>
                  </div>
                  <div className="flex justify-between text-[#d2dafe]">
                    <p className="text-[16px]">Co-Founder</p>
                    <p className="text-[14px] flex items-center text-[#d2dafe]">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="absolute py-6 px-2 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 rounded-lg border-2 border-primary h-full w-full flex items-center justify-center flex-col md:tracking-tight md:leading-tight">
                  <h3 className="md:mt-4 mt-2 font-medium text-[16px] text-center">
                    How i feel about VisionDR Newsletter ?
                  </h3>

                  <p className="md:mt-4 mt-2 text-[14px] text-center text-[#0231d9]">
                    “I loved the fact that the newsletter was educational,
                    informative, and credible.
                  </p>
                  <p className="md:mt-4 mt-2 text-[14px]  text-center text-[#0231d9]">
                    At a time when social media often bombards us with
                    inaccurate information, it was refreshing to encounter
                    reliable medical insights on eye health.
                  </p>
                  <p className="md:mt-4 mt-2 text-[14px] text-center text-[#0231d9]">
                    I was impressed by how it went beyond the typical generic
                    content, addressing issues that genuinely impact our lives
                    and those of our loved ones.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0" ref={box2Ref}>
            <div className="group relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>

              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg ">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 reviews2-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-center items-center">
                    <p className="md:text-xl text-[22px]">Joseph Otu</p>
                  </div>
                  <div className="flex justify-between text-[#d2dafe]">
                    <p className="text-[16px]">Project Manager</p>
                    <p className="text-[14px] flex items-center text-[#d2dafe]">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Abuja
                    </p>
                  </div>
                </div>

                <div className="absolute py-6 px-3 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 md:tracking-tight md:leading-tight rounded-lg border-2 h-full w-full flex items-center justify-center flex-col ">
                  <h3 className="md:mt-4 mt-2 font-medium text-[16px] text-center px-2">
                    How i feel about VisionDR Session ?
                  </h3>

                  <p className="md:mt-4 mt-2 text-[14px] text-center text-[#0231d9]">
                    Through the VisionDR session, I engaged on a virtual
                    sessions to gain specific eye care advise concerning my
                    vision and my father's eye sight as I was in a remote
                    location for a project without access to alleviate my eye
                    health concerns.
                  </p>
                  <p className="md:mt-4 mt-2 text-[14px] text-center text-[#0231d9]">
                    VisonDR was there to answer all my questions, offer valuable
                    available and I am happy to continue their service till
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0" ref={box3Ref}>
            <div className="group relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>

              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 reviews-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-center items-center">
                    <p className="md:text-xl text-[22px] text-center">
                      Dr. Akpoveta Eguono Deborah
                    </p>
                  </div>
                  <div className="flex justify-between text-[#d2dafe]">
                    <p className="text-[16px]">Medical Officer</p>
                    <p className="text-[14px] flex items-center text-[#d2dafe]">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Delta State
                    </p>
                  </div>
                </div>

                <div className="absolute py-6 px-2 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6  md:tracking-tight md:leading-tight rounded-lg border-2 border-primary h-full w-full flex items-center justify-center flex-col ">
                  <h3 className="md:mt-4 mt-2 font-medium text-[16px] text-center">
                    How VisionDR is helpful/useful to you?
                  </h3>

                  <p className="md:mt-4 mt-2 text-[14px] text-center text-[#0231d9]">
                    From accurate consultations, to good customer service and
                    with swift delivery. I was able to get my eye glasses
                    customized to my preference from VisionDR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-center">
          <img src={currentImage} alt="" className="h-2 text-white mt-8" />
        </div>
        <div className="hidden md:grid grid-cols-3 gap-5 md:mt-16 mt-6 mx-auto md:w-[85%] justify-between overflow-auto">
          <div className="">
            <div className="group relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>
              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 reviews-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-center items-center">
                    <p className="md:text-xl text-lg">Lilian Mokaya</p>
                  </div>
                  <div className="flex justify-between text-[#d2dafe]">
                    <p className="">Co-Founder</p>
                    <p className="text-sm/5 flex items-center text-[#d2dafe]">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="absolute p-6 sm:p-6 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 rounded-lg border-2 border-primary h-full w-full flex items-center justify-center flex-col md:tracking-tight md:leading-tight">
                  <h3 className="md:mt-4 mt-2 font-medium text-[16px] text-center">
                    How i feel about VisionDR Newsletter ?
                  </h3>

                  <p className="md:mt-4 mt-2 text-[14px] text-center text-[#0231d9]">
                    “I loved the fact that the newsletter was educational,
                    informative, and credible.
                  </p>
                  <p className="md:mt-4 mt-2 text-[14px]  text-center text-[#0231d9]">
                    At a time when social media often bombards us with
                    inaccurate information, it was refreshing to encounter
                    reliable medical insights on eye health.
                  </p>
                  <p className="md:mt-4 mt-2 text-[14px] text-center text-[#0231d9]">
                    I was impressed by how it went beyond the typical generic
                    content, addressing issues that genuinely impact our lives
                    and those of our loved ones.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="group relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>

              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg ">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 reviews2-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-center items-center">
                    <p className="md:text-xl text-lg">Joseph Otu</p>
                  </div>
                  <div className="flex justify-between text-[#d2dafe]">
                    <p className="">Project Manager</p>
                    <p className="text-sm/5 flex items-center text-[#d2dafe]">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Abuja
                    </p>
                  </div>
                </div>

                <div className="absolute p-6 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 md:tracking-tight md:leading-tight rounded-lg border-2 h-full w-full flex items-center justify-center flex-col ">
                  <h3 className="md:mt-4 mt-2 font-medium text-[16px] text-center">
                    How i feel about VisionDR Session ?
                  </h3>

                  <p className="md:mt-4 mt-2 text-[14px] text-center text-[#0231d9]">
                    Through the VisionDR session, I engaged on a virtual
                    sessions to gain specific eye care advise concerning my
                    vision and my father's eye sight as I was in a remote
                    location for a project without access to alleviate my eye
                    health concerns.
                  </p>
                  <p className="md:mt-4 mt-2 text-[14px] text-center text-[#0231d9]">
                    VisonDR was there to answer all my questions, offer valuable
                    available and I am happy to continue their service till
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="group relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>

              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 reviews-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-center items-center">
                    <p className="md:text-xl text-lg">
                      Dr. Akpoveta Eguono Deborah
                    </p>
                  </div>
                  <div className="flex justify-between text-[#d2dafe]">
                    <p className="">Medical Officer</p>
                    <p className="text-sm/5 flex items-center text-[#d2dafe]">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Delta State
                    </p>
                  </div>
                </div>

                <div className="absolute p-6 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6  md:tracking-tight md:leading-tight rounded-lg border-2 border-primary h-full w-full flex items-center justify-center flex-col ">
                  <h3 className="md:mt-4 mt-2 font-medium text-[16px] text-center">
                    How VisionDR is helpful/useful to you?
                  </h3>

                  <p className="md:mt-4 mt-2 text-[14px] text-center text-[#0231d9]">
                    From accurate consultations, to good customer service and
                    with swift delivery. I was able to get my eye glasses
                    customized to my preference from VisionDR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
