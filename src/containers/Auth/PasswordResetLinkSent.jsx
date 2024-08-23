import React from "react";
import { MdArrowOutward } from "react-icons/md";

const PasswordResetLinkSent = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div class="lg:w-[880px] w-full h-[435px] lg:p-20 p-5 py-10 bg-gradient-to-t from-[#010d37] via-[#010d37]  to-[#010d3780] lg:rounded-[28px] justify-center items-center inline-flex">
        <div class="self-stretch flex-col justify-start items-center gap-14 inline-flex w-full">
          <div class="lg:h-[122px] flex-col justify-start items-center gap-3 inline-flex w-full">
            <div class="text-center text-white text-5xl font-semibold font-['Plus Jakarta Sans'] leading-[57.60px]">
              
            </div>
            <div class="lg:w-[480px] text-center text-white lg:text-[22px] text-base font-medium font-['Plus Jakarta Sans'] leading-relaxed">
              A link has been sent to your email address to reset your password
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PasswordResetLinkSent;
