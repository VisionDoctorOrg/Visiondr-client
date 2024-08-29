import React, { useEffect, useState } from "react";

function QuestionInput({ question, id, tag, dataContext }) {
  const [inputValue, setInputValue] = useState("");

  const setInputValueIfExists = (id, tag) => {
    // Access the current data from dataContext
    const currentData = dataContext.data;
    
    if (currentData && Array.isArray(currentData[tag])) {
      // Find the question object by id within the tag
      const existingQuestion = currentData[tag].find(item => item.id === id);
  
      if (existingQuestion) {
        // If the question with the id exists, set the input value to the existing answer
        setInputValue(existingQuestion.answer);
      }
    }
  };

  useEffect(() => {
    setInputValueIfExists(id, tag);
  }, [])
  

  const handleChanges = (e) => {
    const updatedValue = e.target.value;
    
    dataContext.setData((prevData) => {
      // Ensure that the tag key exists and is an array
      const updatedTagData = Array.isArray(prevData[tag]) ? [...prevData[tag]] : [];
  
      // Find the index of the object with the same id
      const index = updatedTagData.findIndex(item => item.id === id);
  
      if (index !== -1) {
        // Update the existing object if found
        updatedTagData[index] = {
          ...updatedTagData[index],
          answer: updatedValue, // Update the answer
        };
      } else {
        // Add a new object if not found
        updatedTagData.push({
          id: id,
          question: question,
          answer: updatedValue,
          edit: false,
        });
      }
  
      return {
        ...prevData,
        [tag]: updatedTagData,
      };
    });
  
    // Optionally, if you also want to update the input field value in the state
    setInputValue(updatedValue);
  };
  
  return (
    <section className="flex flex-col justify-center py-6 md:px-4 tracking-tight mt-3 w-full border border-violet-200 border-solid max-md:px-5 max-md:max-w-full">
      <label
        htmlFor={id}
        className=" text-gray-950 max-md:max-w-full w-full text-base"
      >
        {question}
      </label>
      <div className="group flex gap-2.5 items-center px-3 py-6 mt-3 w-full text-center border-b-[3px] border-violet-200 text-neutral-400 max-md:max-w-full focus-within:border-primary">
        <input
          type="text"
          id={id}
          className="w-full bg-transparent border-none outline-none text-neutral-900"
          placeholder="Enter answer here"
          aria-label={question}
          value={inputValue}
          onChange={handleChanges}
        />
      </div>
    </section>
  );
}

export default QuestionInput;
