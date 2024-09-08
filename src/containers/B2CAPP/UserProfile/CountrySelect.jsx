import React from "react";

function CountrySelect() {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center p-6 mt-3 w-full text-sm leading-tight text-gray-700 whitespace-nowrap border border-violet-200 border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 items-center self-stretch my-auto min-w-[240px] w-[295px]">
        <div className="self-stretch my-auto opacity-[var(--sds-size-stroke-border)]">
          Nigeria
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/341b519043ff833319afc2b804ea6706479b0fc9db321b3f7fecfe3287003474?placeholderIfAbsent=true&apiKey=06e54cbb0c8d4ebdbfa1852341f08638"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
    </div>
  );
}

export default CountrySelect;