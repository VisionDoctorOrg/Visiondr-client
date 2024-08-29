import React, { useState, createContext } from 'react'
export const StepContext = createContext();

const StepProvider = ({children}) => {
    const [step, setStep] = useState(1);
  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  )
}

export default StepProvider