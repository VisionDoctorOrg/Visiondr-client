import React from "react";
import PlanCard from "./PlanCard";

const PricingPlans = () => {
  const plans = [
    {
      title: "Basic Care",
      price: "0",
      buttonText: "Free",
      features: [
        "Free access to all eye health personalized resources",
        "Free access to eye health community",
      ],
      type: "basic",
    },
    {
        title: "Ask a VisionDR",
        price:"200",
        buttonText: "Subscribe",
        features:[
            "One time access to ask VisionDR session",
            "One time recommendation",
        ],
        type: "askVisionDR",
    },
    {
      title: "Essential Care",
      price: "500",
      buttonText: "Subscribe",
      features: [
        "Access to Ask VisionDR sessions",
        "Access to Casefiles for 1",
        "Access to System Checker for 1",
        "Access to personalized eye health resources",
      ],
      type: "starter",
    },
    {
      title: "Family Care",
      price: "1000",
      buttonText: "Subscribe",
      features: [
        "Access to Ask VisionDR sessions",
        "Access to Casefiles for 4",
        "Access to System Checker for 4",
        "Access to personalized eye health resources",
      ],
      type: "family",
    },
  ];
  return (
    <div>
      <div class="w-full flex-col justify-start items-end gap-4 inline-flex ">
        <div class="justify-start items-start gap-6 inline-flex">
          <div class="justify-center items-start gap-3 flex">
            <div class="w-6 h-6 justify-center items-center flex">
              <div class="w-6 h-6 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z"
                    fill="#27BE69"
                  />
                </svg>
              </div>
            </div>
            <div class="text-center text-[#8c8f98] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
              Monthly
            </div>
          </div>
          <div class="justify-center items-start gap-3 flex">
            <div class="w-6 h-6 justify-center items-center flex">
              <div class="w-6 h-6 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z"
                    fill="#8C8F98"
                  />
                </svg>
              </div>
            </div>
            <div class="text-center text-[#8c8f98] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
              Yearly
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full 2xl:gap-6 xl:gap-4 gap-4 items-start mt-4 leading-tight max-md:max-w-full md:justify-normal">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            price={plan.price}
            buttonText={plan.buttonText}
            features={plan.features}
            type={plan.type}
            className="px-0 bg-primary"
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
