import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const getMedicationData = async () => {
    // Call backend to get medication
    if (localStorage.getItem("access")) {
      const date = new Date().toISOString().split('T')[0];
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
  const getMedicationDataByDate = async (date) => {
    // Call backend to get medication
    if (localStorage.getItem("access")) {
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

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  // Function to go to the next day
  const nextDay = () => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + 1);
    setDate(currentDate.toISOString().split('T')[0]);
    getMedicationDataByDate(currentDate.toISOString().split('T')[0]);
  };

  // Function to go to the previous day
  const prevDay = () => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - 1);
    setDate(currentDate.toISOString().split('T')[0]);
    getMedicationDataByDate(currentDate.toISOString().split('T')[0]);
  };

  const getReadableDate = (dateString) => {
    // Get current date and input date (only year, month, and day parts)
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Clear time part for accurate comparison
    const inputDate = new Date(dateString);
    inputDate.setHours(0, 0, 0, 0);
  
    // Calculate the difference in days between today and the input date
    const diffTime = inputDate - today; // Difference in milliseconds
    const diffDays = diffTime / (1000 * 60 * 60 * 24); // Convert to days
  
    // Determine if it's today, yesterday, tomorrow, or a regular date
    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === -1) {
      return 'Yesterday';
    } else if (diffDays === 1) {
      return 'Tomorrow';
    } else {
      // For other dates, return in readable format 'Month Day, Year'
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return inputDate.toLocaleDateString(undefined, options);
    }
  };

  return (
    <DataContext.Provider value={{ medData, setMedData, getMedicationData, date, nextDay, prevDay, getReadableDate }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
