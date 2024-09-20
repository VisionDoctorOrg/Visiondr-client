import React, { useState, createContext } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const allCategories = ["General", "Consultation", "Pricing"];
  const [categories, setCategories] = useState(allCategories);
  return (
    <DataContext.Provider value={{ categories, setCategories }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
