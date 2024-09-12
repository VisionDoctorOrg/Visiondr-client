import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import React from "react";

const Notification = () => {
  return (
    <section className="flex flex-col p-6 rounded-lg border border-violet-200 border-solid w-full text-gray-950 max-md:px-5">
      <header className="flex flex-col w-full max-md:max-w-full">
        <h2 className="text-base font-semibold tracking-tight max-md:max-w-full">
          Notification
        </h2>
      </header>
      <div className="flex flex-col mt-5 w-full text-base font-medium max-w-[812px] max-md:max-w-full">
        <div class=" md:h-[226px] p-6 border border-[#d2dbfe] flex-col justify-start items-start gap-1 inline-flex">
          <div class="w-full md:h-[57px] flex-col justify-start items-start flex">
            <div class="text-center text-[#404453] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[16.80px]">
              General Settings
            </div>
            <div class="self-stretch justify-between items-center inline-flex gap-1 py-2 pb-3 md:py-0 md:pb-0">
              <div class=" text-[#8c8f98] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                General notifications for system updates and announcements.
              </div>
              <div class="w-10 h-10 justify-center items-center flex">
                <div class="w-10 h-10 relative">
                  <Switch id="general-notification" />{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="flex-col justify-start items-start gap-3 flex">
            <div class="text-center text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
              Preference
            </div>
            <div class="flex-col justify-start items-start gap-2 flex">
              <div class="justify-start items-center gap-8 inline-flex">
                <div class="w-6 h-6 justify-center items-center flex">
                  <div class="w-6 h-6 relative">
                    <Checkbox id="sendemail" className="w-5 h-5" />
                  </div>
                </div>
                <div class="text-center text-[#8c8f98] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                  Email
                </div>
              </div>
              <div class="justify-start items-center gap-8 inline-flex">
                <div class="w-6 h-6 justify-center items-center flex">
                  <div class="w-6 h-6 relative">
                    <Checkbox id="sms" className="w-5 h-5" />
                  </div>
                </div>
                <div class="text-center text-[#8c8f98] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                  SMS
                </div>
              </div>
              <div class="justify-start items-center gap-8 inline-flex">
                <div class="w-6 h-6 justify-center items-center flex">
                  <div class="w-6 h-6 relative">
                    <Checkbox id="whatsapp" className="w-5 h-5" />
                  </div>
                </div>
                <div class="text-center text-[#8c8f98] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                  WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 md:h-[203px] p-6 border border-[#d2dbfe] flex-col justify-start items-start gap-3 inline-flex">
          <div class="text-center text-[#404453] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[16.80px]">
            Reminder Settings
          </div>
          <div class="w-full md:h-[57px] flex-col justify-start items-start flex">
            <div class="text-center text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
              Medication Reminder Settings:
            </div>
            <div class="self-stretch justify-between items-center inline-flex gap-1 py-2 md:py-0">
              <li class=" text-[#8c8f98] text-sm font-normal font-['Plus Jakarta Sans'] md:leading-[16.80px]">
                Set reminder for medications 5 minutes before time
              </li>
              <div class="w-10 h-10 justify-center items-center flex">
                <div class="w-10 h-10 relative"><Switch/></div>
              </div>
            </div>
          </div>
          <div class=" w-full h-[57px] flex-col justify-start items-start flex">
            <div class="text-center text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
              Payment Reminder Settings:
            </div>
            <div class="self-stretch justify-between items-center inline-flex gap-1 py-2 md:py-0">
              <li class=" text-[#8c8f98] text-sm font-normal font-['Plus Jakarta Sans'] md:leading-[16.80px]">
                Set reminder for payment due dates.
              </li>
              <div class="w-10 h-10 justify-center items-center flex">
                <div class="w-10 h-10 relative"><Switch/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;
