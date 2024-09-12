import * as React from "react";
import { NavLink } from "react-router-dom";

function VideoCardSmall({ imageSrc, date, title, id, imageAlt, index }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };
  return (
    <NavLink
      to={`/app/videos/videoPage/${index}`}
      className="max-w-[271px] pb-3 mb-8 bg-white justify-start items-start gap-3 inline-flex mx-auto"
      onClick={scrollToTop}
    >
      <div className="h-[120px] w-[120px] relative pr-1 pt-[52px] pb-1  rounded-lg overflow-hidden rounded-br shadow justify-end items-center inline-flex">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-cover absolute inset-0 size-full"
        />
      </div>
      <div class="w-[162px] h-[120px] py-4 flex-col justify-between items-start inline-flex">
        <div class="self-stretch h-[51px] flex-col justify-start items-start gap-[7px] flex">
          <div class="h-[51px] justify-center items-center inline-flex">
            <div class="w-[162px]">
              <span className="text-gray-950 text-sm font-medium font-['Plus Jakarta Sans'] leading-[16.80px]">
                {title}
              </span>
            </div>
          </div>
        </div>
        <div class="self-stretch justify-between items-center inline-flex">
          <div class="text-[#404453] text-xs font-normal font-['Plus Jakarta Sans'] leading-[14.40px]">
            {date}
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default VideoCardSmall;
