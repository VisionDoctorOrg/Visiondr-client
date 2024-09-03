import React from 'react';

const MedicationItem = ({ name, dosage, time, completionPercentage }) => {
  return (
    <>
    {/* <div className="flex gap-2 items-center p-2 h-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/874740f8b2dc806f464994af903bb31a4a9aec902276c3fb7d580d4157f1682b?placeholderIfAbsent=true&apiKey=06e54cbb0c8d4ebdbfa1852341f08638" alt="" className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[54px]" />
      <div className="flex flex-col justify-center self-stretch my-auto">
        <div className="flex flex-col w-full">
          <h3 className="text-xs font-medium opacity-[var(--sds-size-stroke-border)] text-gray-950">{name}</h3>
          <div className="flex gap-1 items-start mt-1 text-xs text-gray-700">
            <div className="flex gap-0.5 items-center w-[53px]">
              <span className="self-stretch my-auto opacity-[var(--sds-size-stroke-border)] w-[53px]">{dosage}</span>
            </div>
            <div className="flex gap-0.5 items-center whitespace-nowrap">
              <time className="self-stretch my-auto opacity-[var(--sds-size-stroke-border)]">{time}</time>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3 w-full text-xs text-gray-700 whitespace-nowrap max-w-[83px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c5588f5fc5a23c1a7af8dfe99bde02d64c516e519502266800fda34ec1f452c?placeholderIfAbsent=true&apiKey=06e54cbb0c8d4ebdbfa1852341f08638" alt="Progress bar" className="object-contain w-full rounded-none aspect-[10.42]" />
          <div className="flex gap-1 items-start">
            <span className="opacity-[var(--sds-size-stroke-border)]">{completionPercentage}%</span>
            <span className="self-stretch my-auto opacity-[var(--sds-size-stroke-border)]">Complete</span>
          </div>
        </div>
      </div>
    </div> */}
    <div class="h-20 justify-between items-center inline-flex w-full">
    <div class="self-stretch p-2 justify-start items-center gap-2 flex">
      <div class="w-[54px] h-[54px] bg-black/20 rounded-lg"></div>
      <div class="flex-col justify-center items-start gap-3 inline-flex">
        <div class="self-stretch h-[30px] flex-col justify-start items-start gap-1 flex">
          <div class="text-gray-950 text-xs font-medium font-['Plus Jakarta Sans'] leading-[14.40px]">Yeast Eye drop</div>
          <div class="justify-start items-start gap-1 inline-flex">
            <div class="justify-start items-center gap-0.5 flex">
              <div class="w-[53px] text-[#404453] text-[10px] font-normal font-['Plus Jakarta Sans'] leading-3">2 Drops</div>
            </div>
            <div class="justify-start items-center gap-0.5 flex">
              <div class="text-[#404453] text-[10px] font-normal font-['Plus Jakarta Sans'] leading-3">10:00</div>
              <div class="text-[#404453] text-[10px] font-normal font-['Plus Jakarta Sans'] leading-3">AM</div>
            </div>
          </div>
        </div>
        <div class="flex-col justify-start items-start gap-0.5 flex">
          <div class="w-[83px] h-2 relative">
            <div class="w-[83px] h-1 left-0 top-[2px] absolute bg-[#8c8f98]/20 rounded-sm"></div>
            <div class="w-[46px] h-1 left-0 top-[2px] absolute bg-gray-950 rounded-sm"></div>
            <div class="w-2 h-2 left-[42px] top-0 absolute bg-gray-950 rounded-full"></div>
          </div>
          <div class="justify-start items-start gap-1 inline-flex">
            <div class="text-[#404453] text-[10px] font-normal font-['Plus Jakarta Sans'] leading-3">58%</div>
            <div class="justify-start items-center gap-0.5 flex">
              <div class="text-[#404453] text-[10px] font-normal font-['Plus Jakarta Sans'] leading-3">Complete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-6 h-6 justify-center items-center flex">
      <div class="w-6 h-6 justify-center items-center inline-flex">
        <div class="w-6 h-6 relative">
        <input type="checkbox" className="hidden peer" />
      <span className="w-6 h-6 bg-gray-200 border-2 border-gray-300 rounded-sm flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
        {/* Optional checkmark icon */}
        <svg
          className="hidden w-4 h-4 text-white peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default MedicationItem;