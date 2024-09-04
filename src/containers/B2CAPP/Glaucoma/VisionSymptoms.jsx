import React from "react";
import FormCard from "../components/FormCard";

function VisionSymptoms({ dataContext }) {
  return (
    <FormCard
      title="Vision Symptoms"
      questions={dataContext.data["visionSymptoms"]}
      dataContext={dataContext}
      tag="visionSymptoms"
    />
  );
}

export default VisionSymptoms;
