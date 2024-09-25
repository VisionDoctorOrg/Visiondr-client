import React from "react";
import AddMedicationReminder from "./AddMedicationReminder";
import DeleteMedicationItem from "./DeleteMedicationItem";

const DatesMedStatus = ({ data, dataContext }) => {
  return (
    <div class=" w-full h-11 py-2 justify-between items-center inline-flex my-4 px-5 md:px-2">
      <div class="w-6 h-6 relative">
        <div class="w-6 h-6 left-0 top-0 absolute bg-[#8c8f98]/10 rounded-full"></div>
        <div class="w-[14.40px] h-[14.40px] left-[4.50px] top-[4.50px] absolute justify-center items-center inline-flex">
          <DeleteMedicationItem dataContext={dataContext}>
            <div class="w-[14.40px] h-[14.40px] relative">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M3.5 7.10001H11.9V8.30001H3.5V7.10001Z"
                    fill="#1749FC"
                  />
                </g>
              </svg>
            </div>
          </DeleteMedicationItem>
        </div>
      </div>
      <div class="h-7 justify-between items-center flex gap-3">
        <div class="w-6 h-6 justify-center items-center flex">
          <div class="w-6 h-6 relative cursor-pointer" onClick={dataContext.prevDay}>
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
                  d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z"
                  fill="#010D37"
                />
              </g>
            </svg>
          </div>
        </div>
        <div class="flex-col justify-center items-center gap-1 inline-flex">
          <div class="self-stretch h-7 flex-col justify-start items-center gap-1 flex">
            <div class="text-black text-xs font-medium font-['Plus Jakarta Sans'] leading-[14.40px]">
              {dataContext.getReadableDate(dataContext.date)}
            </div>
            <div class="text-center text-black text-[10px] font-normal font-['Plus Jakarta Sans'] leading-[9.60px]">
              {data?.completedRemindersForTheDay +
                " / " +
                data?.totalRemindersForTheDay }{" "}
              Taken
            </div>
          </div>
        </div>
        <div class="w-6 h-6 justify-center items-center flex">
          <div class="w-6 h-6 relative cursor-pointer" onClick={dataContext.nextDay}>
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
                  d="M13.1717 12L8.22168 7.04999L9.63568 5.63599L15.9997 12L9.63568 18.364L8.22168 16.95L13.1717 12Z"
                  fill="#010D37"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="w-6 h-6 relative">
        <div class="w-6 h-6 left-0 top-0 absolute bg-[#8c8f98]/10 rounded-full"></div>
        <div class="w-[14.40px] h-[14.40px] left-[4.50px] top-[4.50px] absolute justify-center items-center inline-flex">
          <AddMedicationReminder dataContext={dataContext}>
            <div class="w-[14.40px] h-[14.40px] relative">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M7.1 7.1V3.5H8.3V7.1H11.9V8.3H8.3V11.9H7.1V8.3H3.5V7.1H7.1Z"
                    fill="#1749FC"
                  />
                </g>
              </svg>
            </div>
          </AddMedicationReminder>
        </div>
      </div>
    </div>
  );
};

export default DatesMedStatus;
