import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const getMedicationData = async () => {
    // Call backend to get medication
    if (localStorage.getItem("access")) {
      const date = new Date().toISOString();
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}notification/medication-reminders/`,
          {
            params: {
              date: date, // Send the date as a query parameter
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access")}`,
              "Content-Type": "application/json",
              // Add any other headers your API requires
            },
          }
        );

        console.log(res.data);
        setMedData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const [medData, setMedData] = useState({medications: []});

  useEffect(() => {
    getMedicationData();
  }, []);

  return (
    <DataContext.Provider value={{ medData, setMedData, getMedicationData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
