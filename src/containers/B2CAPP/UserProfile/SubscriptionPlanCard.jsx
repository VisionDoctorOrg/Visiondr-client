import React from "react";

const SubscriptionPlanCard = ({ title, discription, children, dataContext, tab }) => {
  const changeTab = () => {
    dataContext.setBilling({ ...dataContext.billing, tab });
  }

  return (
    <div onClick={changeTab} className={`xl:w-fit xl:min-w-[245px] w-[245px] h-[97px] px-3 py-5 bg-[#d2dbfe]/20 rounded-lg shadow border border-[#d2dbfe] flex-col justify-start items-center gap-10 inline-flex cursor-pointer ${tab == dataContext.billing.tab ? "": "shadow-none bg-white"} `}>
      <div className="flex-col justify-start items-start gap-4 flex w-full">
        <div className="justify-center items-start gap-3 inline-flex">
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">{children}</div>
          </div>
          <div className="text-center text-gray-950 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal tracking-tighter">
            {title}
          </div>
        </div>
        <div className="w-full text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
          {discription}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanCard;
