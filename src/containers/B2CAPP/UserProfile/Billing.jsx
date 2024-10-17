import React from "react";
import SubscriptionPlanCard from "./SubscriptionPlanCard";
import CurrentPlanBasic from "./CurrentPlanBasic";
import CurrentPlan from "./CurrentPlan";
import ChangePlan from "./ChangePlan";
import MakePayment from "./MakePayment";

const Billing = ({ dataContext }) => {
  const selectedContent = () => {
    switch (dataContext.billing.tab) {
      case "myPlan":
        if (dataContext.billing.type === "basic") {
          return <CurrentPlanBasic dataContext={dataContext}/>;
        } else {
          return <CurrentPlan dataContext={dataContext}/>;
        }
      case "changePlan":
        return <ChangePlan dataContext={dataContext}/>;
      case "changeCard":
        return <MakePayment dataContext={dataContext}/>;
    }
  };
  return (
    <section className="flex flex-col p-6 rounded-lg border border-violet-200 border-solid w-full text-gray-950 max-md:px-5">
      <header className="flex flex-col w-full max-md:max-w-full">
        <h2 className="text-base font-semibold tracking-tight max-md:max-w-full">
          Billing
        </h2>
      </header>
      <div className="flex flex-col mt-5 w-full text-base font-medium max-w-[812px] xl:max-w-full max-md:max-w-full">
        <div className="flex 2xl:gap-6 xl:gap-4 gap-4 items-start mt-4 leading-tight max-md:max-w-full justify-center md:justify-normal flex-wrap">
          <SubscriptionPlanCard
            title="My Plan"
            discription="View All Information"
            dataContext={dataContext}
            tab="myPlan"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                fill="#1749FC"
              />
            </svg>
          </SubscriptionPlanCard>
          <SubscriptionPlanCard
            title="Change Subscription Plan"
            discription="Upgrade to your favorite plan"
            dataContext={dataContext}
            tab="changePlan"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM7 13H16V15H12V18L7 13ZM12 9V6L17 11H8V9H12Z"
                fill="#1749FC"
              />
            </svg>
          </SubscriptionPlanCard>
          <SubscriptionPlanCard
            title="Make Payment"
            tab="changeCard"
            discription="Change payment method"
            dataContext={dataContext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM7 13H16V15H12V18L7 13ZM12 9V6L17 11H8V9H12Z"
                fill="#1749FC"
              />
            </svg>
          </SubscriptionPlanCard>
        </div>
      </div>
      <div className="mt-10">{selectedContent()}</div>
    </section>
  );
};

export default Billing;
