import React from "react";
import FormCard from "../components/FormCard";

const questions = [
  {
    id: "blurred-vision",
    question:
      "Do you experience blurred vision? If yes, is it for near objects, distant objects, or both?",
  },
  {
    id: "eye-strain",
    question:
      "Do you often experience eye strain, especially after reading or using a computer?",
  },
  {
    id: "headaches",
    question:
      "Do you frequently get headaches, particularly after prolonged periods of visual tasks?",
  },
  {
    id: "double-vision",
    question: "Do you experience double vision?",
  },
  {
    id: "night-vision",
    question: "Do you have trouble seeing at night or in low light conditions?",
  },
  {
    id: "light-sensitivity",
    question: "Are your eyes sensitive to light?",
  },
  {
    id: "squinting",
    question: "Do you often find yourself squinting to see better?",
  },
  {
    id: "halos",
    question: "Do you see halos around lights?",
  },
];

function VisionSymptoms({ dataContext }) {
  return (
    <FormCard
      title="Vision Symptoms"
      questions={questions}
      dataContext={dataContext}
      tag="visionSymptoms"
    />
  );
}

export default VisionSymptoms;
