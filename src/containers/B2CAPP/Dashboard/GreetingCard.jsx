import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { MdArrowOutward } from "react-icons/md";
import { connect } from "react-redux";

function GreetingCard({ userData }) {
  const handleClick = () => {
    if (userData?.subscriptionActive === "Active") {
      window.location.href = "https://wa.me/message/5KU2UK5QN4HNN1";
    } else {
      window.location.href = "/app/profile/billing";
    }
  };
  return (
    <div className="w-full md:h-[258px] md:pl-10 pl-5 rounded-lg border-t-2 border-[#010d37] greeting-bg justify-between items-end inline-flex">
      <div className="py-[38px] flex-col justify-center items-start gap-10 inline-flex">
        <div className="h-[82px] flex-col justify-start items-start gap-2 flex">
          <div className="text-white text-[22px] font-semibold  leading-relaxed">
            Hello, {userData ? userData.fullName : ""}
          </div>
          <div className="self-stretch text-white text-base font-medium  leading-normal">
            Get instant one on one eyecare advisory to solve your immediate
            visual concerns
          </div>
        </div>
        <button
          onClick={handleClick}
          className="md:w-[300px] h-[60px] mt-10 md:mt-0 p-3 rounded-lg border-2 border-[#d2dbfe] justify-center items-center gap-2.5 inline-flex hover:bg-primary duration-300 transition-all hover:border-primary"
        >
          <div className="text-center text-white text-base font-medium  leading-normal">
            Ask a VisionDR
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <MdArrowOutward className="w-6 h-6 relative text-white" />
          </div>
        </button>
      </div>
      <div className="flex-grow h-full overflow-y-hidden justify-end">
        <img
          className="max-w-[370px] 2xl:max-w-[320px] w-full md:block hidden"
          src="/images/greeting-img.png"
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  userData: state.auth.user,
});

export default connect(mapStateToProps)(GreetingCard);
