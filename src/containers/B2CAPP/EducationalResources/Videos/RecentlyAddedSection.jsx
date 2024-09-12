import * as React from "react";
import CardLayout from "../../components/CardLayout";
import SelectPage from "./SelectPage";
import VideoCard from "./VideoCard";

function RecentlyAddedSection({ dataContext }) {
  const items = dataContext.data;

  return (
    <div className="flex flex-col px-4 md:px-4 md:items-start">
      <SelectPage placeholder="Recently Added" />
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
      </CardLayout>
      <div class="text-gray-950 text-base font-medium mt-10 leading-normal">
        Recommended for You
      </div>
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
      </CardLayout>
    </div>
  );
}

export default RecentlyAddedSection;
