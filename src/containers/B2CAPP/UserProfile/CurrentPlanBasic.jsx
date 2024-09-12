import React from "react";

const CurrentPlanBasic = ({dataContext}) => {
  const onClick = () => {
    dataContext.setBilling({
      ...dataContext.billing,
      tab: "changePlan",
      type: "basic",
    });
  }
  return (
    <div>
      <div class="w-full h-[204.99px] px-6 py-5 bg-white rounded-lg border border-[#d2dbfe] justify-start items-start gap-10 inline-flex">
        <div class="w-full flex-col justify-start items-start gap-10 inline-flex">
          <div class="text-gray-950 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
            Current Plan
          </div>
          <div class="flex-col justify-start items-start gap-4 flex">
            <div class="justify-start items-center gap-10 inline-flex">
              <div class="text-center text-[#1749fc] text-[22px] font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
                Basic
              </div>
              <div class="text-center text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                ₦ 0 / month
              </div>
            </div>
            <div class=" text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
              Access to all personalized eye health resources and community.
            </div>
          </div>
          <div class="w-full h-[0px] border border-[#8c8f98]/20"></div>
        </div>
      </div>
      <button class="w-[238px] h-[60px] p-3 bg-[#1749fc] rounded-lg justify-center items-center gap-3 inline-flex mt-10" onClick={onClick}>
        <div class="text-center text-white text-[22px] font-medium font-['Plus Jakarta Sans'] leading-relaxed">
          Subscribe
        </div>
      </button>
    </div>
  );
};

export default CurrentPlanBasic;
