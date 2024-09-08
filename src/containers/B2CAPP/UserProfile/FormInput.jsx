import React from "react";

function FormInput({ label, placeholder, iconUrl }) {
  return (
    <div className="flex flex-col justify-center p-6 border border-violet-200 border-solid min-w-[240px] w-[400px] max-md:px-5">
      <label className="text-sm leading-tight text-gray-700 opacity-[var(--sds-size-stroke-border)]">
        {label}
      </label>
      <div className="flex gap-2.5 items-center px-3 py-6 mt-3 w-full text-base font-medium text-center whitespace-nowrap border-b-2 border-violet-200 text-neutral-400">
        <div className="flex gap-1 items-center self-stretch my-auto">
          <div className="self-stretch my-auto opacity-[var(--sds-size-stroke-border)]">
            {placeholder}
          </div>
        </div>
        {iconUrl && (
          <img
            loading="lazy"
            src={iconUrl}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        )}
      </div>
    </div>
  );
}

export default FormInput;