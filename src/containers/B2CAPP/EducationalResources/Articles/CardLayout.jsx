import React from "react";

const CardLayout = ({ children, className }) => {
  return (
    <div className={`flex flex-wrap 2xl:gap-6 xl:gap-6 gap-6 items-start mt-4 leading-tight max-md:max-w-full justify-center md:justify-normal ${className} `}>
      {children}
    </div>
  );
};

export default CardLayout;
