import React, { useState } from "react";
import "../styles/About.css";
import SlideshowBackground from "./SlideshowBackground";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  const images = [
    "/images/meds-m.png",
    "/images/eyediagnosis-m.png",
    "/images/eyediagnosis1.png",
  ];
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = (val) => {
    setReadMore(val);
  };
  return (
    <div className="md:py-10 py-5" id="about">
      <div className="mx-auto">
        <h1 className="md:mt-10 my-5 md:text-[36px] text-[22px] font-semibold text-center">
          About Us
        </h1>
      </div>
      <section className="grid md:grid-cols-2 grid-cols-1 gap-10 md:w-[82%] w-[80%] mx-auto md:py-10 py-5">
        <div className="hidden md:flex flex-col">
          <img
            src="/images/meds-m.png"
            alt=""
            className="hidden md:inline-block md:rounded-2xl rounded-[8px] w-[370px] hover:rotate-3 duration-300 custom-shadow transform origin-center transition-transform"
          />
          <img
            src="/images/eyediagnosis-m.png"
            alt=""
            className="md:rounded-2xl rounded-[8px] w-[370px] ml-auto mr-0 relative md:mt-[-80px] hover:rotate-3 duration-300 custom-shadow transform origin-center transition-transform"
          />
          <img
            src="/images/eyediagnosis1.png"
            alt=""
            className="hidden md:inline-block md:rounded-2xl rounded-[8px] w-[370px] relative mt-[-100px] hover:rotate-3 duration-300 custom-shadow transform origin-center transition-transform"
          />
        </div>
        <div className="md:hidden">
          <SlideshowBackground images={images} />
        </div>
        <div className=" text-[16px] lg:text-[22px] md:tracking-tight md:rounded-[25px] rounded-[8px] bg-[#f0f2fe] md:px-10 px-6 font-medium md:pt-20 pt-10 pb-10 md:pb-0 overflow-hidden ">
          <div
            className={`flex flex-col gap-5 md:h-full mb-3 overflow-hidden transition-all duration-300 ${
              readMore ? "" : "h-52"
            }`}
          >
            <p>
              We are a forward thinking eye health startup committed to
              revolutionizing eye care in Nigeria and Africa.
            </p>
            <p>
              Our platform provides expert eye care advisory, extensive
              educational resources, and convenient online consultations.
            </p>
            <p>
              By leveraging technology, we aim to make eye care accessible,
              affordable, and personalized for everyone.
            </p>
            <p>
              Our mission is to empower individuals and organizations with the
              knowledge and tools needed to achieve and maintain optimal eye
              health, thereby enhancing productivity and fostering economic
              growth across the continent.
            </p>
            <p>
              Join us in our journey to a future where quality eye care is
              within everyone's reach. A world where we can See Clearly, Live
              Fully
            </p>
          </div>
          <div className="md:hidden text-[#0231d9]">
            <p
              className={`cursor-pointer w-fit mr-0 ml-auto flex items-center ${
                readMore ? "hidden" : ""
              }`}
              onClick={() => handleReadMore(true)}
            >
              Read more <MdArrowOutward className="ml-1 h-6 w-6" />
            </p>
            <p
              className={`cursor-pointer w-fit mr-0 ml-auto ${
                readMore ? "" : "hidden"
              }`}
              onClick={() => handleReadMore(false)}
            >
              Read Less
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
