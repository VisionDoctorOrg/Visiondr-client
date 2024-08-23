import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import "../styles/Hero.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiMailUnreadLine } from "react-icons/ri";
import { HiOutlineArchiveBox } from "react-icons/hi2";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdArrowOutward } from "react-icons/md";
import JoinTheWaitlist from "../forms/JoinTheWaitlist";
import JoinTheWaitlistMobile from "../forms/JoinTheWaitlistMobile";
import UserSelection from "@/containers/Auth/UserSelection";

const images = [
  "/images/Default.png",
  "/images/v2.png",
  "/images/v3.png",
  "/images/v4.png",
  "/images/v5.png",
  "/images/v6.png",
  "/images/v7.png",
  "/images/v8.png",
  "/images/v9.png",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1500); // Match this with the transition duration
      setTimeout(() => {
        setNextIndex((prevNextIndex) => (prevNextIndex + 1) % images.length);
      }, 2000);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className=" relative text-white overflow-hidden bg-[#010D37]">
      {/* Current Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

      {/* Next Image (for transition) */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity ease-out ${
          isTransitioning ? "opacity-100 duration-1500" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${images[nextIndex]})` }}
      />

      <div className="md:mt-10 mt-5 relative z-10 hero-bg ">
        <Navbar />
        <section className="flex flex-col items-center justify-center text-white md:w-[70%] w-[80%] mx-auto md:pt-48 pt-36 md:min-h-screen">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="md:mt-20 font-medium text-[28px] md:text-[62px] text-5xl text-center md:tracking-tight">
              See Clearly, Live Fully!
            </h1>
            <p className="text-center text-[16px] text-slate-300 md:mt-8 mt-10 md:text-[22px]  md:leading-[1.1] md:tracking-tight">
              Enjoy a clearer view of your world with VisionDR. With our
              exclusive offerings for your optimal eye health, we will take you
              on your personalized eye health journey through eye health
              education, online eye care and services. We provide organizations
              with offerings to reduce patient wait time and improve eye care
              delivery.
            </p>
            <div className="md:mt-28 md:mb-44 mt-10 mb-10 flex gap-5 flex-wrap md:flex-nowrap mx-auto md:w-full justify-center ">
              <Dialog className="hidden md:block">
                <DialogTrigger className="w-full md:w-fit">
                  <Button
                    className={cn(
                      "hidden md:flex w-full py-6 border-2 border-primary bg-primary hover:bg-primary hover:text-white text-white hover:border-primary duration-300 transition-all text-[16px] h-[60px] md:w-[374px] tracking-tight"
                    )}
                  >
                    Create Account
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                    >
                      <path
                        d="M1 7H0V1.003C0 0.449002 0.455 2.19659e-06 0.992 2.19659e-06H19.008C19.1393 -0.000274335 19.2693 0.0255614 19.3905 0.076006C19.5117 0.126451 19.6217 0.200497 19.714 0.293835C19.8063 0.387173 19.8791 0.497939 19.9282 0.619688C19.9773 0.741436 20.0017 0.871735 20 1.003V7H19V17.001C19.0004 17.1318 18.975 17.2614 18.9253 17.3824C18.8756 17.5034 18.8026 17.6134 18.7104 17.7062C18.6182 17.7989 18.5086 17.8726 18.3879 17.923C18.2672 17.9735 18.1378 17.9996 18.007 18H1.993C1.8622 17.9996 1.73276 17.9735 1.61207 17.923C1.49139 17.8726 1.38181 17.7989 1.2896 17.7062C1.19739 17.6134 1.12436 17.5034 1.07467 17.3824C1.02498 17.2614 0.999605 17.1318 1 17.001V7ZM17 7H3V16H17V7ZM2 2V5H18V2H2ZM7 9H13V11H7V9Z"
                        fill="white"
                      />
                    </svg>
                  </Button>
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
                  <UserSelection type="reg" />
                </DialogContent>
              </Dialog>
              <Dialog className="md:hidden">
                <DialogTrigger className="md:hidden w-full md:w-fit">
                  <Button
                    className={cn(
                      "md:hidden w-full py-6 border-2 border-primary bg-primary hover:bg-primary hover:text-white text-white hover:border-primary duration-300 transition-all text-[16px] h-[60px] md:w-[374px] tracking-tight"
                    )}
                  >
                    Create Account
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                    >
                      <path
                        d="M1 7H0V1.003C0 0.449002 0.455 2.19659e-06 0.992 2.19659e-06H19.008C19.1393 -0.000274335 19.2693 0.0255614 19.3905 0.076006C19.5117 0.126451 19.6217 0.200497 19.714 0.293835C19.8063 0.387173 19.8791 0.497939 19.9282 0.619688C19.9773 0.741436 20.0017 0.871735 20 1.003V7H19V17.001C19.0004 17.1318 18.975 17.2614 18.9253 17.3824C18.8756 17.5034 18.8026 17.6134 18.7104 17.7062C18.6182 17.7989 18.5086 17.8726 18.3879 17.923C18.2672 17.9735 18.1378 17.9996 18.007 18H1.993C1.8622 17.9996 1.73276 17.9735 1.61207 17.923C1.49139 17.8726 1.38181 17.7989 1.2896 17.7062C1.19739 17.6134 1.12436 17.5034 1.07467 17.3824C1.02498 17.2614 0.999605 17.1318 1 17.001V7ZM17 7H3V16H17V7ZM2 2V5H18V2H2ZM7 9H13V11H7V9Z"
                        fill="white"
                      />
                    </svg>
                  </Button>
                </DialogTrigger>
                <DialogContent className="md:hidden z-50 md:max-w-[60%] md:h-[60%] h-screen p-0 flex items-center justify-center bg-[#010D37] text-white border-none">
                  <UserSelection type="reg" >
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
              <a href="#newsletter" className="w-full md:w-fit">
                <Button
                  className={cn(
                    "md:w-[374px] w-full py-6 border-2 border-white bg-transparent hover:bg-primary hover:text-white text-white hover:border-primary duration-300 transition-all  text-[16px] h-[60px] tracking-tight"
                  )}
                >
                  Get Eye Care Tips
                  <RiMailUnreadLine className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
