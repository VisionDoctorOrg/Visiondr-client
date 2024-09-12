import * as React from "react";
import { NavLink } from "react-router-dom";

function InfographicsCard({ imageSrc, title, imageAlt, index }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };
  return (
    <NavLink to={`/app/infographics/infographicsPage/${index}`} className="md:max-w-[271px] md:w-[250px] w-full md:pb-3 mb-8 bg-white flex-col justify-start items-start gap-3 inline-flex" onClick={scrollToTop}>
      <div className="h-[184px] w-full relative pr-1 pt-[52px] pb-1  rounded-lg overflow-hidden rounded-br shadow justify-end items-center inline-flex">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-cover absolute inset-0 size-full"
        />
      </div>
      <div class="h-[34px] pt-[9px] pb-2 justify-center items-center inline-flex">
        <div class="w-full text-gray-950 text-sm font-medium font-['Plus Jakarta Sans'] leading-[16.80px]">
          {title}
        </div>
      </div>
    </NavLink>
  );
}

export default InfographicsCard;
