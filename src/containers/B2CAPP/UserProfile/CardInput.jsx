import React from "react";

function CardInput({ label, placeholder, imageUrl }) {
  return (
    <div className="flex flex-col justify-center p-6 w-full border border-violet-200 border-solid mt-3 max-md:px-5 max-md:max-w-full">
      <label className="text-sm leading-tight text-gray-700 opacity-[var(--sds-size-stroke-border)] max-md:max-w-full">
        {label}
      </label>
      <div className="flex flex-col mt-3 w-full text-base font-medium text-center text-neutral-400 max-md:max-w-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt=""
          className="object-contain self-end aspect-[2.71] w-[65px]"
        />
        <div className="flex gap-2.5 items-center px-3 py-6 w-full border-b-2 border-violet-200 max-md:max-w-full">
          <div className="flex gap-1 items-center self-stretch my-auto">
            <div className="self-stretch my-auto opacity-[var(--sds-size-stroke-border)]">
              {placeholder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInput;