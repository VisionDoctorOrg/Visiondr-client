import React from "react";
import "./Reviews.css";
import { GoLocation } from "react-icons/go";
const Reviews = () => {
  return (
    <div>
      <section className="md:py-16 py-8">
        <div className="flex flex-col gap-4 items-center justify-center md:w-[50%] w-[90%] mx-auto">
          <h1 className="font-semibold md:text-4xl text-2xl">Reviews</h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-16 mx-auto w-[85%] justify-between">
          <div className="">
            <div className="group relative block h-64 sm:h-80 lg:h-96 rounded-lg">
              <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>

              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 reviews-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-center items-center">
                    <p className="md:text-xl text-lg">Lilian Mokaya</p>
                  </div>
                  <div className="flex justify-between text-slate-200">
                    <p className="">Co-Founder</p>
                    <p className="text-sm/5 flex items-center text-slate-300">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 rounded-lg border-2 border-primary h-full w-full flex items-center justify-center flex-col ">
                  <h3 className="md:mt-4 font-medium text-sm md:text-lg text-center">
                    How i feel about VisionDR Newsletter ?
                  </h3>

                  <p className="md:mt-4 text-sm text-center text-[#295BFF]">
                    “I loved the fact that the newsletter was educational,
                    informative, and credible.
                  </p>
                  <p className="md:mt-4 text-sm text-center text-[#295BFF]">
                    At a time when social media often bombards us with
                    inaccurate information, it was refreshing to encounter
                    reliable medical insights on eye health.
                  </p>
                  <p className="md:mt-4 text-sm text-center text-[#295BFF]">
                    I was impressed by how it went beyond the typical generic
                    content, addressing issues that genuinely impact our lives
                    and those of our loved ones.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="group relative block h-64 sm:h-80 lg:h-96 rounded-lg">
              <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>

              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 reviews2-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-center items-center">
                    <p className="md:text-xl text-lg">Joseph Otu</p>
                  </div>
                  <div className="flex justify-between text-slate-200">
                    <p className="">Project Manager</p>
                    <p className="text-sm/5 flex items-center text-slate-300">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Abuja
                    </p>
                  </div>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 rounded-lg border-2 border-primary h-full w-full flex items-center justify-center flex-col ">
                  <h3 className="md:mt-4 font-medium text-sm md:text-lg text-center">
                    How i feel about VisionDR Session ?
                  </h3>

                  <p className="md:mt-4 text-sm text-center text-[#295BFF]">
                    Through the VisionDR session, I engaged on a virtual
                    sessions to gain specific eye care advise concerning my
                    vision and my father's eye sight as I was in a remote
                    location for a project without access to alleviate my eye
                    health concerns.
                  </p>
                  <p className="md:mt-4 text-sm text-center text-[#295BFF]">
                    VisonDR was there to answer all my questions, offer valuable
                    available and I am happy to continue their service till
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="group relative block h-64 sm:h-80 lg:h-96 rounded-lg">
              <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>

              <div className="relative flex h-full transform items-end bg-white transition-transform rounded-lg">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 reviews-bg h-full w-full text-slate-100 rounded-lg">
                  <div className="h-[90%] flex justify-center items-center">
                    <p className="md:text-xl text-lg">Dr. Akpoveta Eguono Deborah</p>
                  </div>
                  <div className="flex justify-between text-slate-200">
                    <p className="">Medical Officer</p>
                    <p className="text-sm/5 flex items-center text-slate-300">
                      <GoLocation className="h-5 w-5 mx-2" />
                      Delta State
                    </p>
                  </div>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 rounded-lg border-2 border-primary h-full w-full flex items-center justify-center flex-col ">
                  <h3 className="md:mt-4 font-medium text-sm md:text-lg text-center">
                  How VisionDR is helpful/useful to you?
                  </h3>

                  <p className="md:mt-4 text-sm text-center text-[#295BFF]">
                  From accurate consultations, to good customer service and with swift delivery. I was able to get my eye glasses customized to my preference from VisionDR
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
