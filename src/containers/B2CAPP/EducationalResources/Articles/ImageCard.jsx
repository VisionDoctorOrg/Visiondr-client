import * as React from "react";
import { NavLink } from "react-router-dom";

function ImageCard({
  imageSrc,
  imageAlt,
  timeSrc,
  timeAlt,
  timeText,
  title,
  description,
  index,
}) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    });
  };
  return (
    <div className="md:max-w-[271px] md:w-[250px] h-fit pb-3 mb-8 bg-white flex-col justify-start items-start gap-3 inline-flex">
      <div className="h-20 w-full relative pr-1 pt-[52px] pb-1 bg-gradient-to-r from-black to-black rounded-bl rounded-br shadow justify-end items-center inline-flex">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="self-stretch p-1 bg-black/20 rounded justify-start items-center gap-1 inline-flex backdrop-blur-md">
          <div className="w-4 h-4 justify-center items-center flex">
            <div className="w-4 h-4 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.7453 3.97867L12.714 3.01L13.6566 3.95267L12.688 4.92133C13.6451 6.11945 14.1072 7.63858 13.9793 9.16676C13.8515 10.6949 13.1433 12.1161 12.0003 13.1385C10.8573 14.1608 9.3662 14.7067 7.83328 14.6641C6.30036 14.6214 4.84196 13.9934 3.75761 12.909C2.67325 11.8247 2.04524 10.3663 2.00257 8.83334C1.9599 7.30042 2.50579 5.80935 3.52814 4.66634C4.5505 3.52334 5.9717 2.81517 7.49987 2.68728C9.02804 2.55939 10.5472 3.02149 11.7453 3.97867V3.97867ZM7.99996 13.3333C8.61279 13.3333 9.21963 13.2126 9.78581 12.9781C10.352 12.7436 10.8664 12.3998 11.2998 11.9665C11.7331 11.5332 12.0769 11.0187 12.3114 10.4525C12.5459 9.88634 12.6666 9.2795 12.6666 8.66667C12.6666 8.05383 12.5459 7.447 12.3114 6.88081C12.0769 6.31463 11.7331 5.80018 11.2998 5.36684C10.8664 4.9335 10.352 4.58975 9.78581 4.35523C9.21963 4.12071 8.61279 4 7.99996 4C6.76228 4 5.5753 4.49167 4.70013 5.36684C3.82496 6.24201 3.33329 7.42899 3.33329 8.66667C3.33329 9.90435 3.82496 11.0913 4.70013 11.9665C5.5753 12.8417 6.76228 13.3333 7.99996 13.3333V13.3333ZM7.33329 5.33333H8.66662V9.33333H7.33329V5.33333ZM5.33329 0.666668H10.6666V2H5.33329V0.666668Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="text-center text-white text-[10px] font-medium leading-3 relative">
            {" "}
            {timeText}
          </div>
        </div>
      </div>
      <div className="self-stretch h-[105px] px-2 flex-col justify-start items-end gap-3 flex">
        <div className="self-stretch text-gray-950 text-sm font-medium leading-[16.80px]">
          {title}
        </div>
        <div className="self-stretch text-[#404453] text-xs font-normal leading-[14.40px]">
          {description}
        </div>
        <NavLink to={`/app/articles/articlePage/${index}`} className="p-1 justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#404453] text-xs font-semibold leading-[14.40px]" onClick={scrollToTop}>
            Read more
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default ImageCard;
