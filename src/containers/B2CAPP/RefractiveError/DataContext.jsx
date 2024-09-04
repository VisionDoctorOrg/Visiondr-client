import React, { useState, createContext } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  
  const personalInfo = [
    { question: "Name:", answer: userInfo ? userInfo.fullName : "John doe", id: "name" },
    { question: "Age:", answer: "35", id: "age" },
    { question: "Gender:", answer: "Male", id: "gender" },
    {
      question: "Occupation:",
      answer: "Software developer",
      editable: true,
      id: "occupation",
    },
    { question: "Email:", answer: userInfo ? userInfo.email : "example@gmail.com", id: "email" },
    {
      question: "Phone number:",
      answer: "+234 1234567890",
      editable: true,
      id: "phoneNumber",
    },
  ];
  const medicalHistory = [
    {
      question:
        "Do you have a history of eye problems or diseases (e.g., glaucoma, cataracts, macular degeneration)?",
      id: "eyeProblems",
      answer: "",
    },
    {
      question: "Do you have a family history of eye diseases or conditions?",
      id: "familyHistory",
      answer: "",
    },
    {
      question:
        "Are you currently taking any medications? If so, please list them.",
      id: "medications",
      answer: "",
    },
    {
      question:
        "Do you have any allergies, particularly to medications or eye drops?",
      id: "allergies",
      answer: "",
    },
  ];
  
  const visionSymptoms = [
    {
      id: "blurred-vision",
      question:
        "Do you experience blurred vision? If yes, is it for near objects, distant objects, or both?",
      answer: "",
    },
    {
      id: "eye-strain",
      question:
        "Do you often experience eye strain, especially after reading or using a computer?",
      answer: "",
    },
    {
      id: "headaches",
      question:
        "Do you frequently get headaches, particularly after prolonged periods of visual tasks?",
      answer: "",
    },
    {
      id: "double-vision",
      question: "Do you experience double vision?",
      answer: "",
    },
    {
      id: "night-vision",
      question: "Do you have trouble seeing at night or in low light conditions?",
      answer: "",
    },
    {
      id: "light-sensitivity",
      question: "Are your eyes sensitive to light?",
      answer: "",
    },
    {
      id: "squinting",
      question: "Do you often find yourself squinting to see better?",
      answer: "",
    },
    {
      id: "halos",
      question: "Do you see halos around lights?",
      answer: "",
    },
  ];
  
  const currentVisionCorrection = [
    {
      question: "Do you currently wear glasses or contact lenses?",
      id: "currentCorrection",
      answer: "",
    },
    {
      question:
        "If you wear glasses or contacts, what is your current prescription?",
      id: "currentPrescription",
      answer: "",
    },
    {
      question: "When was your last eye exam?",
      id: "lastExam",
      answer: "",
    },
    {
      question:
        "Are you satisfied with your current vision correction method (glasses or contacts)?",
      id: "satisfactionWithCorrection",
      answer: "",
    },
  ];
  const lifestyleVisualDemands = [
    {
      question:
        "How many hours per day do you spend looking at screens (computer, phone, TV)?",
      id: "screenTime",
      answer: ""
    },
    {
      question:
        "How many hours per day do you spend reading (books, documents, etc.)?",
      id: "readingTime",
      answer: ""
    },
    {
      question:
        "Do you drive regularly? If so, do you have any difficulties while driving, especially at night?",
      id: "drivingDifficulties",
      answer: ""
    },
    {
      question: "How often do you engage in outdoor activities or sports?",
      id: "sportsFrequency",
      answer: ""
    },
  ];
  const additionalInformation = [
    {
      question: "When did you first notice the symptoms?",
      id: "symptomsApperance",
      answer: ""
    },
    {
      question: "How often do you experience the symptoms?",
      id: "symptomsFrequency",
      answer: ""
    },
    {
      question: "How severe are your symptoms on a scale of 1 to 10?",
      id: "symptomsSeverity",
      answer: ""
    },
  ];
  const [data, setData] = useState({
    personalInformation: personalInfo,
    medicalHistory: medicalHistory,
    visionSymptoms: visionSymptoms,
    currentVisionCorrection: currentVisionCorrection,
    lifestyleVisualDemands: lifestyleVisualDemands,
    additionalInformation: additionalInformation,
  });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <DataContext.Provider value={{ data, setData, isLoading, setIsLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
