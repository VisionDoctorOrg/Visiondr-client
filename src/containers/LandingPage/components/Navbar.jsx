import React from "react";
import { HiOutlineArchiveBox } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div>
      <header class="inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav
          class="relative max-w-[66rem] w-full bg-[#010D3777] text-white rounded-[16px] py-3 px-6 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto h-20"
          aria-label="Global"
        >
          <div class="flex items-center justify-between">
            <a
              class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="../templates/agency/index.html"
              aria-label="Preline"
            >
              <p>VisionDR</p>
            </a>

            <div class="md:hidden">
              <button
                type="button"
                class="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-primary text-white disabled:opacity-50 disabled:pointer-events-none"
                data-hs-collapse="#navbar-collapse"
                aria-controls="navbar-collapse"
                aria-label="Toggle navigation"
              >
                <svg
                  class="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse"
            class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div class="flex flex-col md:flex-row md:items-center md:justify-between py-2 md:py-0 md:ps-7">
              <div className="flex md:justify-center grow gap-4">
                <div className="flex items-center justify-center py-3 md:py-4 ps-px sm:px-3 ">
                  <a
                    class=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                    href="#"
                    aria-current="page"
                  >
                    About us
                  </a>
                </div>
                <div className="flex items-center justify-center py-3 md:py-4 ps-px sm:px-3 ">
                  <a
                    class=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                    href="#"
                    aria-current="page"
                  >
                    Features
                  </a>
                </div>
                <div className="flex items-center justify-center py-3 md:py-4 ps-px sm:px-3 ">
                  <a
                    class=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                    href="#"
                    aria-current="page"
                  >
                    FAQ
                  </a>
                </div>
                <div className="flex items-center justify-center py-3 md:py-4 ps-px sm:px-3 ">
                  <a
                    class=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                    href="#"
                    aria-current="page"
                  >
                    Partners
                  </a>
                </div>
                <div className="flex items-center justify-center py-3 md:py-4 ps-px sm:px-3 ">
                  <a
                    class=" text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 hover:border-b-primary hover:border-b-2 border-b-2 border-b-transparent duration-300 transition-all"
                    href="#"
                    aria-current="page"
                  >
                    Contact us
                  </a>
                </div>
                
              </div>

              <div>
                <a
                  class="group inline-flex items-center text-lg gap-x-2 py-2 px-3 bg-primary rounded-lg focus:outline-none"
                  href="#"
                >
                  Join the waitlist
                  <HiOutlineArchiveBox />
                </a>

              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
