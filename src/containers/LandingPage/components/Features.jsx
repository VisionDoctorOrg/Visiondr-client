import React from "react";
import "./Features.css";
import { RiBookOpenFill } from "react-icons/ri";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { RiFolder4Fill } from "react-icons/ri";

const Features = () => {
  return (
    <div>
      <section className="features-bg py-16 text-white" id="feature">
        <div className="flex flex-col gap-4 items-center justify-center md:w-[55%] w-[90%] mx-auto">
          <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-8 py-1 text-slate-900">
            <svg
              className="h-5 w-5 text-primary"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="20" className="fill-current" />
            </svg>

            <p className="whitespace-nowrap md:text-sm text-[10px]">Features</p>
          </span>
          <h1 className="font-medium md:text-4xl text-2xl text-center">
            We Offer A Variety of Services
          </h1>
          <p className="text-slate-300 text-center">
            Our unique eye health offerings have features for anyone and
            everyone with an eye care needs.
          </p>
        </div>
        <div className="flex gap-20 md:gap-5 mt-28 mx-auto md:w-[70%] w-[90%] md:justify-between min-h-44 flex-wrap md:flex-nowrap justify-center">

          <div class="card">
            <div className="icon flex items-center justify-center flex-col w-[65%]">
              <RiBookOpenFill className="h-20 w-20" />
              <h2 className="mt-5">Educational Resources</h2>
            </div>
            <div class="card-container">
              <div className="text-sm text-gray-300">
                Through our platform you learn about eye health, conditions, and
                treatments with articles, videos, audios and one on one
                sessions.
              </div>
            </div>
          </div>
          <div class="card">
            <div className="icon flex items-center justify-center flex-col w-[65%]">
              <RiFolder4Fill className="h-20 w-20" />
              <h2 className=" mt-5">Eyecare Advisory</h2>
            </div>
            <div class="card-container">
              <div className="text-sm text-gray-300">
                Connect with our eye care team online for personalised advice on
                vision concerns, pre-appointment questions, and post-care
                guidance.<br/> Additionally, gain access to a safe space to share
                your stories.
              </div>
            </div>
          </div>
          <div class="card">
            <div className="icon flex items-center justify-center flex-col w-[65%]">
              <RiUploadCloud2Fill className="h-20 w-20" />
              <h2 className=" mt-5">Online Care</h2>
            </div>
            <div class="card-container">
              <div className="text-sm text-gray-300">
                To eliminate wait time, schedule virtual consultations for your
                individual needs. As a business, manage appointments, and access
                your eye health records - all in one place.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
