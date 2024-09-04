import React from "react";
import QuestionSection from "./QuestionSection";
import FileUploadSection from "./FileUploadSection";
import SubmitButton from "./SubmitButton";
import DataProvider from "./DataContext";
  

function CaseFile() {
  return (
    <DataProvider>
      <main className="flex flex-col text-base md:pl-2 mb-8 mt-16 md:mt-8">
        <h1 className="font-medium text-gray-950 max-md:max-w-full text-base px-2 md:px-0">
          Case File
        </h1>
        <p className="mt-3 text-sm leading-4 text-gray-950 max-md:max-w-full px-2 md:px-0">
          Complete this brief questionnaire to assist us in assessing your eye
          health and recommending the best solution for you. Your responses will
          guide us in providing personalized care.
          <br />
          <br />
          Please answer the following questions as accurately as possible.
        </p>
        <section className="flex flex-col p-6 mt-3 max-w-full rounded-lg border border-neutral-200 border-solid w-[860px] max-md:px-5">
          <QuestionSection/>
          <FileUploadSection />
          <SubmitButton className="w-[140px] mt-10" label="Submit"/>
        </section>
      </main>
    </DataProvider>
  );
}

export default CaseFile;
