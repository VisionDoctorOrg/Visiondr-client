import React from "react";
import InfoField from "../components/InfoField";
import PreviewItem from "../components/PreviewItem";

const Preview = ({ dataContext }) => {
  return (
    <div className="flex flex-col p-6 md:px-5 rounded-lg border border-violet-200 border-solid w-full md:max-w-full text-gray-950 max-md:px-5">
      <header className="flex flex-col w-full max-md:max-w-full">
        <h2 className="font-semibold tracking-tight text-gray-950 max-md:max-w-full">
          Personal Information
        </h2>
      </header>
      <div className="flex flex-col mt-10 w-full font-medium max-w-[812px] max-md:max-w-full">
        {dataContext.data["personalInformation"].map((info, index) => (
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
      <PreviewItem
        dataContext={dataContext}
        tag="eyeHealthHistory"
        title="Eye Health History"
      />
      <PreviewItem
        dataContext={dataContext}
        tag="visionSymptoms"
        title="Vision Symptoms"
      />
      <PreviewItem
        dataContext={dataContext}
        tag="lifestyleVisualDemands"
        title="Lifestyle and Visual Demands"
      />
      <PreviewItem
        dataContext={dataContext}
        tag="additionalInformation"
        title="Additional Information"
      />
    </div>
  );
};

export default Preview;
