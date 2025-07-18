import React from "react";
import InfoRow from "../components/InfoRow";
import Report from "./Report";

const Recommendation = () => {
  const userInfo = [
    { label: "Name:", value: "Chibundu Israel" },
    { label: "Age:", value: "35" },
    { label: "Gender:", value: "Male" },
  ];

  return (
    <article className="flex flex-col items-start text-base font-medium text-gray-950 relative mr-3 md:mr-5 ml-3 md:mt-8 mt-16">
      <div className="flex flex-col gap-5">
        {userInfo.map((info, index) => (
          <InfoRow key={index} label={info.label} value={info.value} />
        ))}
      </div>
      <Report />
    </article>
  );
};

export default Recommendation;
