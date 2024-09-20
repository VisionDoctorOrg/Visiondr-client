import React from "react";
import DataProvider from "./DataContext";
import Categories from "./Categories";
import FAQs from "./FAQs";

const Help = () => {
  return (
    <DataProvider>
      <div className="mb-10">
        <div className="flex flex-col justify-center items-center">
          <div class="mt-5 text-center text-4xl font-semibold leading-[43.20px]">
            Frequently asked questions (FAQs)
          </div>
          <div class="mt-5 text-center text-[#404453] text-base font-medium leading-normal">
            These are the most commonly asked question about Vision DR
          </div>
          <Categories />
        </div>
        <div className="md:px-16 px-2">
        <FAQs />

        </div>
      </div>
    </DataProvider>
  );
};

export default Help;
