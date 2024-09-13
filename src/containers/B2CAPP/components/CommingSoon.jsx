import React from "react";
import { NavLink } from "react-router-dom";

const CommingSoon = () => {
  return (
    <div class="max-w-[50rem] flex flex-col mx-auto size-full min-h-[80vh] items-center justify-center">
      <main id="content">
        <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-7xl">
            Comming Soon
          </h1>
          <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <NavLink
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              to="/app/dashboard"
            >
              <svg
                class="shrink-0 size-4"
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
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Dashboard
            </NavLink>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommingSoon;
