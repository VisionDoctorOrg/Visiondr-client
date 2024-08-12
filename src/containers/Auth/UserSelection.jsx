import React from "react";
import { NavLink } from "react-router-dom";

const UserSelection = ({ type }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div class="lg:w-[880px] w-full lg:h-[435px] p-20 bg-gradient-to-t from-[#010d37] via-[#010d37]  to-[#010d3780] lg:rounded-[28px] justify-center items-center inline-flex">
        <div class="self-stretch flex-col justify-start items-center gap-14 inline-flex">
          <div class="lg:h-[79px] flex-col justify-start items-center gap-3 flex">
            <div class="self-stretch text-center text-white text-4xl font-semibold leading-[43.20px]">
                {type == "auth"? "Welcome Back!": "Join Our Eye Care Community!"}
              
            </div>
            <div class="self-stretch text-center text-white text-base font-medium leading-normal">
                {type == "auth"? "Select your account type": "Create an account that best suit you"}
              
            </div>
          </div>
          <div class="justify-start items-center lg:gap-20 gap-5 inline-flex">
            <NavLink
            to={`${type == "auth"?"/auth/signin/individual": "/reg/signup/individual"}`}
              className={`relative h-[140px] lg:w-[300px] w-[150px] border-2 rounded-md flex justify-center items-center flex-col party cursor-pointer bg-white text-black `}
            >
              <div className="flex -space-x-2">
                <img src="/images/Group_indiv.png" className="h-10" />
              </div>
              <p className="text-[12px] md:text-[16px] mt-3 font-medium">
                I'm an individual
              </p>
            </NavLink>
            <NavLink
            to={`${type == "auth"?"/auth/signin/organization": "/reg/signup/organization"}`}
              className={`relative h-[140px] lg:w-[300px] w-[150px] border-2 rounded-md flex justify-center items-center flex-col party cursor-pointer bg-white text-black `}
            >
              <div className="flex -space-x-2">
                <img src="/images/Group_org.png" className="h-10" />
              </div>
              <p className="text-[12px] md:text-[16px] mt-3 font-medium">
                I'm an organization
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
