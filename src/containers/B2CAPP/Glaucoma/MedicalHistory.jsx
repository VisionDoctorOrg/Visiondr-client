import React from "react";
import FormCard from "../components/FormCard";

const questions = [
  {
    question:
      "Have you ever been diagnosed with glaucoma or other eye conditions?",
    id: "eyeProblems",
  },
  {
    question: "Do you have a family history of glaucoma or other eye diseases?",
    id: "familyHistory",
  },
  {
    question:
      "Have you had any eye surgeries? If yes, please specify.",
    id: "eyeSurgeries",
  },
  {
    question:
      "When was your last eye exam?",
    id: "lastEyeExam",
  },
  {
    question: "Are you currently taking any medications, especially for your eyes?",
    id: "currentEyeMedications",
  }
];

function MedicalHistory({ dataContext }) {
  return (
    <FormCard
      title="Eye Health History"
      questions={questions}
      dataContext={dataContext}
      tag="medicalHistory"
    />
  );
}

export default MedicalHistory;
