import React from "react";
import FormCard from "../components/FormCard";

const questions = [
  {
    id: "peripheralVisionLoss",
    question:
      "Have you noticed any loss of peripheral vision (side vision)?",
  },
  {
    id: "tunnelVision",
    question:
      "Do you experience tunnel vision, especially in advanced stages?",
  },
  {
    id: "blurredVision",
    question:
      "Do you experience blurred vision?",
  },
  {
    id: "eyePain",
    question: "Do you feel pain in your eyes?",
  },
  {
    id: "redEyes",
    question: "Do your eyes often appear red?",
  },
  {
    id: "halos",
    question: "Do you see halos around lights?",
  },
  {
    id: "nausea-vomiting",
    question: "Do you experience nausea or vomiting, especially in conjunction with severe eye pain?",
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
