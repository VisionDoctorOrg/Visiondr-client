import React, { useState } from "react";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import "../styles/Navbar.css";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";
import { PiSignInBold } from "react-icons/pi";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import JoinTheWaitlist from "../forms/JoinTheWaitlist";
import ContactUs from "../forms/ContactUs";
import JoinTheWaitlistMobile from "../forms/JoinTheWaitlistMobile";
import UserSelection from "@/containers/Auth/UserSelection";
import { NavLink } from "react-router-dom";

const PricingNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if(!isInputFocused){
      setIsExpanded(false);

    }
  };

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavMouseEnter = () => {
    setIsNavExpanded(true);
  };

  const handleNavMouseLeave = () => {
      setIsNavExpanded(false);
  };

  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`w-full ${isExpanded ? " absolute" : ""} `}
    >
      <header
        className={`absolute lg:max-w-[80%] mx-auto lg:rounded-[28px] bg-[#010D37] inset-x-0 flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full flex-col ${
          isNavExpanded ? "" : "max-w-[80%]"
        }`}
      >
        <nav
          className={`relative  w-full text-white py-4 lg:px-10 lg:flex lg:items-center lg:justify-between lg:py-0 lg:mx-auto lg:h-[90px] ${
            isExpanded ? "lg:rounded-b-none" : ""
          } ${
            isNavExpanded
              ? "bg-[#010D37] px-6"
              : "bg-[#010D3766] lg:bg-transparent rounded-[8px]"
          }`}
          aria-label="Global"
        >
          {/* ... (rest of the first nav content remains the same) */}
          <div className="flex items-center justify-between px-6 lg:px-0">
            <a
              className="flex items-center rounded-lg text-xl font-semibold focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Preline"
            >
              <svg
                width="31"
                height="36"
                viewBox="0 0 31 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M24.9298 0.833374L20.2931 5.05504C22.4516 5.70702 24.4383 6.83016 26.1098 8.34337C31.9631 13.6767 31.9631 22.3234 26.1098 27.6567C21.7898 31.59 15.1131 34.0934 6.08314 35.1667L10.7198 30.945C8.56138 30.2931 6.57468 29.1699 4.90313 27.6567C-0.950198 22.3234 -0.985198 13.7084 4.90313 8.34337C9.22313 4.41004 15.9015 1.90671 24.9315 0.833374H24.9298ZM15.5065 8.00004C9.06313 8.00004 3.8398 12.4767 3.8398 18C3.8398 23.5234 9.06313 28 15.5065 28C21.9498 28 27.1731 23.5234 27.1731 18C27.1731 12.4767 21.9498 8.00004 15.5065 8.00004ZM15.5065 11.8334C19.1898 11.8334 22.1731 14.595 22.1731 18C22.1731 21.405 19.1898 24.1667 15.5065 24.1667C11.8231 24.1667 8.8398 21.405 8.8398 18C8.8398 14.595 11.8231 11.8334 15.5065 11.8334ZM15.5065 15.1667C13.6098 15.1667 12.1731 16.495 12.1731 18C12.1731 19.505 13.6098 20.8334 15.5065 20.8334C17.4031 20.8334 18.8398 19.505 18.8398 18C18.8398 16.495 17.4031 15.1667 15.5065 15.1667Z"
                  fill="white"
                />
              </svg>
              <p className="font-medium text-[16px]">VisionDR</p>
            </a>

            <div className="lg:hidden">
              <button
                type="button"
                className={` size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-transparent text-white disabled:opacity-50 disabled:pointer-events-none`}
                data-hs-collapse="#navbar-collapse"
                aria-controls="navbar-collapse"
                aria-label="Toggle navigation"
              >
                <svg
                  className={` flex-shrink-0 size-4 ${
                    isNavExpanded ? "hidden" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  onClick={handleNavMouseEnter}
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className={` flex-shrink-0 size-4 ${
                    isNavExpanded ? "" : "hidden"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  onClick={handleNavMouseLeave}
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id=""
            className={`lg:h-full overflow-hidden transition-all duration-300 basis-full grow lg:flex lg:items-center bg-[#010D377] lg:bg-transparent px-6 lg:px-0 ${
              isNavExpanded ? "h-screen" : " h-0"
            }`}
            onMouseLeave={handleNavMouseLeave}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-2 lg:py-0 lg:ps-7 lg:grow">
              {/* ... (rest of the navbar content remains the same) */}
              <div className="flex lg:justify-center grow gap-4 lg:flex-row flex-col lg:w-[500px]">
                <div className="mt-10 lg:mt-0 flex items-center py-3 lg:py-4 ps-px sm:px-3 ">
                  <NavLink
                    className=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all lg:text-[16px]"
                    to="/#ourservices"
                    aria-current="page"
                  >
                    Our Services
                  </NavLink>
                </div>
                <div className="flex items-center py-3 lg:py-4 ps-px sm:px-3 ">
                  <NavLink
                    className=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all lg:text-[16px]"
                    to="/#about"
                    aria-current="page"
                  >
                    About us
                  </NavLink>
                </div>
                <div className="flex items-center py-3 lg:py-4 ps-px sm:px-3 ">
                  <a
                    className=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all lg:text-[16px]"
                    href="#pricing"
                    aria-current="page"
                  >
                    Pricing
                  </a>
                </div>
               
                <div className="flex items-center py-3 lg:py-4 ps-px sm:px-3 ">
                  <a
                    className=" text-white hover:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all lg:text-[16px]"
                    href="#"
                    aria-current="page"
                  >
                    <Dialog>
                      <DialogTrigger>Contact us</DialogTrigger>
                      <DialogContent className="lg:max-w-[60%] max-w-[80%] max-h-full md:py-0 py-5 xl:py-5 px-0">
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
                        <ContactUs />
                      </DialogContent>
                    </Dialog>
                  </a>
                </div>
              </div>

              <div>
                <a
                  className={`hidden mt-5 group lg:inline-flex items-center text-lg gap-x-2 py-2 px-6 bg-primary rounded-lg focus:outline-none border-2 border-primary transition-all duration-300 lg:text-[16px] tracking-tight ${
                    isExpanded ? "border-white text-white bg-transparent" : ""
                  }`}
                  href="#"
                  onMouseEnter={handleMouseEnter}
                >
                  Sign In
                  <PiSignInBold/>
                </a>
                <Dialog>
                  <DialogTrigger className="w-full">
                    <a
                      className={`w-full group mt-20 lg:mt-0 lg:hidden inline-flex justify-center items-center text-lg gap-x-2 py-2 px-3 bg-primary rounded-lg focus:outline-none border-2 border-primary transition-all duration-300 text-[16px] tracking-tight`}
                      href="#"
                    >
                      Sign In
                      <PiSignInBold/>
                    </a>
                  </DialogTrigger>
                  <DialogContent className="z-50 lg:max-w-[60%] lg:h-[60%] h-screen p-0 flex items-center justify-center bg-[#010D37] text-white border-none">
                    <UserSelection type="auth">
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
                    </UserSelection>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </nav>
        <nav
          className={`hidden transition-all duration-500 overflow-hidden relative w-full text-white rounded-[16px] rounded-t-none py-3 px-6 lg:flex lg:items-center lg:justify-between lg:py-0 mx-2 lg:mx-auto ${
            isExpanded ? " max-h-[400px]" : "max-h-0 "
          }`}
        >
          {" "}
          {isExpanded ? <UserSelection type="auth"/> : ""}
        </nav>
      </header>
    </div>
  );
};

export default PricingNavbar;
