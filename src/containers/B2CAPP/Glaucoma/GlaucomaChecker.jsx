import React from "react";
import Steps from "./Steps";
import StepProvider, { StepContext } from "./StepContext";
import Forms from "./Forms";
import DataProvider from "./DataContext";

const GlaucomaChecker = () => {
  const steps = [1, 2, 3, 4, 5, 6];
  const stepTitles = [
    "Personal Information",
    "Eye Health History",
    "Vision Symptoms",
    "Lifestyle and Visual Demands",
    "Additional Information",
    "Preview",
  ];
  return (
    <StepProvider>
      <DataProvider>
        <div className="px-2 md:pr-6">
          <h1 className="text-[16px] font-medium text-gray-900 fixed bg-white w-full md:w-fit py-5 md:py-0">
            Glaucoma Checker
          </h1>
          <div className="flex gap-5 py-4 flex-col md:flex-row md:pt-10 pt-20">
            <Steps steps={steps} stepTitles={stepTitles} />
            <div className="md:h-[408px] md:max-w-[360px] md:min-w-[270px]"></div>
            <Forms />
          </div>
        </div>
      </DataProvider>
    </StepProvider>
  );
};

export default GlaucomaChecker;
