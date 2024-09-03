import React from "react";
import QuestionInput from "../components/QuestionInput";
import FormCard from "../components/FormCard";



function CurrentVisionCorrection({ dataContext }) {
  return (
    <FormCard
      title="Current Vision Correction"
      questions={dataContext.data["currentVisionCorrection"]}
      dataContext={dataContext}
      tag="currentVisionCorrection"
    />
  );
}

export default CurrentVisionCorrection;
