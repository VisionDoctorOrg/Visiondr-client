import React, { useState } from "react";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import "./Navbar.css";
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

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavMouseEnter = () => {
    setIsNavExpanded(true);
  }

  const handleNavMouseLeave = () => {
    setIsNavExpanded(false);
  }

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
    <div onMouseLeave={handleMouseLeave} className="w-full">
      <header className="absolute md:max-w-[66rem] mx-auto inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full flex-col">
        <nav
          className={`relative  w-full bg-[#010D3777] text-white md:rounded-[16px] py-4 md:px-6 md:flex md:items-center md:justify-between md:py-0 md:mx-2 lg:mx-auto md:h-20 ${
            isExpanded ? "md:rounded-b-none" : ""
          }`}
          aria-label="Global"
        >
          {/* ... (rest of the first nav content remains the same) */}
          <div className="flex items-center justify-between px-6 md:px-0">
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Preline"
            >
              <p>VisionDR</p>
            </a>

            <div className="md:hidden">
              <button
                type="button"
                className={` size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-primary text-white disabled:opacity-50 disabled:pointer-events-none`}
                data-hs-collapse="#navbar-collapse"
                aria-controls="navbar-collapse"
                aria-label="Toggle navigation"
              >
                <svg
                  className={` flex-shrink-0 size-4 ${isNavExpanded?"hidden":""}`}
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
                  className={` flex-shrink-0 size-4 ${isNavExpanded?"":"hidden"}`}
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
            className={`md:h-full overflow-hidden transition-all duration-300 basis-full grow md:flex md:items-center waitlist-sm-bg md:bg-transparent px-6 md:px-0 ${isNavExpanded?"h-screen":" h-0"}`}
            onMouseLeave={handleNavMouseLeave}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2 md:py-0 md:ps-7 md:grow">
              {/* ... (rest of the navbar content remains the same) */}
              <div className="flex md:justify-center grow gap-4 md:flex-row flex-col">
                <div className="mt-10 md:mt-0 flex items-center py-3 md:py-4 ps-px sm:px-3 ">
                  <a
                    className=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                    href="#about"
                    aria-current="page"
                  >
                    About us
                  </a>
                </div>
                <div className="flex items-center py-3 md:py-4 ps-px sm:px-3 ">
                  <a
                    className=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                    href="#feature"
                    aria-current="page"
                  >
                    Features
                  </a>
                </div>
                <div className="flex items-center py-3 md:py-4 ps-px sm:px-3 ">
                  <a
                    className=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                    href="#faq"
                    aria-current="page"
                  >
                    FAQ
                  </a>
                </div>
                <div className="flex items-center py-3 md:py-4 ps-px sm:px-3 ">
                  <a
                    className=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                    href="#partners"
                    aria-current="page"
                  >
                    Partners
                  </a>
                </div>
                <div className="flex items-center py-3 md:py-4 ps-px sm:px-3 ">
                  <a
                    className=" text-white hover:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                    href="#"
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
                              For further inquiries about VisionDR, you can
                              share you inquiries and questions by filling in
                              your questions. We will reply promptly to your
                              querie.
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
                                  className={`absolute top-2 left-8 ${isIndividual?"": "hidden"}`}
                                />
                                <img
                                  src="/images/Star 6.png"
                                  className={`absolute bottom-5 left-12 ${isIndividual?"": "hidden"} `}
                                />
                                <img
                                  src="/images/Star 6.png"
                                  className={`absolute top-5 right-5 ${isIndividual?"": "hidden"} `}
                                />
                                <img
                                  src="/images/Star 6.png"
                                  className={`absolute top-15 right-12 ${isIndividual?"": "hidden"} `}
                                />
                                <img
                                  src="/images/Star 6.png"
                                  className={`absolute bottom-5 right-8 ${isIndividual?"": "hidden"} `}
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
                                className={` relative h-36 w-full border-2 rounded-md flex justify-center items-center flex-col party cursor-pointer ${isOrg ? "border-primary" : ""}`}
                                onClick={() => partyClicked("org")}
                              >
                                <img
                                  src="/images/Star 6.png"
                                  className={`absolute top-2 left-8 ${isOrg?"": "hidden"}`}
                                />
                                <img
                                  src="/images/Star 6.png"
                                  className={`absolute bottom-5 left-12 ${isOrg?"": "hidden"} `}
                                />
                                <img
                                  src="/images/Star 6.png"
                                  className={`absolute top-5 right-5 ${isOrg?"": "hidden"} `}
                                />
                                <img
                                  src="/images/Star 6.png"
                                  className={`absolute top-15 right-12 ${isOrg?"": "hidden"} `}
                                />
                                <img
                                  src="/images/Star 6.png"
                                  className={`absolute bottom-5 right-8 ${isOrg?"": "hidden"} `}
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
                  </a>
                </div>
              </div>

              <div>
                <a
                  className={`hidden group md:inline-flex items-center text-lg gap-x-2 py-2 px-3 bg-primary rounded-lg focus:outline-none border-2 border-primary transition-all duration-300 ${
                    isExpanded ? "border-white text-white bg-transparent" : ""
                  }`}
                  href="#"
                  onMouseEnter={handleMouseEnter}
                >
                  Join the waitlist
                  <HiOutlineArchiveBox />
                </a>
                <Dialog>
                <DialogTrigger>
                <a
                  className={`group my-10 md:hidden inline-flex items-center text-lg gap-x-2 py-2 px-3 bg-primary rounded-lg focus:outline-none border-2 border-primary transition-all duration-300 `}
                  href="#"
                  onMouseEnter={handleMouseEnter}
                >
                  Join the waitlist
                  <HiOutlineArchiveBox />
  
                </a>
                  
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
              </div>
            </div>
          </div>
        </nav>
        <nav
          className={`hidden transition-all duration-300 overflow-hidden relative w-full waitlist-bg text-white rounded-[16px] rounded-t-none py-3 px-6 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto ${
            isExpanded ? "h-[200px]" : "h-0"
          }`}
        >
          <div className="p-4 w-[70%] mx-auto">
            <h3 className="text-xl">Be the first to know when we launch!</h3>
            <div className="flex gap-3 w-full my-10">
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
                className={cn("hover:border-white border-2 border-primary")}
              >
                Submit <MdArrowOutward className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
