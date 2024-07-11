import React from "react";
import "./Features.css";
import { RiBookOpenFill } from "react-icons/ri";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { RiFolder4Fill } from "react-icons/ri";


const Features = () => {
  return (
    <div>
      <section className="features-bg py-16 text-white">
        <div className="flex flex-col gap-4 items-center justify-center w-[50%] mx-auto">
          <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-8 py-1 text-slate-900">
            <svg
              className="h-5 w-5 text-primary"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="20" className="fill-current" />
            </svg>

            <p className="whitespace-nowrap text-sm">Features</p>
          </span>
          <h1 className="font-medium text-4xl">We Offer A Variety of Services</h1>
          <p className="text-slate-300">
            Our unique eye health offerings have features for anyone and
            everyone with an eye care needs.
          </p>
        </div>
        <div className="flex gap-5 mt-28 mx-auto w-[70%] justify-between">
          <div className="flex flex-col items-center gap-6">
            <div ><RiBookOpenFill className="h-20 w-20"/>
            </div>
            <h1 className="text-xl">Educational Resources</h1>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div ><RiFolder4Fill className="h-20 w-20"/>
            </div>
            <h1 className="text-xl">Eye Care Advisory</h1>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div ><RiUploadCloud2Fill className="h-20 w-20"/>
            </div>
            <h1 className="text-xl">Online Care</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
