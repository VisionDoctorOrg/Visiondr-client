import React from 'react';
import QuestionInput from './QuestionInput';

function FormCard({questions, title, tag, dataContext, children}) {
  return (
    <form className="flex flex-col p-6 md:px-5 rounded-lg border border-violet-200 border-solid w-full md:max-w-full text-gray-950 max-md:px-5">
        <header className="flex flex-col w-full max-md:max-w-full">
      <h2 className="font-semibold tracking-tight text-gray-950 max-md:max-w-full">
        {title}
      </h2>

        </header>
      <div className="flex flex-col mt-10 w-full font-medium max-w-[812px] max-md:max-w-full">
        {questions.map((q) => (
          <QuestionInput key={q.id} question={q.question} id={q.id} tag={tag} dataContext={dataContext}/>
        ))}
      </div>
      {children}
    </form>
  );
}

export default FormCard;