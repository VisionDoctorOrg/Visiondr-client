import React from "react";
import PaymentMethod from "./PaymentMethod";

const CurrentPlan = () => {
  return (
    <div>
      <div class="w-full px-6 py-5 bg-white rounded-lg border border-[#d2dbfe] justify-start items-start gap-10 inline-flex">
        <div class="w-full flex-col justify-start items-start gap-10 inline-flex">
          <div class="text-gray-950 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
            Current Plan
          </div>
          <div class="flex-col justify-start items-start gap-4 flex">
            <div class="justify-start items-center gap-10 inline-flex">
              <div class="text-center text-[#1749fc] text-[22px] font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
                Starter
              </div>
              <div class="text-center text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                ₦ 2,000 / month
              </div>
            </div>
            <div class="w-[632px] text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
              Access to ask VisionDR sessions, Casefiles for 1, System Checker
              for 1, all personalized eye health resources and community.
            </div>
          </div>
          <div class="flex-col justify-start items-start gap-4 flex">
            <div class="justify-start items-start gap-6 inline-flex">
              <div class="text-[#404453] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Status:
              </div>
              <div class="justify-center items-start gap-2 flex">
                <div class="w-6 h-6 justify-center items-center flex">
                  <div class="w-6 h-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z"
                        fill="#27BE69"
                      />
                    </svg>
                  </div>
                </div>
                <div class="text-[#404453] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  Active
                </div>
              </div>
            </div>
            <div>
              <span className="text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                Renew subscription by{" "}
              </span>
              <span className="text-gray-950 text-sm font-medium font-['Plus Jakarta Sans'] leading-[16.80px]">
                September 8, 2024
              </span>
            </div>
          </div>
          <div class="w-full h-[0px] border border-[#8c8f98]/20"></div>
          <PaymentMethod>
            <div class="text-[#1749fc] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
              Change Payment Method
            </div>
          </PaymentMethod>
        </div>
      </div>
      <div className="mt-10 flex gap-5">
        <div class="w-[238px] h-[60px] p-3 bg-[#1749fc] rounded-lg justify-center items-center gap-3 inline-flex">
          <div class="text-center text-white text-[22px] font-medium font-['Plus Jakarta Sans'] leading-relaxed">
            Change Plan
          </div>
        </div>
        <div class="w-[245px] h-[60px] p-3 rounded-lg border-2 border-[#1749fc] justify-center items-center gap-2.5 inline-flex">
          <div class="text-center text-[#1749fc] text-[22px] font-medium font-['Plus Jakarta Sans'] leading-relaxed">
            Cancel Subscription
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlan;
