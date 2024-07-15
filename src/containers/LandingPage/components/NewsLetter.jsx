import React from "react";
import "./NewsLetter.css";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
const NewsLetter = () => {
  return (
    <div className="newsletter-bg pt-16" id="newsletter">
      <section className="md:w-1/2 w-[90%] mx-auto flex flex-col justify-center">
        <h1 className="font-medium md:text-3xl text-xl text-center">
          Stay Updated with Vision DR
        </h1>
        <p className="text-center md:my-10 my-4">
          Want access to reliable, interesting, and helpful information about
          your eye health. Subscribe to our newsletter to stay informed about
          vision and gain access to a personalised eye health recommendation
          plan.
        </p>
        <div className="flex gap-3 w-full md:my-16 my-5">
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

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Enter your email
            </span>
          </label>
          <Button>Submit <MdArrowOutward className="ml-2 h-4 w-4"/></Button>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
