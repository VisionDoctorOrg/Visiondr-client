import React, { useContext } from "react";
import QuestionInput from "../components/QuestionInput";
import { DataContext } from "./DataContext";

function QuestionSection({}) {
  const dataContext = useContext(DataContext);
  return (
    <div className="flex flex-col w-full gap-6">
      {dataContext.data["caseFile"].map((q, index) => (
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold tracking-tight text-base text-gray-950 max-md:max-w-full">
            {q.title}
          </h2>

          <QuestionInput
            key={index}
            id={q.id}
            question={q.question}
            dataContext={dataContext}
            tag="caseFile"
            className="mt-0"
          />
        </div>
      ))}
    </div>
  );
}

export default QuestionSection;
