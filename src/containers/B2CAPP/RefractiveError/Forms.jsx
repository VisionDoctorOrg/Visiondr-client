import React, { useContext } from "react";
import PersonalInformation from "../components/PersonalInformation";
import { StepContext } from "./StepContext";
import MedicalHistory from "./MedicalHistory";
import NavigationComponent from "./../NavigationComponet/NavigationComponent";
import VisionSymptoms from "./VisionSymptoms";
import CurrentVisionCorrection from "./CurrentVisionCorrection";
import LifestyleAndVisualDemands from "../components/LifestyleAndVisualDemands";
import AdditionalInformation from "../components/AdditionalInformation";
import { DataContext } from "./DataContext";
import Preview from "./Preview";

const Forms = () => {
  const { step, setStep } = useContext(StepContext);
  const dataContext = useContext(DataContext);
  const componets = () => {
    switch (step) {
      case 1:
        return <PersonalInformation dataContext={dataContext} />;
      case 2:
        return <MedicalHistory dataContext={dataContext} />;
      case 3:
        return <VisionSymptoms dataContext={dataContext} />;
      case 4:
        return <CurrentVisionCorrection dataContext={dataContext} />;
      case 5:
        return <LifestyleAndVisualDemands dataContext={dataContext} />;
      case 6:
        return <AdditionalInformation dataContext={dataContext} />;
      case 7:
        return <Preview dataContext={dataContext} />;
    }
  };
  return (
    <div className="w-full">
      {componets()}
      <NavigationComponent
        className="mt-12 mb-6"
        context={useContext(StepContext)}
        successActionPath="/app/refracive-error/refractiveErrorReport"
        maxStep={7}
      />
    </div>
  );
};

export default Forms;
