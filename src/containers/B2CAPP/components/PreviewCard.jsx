import React from "react";
import PreviewInput from "./PreviewInput";

const PreviewCard = ({ tag, dataContext }) => {
  return (
    <div className="flex flex-col mt-10 w-full font-medium max-w-[812px] max-md:max-w-full">
      {dataContext.data[tag].map((q) => (
        <PreviewInput
          key={q.id}
          question={q.question}
          id={q.id}
          tag={tag}
          dataContext={dataContext}
        />
      ))}
    </div>
  );
};

export default PreviewCard;
