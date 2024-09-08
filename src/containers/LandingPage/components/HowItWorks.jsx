import React, { useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import JoinTheWaitlistMobile from "../forms/JoinTheWaitlistMobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import JoinTheWaitlist from "../forms/JoinTheWaitlist";

const HowItWorks = () => {
  const [tab, setTab] = useState("individual");
  return (
    <div className="lg:py-20 lg:px-[140px] px-8 py-10  w-[100vw] flex items-center">
      <section className="flex flex-col gap-10 w-full">
        <div class="w-full flex-col justify-start items-center gap-2 inline-flex">
          <div class="text-center text-gray-950 text-4xl font-semibold font-['Plus Jakarta Sans'] lg:leading-[43.20px]">
            How It Works
          </div>
          <div class="text-center text-gray-950 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
            Seeking Seamless & Quality Eye Health Care Online
          </div>
        </div>
        <div class=" flex-col justify-start items-center gap-10 inline-flex">
          <div class="max-w-[800px] w-full h-12 relative">
            <div className="w-full grid grid-cols-2 text-center">
              <div className={` text-[#8c8f98] text-base font-medium font-['Plus Jakarta Sans'] leading-normal cursor-pointer ${tab == "individual"? "text-gray-950 font-semibold": ""}`} onMouseEnter={() => setTab("individual")}>
                For Individuals
              </div>
              <div className={` text-[#8c8f98] text-base font-medium font-['Plus Jakarta Sans'] leading-normal cursor-pointer ${tab == "org"? "text-gray-950 font-semibold": ""} `} onMouseEnter={() => setTab("org")}>
                For Enterprise
              </div>
            </div>
            <div class="max-w-[800px] w-full h-2 bg-[#8c8f98]/20 rounded flex-col justify-start items-start gap-2.5 inline-flex relative">
              <div class={`max-w-[400px] lg:w-full w-1/2 h-2 absolute bg-[#1749fc] rounded duration-300 transition-all ${tab == "org"? "right-0": ""}`}></div>
            </div>
          </div>
          <div className={`max-w-[1160px] lg:h-[264px] w-full flex justify-center relative duration-300 transition-all ${tab == "individual"? "": "hidden"} `}>
            <img
              src="/icons/howItWorks_bg.svg"
              className="absolute w-full px-[88px] hidden lg:block"
            />
            <div class=" lg:justify-start lg:items-start items-center justify-center gap-4 inline-flex flex-col lg:flex-row">
              <div class="max-w-[218px] w-full px-10 py-5 flex-col justify-start items-center gap-4 inline-flex">
                <div class="w-10 h-10 justify-center items-center inline-flex">
                  <div class="w-10 h-10 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M3.33398 6.655C3.33703 6.2173 3.51215 5.79836 3.82151 5.4887C4.13086 5.17903 4.54962 5.00349 4.98732 5H35.014C35.9273 5 36.6673 5.74167 36.6673 6.655V33.345C36.6643 33.7827 36.4892 34.2016 36.1798 34.5113C35.8704 34.821 35.4517 34.9965 35.014 35H4.98732C4.54867 34.9996 4.12815 34.825 3.81813 34.5147C3.50812 34.2043 3.33398 33.7836 3.33398 33.345V6.655ZM10.0007 25V28.3333H30.0007V25H10.0007ZM10.0007 11.6667V21.6667H20.0007V11.6667H10.0007ZM23.334 11.6667V15H30.0007V11.6667H23.334ZM23.334 18.3333V21.6667H30.0007V18.3333H23.334ZM13.334 15H16.6673V18.3333H13.334V15Z"
                        fill="#1749FC"
                      />
                    </svg>
                  </div>
                </div>
                <div class="self-stretch text-center text-gray-950 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  Sign up and create your profile
                </div>
              </div>
              <div class="max-w-[218px] w-full px-10 py-5 flex-col justify-start items-center gap-4 inline-flex">
                <div class="w-10 h-10 justify-center items-center inline-flex">
                  <div class="w-10 h-10 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M35.0007 35H21.6673V10C21.6673 8.67392 22.1941 7.40215 23.1318 6.46447C24.0695 5.52678 25.3412 5 26.6673 5H35.0007C35.4427 5 35.8666 5.17559 36.1792 5.48816C36.4917 5.80072 36.6673 6.22464 36.6673 6.66667V33.3333C36.6673 33.7754 36.4917 34.1993 36.1792 34.5118C35.8666 34.8244 35.4427 35 35.0007 35ZM18.334 35H5.00065C4.55862 35 4.1347 34.8244 3.82214 34.5118C3.50958 34.1993 3.33398 33.7754 3.33398 33.3333V6.66667C3.33398 6.22464 3.50958 5.80072 3.82214 5.48816C4.1347 5.17559 4.55862 5 5.00065 5H13.334C14.6601 5 15.9318 5.52678 16.8695 6.46447C17.8072 7.40215 18.334 8.67392 18.334 10V35ZM18.334 35H21.6673V38.3333H18.334V35Z"
                        fill="#1749FC"
                      />
                    </svg>
                  </div>
                </div>
                <div class="self-stretch text-center text-gray-950 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  Access Educational Resources
                </div>
              </div>
              <div class="max-w-[218px] w-full px-8 py-5 flex-col justify-start items-center gap-4 inline-flex">
                <div class="w-10 h-10 justify-center items-center inline-flex">
                  <div class="w-10 h-10 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M35 25.4049V35.0133C34.9996 35.4519 34.825 35.8724 34.5147 36.1824C34.2044 36.4925 33.7837 36.6666 33.345 36.6666H6.65504C6.43617 36.6651 6.21974 36.6204 6.01812 36.5353C5.81649 36.4501 5.63362 36.326 5.47993 36.1702C5.32625 36.0143 5.20477 35.8298 5.12243 35.627C5.04009 35.4242 4.9985 35.2071 5.00004 34.9883V14.9999H15C15.4421 14.9999 15.866 14.8243 16.1786 14.5118C16.4911 14.1992 16.6667 13.7753 16.6667 13.3333V3.33325H33.3367C34.255 3.33325 35 4.09159 35 4.98659V11.2616L20.0017 26.2616L19.9917 33.3249L27.0684 33.3349L35 25.4049ZM36.2967 14.6799L38.6534 17.0366L25.69 29.9999L23.33 29.9966L23.3334 27.6433L36.2967 14.6799V14.6799ZM5.00004 11.6666L13.3334 3.33825V11.6666H5.00004Z"
                        fill="#1749FC"
                      />
                    </svg>
                  </div>
                </div>
                <div class="self-stretch text-center text-gray-950 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  Fill in the details for your system checker metric
                </div>
              </div>
              <div class="max-w-[218px] w-full px-8 py-5 flex-col justify-start items-center gap-4 inline-flex">
                <div class="w-10 h-10 justify-center items-center inline-flex">
                  <div class="w-10 h-10 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M26.6667 3.33325L35 11.6666V35.0133C34.9996 35.4519 34.825 35.8724 34.5147 36.1824C34.2043 36.4925 33.7836 36.6666 33.345 36.6666H6.655C6.2173 36.6635 5.79836 36.4884 5.4887 36.1791C5.17903 35.8697 5.00349 35.451 5 35.0133V4.98659C5 4.07325 5.74167 3.33325 6.655 3.33325H26.6667ZM18.3333 18.3333H13.3333V21.6666H18.3333V26.6666H21.6667V21.6666H26.6667V18.3333H21.6667V13.3333H18.3333V18.3333Z"
                        fill="#1749FC"
                      />
                    </svg>
                  </div>
                </div>
                <div class="self-stretch text-center text-gray-950 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  Fill in your urgent needs on the Casefiles
                </div>
              </div>
              <div class="max-w-[218px] w-full px-8 py-5 flex-col justify-start items-center gap-4 inline-flex">
                <div class="w-10 h-10 justify-center items-center inline-flex">
                  <div class="w-10 h-10 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M4.83293 3.83337L36.1746 14.28C36.3368 14.3338 36.4786 14.4362 36.5807 14.5732C36.6828 14.7103 36.7403 14.8754 36.7454 15.0462C36.7505 15.217 36.7029 15.3853 36.6092 15.5282C36.5154 15.6711 36.38 15.7817 36.2213 15.845L21.6663 21.6667L14.2913 36.4167C14.2162 36.5669 14.0976 36.6909 13.9508 36.7725C13.8041 36.8541 13.6361 36.8895 13.4689 36.874C13.3017 36.8585 13.1431 36.7929 13.0139 36.6857C12.8846 36.5785 12.7908 36.4348 12.7446 36.2734L3.76627 4.85171C3.72468 4.70573 3.72375 4.55117 3.76358 4.4047C3.80341 4.25824 3.88248 4.12543 3.99227 4.02062C4.10205 3.91581 4.23838 3.84297 4.38654 3.80997C4.53469 3.77697 4.68904 3.78506 4.83293 3.83337V3.83337Z"
                        fill="#1749FC"
                      />
                    </svg>
                  </div>
                </div>
                <div class="self-stretch text-center text-gray-950 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  Click on ‘Ask a VisionDR’ when in need of an instant eye care
                  advisory
                </div>
              </div>
            </div>
          </div>
          <div className={`max-w-[1160px] lg:h-[264px] w-full relative flex justify-center flex-col items-center gap-10 duration-300 transition-all ${tab == "org"? "": "hidden"}`}>
            <div class="w-full text-center text-gray-950 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
              Join the waitlist to access firsthand as an eye care provider or
              organization the upside to collaborating with VisionDR to promote
              improved eye health in your practice an locality{" "}
            </div>
            
              <Dialog className="hidden md:block">
                <DialogTrigger className="w-full md:w-fit">
                <button
                className="hidden md:inline-flex w-full lg:w-fit px-6 py-3 rounded-lg border-2 border-primary justify-center items-center gap-2.5 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <div class="text-center text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  Join the waitlist
                </div>
              </button>
                </DialogTrigger>
                <DialogContent className="hidden md:flex items-center z-50 md:max-w-[75%] md:h-[60%] p-0 waitlist-bg bg-transparent border-0 text-white">
                  <DialogClose className="absolute top-4 right-4">
                    <svg
                      className={` flex-shrink-0 size-6 `}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </DialogClose>
                  <JoinTheWaitlist />
                </DialogContent>
              </Dialog>
              <Dialog className="md:hidden">
                <DialogTrigger className="md:hidden w-full md:w-fit">
                <button
                className="w-full lg:w-fit px-6 py-3 rounded-lg border-2 border-primary justify-center items-center gap-2.5 inline-flex text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <div class="text-center text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  Join the waitlist
                </div>
              </button>
                </DialogTrigger>
                <DialogContent className="md:hidden z-50 md:max-w-[60%] md:h-[60%] h-screen p-0 flex items-center justify-center bg-[#010D37] text-white border-none">
                  <JoinTheWaitlistMobile>
                    <DialogClose className="absolute top-0 right-4">
                      <svg
                        className={` flex-shrink-0 size-6 `}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </DialogClose>
                  </JoinTheWaitlistMobile>
                </DialogContent>
              </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
