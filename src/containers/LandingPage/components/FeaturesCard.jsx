import React from "react";

const FeaturesCard = ({ children, title, discription }) => {
  return (
    <div class=" justify-start items-center lg:gap-10 gap-5 inline-flex flex-col lg:flex-row mt-5 lg:mt-0">
      <div class="w-full lg:w-20 h-20 justify-start items-center flex">
        <div class="w-20 h-20 relative">{children}</div>
      </div>
      <div class="flex-col justify-start items-start gap-3 inline-flex">
        <div class="text-center text-white lg:text-[28px] text-[22px] font-medium font-['Plus Jakarta Sans'] leading-[33.60px]">
          {title}
        </div>
        <div class="max-w-[536px] w-full text-white text-base font-['Plus Jakarta Sans'] leading-normal">
          {discription}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
