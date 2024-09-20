import * as React from "react";
import ImageCard from "./ImageCard";
import CardLayout from "../../components/CardLayout";
import SelectPage from "./SelectPage";

function RecentlyAddedSection({ dataContext }) {
  const items = dataContext.data;

  return (
    <div className="flex flex-col md:items-start px-4 md:px-0">
      <SelectPage placeholder="Recently Added" />
      <CardLayout>
        {items.map((item, index) => (
          <ImageCard
            key={index}
            index={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            timeSrc={item.timeSrc}
            timeAlt={item.timeAlt}
            timeText={item.timeText}
            title={item.title}
            description={item.description}
          />
        ))}
      </CardLayout>
      <div class="text-gray-950 text-base font-medium mt-10 leading-normal">
        Recommended for You
      </div>
      <CardLayout>
        {items.map((item, index) => (
          <ImageCard
            key={index}
            index={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            timeSrc={item.timeSrc}
            timeAlt={item.timeAlt}
            timeText={item.timeText}
            title={item.title}
            description={item.description}
          />
        ))}
      </CardLayout>
    </div>
  );
}

export default RecentlyAddedSection;
