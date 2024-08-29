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
          <h1 className="text-[16px] font-medium text-gray-900">
            Glaucoma Checker
          </h1>
          <div className="flex gap-5 py-4 flex-col md:flex-row">
            <Steps steps={steps} stepTitles={stepTitles} />

            <Forms />
          </div>
        </div>
      </DataProvider>
    </StepProvider>
  );
};

export default GlaucomaChecker;
