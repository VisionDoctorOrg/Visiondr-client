import React, { useContext, useState } from "react";
import { DataContext } from "./DataContext";

const Categories = () => {
    const dataContext = useContext(DataContext);
  const [selected, setSelected] = useState(dataContext.categories[0]);
  return (
    <div class="mt-24 h-14 p-4 rounded-lg border border-[#d2dbfe] justify-start items-start gap-10 inline-flex w-full md:w-1/2 mb-2 md:mb-4">
      <div className="w-full h-6 text-center justify-between gap-5 items-center flex">
        {dataContext.categories.map((category, index) => (
          <div
            key={index}
            className={`w-fit  text-sm font-medium leading-[16.80px] pb-1 border-b-2 cursor-pointer ${
              selected == category
                ? "border-[#1749fc] text-[#1749fc]"
                : "border-b-0 text-gray-950 border-white"
            } `}
            onClick={() => setSelected(category)}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
