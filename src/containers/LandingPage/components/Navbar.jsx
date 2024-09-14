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

const Navbar = () => {
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
        className={`absolute lg:max-w-[80%] mx-auto lg:rounded-[28px] waitlist-bg inset-x-0 flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full flex-col ${
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
              <img src="/logo_white.svg" alt="logo" className="md:w-[200px] w-[120px]" />
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
                  <a
                    className=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all lg:text-[16px]"
                    href="#ourservices"
                    aria-current="page"
                  >
                    Our Services
                  </a>
                </div>
                <div className="flex items-center py-3 lg:py-4 ps-px sm:px-3 ">
                  <a
                    className=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all lg:text-[16px]"
                    href="#about"
                    aria-current="page"
                  >
                    About us
                  </a>
                </div>
                <div className="flex items-center py-3 lg:py-4 ps-px sm:px-3 ">
                  <NavLink
                    className=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all lg:text-[16px]"
                    to="/pricing"
                    aria-current="page"
                  >
                    Pricing
                  </NavLink>
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

export default Navbar;
