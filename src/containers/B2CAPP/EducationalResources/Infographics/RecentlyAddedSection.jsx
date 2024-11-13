import * as React from "react";
import CardLayout from "../../components/CardLayout";
import SelectPage from "./SelectPage";
import InfographicsCard from "./InfographicsCard";

function RecentlyAddedSection({ dataContext }) {
  const items = dataContext.data;

  return (
    <div className="flex flex-col px-4 md:px-0 md:items-start md:pr-4">
      <div class="md:h-14 p-4 rounded-lg border border-[#d2dbfe] justify-start items-start gap-10 inline-flex w-full mb-2 md:mb-4">
        <div className="w-full text-center justify-between gap-5 items-center flex flex-wrap">
          {dataContext.categories.map((category, index) => (
            <div
              key={index}
              className={`w-fit  text-sm font-medium leading-[16.80px] pb-1 border-b-2 cursor-pointer ${
                dataContext.currentCategory == category
                  ? "border-[#1749fc] text-[#1749fc]"
                  : "border-b-0 text-gray-950 border-white"
              } `}
              onClick={() => dataContext.setCurrentCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <SelectPage placeholder="Recently Added" />
      <CardLayout>
        {items.map(
          (item, index) =>
            dataContext.currentCategory == item.category && (
              <InfographicsCard
                key={index}
                index={index}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                title={item.title}
              />
            )
        )}
      </CardLayout>
      <div class="text-gray-950 text-base font-medium mt-10 leading-normal">
        Recommended for You
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

export default RecentlyAddedSection;
