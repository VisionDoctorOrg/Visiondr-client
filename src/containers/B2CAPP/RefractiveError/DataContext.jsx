import React, { useState, createContext } from 'react'
export const DataContext = createContext();

const personalInfo = [
  { question: "Name:", answer: "John Doe", id: "name" },
  { question: "Age:", answer: "35", id: "age" },
  { question: "Gender:", answer: "Male", id: "gender" },
  { question: "Occupation:", answer: "Software developer", editable: true, id: "occupation" },
  { question: "Email:", answer: "example@gmail.com", id: "email" },
  { question: "Phone number:", answer: "+234 1234567890", editable: true, id: "phoneNumber" },
];
const DataProvider = ({children}) => {
    const [data, setData] = useState({ "personalInformation": personalInfo, "medicalHistory": [], "visionSymptoms":[], "currentVisionCorrection": [], "lifestyleAndVisualDemands": [], "additionalInformation": [] });
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider