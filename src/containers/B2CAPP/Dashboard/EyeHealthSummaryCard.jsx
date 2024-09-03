import React from "react";

const EyeHealthSummaryCard = ({ title, children }) => {
  return (
    <div class=" w-full h-[254px] px-4 py-6 bg-[#d2dbfe]/20 rounded-lg flex-col justify-between items-start inline-flex">
      <div class=" justify-between items-start inline-flex w-full">
        <div class="pl-2 justify-center items-center gap-2.5 flex">
          <div class="text-[#404453] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
            {title}
          </div>
        </div>
        <div class="w-6 h-6 justify-center items-center flex">
          <div class="w-6 h-6 relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group">
                <path
                  id="Vector"
                  d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="#404453"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full justify-between items-end inline-flex">{children}</div>
    </div>
  );
};

export default EyeHealthSummaryCard;
