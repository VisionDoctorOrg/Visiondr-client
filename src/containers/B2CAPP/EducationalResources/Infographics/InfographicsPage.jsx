import React, { useEffect, useRef } from "react";
import CardLayout from "../../components/CardLayout";
import { useParams } from "react-router-dom";
import InfographicsCardSmall from "./InfographicsCardSmall";

const InfographicsPage = ({ dataContext }) => {
  const items = dataContext.data;
  const { index } = useParams();
  const item = items[index];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const imageRef = useRef(null);

  const handleFullscreen = () => {
    if (imageRef.current) {
      if (imageRef.current.requestFullscreen) {
        imageRef.current.requestFullscreen();
      } else if (imageRef.current.mozRequestFullScreen) {
        // Firefox
        imageRef.current.mozRequestFullScreen();
      } else if (imageRef.current.webkitRequestFullscreen) {
        // Chrome, Safari, Opera
        imageRef.current.webkitRequestFullscreen();
      } else if (imageRef.current.msRequestFullscreen) {
        // IE/Edge
        imageRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-6 md:px-2 md:pr-4">
      <div className=" rounded-lg lg:col-span-5">
        <div class=" bg-white flex-col justify-start gap-6 inline-flex w-full md:mb-6">
          <div className="w-full h-fit shadow-lg">
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="w-full h-full object-contain rounded-lg cursor-pointer"
              ref={imageRef}
              onClick={handleFullscreen}
            />
          </div>
          <div class="text-gray-950 text-base font-semibold mt-2 leading-normal px-4 md:px-0">
            {item.title}
          </div>
          <div class="text-gray-950 text-sm mt-2 leading-normal px-4 md:px-0">
            {item.discription}
          </div>
        </div>
      </div>
      <div className=" md:rounded-lg lg:col-span-2">
        <div class="h-14 p-4 rounded-lg border border-[#d2dbfe] justify-start items-start gap-10 inline-flex w-full">
          <div class="w-full h-6 text-center justify-evenly gap-5 items-center inline-flex">
            <div class="self-stretch text-gray-950 text-sm font-medium  leading-[16.80px] w-full">
              Read Next
            </div>
          </div>
        </div>
        <div className="border border-[#d2dbfe] flex justify-center mt-6">
          <CardLayout className="">
            {items.map((item, index) => (
              <InfographicsCardSmall
                key={index}
                index={index}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                title={item.title}
              />
            ))}
          </CardLayout>
        </div>
      </div>
    </div>
  );
};

export default InfographicsPage;
