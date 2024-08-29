import React from "react";
import InfoRow from "../components/InfoRow";
import Report from "../components/Report";

function RefractiveErrorReport() {
  const userInfo = [
    { label: "Name:", value: "John Doe" },
    { label: "Age:", value: "35" },
    { label: "Gender:", value: "Male" },
  ];

  return (
    <article className="flex flex-col items-start text-base font-medium text-gray-950 relative mr-3 md:mr-5 ml-3">
      <div className="flex flex-col gap-5">
        {userInfo.map((info, index) => (
          <InfoRow key={index} label={info.label} value={info.value} />
        ))}
      </div>
      <Report />
    </article>
  );
}

export default RefractiveErrorReport;
