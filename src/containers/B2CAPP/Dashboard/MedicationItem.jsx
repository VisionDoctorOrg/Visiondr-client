import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import axios from "axios";

const MedicationItem = ({ data, time, dataContext }) => {
  const [isChecked, setIsChecked] = useState(time.completed);
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

  const checkMedication = async () => {
    // Call backend to get medication
    const token = localStorage.getItem("access");
    console.log(time.id);
    if (token) {
      try {
        const res = await axios.patch(
          `${
            import.meta.env.VITE_API_URL
          }notification/update-reminder-status/?reminderId=${
            time.id
          }&completed=${!isChecked}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log(res.data);
        dataContext.getMedicationData();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const toggleChecked = () => {
    checkMedication();
    setIsChecked(!isChecked);
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
                    {getTime(time.time)}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-col justify-start items-start gap-0.5 flex">
              <div class="w-[83px] h-2 relative">
                <Slider.Root
                  className="relative flex items-center select-none touch-none w-[83px] h-2"
                  value={[time.progress]}
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
            <div
              class={`w-5 h-5 relative cursor-pointer items-center justify-center flex `}
              onClick={toggleChecked}
            >
              {isChecked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 bg-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                    fill="#1749FC"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3ZM5 5V19H19V5H5Z"
                    fill="#1749FC"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicationItem;
