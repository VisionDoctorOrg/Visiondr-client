import React, { useEffect, useRef, useState } from "react";
import "../styles/Features.css";
import { RiBookOpenFill } from "react-icons/ri";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { RiFolder4Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <div>
      <section
        className="features-bg lg:py-20 lg:px-[140px] px-8 py-10 text-white lg:min-h-[100vh] w-[100vw] flex items-center"
        id="feature"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-12">
          <div className="lg:col-span-3 flex items-center justify-center">
            <div class=" flex-col justify-center items-start lg:gap-14 gap-7 inline-flex text-center lg:text-left">
              <div class="flex-col justify-start items-start gap-6 flex">
                <div class="flex-col justify-start items-start gap-3 flex">
                  <div class="max-w-[450px] w-full text-white lg:text-5xl text-3xl font-semibold font-['Plus Jakarta Sans'] lg:leading-[57.60px]">
                    Enjoy personalized eye care services made just for you
                  </div>
                  <div class="max-w-[433px] w-full text-[#d2dbfe] lg:text-[22px] text-[18px] font-medium font-['Plus Jakarta Sans'] lg:leading-relaxed">
                    Our unique eye health offerings have features for anyone and
                    everyone with an eye care needs.
                  </div>
                </div>
              </div>
              <NavLink
                to="/reg/signup/individual"
                className="w-full lg:w-fit px-6 py-3 rounded-lg border-2 border-[#d2dbfe] justify-center items-center gap-2.5 inline-flex hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <div class="text-center text-white text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  Get Started
                </div>
              </NavLink>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-10 mt-5 lg:mt-0">
            <FeaturesCard
              title="Educational Resources"
              discription="Empower yourself with comprehensive eye health resources.
                  Explore our library of articles, videos, and infographics that
                  cover a wide range of topics, from preventive care to managing
                  specific eye conditions."
            >
              <RiBookOpenFill className="h-full w-full" />
            </FeaturesCard>
            <FeaturesCard
              title="Eye Health Advisory"
              discription="Receive personalized eye health advice from certified professionals. Our platform offers tailored recommendations based on your unique needs, ensuring you get the best guidance for maintaining optimal eye health."
            >
              <RiFolder4Fill className="h-full w-full" />
            </FeaturesCard>
            <FeaturesCard
              title="Ask a VisionDR"
              discription="Have questions or concerns about your eye health? Connect instantly with a qualified eye care specialist through our chat service. Get real-time answers and advice without the need for an in-person visit."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M21.516 63.3333L6.66602 75V13.3333C6.66602 12.4493 7.0172 11.6014 7.64233 10.9763C8.26745 10.3512 9.11529 10 9.99935 10H69.9994C70.8834 10 71.7313 10.3512 72.3564 10.9763C72.9815 11.6014 73.3327 12.4493 73.3327 13.3333V60C73.3327 60.8841 72.9815 61.7319 72.3564 62.357C71.7313 62.9821 70.8834 63.3333 69.9994 63.3333H21.516ZM23.3327 33.3333C23.3327 37.7536 25.0886 41.9928 28.2142 45.1184C31.3398 48.2441 35.5791 50 39.9994 50C44.4196 50 48.6589 48.2441 51.7845 45.1184C54.9101 41.9928 56.666 37.7536 56.666 33.3333H49.9994C49.9994 35.9855 48.9458 38.529 47.0704 40.4044C45.1951 42.2798 42.6515 43.3333 39.9994 43.3333C37.3472 43.3333 34.8036 42.2798 32.9283 40.4044C31.0529 38.529 29.9994 35.9855 29.9994 33.3333H23.3327Z"
                  fill="white"
                />
              </svg>
            </FeaturesCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
