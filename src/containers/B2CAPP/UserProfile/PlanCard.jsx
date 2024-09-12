import React from "react";
import { MdArrowOutward } from "react-icons/md";

function PlanCard({ title, price, buttonText, features, className, type, dataContext }) {
    const btnAction = () => {
        if(type === dataContext.billing.type){
            return "Current Plan"
        }
        else if(type === "basic"){
            return "Free"
        }
        else{
            if(dataContext.billing.type === "basic"){
                return "Subscribe"
            }else if(type == "family"){
                return "Upgrade"
        }
    }
        return "Subscribe";
    }

    const handleSubscribe = () => {
        dataContext.setBilling({
            ...dataContext.billing,
            tab: "changeCard",
            chosenPlan: type,
        });
    }
  return (
    <div class={` ${className} md:min-h-[465px] min-w-[262px] md:min-w-[202px] grow w-full h-fit px-0 py-5 bg-white rounded-lg border border-[#d2dbfe] flex-col justify-start items-center gap-10 inline-flex `}>
      <div class="w-full flex-col justify-start items-center gap-10 flex px-2">
        <div class="text-[#404453] text-[22px] font-medium  leading-relaxed">
          {title}
        </div>
        <div class="text-center">
          <span className="text-gray-950 text-[28px] font-normal  leading-[43.20px]">
            ₦
          </span>
          <span className="text-gray-950 text-[28px] font-semibold  leading-[43.20px]">
            {" "}
            {price}
          </span>
          <span className="text-[#8c8f98] text-[22px] font-medium  leading-relaxed">
            /monthly
          </span>
        </div>
        <button onClick={handleSubscribe} class={`w-full h-[60px] p-3 rounded-lg border-2 border-[#1749fc] text-[#1749fc] justify-center items-center gap-2.5 inline-flex hover:bg-primary hover:text-white hover:border-none transition-all duration-500 ${btnAction() === "Current Plan"? "text-[#bfc1c6] border-[#bfc1c6] hover:bg-white hover:text-[#bfc1c6] hover:border-2": ""} `}>
          <div class="text-center text-[22px] font-medium leading-relaxed">
            {btnAction()}
          </div>
          <div class="w-6 h-6 justify-center items-center flex">
            <MdArrowOutward className="w-6 h-6 relative" />
          </div>
        </button>
        <ul class=" w-full text-gray-950 text-base font-medium leading-normal list-disc pl-6">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PlanCard;
