import React, { useState, createContext } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const personalInfo = [
    {
      question: "Name:",
      answer: userInfo ? userInfo.fullName : "John Doe",
      id: "name",
      editable: true,
    },
    {
      question: "Date of birth:",
      answer: "01/01/1990",
      id: "dob",
      editable: true,
    },
    { question: "Gender:", answer: "Male", id: "gender", editable: true },
    {
      question: "Email:",
      answer: userInfo ? userInfo.email : "example@gmail.com",
      id: "email",
    },
    {
      question: "Phone number:",
      answer: "+234 1234567890",
      id: "phoneNumber",
      editable: true,
    },
    {
      question: "Occupation:",
      answer: "Software Developer",
      id: "occupation",
      editable: true,
    },
    { question: "Hobbies:", answer: "Reading", id: "hobbies", editable: true },
  ];
  const additionalInformation = [
    {
      question: "Current Vision Correction",
      id: "currentVisionCorrection",
      answer: ""
    },
    {
      question: "LifeStyle and Visual Demands",
      id: "lifestyleVisualDemands",
      answer: ""
    },
  ];
  const [data, setData] = useState({
    personalInformation: personalInfo,
    additionalInformation: additionalInformation,
  });
  const [billing, setBilling] = useState({
    tab: "changePlan",
    type: userInfo.subscriptions.length > 0 ? userInfo.subscriptions[0].plan : "basic",
    status: userInfo.subscriptions.length > 0 ? userInfo.subscriptions[0].status : "",
    subscriptionId: userInfo.subscriptions.length > 0 ? userInfo.subscriptions[0].subscriptionCode : "",
    nextPaymentDate: userInfo.subscriptions.length > 0 ? userInfo.subscriptions[0].nextPaymentDate : "",
    choosenPlan: "starter",
    amount: "200",
  })
  return (
    <DataContext.Provider value={{ data, setData, billing, setBilling }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
