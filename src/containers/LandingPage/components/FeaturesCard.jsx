import React from "react";

const FeaturesCard = ({ children, title, discription, className }) => {
  return (
    <div class={` justify-start items-center lg:gap-10 gap-5 inline-flex flex-col lg:flex-row mt-5 lg:mt-0 ${className}`}>
      <div class="w-full lg:w-20 h-20 justify-center items-center flex">
        <div class="w-20 h-20 relative">{children}</div>
      </div>
      <div class="flex-col justify-start items-start gap-3 inline-flex">
        <div class="w-full text-center lg:text-left lg:text-[28px] text-[22px] font-medium font-['Plus Jakarta Sans'] lg:leading-[33.60px]">
          {title}
        </div>
        <div class="text-center lg:text-left max-w-[536px] w-full text-base lg:font-medium font-['Plus Jakarta Sans'] lg:leading-normal tracking-tight lg:tracking-normal">
          {discription}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
