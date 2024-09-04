import React from "react";
import { MdArrowOutward } from "react-icons/md";

function NextButton({ onClick, currentStep, totalSteps, isLoading }) {
  return (
    <button
      onClick={onClick}
      className="flex gap-3 justify-center items-center self-stretch p-[10px] my-auto text-base text-center text-white whitespace-nowrap bg-primary rounded-lg px-6 ring-1 ring-primary hover:ring-0 min-w-[120px] transition-all duration-300"
    >
      <span className="self-stretch my-auto ">
        {currentStep === totalSteps ? isLoading ? "Loading": "Submit" : currentStep === 1 ? "Continue" : "Next"}
      </span>
      {currentStep === totalSteps ? <MdArrowOutward className="w-6 h-6 relative" /> : ""}
    </button>
  );
}

export default NextButton;
