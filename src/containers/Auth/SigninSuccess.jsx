import React from "react";
import { MdArrowOutward } from "react-icons/md";

const SigninSuccess = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div class="lg:w-[880px] w-full h-[435px] lg:p-20 p-5 py-10 bg-gradient-to-t from-[#010d37] via-[#010d37]  to-[#010d3780] lg:rounded-[28px] justify-center items-center inline-flex">
        <div class="self-stretch flex-col justify-start items-center gap-14 inline-flex w-full">
          <div class="lg:h-[122px] flex-col justify-start items-center gap-3 inline-flex w-full">
            <div class="text-center text-white text-5xl font-semibold font-['Plus Jakarta Sans'] leading-[57.60px]">
              Welcome
            </div>
            <div class="lg:w-[480px] text-center text-white lg:text-[22px] text-base font-medium font-['Plus Jakarta Sans'] leading-relaxed">
              You've signed in to your account
            </div>
          </div>
          <div class="justify-start items-center gap-20 inline-flex">
            <button class="lg:w-[374px] w-full h-[60px] p-3 rounded-lg border-2 border-[#d2dbfe] justify-center items-center gap-2.5 inline-flex hover:bg-primary duration-300 transition-all hover:border-primary">
              <div class="text-center text-white text-[22px] font-medium font-['Plus Jakarta Sans'] leading-relaxed">
                Proceed to dashboard
              </div>
              <div class="w-6 h-6 justify-center items-center flex text-white">
                <MdArrowOutward className="w-6 h-6 relative" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninSuccess;
