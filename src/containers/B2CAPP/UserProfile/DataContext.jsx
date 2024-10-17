import React, { useState, createContext } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const personalInfo = [
    {
      question: "Name:",
      answer: userInfo ? userInfo.fullName : "",
      id: "name",
      editable: true,
    },
    {
      question: "Date of birth:",
      answer: userInfo ? userInfo.DOB : "",
      id: "dob",
      editable: true,
    },
    {
      question: "Gender:",
      answer: userInfo ? userInfo.gender : "",
      id: "gender",
      editable: true,
    },
    {
      question: "Email:",
      answer: userInfo ? userInfo.email : "example@gmail.com",
      id: "email",
      editable: false,
    },
    {
      question: "Phone number:",
      answer: userInfo ? userInfo.phoneNumber : "",
      id: "phoneNumber",
      editable: userInfo ? userInfo.authProvider === "EMAIL" : false,
    },
    {
      question: "Occupation:",
      answer: userInfo ? userInfo.occupation : "",
      id: "occupation",
      editable: true,
    },
    {
      question: "Hobbies:",
      answer: userInfo ? userInfo.hobbies : "",
      id: "hobbies",
      editable: true,
    },
  ];
  const additionalInformation = [
    {
      question: "Current Vision Correction",
      id: "currentVisionCorrection",
      answer: "",
    },
    {
      question: "LifeStyle and Visual Demands",
      id: "lifestyleVisualDemands",
      answer: "",
    },
  ];

  const getActiveSubscription = () => {
    let activeSubscription = null;
    userInfo?.subscriptions.forEach((subscription) => {
      if (subscription.status === "active") {
        activeSubscription = subscription;
      }
    })
    return activeSubscription;
  }

  const [data, setData] = useState({
    personalInformation: personalInfo,
    additionalInformation: additionalInformation,
    uploadedFile: null,
    authProvider: userInfo?.authProvider,
  });
  const [billing, setBilling] = useState({
    tab: "changePlan",
    type:
      userInfo?.subscriptionActive === "Active"
        ? getActiveSubscription()?.plan
        : "basic",
    status:
      userInfo?.subscriptions.length > 0
        ? userInfo.subscriptionActive
        : "",
    subscriptionId:
      userInfo?.subscriptions.length > 0 ? getActiveSubscription()?.id : "",
    nextPaymentDate:
      userInfo?.subscriptions.length > 0
        ? getActiveSubscription()?.nextPaymentDate
        : "",
    choosenPlan: "starter",
    amount: "200",
  });
  return (
    <DataContext.Provider value={{ data, setData, billing, setBilling }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
