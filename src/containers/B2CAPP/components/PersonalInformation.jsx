import React from "react";
import InfoField from "./InfoField";

function PersonalInformation({ dataContext }) {
  const personalInfo = dataContext.data["personalInformation"];
  return (
    <section className="flex flex-col p-6 rounded-lg border border-violet-200 border-solid w-full text-gray-950 max-md:px-5">
      <header className="flex flex-col w-full max-md:max-w-full">
        <h2 className="text-base font-semibold tracking-tight max-md:max-w-full">
          Personal Information
        </h2>
        <p className="mt-3 text-sm leading-[16.80px] font-normal max-md:max-w-full">
          Complete this brief questionnaire to assist us in assessing your eye
          health and recommending the best solution for you. Your responses will
          guide us in providing personalized care.
          <br />
          <br />
          Please answer the following questions as accurately as possible.
        </p>
      </header>
      <div className="flex flex-col mt-10 w-full text-base font-medium max-w-[812px] max-md:max-w-full">
        {personalInfo.map((info, index) => (
          <InfoField
            key={index}
            label={info.question}
            value={info.answer}
            editable={info.editable}
            id={info.id}
            dataContext={dataContext}
            tag="personalInformation"
          />
        ))}
      </div>
    </section>
  );
}

export default PersonalInformation;
