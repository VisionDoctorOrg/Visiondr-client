import React, { useState, createContext } from 'react'
export const DataContext = createContext();

const questions = [
  {
    title: 'Main complaint',
    id: 'MainComplaint',
    question: 'How can VisionDR help your eyes today?'
  },
  {
    title: 'Visual/Eye history',
    id: 'Visual/EyeHistory',
    question: 'Have you had any previous eye issues?'
  },
  {
    title: 'Medical history',
    id: 'MedicalHistory',
    question: 'Do you have any medical conditions? Name, if any'
  },
  {
    title: 'Last Eye Examination',
    id: 'LastEyeExamination',
    question: 'When was your last eye exam or check up?'
  },
  {
    title: 'Family visual history',
    id: 'FamilyVisualHistory',
    question: 'Does anyone in your family have issues with their eyes? Elaborate on who and what type?'
  },
  {
    title: 'Family medical history',
    id: 'FamilyMedicalHistory',
    question: 'Any known medical history in your family?'
  },
  {
    title: 'Allergies',
    id: 'Allergies',
    question: 'Name any allergies you experience?'
  },
  {
    title: 'Current drug use',
    id: 'CurrentDrugUse',
    question: 'Are you currently on any eye or general medication?'
  }
];
const DataProvider = ({children}) => {
    const [data, setData] = useState({ "caseFile": questions, "uploadedFile": null });
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider