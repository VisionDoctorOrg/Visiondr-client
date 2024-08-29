import React from 'react';

function StepIndicator({ currentStep, totalSteps }) {
  return (
    <div className="self-stretch my-auto text-sm leading-tight opacity-[var(--sds-size-stroke-border)] text-gray-950">
      {currentStep} of {totalSteps} Steps
    </div>
  );
}

export default StepIndicator;