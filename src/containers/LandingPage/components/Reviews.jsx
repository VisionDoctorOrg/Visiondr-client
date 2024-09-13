import React, { useEffect, useRef, useState } from "react";
import "../styles/Reviews.css";
import { GoLocation } from "react-icons/go";
const Reviews = () => {
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
    <div>
      <section className="md:py-20 py-4 w-[100vw]">
        <div className="flex flex-col gap-4 items-center justify-center md:w-[50%] w-[80%] mx-auto">
          <h1 className="font-semibold md:text-4xl text-[22px]">Reviews</h1>
        </div>
        <div className="lg:hidden flex flex-row space-x-10 overflow-x-auto overflow-y-hidden px-10 mt-8">
          <div className="flex-shrink-0" ref={box1Ref}>
          <div className=" relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 sm:p-6 reviews-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-start items-end">
                    <p className="md:text-xl text-lg pb-2">Lilian Mokaya</p>
                  </div>
                  <div className="flex justify-between text-[#d2dafe]">
                    <p className="">Co-Founder</p>
                    <p className="text-sm/5 flex items-center text-[#d2dafe]">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 py-6 sm:py-6 px-4 rounded-lg h-full w-full flex items-start flex-col">
                  <p className="text-center text-white text-sm font-medium leading-tight tracking-tight">
                    “I loved the fact that the newsletter was educational,
                    informative, and credible. At a time when social media often
                    bombards us with inaccurate information, it was refreshing
                    to encounter reliable medical insights on eye health. I was
                    impressed by how it went beyond the typical generic content,
                    addressing issues that genuinely impact our lives and those
                    of our loved ones.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0" ref={box2Ref}>
          <div className=" relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 sm:p-6 reviews2-bg h-full w-full text-black rounded-lg">
                  <div className="h-[90%] flex justify-start items-end">
                    <p className="md:text-xl text-lg pb-2">Joseph Otu</p>
                  </div>
                  <div className="flex justify-between text-black">
                    <p className="">Program Manager</p>
                    <p className="text-sm/5 flex items-center text-black">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Abuja
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 p-6 sm:p-6 rounded-lg h-full w-full flex items-start flex-col">
                  <p className="text-center text-black text-sm font-medium leading-tight tracking-tight">
                    Through the VisionDR session, I engaged on a virtual
                    sessions to gain specific eye care advise concerning my
                    vision and my father's eye sight as I was in a remote
                    location for a project without access to alleviate my eye
                    health concerns. VisonDR was there to answer all my
                    questions, offer valuable available and I am happy to
                    continue their service till today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0" ref={box3Ref}>
          <div className=" relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 sm:p-6 reviews-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-start items-end">
                    <p className="md:text-xl text-lg pb-2">
                      Dr. Akpoveta Deborah
                    </p>
                  </div>
                  <div className="flex justify-between text-[#d2dafe]">
                    <p className="">Medical Officer</p>
                    <p className="text-sm/5 flex items-center text-[#d2dafe]">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Delta state
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 p-6 sm:p-6 rounded-lg h-full w-full flex items-start flex-col">
                  <p className="text-center text-white text-sm font-medium leading-tight tracking-tight mt-10">
                    From accurate consultations, to good customer service and
                    with swift delivery. I was able to get my eye glasses
                    customized to my preference from VisionDR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex items-center justify-center">
          <img src={currentImage} alt="" className="h-2 text-white mt-8" />
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-5 md:mt-16 mt-6 mx-auto md:w-[85%] justify-between overflow-auto">
          <div className="">
            <div className=" relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 sm:p-6 reviews-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-start items-end">
                    <p className="md:text-xl text-lg pb-2">Lilian Mokaya</p>
                  </div>
                  <div className="flex justify-between text-[#d2dafe]">
                    <p className="">Co-Founder</p>
                    <p className="text-sm/5 flex items-center text-[#d2dafe]">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 p-6 sm:p-6 rounded-lg h-full w-full flex items-start flex-col">
                  <p className="text-center text-white text-base font-medium mt-5">
                    “I loved the fact that the newsletter was educational,
                    informative, and credible. At a time when social media often
                    bombards us with inaccurate information, it was refreshing
                    to encounter reliable medical insights on eye health. I was
                    impressed by how it went beyond the typical generic content,
                    addressing issues that genuinely impact our lives and those
                    of our loved ones.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 sm:p-6 reviews2-bg h-full w-full text-black rounded-lg">
                  <div className="h-[90%] flex justify-start items-end">
                    <p className="md:text-xl text-lg pb-2">Joseph Otu</p>
                  </div>
                  <div className="flex justify-between text-black">
                    <p className="">Program Manager</p>
                    <p className="text-sm/5 flex items-center text-black">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Abuja
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 p-6 sm:p-6 rounded-lg h-full w-full flex items-start flex-col">
                  <p className="text-center text-black text-base font-medium mt-5">
                    Through the VisionDR session, I engaged on a virtual
                    sessions to gain specific eye care advise concerning my
                    vision and my father's eye sight as I was in a remote
                    location for a project without access to alleviate my eye
                    health concerns. VisonDR was there to answer all my
                    questions, offer valuable available and I am happy to
                    continue their service till today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" relative block h-[300px] w-[300px] md:w-full md:h-[400px] rounded-lg">
              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 sm:p-6 reviews-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-start items-end">
                    <p className="md:text-xl text-lg pb-2">
                      Dr. Akpoveta Deborah
                    </p>
                  </div>
                  <div className="flex justify-between text-[#d2dafe]">
                    <p className="">Medical Officer</p>
                    <p className="text-sm/5 flex items-center text-[#d2dafe]">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Delta state
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 p-6 sm:p-6 rounded-lg h-full w-full flex items-start flex-col">
                  <p className="text-center text-white text-base font-medium mt-20">
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
