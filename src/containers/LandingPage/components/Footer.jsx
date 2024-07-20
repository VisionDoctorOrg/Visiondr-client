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
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactUs from "../forms/ContactUs";
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
                href="#about"
                aria-current="page"
              >
                About us
              </a>
            </div>
            <div className="flex items-center md:justify-center md:py-4 ps-px sm:px-3">
              <a
                class=" text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                href="#feature"
                aria-current="page"
              >
                Features
              </a>
            </div>
            <div className="flex items-center md:justify-center md:py-4 ps-px sm:px-3 ">
              <a
                class=" text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                href="#faq"
                aria-current="page"
              >
                FAQ
              </a>
            </div>
            <div className="flex items-center md:justify-center md:py-4 ps-px sm:px-3 ">
              <a
                class=" text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                href="#partners"
                aria-current="page"
              >
                Partners
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
                    <ContactUs />
                  </DialogContent>
                </Dialog>
              </div>
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
            <a href="#">
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
        <svg
          width="40"
          height="40"
          viewBox="0 0 31 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <path
            d="M24.9298 0.833374L20.2931 5.05504C22.4516 5.70702 24.4383 6.83016 26.1098 8.34337C31.9631 13.6767 31.9631 22.3234 26.1098 27.6567C21.7898 31.59 15.1131 34.0934 6.08314 35.1667L10.7198 30.945C8.56138 30.2931 6.57468 29.1699 4.90313 27.6567C-0.950198 22.3234 -0.985198 13.7084 4.90313 8.34337C9.22313 4.41004 15.9015 1.90671 24.9315 0.833374H24.9298ZM15.5065 8.00004C9.06313 8.00004 3.8398 12.4767 3.8398 18C3.8398 23.5234 9.06313 28 15.5065 28C21.9498 28 27.1731 23.5234 27.1731 18C27.1731 12.4767 21.9498 8.00004 15.5065 8.00004ZM15.5065 11.8334C19.1898 11.8334 22.1731 14.595 22.1731 18C22.1731 21.405 19.1898 24.1667 15.5065 24.1667C11.8231 24.1667 8.8398 21.405 8.8398 18C8.8398 14.595 11.8231 11.8334 15.5065 11.8334ZM15.5065 15.1667C13.6098 15.1667 12.1731 16.495 12.1731 18C12.1731 19.505 13.6098 20.8334 15.5065 20.8334C17.4031 20.8334 18.8398 19.505 18.8398 18C18.8398 16.495 17.4031 15.1667 15.5065 15.1667Z"
            fill="white"
          />
        </svg>
        <h1 className="text-center font-bold md:text-[80px] text-[48px] text-white">
          VisionDR
        </h1>
        <p className="text-gray-400 text-center my-4 font-medium text-[22px]">
          Open 24 Hrs
        </p>
      </section>
      <hr className="border-gray-600 w-full" />
    </div>
  );
};

export default Footer;
