import React from "react";
import FormCard from "../components/FormCard";

const questions = [
  {
    question: "When did you first notice the symptoms?",
    id: "symptomsApperance",
  },
  {
    question: "How often do you experience the symptoms?",
    id: "symptomsFrequency",
  },
  {
    question: "How severe are your symptoms on a scale of 1 to 10?",
    id: "symptomsSeverity",
  },
];

function AdditionalInformation({ dataContext }) {
  return (
    <FormCard
      title="Additional Information"
      questions={questions}
      dataContext={dataContext}
      tag="additionalInformation"
    />
  );
}

export default AdditionalInformation;
