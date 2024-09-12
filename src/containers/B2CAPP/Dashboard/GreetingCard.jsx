import React from "react";
import "./Dashboard.css";
import { MdArrowOutward } from "react-icons/md";

function GreetingCard() {
  return (
    <div class="w-full md:h-[258px] md:pl-10 pl-5 rounded-lg border-t-2 border-[#010d37] greeting-bg justify-between items-end inline-flex">
      <div class="py-[38px] flex-col justify-center items-start gap-10 inline-flex">
        <div class="h-[82px] flex-col justify-start items-start gap-2 flex">
          <div class="text-white text-[22px] font-semibold  leading-relaxed">
            Good Morning, John Doe
          </div>
          <div class="self-stretch text-white text-base font-medium  leading-normal">
            Lorem ipsum dolor sit amet consectetur. Massa mauris tempor elit non
            dignissim leo purus.
          </div>
        </div>
        <div class="md:w-[300px] h-[60px] mt-10 md:mt-0 p-3 rounded-lg border-2 border-[#d2dbfe] justify-center items-center gap-2.5 inline-flex hover:bg-primary duration-300 transition-all hover:border-primary">
          <div class="text-center text-white text-base font-medium  leading-normal">
            Ask a VisionDR
          </div>
          <div class="w-6 h-6 justify-center items-center flex">
          <MdArrowOutward className="w-6 h-6 relative text-white" />
          </div>
        </div>
      </div>
      <img
        class="w-[278px] h-[258px] md:block hidden"
        src="/images/greeting-img.png"
      />
    </div>
  );
}

export default GreetingCard;
