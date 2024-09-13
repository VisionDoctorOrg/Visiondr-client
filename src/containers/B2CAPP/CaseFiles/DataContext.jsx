import React, { useState, createContext } from 'react'
export const DataContext = createContext();

const questions = [
  {
    title: 'Main complaint',
    id: 'MainComplaint',
    question: 'How can VisionDR help your eyes today?',
    answer: "",
  },
  {
    title: 'Visual/Eye history',
    id: 'Visual/EyeHistory',
    question: 'Have you had any previous eye issues?',
    answer: "",
  },
  {
    title: 'Medical history',
    id: 'MedicalHistory',
    question: 'Do you have any medical conditions? Name, if any',
    answer: "",
  },
  {
    title: 'Last Eye Examination',
    id: 'LastEyeExamination',
    question: 'When was your last eye exam or check up?',
    answer: "",
  },
  {
    title: 'Family visual history',
    id: 'FamilyVisualHistory',
    question: 'Does anyone in your family have issues with their eyes? Elaborate on who and what type?',
    answer: "",
  },
  {
    title: 'Family medical history',
    id: 'FamilyMedicalHistory',
    question: 'Any known medical history in your family?',
    answer: "",
  },
  {
    title: 'Allergies',
    id: 'Allergies',
    question: 'Name any allergies you experience?',
    answer: "",
  },
  {
    title: 'Current drug use',
    id: 'CurrentDrugUse',
    question: 'Are you currently on any eye or general medication?',
    answer: "",
  }
];
const DataProvider = ({children}) => {
    const [data, setData] = useState({ caseFile: questions, "uploadedFile": null });
    const [isLoading, setIsLoading] = useState(false);
  return (
    <DataContext.Provider value={{ data, setData, isLoading, setIsLoading }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider