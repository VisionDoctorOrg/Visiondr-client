import React, { useContext } from "react";
import StepMarker from "../components/StepMarker";
import StepList from "../components/StepList";
import { StepContext } from "./StepContext";

const Steps = ({ steps, stepTitles }) => {
  const { step, setStep } = useContext(StepContext);

  return (
    <section className="flex overflow-hidden gap-2 items-center p-6 px-4 pl-5 rounded-lg bg-[#D2DBFE] bg-opacity-20 md:h-fit md:max-w-[360px] md:min-w-[270px] md:fixed">
      <nav className="flex md:flex-col items-center self-stretch my-auto md:w-6 text-base font-medium whitespace-nowrap">
        {steps.map((stepp, index) => (
          <StepMarker
            key={stepp}
            step={stepp}
            last={index === steps.length - 1}
            currentStep={stepp === step}
            completed={stepp < step}
          />
        ))}
      </nav>
      <StepList stepTitles={stepTitles} />
    </section>
  );
};

export default Steps;
