import React, { useState, createContext } from "react";
import { connect } from "react-redux";
export const DataContext = createContext();

const DataProvider = ({ children, userData }) => {
  
  const personalInfo = [
    { question: "Name:", answer: userData ? userData.fullName : "", id: "name" },
    { question: "Age:", answer: "", id: "age", editable: true },
    { question: "Gender:", answer: userData ? userData.gender:  "", id: "gender" },
    {
      question: "Occupation:",
      answer: userData ? userData.occupation:  "",
      id: "occupation",
    },
    { question: "Email:", answer: userData ? userData.email : "", id: "email" },
    {
      question: "Phone number:",
      answer: userData ? userData.phoneNumber: "",
      id: "phoneNumber",
    },
  ];
  const eyeHealthHistory = [
    {
      question:
        "Have you ever been diagnosed with glaucoma or other eye conditions?",
      id: "eyeProblems",
      answer: "",
    },
    {
      question: "Do you have a family history of glaucoma or other eye diseases?",
      id: "familyHistory",
      answer: "",
    },
    {
      question: "Have you had any eye surgeries? If yes, please specify.",
      id: "eyeSurgeries",
      answer: "",
    },
    {
      question: "When was your last eye exam?",
      id: "lastEyeExam",
      answer: "",
    },
    {
      question:
        "Are you currently taking any medications, especially for your eyes?",
      id: "currentEyeMedications",
      answer: "",
    },
  ];
  const visionSymptoms = [
    {
      id: "peripheralVisionLoss",
      question: "Have you noticed any loss of peripheral vision (side vision)?",
      answer: "",
    },
    {
      id: "tunnelVision",
      question: "Do you experience tunnel vision, especially in advanced stages?",
      answer: "",
    },
    {
      id: "blurredVision",
      question: "Do you experience blurred vision?",
      answer: "",
    },
    {
      id: "eyePain",
      question: "Do you feel pain in your eyes?",
      answer: "",
    },
    {
      id: "redEyes",
      question: "Do your eyes often appear red?",
      answer: "",
    },
    {
      id: "halos",
      question: "Do you see halos around lights?",
      answer: "",
    },
    {
      id: "nausea-vomiting",
      question:
        "Do you experience nausea or vomiting, especially in conjunction with severe eye pain?",
      answer: "",
    },
  ];
  const lifestyleVisualDemands = [
    {
      question:
        "How many hours per day do you spend looking at screens (computer, phone, TV)?",
      id: "screenTime",
      answer: "",
    },
    {
      question:
        "How many hours per day do you spend reading (books, documents, etc.)?",
      id: "readingTime",
      answer: "",
    },
    {
      question:
        "Do you drive regularly? If so, do you have any difficulties while driving, especially at night?",
      id: "drivingDifficulties",
      answer: "",
    },
    {
      question: "How often do you engage in outdoor activities or sports?",
      id: "sportsFrequency",
      answer: "",
    },
  ];
  const additionalInformation = [
    {
      question: "When did you first notice the symptoms?",
      id: "symptomsApperance",
      answer: "",
    },
    {
      question: "How often do you experience the symptoms?",
      id: "symptomsFrequency",
      answer: "",
    },
    {
      question: "How severe are your symptoms on a scale of 1 to 10?",
      id: "symptomsSeverity",
      answer: "",
    },
  ];
  const [data, setData] = useState({
    personalInformation: personalInfo,
    eyeHealthHistory: eyeHealthHistory,
    visionSymptoms: visionSymptoms,
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  userData: state.auth.user,
});

export default connect(mapStateToProps)(DataProvider);
