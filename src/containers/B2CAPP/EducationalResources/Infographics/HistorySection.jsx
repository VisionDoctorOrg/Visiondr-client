import * as React from "react";
import CardLayout from "../../components/CardLayout";
import SelectPage from "./SelectPage";
import InfographicsCard from "./InfographicsCard";

function HistorySection({ dataContext }) {
  const items = dataContext.data;

  return (
    <div className="flex flex-col px-4 md:px-0 md:items-start">
      <SelectPage placeholder="History" />
      <div class="text-gray-950 text-base font-medium mt-10 leading-normal">
        Today
      </div>
      <CardLayout>
        {items.map((item, index) => (
          <InfographicsCard
            key={index}
            index={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
          />
        ))}
      </CardLayout>
      <div class="text-gray-950 text-base font-medium mt-10 leading-normal">
        Yesterday
      </div>
      <CardLayout>
        {items.map((item, index) => (
          <InfographicsCard
            key={index}
            index={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
          />
        ))}
      </CardLayout>
      <div class="text-gray-950 text-base font-medium mt-10 leading-normal">
        September 2
      </div>
      <CardLayout>
        {items.map((item, index) => (
          <InfographicsCard
            key={index}
            index={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
          />
        ))}
      </CardLayout>
    </div>
  );
}

export default HistorySection;
