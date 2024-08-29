import React, { useEffect, useRef, useState } from "react";

function InfoField({ label, value, editable, dataContext, tag, id }) {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const inputRef = useRef(null);

  useEffect(() => {
    if (edit) {
      inputRef.current.focus();
    }
  }, [edit]);

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
  

  const enableEdit = () => {
    setEdit(true);
    setInputValue("");
  }

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
          question: label,
          answer: updatedValue,
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
    <div
      className={`flex flex-wrap sm:gap-10 gap-2 items-center p-6 ${
        editable ? "justify-between" : ""
      } w-full border border-violet-200 border-solid ${
        editable ? "" : "whitespace-nowrap"
      } mt-3 max-md:px-5 max-md:max-w-full`}
    >
      <div
        className={`flex md:gap-6 gap-3 flex-col md:flex-row items-center  self-stretch my-auto text-base font-medium md:w-3/4 ${
          editable ? "min-w-[240px]" : ""
        }`}
      >
        <div className="self-stretch my-auto md:w-40 w-32">{label}</div>
        
        <input type="text" className="self-stretch my-auto focus:border-0 focus:outline-none w-full" value={inputValue} onChange={handleChanges} readOnly={!edit} ref={inputRef}/>
      </div>
      {editable && (
        <button onClick={enableEdit} className={`${edit? "hidden" : ""} mr-0 ml-auto`}>
          <img
            loading="lazy"
            src="/icons/edit_icon.svg"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      )}
    </div>
  );
}

export default InfoField;
