import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import axios from "axios";
import { set } from "react-hook-form";
import { Loader2 } from "lucide-react";

const MedicationItemWithDelete = ({ data, time, dataContext }) => {
  const [imgPath, setImgPath] = useState(
    data.medicationType === "Eye Drop"
      ? "/images/yeast_eye_drop_img.png"
      : data.medicationType === "Capsule"
      ? "/images/karate_capsule_img.png"
      : "/images/yeast_eye_tablets_img.png"
  );

  const getTime = (isoTime) => {
    const date = new Date(isoTime);

    // Extract hours and minutes
    const hours = date.getHours().toString().padStart(2, "0"); // Convert to 2-digit format
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Convert to 2-digit format

    const readableTime = `${hours}:${minutes}`;
    return readableTime;
  };

  const [isLoading, setIsLoading] = useState(false);

  const deleteMedication = async () => {
    // Call backend to delete medication
    const token = localStorage.getItem("access");
    setIsLoading(true);

    if (token) {
      try {
        const res = await axios.delete(
          `${import.meta.env.VITE_API_URL}notification/medication-reminder/${time.medicationReminderId}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            params: {
              id: time.medicationReminderId,
            },
          }
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const onDelete = async () => {
    await deleteMedication();
    dataContext.getMedicationData();
  };
  return (
    <>
      <div class="h-20 justify-between items-center inline-flex w-full px-5 md:px-2">
        <div class="self-stretch p-2 justify-start items-center gap-2 flex">
          <div class="w-[54px] h-[54px] bg-black/20 rounded-lg">
            <img
              src={imgPath}
              alt="medication"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div class="flex-col justify-center items-start gap-3 inline-flex">
            <div class="self-stretch h-[30px] flex-col justify-start items-start gap-1 flex">
              <div class="text-gray-950 text-xs font-medium font-['Plus Jakarta Sans'] leading-[14.40px]">
                {data.medicationName}
              </div>
              <div class="justify-start items-start gap-1 inline-flex">
                <div class="justify-start items-center gap-0.5 flex">
                  <div class="w-[53px] text-[#404453] text-[10px] font-normal font-['Plus Jakarta Sans'] leading-3">
                    {data.dosage}
                  </div>
                </div>
                <div class="justify-start items-center gap-0.5 flex">
                  <div class="text-[#404453] text-[10px] font-normal font-['Plus Jakarta Sans'] leading-3">
                    {getTime(time.reminderTime)}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-col justify-start items-start gap-0.5 flex">
              <div class="w-[83px] h-2 relative">
                <Slider.Root
                  className="relative flex items-center select-none touch-none w-[83px] h-2"
                  defaultValue={[time.progress]}
                  max={100}
                  step={1}
                  disabled
                >
                  <Slider.Track className="bg-[#8c8f98]/20 relative grow rounded-full h-[3px]">
                    <Slider.Range className="absolute bg-gray-950 rounded-sm h-full" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block w-2 h-2 bg-gray-950 rounded-full "
                    aria-label="Volume"
                  />
                </Slider.Root>
              </div>
              <div class="justify-start items-start gap-1 inline-flex">
                <div class="text-[#404453] text-[10px] font-normal font-['Plus Jakarta Sans'] leading-3">
                  {time.progress} %
                </div>
                <div class="justify-start items-center gap-0.5 flex">
                  <div class="text-[#404453] text-[10px] font-normal font-['Plus Jakarta Sans'] leading-3">
                    Complete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-6 h-6 justify-center items-center flex">
          <div class="w-6 h-6 justify-center items-center inline-flex">
            {isLoading ? (
              <Loader2
                className={` ${
                  isLoading ? "" : "hidden"
                }  ml-2 h-4 w-4 animate-spin`}
              />
            ) : (
              <div
                class={`w-5 h-5 relative cursor-pointer items-center justify-center flex `}
                onClick={onDelete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 4V2H17V4H22V6H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"
                    fill="#F2415A"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicationItemWithDelete;
