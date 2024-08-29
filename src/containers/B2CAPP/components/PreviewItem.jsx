import React, { useState } from "react";
import PreviewCard from "./PreviewCard";

const PreviewItem = ({ dataContext, tag, title }) => {
  const [edit, setEdit] = useState(false);

  const enableEdit = () => {
    dataContext.setData((prevData) => {
      if (Array.isArray(prevData[tag])) {
        // Create a new array with all elements having 'edit' set to false
        const updatedTagData = prevData[tag].map((item) => ({
          ...item,
          edit: true,
        }));

        // Return the updated data object
        return {
          ...prevData,
          [tag]: updatedTagData,
        };
      }

      // If the tag doesn't exist or isn't an array, return the previous data unchanged
      return prevData;
    });
    setEdit(true);
  };
  return (
    <div>
      <header className="flex w-full max-md:max-w-full mt-10">
        <h2 className="font-semibold tracking-tight text-gray-950 max-md:max-w-full">
          {title}
        </h2>
        <button
          onClick={enableEdit}
          className={`${edit ? "hidden" : ""} mr-0 ml-auto`}
        >
          <img
            loading="lazy"
            src="/icons/edit_icon.svg"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </header>
      <PreviewCard tag={tag} dataContext={dataContext} />
    </div>
  );
};

export default PreviewItem;
