import React, { useState } from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactUs from "../forms/ContactUs";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const [isIndividual, setIsIndividual] = useState(false);
  const [isOrg, setIsOrg] = useState(false);

  const partyClicked = (party) => {
    if (party == "org") {
      setIsOrg(true);
      setIsIndividual(false);
    } else {
      setIsIndividual(true);
      setIsOrg(false);
    }
  };
  return (
    <div className="bg-[#030712] flex flex-col justify-center items-center md:py-16 py-8">
      <div className="flex md:flex-col md:gap-0 md:w-[55%] w-[80%] justify-between">
        <section>
          <div className="flex md:justify-center grow md:gap-16 gap-[24px] md:flex-row flex-col">
            <div className="flex items-center md:justify-center md:py-4 ps-px sm:px-3 ">
              <a
                class=" text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                href="#ourservices"
                aria-current="page"
              >
                Our Services
              </a>
            </div>
            <div className="flex items-center md:justify-center md:py-4 ps-px sm:px-3">
              <a
                class=" text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                href="#about"
                aria-current="page"
              >
                About us
              </a>
            </div>
            
            <div className="flex items-center md:justify-center md:py-4 ps-px sm:px-3 ">
              <div
                class="cursor-pointer text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                aria-current="page"
              >
                <Dialog>
                  <DialogTrigger>Contact us</DialogTrigger>
                  <DialogContent className="md:max-w-[60%] max-w-[80%] max-h-full py-5 px-0">
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
              </div>
            </div>
            <div className="flex items-center md:justify-center md:py-4 ps-px sm:px-3 ">
              <NavLink
                className=" text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                to="/pricing"
                aria-current="page"
              >
                Pricing
              </NavLink>
            </div>
          </div>
        </section>
        <section className="md:my-16 md:mt-20">
          <h1 className="text-gray-50 md:text-[#8c8f98] text-center md:my-8 mb-2 md:text-[22px] text-[16px] tracking-tight">
            Social Links
          </h1>
          <div className="text-[#8c8f98] md:text-white flex justify-between md:flex-row flex-col md:gap-10 gap-[24px]">
            <a href="https://twitter.com/vision_doctors" target="_blank">
              <RiTwitterXLine className="md:h-[40px] md:w-[40px] h-[24px] w-[24px] hover:text-gray-300 transition-all duration-300 mx-auto" />
            </a>
            <a
              href="https://www.linkedin.com/company/visiondr/"
              target="_blank"
            >
              <FaLinkedin className="md:h-[40px] md:w-[40px] h-[24px] w-[24px] hover:text-gray-300 transition-all duration-300 mx-auto" />
            </a>
            <a href="https://youtube.com/@visiondr9732?si=6bS0q8bcWekaZcnQ">
              <FaYoutube className="md:h-[40px] md:w-[40px] h-[24px] w-[24px] hover:text-gray-300 transition-all duration-300 mx-auto" />
            </a>
            <a
              href="https://www.instagram.com/visiondoctors?igsh=MXh4eWkwdTQ0cDhiaw=="
              target="_blank"
            >
              <FiInstagram className="md:h-[40px] md:w-[40px] h-[24px] w-[24px] hover:text-gray-300 transition-all duration-300 mx-auto" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61551442276562&mibextid=ZbWKwL"
              target="_blank"
            >
              <FaFacebook className="md:h-[40px] md:w-[40px] h-[24px] w-[24px] hover:text-gray-300 transition-all duration-300 mx-auto" />
            </a>
          </div>
        </section>
      </div>
      <section className="my-16">
        <img src="/logo_white.svg" alt="logo" className="w-[200px] md:w-[480px]" />
        <p className="text-gray-400 text-center my-4 font-medium text-[22px]">
          Open 24 Hrs
        </p>
      </section>
      <hr className="border-gray-600 w-full" />
    </div>
  );
};

export default Footer;
