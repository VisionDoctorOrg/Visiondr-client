import React from "react";
import "./Dashboard.css";
import { MdArrowOutward } from "react-icons/md";

function GreetingCard() {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const subscribed = userInfo.subscriptions?.length > 0;

  const handleClick = () => {
    if (subscribed) {
      window.location.href = "https://wa.me/message/5KU2UK5QN4HNN1";
    } else {
      window.location.href = "/app/profile/billing";
    }
  }
  return (
    <div class="w-full md:h-[258px] md:pl-10 pl-5 rounded-lg border-t-2 border-[#010d37] greeting-bg justify-between items-end inline-flex">
      <div class="py-[38px] flex-col justify-center items-start gap-10 inline-flex">
        <div class="h-[82px] flex-col justify-start items-start gap-2 flex">
          <div class="text-white text-[22px] font-semibold  leading-relaxed">
            Good Morning, Chibundu Israel
          </div>
          <div class="self-stretch text-white text-base font-medium  leading-normal">
            Get instant one on one eyecare advisory to solve your immediate
            visual concerns
          </div>
        </div>
        <button onClick={handleClick} class="md:w-[300px] h-[60px] mt-10 md:mt-0 p-3 rounded-lg border-2 border-[#d2dbfe] justify-center items-center gap-2.5 inline-flex hover:bg-primary duration-300 transition-all hover:border-primary">
          <div class="text-center text-white text-base font-medium  leading-normal">
            Ask a VisionDR
          </div>
          <div class="w-6 h-6 justify-center items-center flex">
            <MdArrowOutward className="w-6 h-6 relative text-white" />
          </div>
        </button>
      </div>
      <img
        class="w-[278px] h-[258px] md:block hidden"
        src="/images/greeting-img.png"
      />
    </div>
  );
}

export default GreetingCard;
