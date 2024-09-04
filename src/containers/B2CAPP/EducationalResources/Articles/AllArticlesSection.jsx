import * as React from "react";
import ImageCard from "./ImageCard";
import CardLayout from "./CardLayout";
import SelectPage from "./SelectPage";
function AllArticlesSection({dataContext}) {
  const items = dataContext.data;

  return (
    <div>
        <SelectPage placeholder="All Articles"/>
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

export default AllArticlesSection;
