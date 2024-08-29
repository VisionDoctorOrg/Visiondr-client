import React from 'react';

function WelcomeHeader({ name }) {
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const currentDate = new Date().toLocaleDateString('en-US', options);
  return (
    <header className=" flex-col self-stretch my-auto min-w-[180px] hidden lg:flex">
      <h1 className="text-base font-semibold tracking-tight opacity-[var(--sds-size-stroke-border)] text-gray-950">
        Welcome, {name}
      </h1>
      <time className="mt-1 text-xs leading-tight text-gray-700 opacity-[var(--sds-size-stroke-border)]">
        {currentDate}
      </time>
    </header>
  );
}

export default WelcomeHeader;