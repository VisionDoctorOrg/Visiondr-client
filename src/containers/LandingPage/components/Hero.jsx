import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiMailUnreadLine } from "react-icons/ri";
import { HiOutlineArchiveBox } from "react-icons/hi2";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdArrowOutward } from "react-icons/md";

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
    <div className=" md:pt-10 relative text-white overflow-hidden">
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

      <div className="relative z-10">
        <Navbar />
        <section className="flex flex-col items-center justify-center text-white md:w-[60%] w-[80%] mx-auto min-h-screen md:pt-48 pt-36">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-medium md:text-7xl text-5xl text-center">See Clearly, Live Fully!</h1>
            <p className="text-center text-lg text-slate-300 mt-10">
              Enjoy a clearer view of your world with VisionDR. With our
              exclusive offerings for your optimal eye health, we will take you
              on your personalized eye health journey through eye health
              education, online eye care and services.
            </p>
            <div className="md:mt-20 mt-10 mb-10 flex gap-5 flex-wrap md:flex-nowrap w-[80%] mx-auto md:w-full justify-center">
              <Dialog>
                <DialogTrigger>
                  <Button
                    className={cn(
                      "w-56 md:w-full md:px-28 py-6 border-2 border-white bg-transparent hover:bg-primary hover:text-white text-white hover:border-primary duration-300 transition-all text-lg"
                    )}
                  >
                    Join the waitlist
                    <HiOutlineArchiveBox className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="z-50 md:max-w-[60%] md:h-[60%] p-0">
                  <div className="w-full h-full custom-form-bg ">
                    <div className="w-[85%] mx-auto">
                      <h2 className="text-center font-semibold text-3xl my-7">
                        Be the First to Know!
                      </h2>
                      <p className="text-center my-7">
                        Dont miss out on anything new, eye care tips and amazing
                        discount services we have for you
                      </p>
                      <div className="flex gap-3 w-full my-10 md:mt-44 mt-24 flex-wrap md:flex-nowrap">
                        <label
                          htmlFor="UserEmail"
                          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
                        >
                          <input
                            type="email"
                            id="UserEmail"
                            placeholder="Email"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          />

                          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                            Enter your email
                          </span>
                        </label>
                        <Button
                          className={cn(
                            "hover:border-white border-2 border-primary w-full md:w-fit"
                          )}
                        >
                          Submit <MdArrowOutward className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <a href="#newsletter">
                <Button
                  className={cn(
                    "md:w-full w-56 md:px-28 py-6 border-2 border-white bg-transparent hover:bg-primary hover:text-white text-white hover:border-primary duration-300 transition-all text-lg"
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
