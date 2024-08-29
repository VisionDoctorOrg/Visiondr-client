import React from "react";
import FormCard from "../components/FormCard";

const questions = [
  {
    question:
      "Do you have a history of eye problems or diseases (e.g., glaucoma, cataracts, macular degeneration)?",
    id: "eyeProblems",
  },
  {
    question: "Do you have a family history of eye diseases or conditions?",
    id: "familyHistory",
  },
  {
    question:
      "Are you currently taking any medications? If so, please list them.",
    id: "medications",
  },
  {
    question:
      "Do you have any allergies, particularly to medications or eye drops?",
    id: "allergies",
  },
];

function MedicalHistory({ dataContext }) {
  return (
    <FormCard
      title="Medical History"
      questions={questions}
      dataContext={dataContext}
      tag="medicalHistory"
    />
  );
}

export default MedicalHistory;
