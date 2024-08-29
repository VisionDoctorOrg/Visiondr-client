import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Success = ({title, subtitle, action, actionPath}) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div class="lg:w-[880px] w-full h-[435px] lg:p-20 p-5 py-10 bg-gradient-to-t from-[#010d37] via-[#010d37]  to-[#010d3780] lg:rounded-[28px] justify-center items-center inline-flex">
        <div class="self-stretch flex-col justify-start items-center gap-14 inline-flex w-full">
          <div class="lg:h-[122px] flex-col justify-start items-center gap-3 inline-flex w-full">
            <div class="text-center text-white text-5xl font-semibold leading-[57.60px]">
              {title}
            </div>
            <div class="lg:w-[480px] text-center text-white lg:text-[22px] text-base font-medium leading-relaxed">
              {subtitle}
            </div>
          </div>
          <div class="justify-start items-center gap-20 inline-flex mt-8 w-full">
            <NavLink to={actionPath} className="mx-auto lg:w-[374px] w-full h-[60px] p-3 rounded-lg border-2 border-[#d2dbfe] justify-center items-center gap-2.5 inline-flex hover:bg-primary duration-300 transition-all hover:border-primary">
              <div class="text-center text-white text-[22px] font-medium leading-relaxed">
                {action}
              </div>
              <div class="w-6 h-6 justify-center items-center flex text-white">
                <MdArrowOutward className="w-6 h-6 relative" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
