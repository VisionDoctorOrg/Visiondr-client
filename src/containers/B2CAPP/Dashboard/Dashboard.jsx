import React from "react";
import GreetingCard from "./GreetingCard";
import EyeHealthSummary from "./EyeHealthSummary";
import MedicationReminder from "./MedicationReminder";
import DataProvider from "./DataContext";

const Dashboard = () => {
  return (
    <DataProvider>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-6 md:px-2 md:pr-4 pb-10">
        <div className=" rounded-lg lg:col-span-5">
          <GreetingCard />
          <EyeHealthSummary />
        </div>
        <div className=" md:rounded-lg lg:col-span-2">
          <MedicationReminder />
        </div>
      </div>
    </DataProvider>
  );
};

export default Dashboard;
