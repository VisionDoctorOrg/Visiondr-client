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
    <div className="bg-[#030712] flex flex-col justify-center items-center py-16">
      <div className="flex md:flex-col gap-20 md:gap-0">
      <section>
        <div className="flex md:justify-center grow md:gap-16 gap-10 md:flex-row flex-col">
          <div className="flex items-center justify-center py-3 md:py-4 ps-px sm:px-3 ">
            <a
              class=" text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
              href="#about"
              aria-current="page"
            >
              About us
            </a>
          </div>
          <div className="flex items-center justify-center py-3 md:py-4 ps-px sm:px-3 ">
            <a
              class=" text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
              href="#feature"
              aria-current="page"
            >
              Features
            </a>
          </div>
          <div className="flex items-center justify-center py-3 md:py-4 ps-px sm:px-3 ">
            <a
              class=" text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
              href="#faq"
              aria-current="page"
            >
              FAQ
            </a>
          </div>
          <div className="flex items-center justify-center py-3 md:py-4 ps-px sm:px-3 ">
            <a
              class=" text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
              href="#partners"
              aria-current="page"
            >
              Partners
            </a>
          </div>
          <div className="flex items-center justify-center py-3 md:py-4 ps-px sm:px-3 ">
            <div
              class="cursor-pointer text-gray-200 hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
              aria-current="page"
            >
              <Dialog>
                <DialogTrigger>Contact us</DialogTrigger>
                <DialogContent className="md:max-w-[60%] h-full p-0">
                  <div className="w-full h-full custom-form ">
                    <div className="md:w-[80%] w-[90%] mx-auto">
                      <h2 className="text-center md:text-3xl text-xl font-semibold my-5">
                        Get in Touch!
                      </h2>
                      <p className="text-center my-5">
                        For further inquiries about VisionDR, you can share you
                        inquiries and questions by filling in your questions. We
                        will reply promptly to your querie.
                      </p>
                      <label
                        htmlFor="UserName"
                        className="my-5 relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
                      >
                        <input
                          type="text"
                          id="UserName"
                          placeholder="Name"
                          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                          Enter your Name
                        </span>
                      </label>
                      <div className=" my-5 flex gap-10">
                        <label
                          htmlFor="UserPhone"
                          className=" relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
                        >
                          <input
                            type="tel"
                            id="UserPhone"
                            placeholder="Phone"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          />

                          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                            Phone Number
                          </span>
                        </label>
                        <label
                          htmlFor="Useremail"
                          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
                        >
                          <input
                            type="email"
                            id="Useremail"
                            placeholder="Email"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          />

                          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                            Enter your email
                          </span>
                        </label>
                      </div>

                      <div className="h-32 space-y-3 my-5">
                        <textarea
                          className=" h-full py-3 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none resize-none"
                          rows="3"
                          placeholder="Leave us a message"
                        ></textarea>
                      </div>
                      <div className="flex justify-between md:gap-16 gap-4 my-5">
                        <div
                          className={`relative h-36 w-full border-2 rounded-md flex justify-center items-center flex-col party cursor-pointer ${
                            isIndividual ? "border-primary" : ""
                          } `}
                          onClick={() => partyClicked("Individual")}
                        >
                          <img
                            src="/images/Star 6.png"
                            className={`absolute top-2 left-8 ${
                              isIndividual ? "" : "hidden"
                            }`}
                          />
                          <img
                            src="/images/Star 6.png"
                            className={`absolute bottom-5 left-12 ${
                              isIndividual ? "" : "hidden"
                            } `}
                          />
                          <img
                            src="/images/Star 6.png"
                            className={`absolute top-5 right-5 ${
                              isIndividual ? "" : "hidden"
                            } `}
                          />
                          <img
                            src="/images/Star 6.png"
                            className={`absolute top-15 right-12 ${
                              isIndividual ? "" : "hidden"
                            } `}
                          />
                          <img
                            src="/images/Star 6.png"
                            className={`absolute bottom-5 right-8 ${
                              isIndividual ? "" : "hidden"
                            } `}
                          />

                          <div className="flex -space-x-2">
                            <img
                              className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                            <img
                              className="inline-block size-10 rounded-full ring-2 ring-white dark:ring-neutral-900 z-10"
                              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                            <img
                              className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                              src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                          </div>
                          <p className="text-sm">I'm an individual</p>
                        </div>
                        <div
                          className={` relative h-36 w-full border-2 rounded-md flex justify-center items-center flex-col party cursor-pointer ${
                            isOrg ? "border-primary" : ""
                          }`}
                          onClick={() => partyClicked("org")}
                        >
                          <img
                            src="/images/Star 6.png"
                            className={`absolute top-2 left-8 ${
                              isOrg ? "" : "hidden"
                            }`}
                          />
                          <img
                            src="/images/Star 6.png"
                            className={`absolute bottom-5 left-12 ${
                              isOrg ? "" : "hidden"
                            } `}
                          />
                          <img
                            src="/images/Star 6.png"
                            className={`absolute top-5 right-5 ${
                              isOrg ? "" : "hidden"
                            } `}
                          />
                          <img
                            src="/images/Star 6.png"
                            className={`absolute top-15 right-12 ${
                              isOrg ? "" : "hidden"
                            } `}
                          />
                          <img
                            src="/images/Star 6.png"
                            className={`absolute bottom-5 right-8 ${
                              isOrg ? "" : "hidden"
                            } `}
                          />
                          <div className="flex -space-x-2">
                            <img
                              className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                              src="/images/bullet-2157465_640.png"
                              alt="Image Description"
                            />
                            <img
                              className="inline-block size-10 rounded-full ring-2 ring-gray-400 dark:ring-neutral-900 z-10"
                              src="/images/humming-bird-1935665_640.png"
                              alt="Image Description"
                            />
                            <img
                              className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                              src="/images/logo-2144403_640.png"
                              alt="Image Description"
                            />
                          </div>
                          <p className="text-sm">I'm an Organization</p>
                        </div>
                      </div>
                      <Button
                        className={cn(
                          "hover:border-white border-2 border-primary w-full"
                        )}
                      >
                        Submit <MdArrowOutward className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
      <section className="md:my-16 ">
        <h1 className="text-gray-400 text-center md:my-6 my-3 font-medium text-xl">
          Social Links
        </h1>
        <div className="text-gray-100 flex justify-between md:flex-row flex-col gap-10">
          <a href="https://twitter.com/vision_doctors" target="_blank">
            <RiTwitterXLine className="h-10 w-10 hover:text-gray-300 transition-all duration-300 mx-auto" />
          </a>
          <a href="https://www.linkedin.com/company/visiondr/" target="_blank">
            <FaLinkedin className="h-10 w-10 hover:text-gray-300 transition-all duration-300 mx-auto" />
          </a>
          <a href="#">
          <FaYoutube className="h-10 w-10 hover:text-gray-300 transition-all duration-300 mx-auto" />

          </a>
          <a
            href="https://www.instagram.com/visiondoctors?igsh=MXh4eWkwdTQ0cDhiaw=="
            target="_blank"
          >
            <FiInstagram className="h-10 w-10 hover:text-gray-300 transition-all duration-300 mx-auto" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61551442276562&mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook className="h-10 w-10 hover:text-gray-300 transition-all duration-300 mx-auto" />
          </a>
        </div>
      </section>

      </div>
      <section className="my-16">
        <h1 className="text-center font-bold text-7xl text-white">VisionDR</h1>
        <p className="text-gray-400 text-center my-4 font-medium text-xl">
          Open 24 Hrs
        </p>
      </section>
      <hr className="border-gray-600 w-full" />
    </div>
  );
};

export default Footer;
