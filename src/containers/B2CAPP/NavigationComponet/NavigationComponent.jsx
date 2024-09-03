import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import StepIndicator from "./StepIndicator";
import NextButton from "./NextButton";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Success from "../components/Success";

function NavigationComponent({ className, context, maxStep, successActionPath, submitCallback }) {
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
      // openDialog();
      submitCallback();
    } else {
      context.setStep((prev) => prev + 1);
      console.log("next");
      scrollToTop();
    }

  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
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
          <NextButton onClick={handleNext} currentStep={context.step} totalSteps={maxStep} />
        </div>
      </nav>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger />
        <DialogContent className={cn("md:max-w-fit p-0 bg-transparent border-0")}>
          <DialogClose className="absolute top-4 right-4">
            <svg
              className={` flex-shrink-0 size-6 text-white`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </DialogClose>
          <Success title="Hurray!!!" subtitle="You've completed the questionnaire, you will get a response shortly with your result  and recommendations" action="Get Report" actionPath={successActionPath} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NavigationComponent;
