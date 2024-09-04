import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import StepIndicator from "./StepIndicator";
import NextButton from "./NextButton";


function NavigationComponent({ className, context, maxStep, submitCallback, isLoading }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    });
  };
  const handlePrevious = () => {
    context.setStep((prev) => prev - 1);
    scrollToTop();
  };

  const handleNext = () => {
    if (context.step === maxStep) {
      submitCallback();
    } else {
      context.setStep((prev) => prev + 1);
      console.log("next");
      scrollToTop();
    }

  };


  return (
    <div>
      <nav
        className={`flex flex-wrap md:gap-10 items-center max-w-[856px] h-20  ${
          context.step === 1 ? "justify-end" : "justify-between"
        } ${className}`}
      >
        <NavigationButton
          onClick={handlePrevious}
          className={`${context.step === 1 ? "hidden" : ""}`}
        >
          <img
            loading="lazy"
            src="/icons/prev_icon.svg"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="self-stretch my-auto opacity-[var(--sds-size-stroke-border)]">
            Previous
          </span>
        </NavigationButton>
        <div className="flex gap-4 items-center self-stretch my-auto">
          <StepIndicator currentStep={context.step} totalSteps={maxStep} />
          <NextButton onClick={handleNext} currentStep={context.step} totalSteps={maxStep} isLoading={isLoading}/>
        </div>
      </nav>
     
    </div>
  );
}

export default NavigationComponent;
