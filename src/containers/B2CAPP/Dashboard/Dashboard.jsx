import React from "react";
import GreetingCard from "./GreetingCard";
import EyeHealthSummary from "./EyeHealthSummary";
import MedicationReminder from "./MedicationReminder";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-6 md:px-2 md:pr-4">
      <div className=" rounded-lg lg:col-span-5">
        <GreetingCard/>
        <EyeHealthSummary/>
      </div>
      <div className=" rounded-lg lg:col-span-2">
        <MedicationReminder/>
      </div>
    </div>
  );
};

export default Dashboard;
