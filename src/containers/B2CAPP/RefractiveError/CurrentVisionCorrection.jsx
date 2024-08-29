import React from "react";
import QuestionInput from "../components/QuestionInput";
import FormCard from "../components/FormCard";

const questions = [
  {
    question: "Do you currently wear glasses or contact lenses?",
    id: "currentCorrection",
  },
  {
    question:
      "If you wear glasses or contacts, what is your current prescription?",
    id: "currentPrescription",
  },
  {
    question: "When was your last eye exam?",
    id: "lastExam",
  },
  {
    question:
      "Are you satisfied with your current vision correction method (glasses or contacts)?",
    id: "satisfactionWithCorrection",
  },
];

function CurrentVisionCorrection({ dataContext }) {
  return (
    <FormCard
      title="Current Vision Correction"
      questions={questions}
      dataContext={dataContext}
      tag="currentVisionCorrection"
    />
  );
}

export default CurrentVisionCorrection;
