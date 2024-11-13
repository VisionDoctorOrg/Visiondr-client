import React, { useEffect, useState } from "react";
import CardLayout from "../../components/CardLayout";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import VideoCardSmall from "./VideoCardSmall";

const VideoPage = ({ dataContext }) => {
  const items = dataContext.data;
  const { index } = useParams();
  const item = items[index];
  const [category, setCategory] = useState("Watch Next");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-6 md:px-2 md:pr-4">
      <div className=" rounded-lg lg:col-span-5">
        <div className=" bg-white flex-col justify-start gap-6 inline-flex w-full">
          <div className="w-full md:h-[500px] h-[50vw] shadow-lg">
            <iframe
              src={item.videoSrc}
              width="fill"
              height="fill"
              allow="autoplay"
              allowFullScreen
              title="Google Drive Video"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="text-gray-950 text-base font-medium mt-10 leading-normal mx-4 md:mx-0">
            Recommended for You
          </div>
          <CardLayout className="px-4 md:px-0">
            {items.map((item, index) => (
              <VideoCard
                key={index}
                index={index}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                date={item.date}
                title={item.title}
                id={item.id}
              />
            ))}
          </CardLayout>
        </div>
      </div>
      <div className=" md:rounded-lg lg:col-span-2">
        <div className="h-14 p-4 rounded-lg border border-[#d2dbfe] justify-start items-start gap-10 inline-flex w-full">
          <div className="w-full h-6 text-center justify-evenly gap-5 items-center inline-flex">
            <button type="button" onClick={() => setCategory("Watch Next")} className={` text-sm font-medium  leading-[16.80px] w-fit border-b-2 pb-1 ${category == "Watch Next" ? "border-[#1749fc] text-[#1749fc]" :"border-white"} `}>
              Watch Next
            </button>
            <button type="button" onClick={() => setCategory("Watch History")} className={`w-fit text-sm font-medium  leading-[16.80px] pb-1 border-b-2  ${category == "Watch History" ? "border-[#1749fc] text-[#1749fc]" :"border-white"}`}>
              Watch History
            </button>
          </div>
        </div>
        <div className="border border-[#d2dbfe] flex justify-center mt-6">
          <CardLayout>
            {items.map((item, index) => (
              <VideoCardSmall
                key={index}
                index={index}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                date={item.date}
                title={item.title}
                id={item.id}
              />
            ))}
          </CardLayout>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
