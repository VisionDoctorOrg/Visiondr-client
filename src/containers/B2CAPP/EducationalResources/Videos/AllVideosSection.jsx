import * as React from "react";
import CardLayout from "../../components/CardLayout";
import SelectPage from "./SelectPage";
import VideoCard from "./VideoCard";
function AllVideosSection({ dataContext }) {
  const items = dataContext.data;

  return (
    <div className="flex flex-col px-4 md:px-0 md:items-start">
      <SelectPage placeholder="All Videos" />
      <CardLayout>
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
  );
}

export default AllVideosSection;
