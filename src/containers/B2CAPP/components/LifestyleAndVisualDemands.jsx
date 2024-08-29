import React from "react";
import FormCard from "./FormCard";

const questions = [
  {
    question:
      "How many hours per day do you spend looking at screens (computer, phone, TV)?",
    id: "screenTime",
  },
  {
    question:
      "How many hours per day do you spend reading (books, documents, etc.)?",
    id: "readingTime",
  },
  {
    question:
      "Do you drive regularly? If so, do you have any difficulties while driving, especially at night?",
    id: "drivingDifficulties",
  },
  {
    question: "How often do you engage in outdoor activities or sports?",
    id: "sportsFrequency",
  },
];

function LifestyleAndVisualDemands({ dataContext }) {
  return (
    <FormCard
      title="Lifestyle and Visual Demands"
      questions={questions}
      dataContext={dataContext}
      tag="lifestyleAndVisualDemands"
    />
  );
}

export default LifestyleAndVisualDemands;
