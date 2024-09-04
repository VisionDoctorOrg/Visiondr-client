import React from "react";
import MedicationItem from "./MedicationItem";
import DatesMedStatus from "./DatesMedStatus";
import "./Dashboard.css";

const MedicationReminder = () => {
  const medicationData = [
    {
      name: "Yeast Eye drop",
      dosage: "2 Drops",
      time: "10:00 AM",
      completionPercentage: 58,
      checked: true,
      imgPath: "/images/yeast_eye_drop_img.png",
    },
    {
      name: "Karate Capsule",
      dosage: "2 Capsules",
      time: "10:00 AM",
      completionPercentage: 58,
      checked: true,
      imgPath: "/images/karate_capsule_img.png",
    },
    {
      name: "Yeast Eye Tablets",
      dosage: "2 Tablets",
      time: "10:00 AM",
      completionPercentage: 58,
      checked: true,
      imgPath: "/images/yeast_eye_tablets_img.png",
    },
    {
      name: "Omega 3 Capsule",
      dosage: "1 Capsule",
      time: "10:00 AM",
      completionPercentage: 58,
      checked: true,
      imgPath: "/images/omega3_capsule_img.png",
    },
    {
      name: "Yeast Eye drop",
      dosage: "2 Drops",
      time: "10:00 AM",
      completionPercentage: 58,
      checked: false,
      imgPath: "/images/yeast_eye_drop_img.png",
    },
    {
      name: "Karate Capsule",
      dosage: "2 Capsules",
      time: "10:00 AM",
      completionPercentage: 58,
      checked: false,
      imgPath: "/images/karate_capsule_img.png",
    },
    {
      name: "Yeast Eye Tablets",
      dosage: "2 Tablets",
      time: "10:00 AM",
      completionPercentage: 58,
      checked: false,
      imgPath: "/images/yeast_eye_tablets_img.png",
    },
    {
      name: "Omega 3 Capsule",
      dosage: "1 Capsule",
      time: "10:00 AM",
      completionPercentage: 58,
      checked: false,
      imgPath: "/images/omega3_capsule_img.png",
    },
  ];

  return (
    <div className="bg-[#d2dbfe]/20">
      <div class="w-full h-[158px] px-[30px] py-[50px] reminder-bg rounded-tl-lg rounded-tr-lg shadow-inner justify-center items-center inline-flex">
        <div class="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-2 inline-flex">
          <div class="w-6 h-6 justify-center items-center inline-flex">
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
                    d="M3.99962 20V14C3.99962 11.8783 4.84247 9.84344 6.34276 8.34315C7.84305 6.84285 9.87788 6 11.9996 6C14.1213 6 16.1562 6.84285 17.6565 8.34315C19.1568 9.84344 19.9996 11.8783 19.9996 14V20H20.9996V22H2.99962V20H3.99962ZM5.99962 20H17.9996V14C17.9996 12.4087 17.3675 10.8826 16.2423 9.75736C15.117 8.63214 13.5909 8 11.9996 8C10.4083 8 8.88219 8.63214 7.75698 9.75736C6.63176 10.8826 5.99962 12.4087 5.99962 14V20ZM10.9996 2H12.9996V5H10.9996V2ZM19.7776 4.808L21.1916 6.222L19.0716 8.343L17.6566 6.929L19.7776 4.808ZM2.80762 6.222L4.22162 4.808L6.34262 6.928L4.92962 8.344L2.80762 6.222ZM6.99962 14C6.99962 12.6739 7.5264 11.4021 8.46408 10.4645C9.40176 9.52678 10.6735 9 11.9996 9V11C11.204 11 10.4409 11.3161 9.8783 11.8787C9.31569 12.4413 8.99962 13.2044 8.99962 14H6.99962Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="text-white text-[22px] font-medium leading-relaxed">
            Medication Reminder
          </div>
        </div>
      </div>
      <DatesMedStatus />
      <section className="flex flex-col gap-2 justify-between leading-tight w-full">
        {medicationData.map((medicationData) => (
          <MedicationItem {...medicationData} />
        ))}
      </section>
    </div>
  );
};

export default MedicationReminder;
