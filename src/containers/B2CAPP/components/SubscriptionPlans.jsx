import React from "react";
import PlanCard from "./PlanCard";

const plans = [
  {
    title: "Starter",
    price: "2,000",
    buttonText: "Subscribe",
    features: [
      "Access to Ask VisionDR sessions",
      "Access to Casefiles for 1",
      "Access to System Checker for 1",
      "Access to personalized eye health resources",
    ],
  },
  {
    title: "Family",
    price: "5,000",
    buttonText: "Subscribe",
    features: [
      "Access to Ask VisionDR sessions",
      "Access to Casefiles for 4",
      "Access to System Checker for 4",
      "Access to personalized eye health resources",
    ],
  },
];

function SubscriptionPlans({ className }) {
  return (
    <section
      className={`flex flex-col justify-center py-10 bg-transparent bg-opacity-60 backdrop-blur-sm ${className}`}
    >
      <div className="flex overflow-hidden flex-col items-center px-5 xl:px-20 pt-6 pb-10 w-full rounded-3xl bg-slate-50 shadow-[2px_4px_10px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[720px]">
          <h1 className="self-center md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-950 max-md:max-w-full">
            Subscribe now to view full Report!!!
          </h1>
          <div className="mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col ">
              {plans.map((plan, index) => (
                <PlanCard key={index} {...plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscriptionPlans;
