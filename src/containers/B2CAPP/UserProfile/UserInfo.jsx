import React from "react";

function UserInfo({ imageSrc, name, age, plan }) {
  return (
    <section className="flex gap-6 items-end min-w-[240px] relative">
      {/* <img
        loading="lazy"
        src={imageSrc}
        alt={`Profile picture of ${name}`}
        className="object-contain shrink-0 aspect-square w-[200px]"
      /> */}
       <img class="md:w-[200px] md:h-[200px] w-[100px] rounded-full border-4 border-[#1749fc]" src={imageSrc} />
      <div className="flex flex-col w-[123px]">
        <h2 className="text-2xl font-semibold leading-tight opacity-[var(--sds-size-stroke-border)] text-gray-950">
          {name}
        </h2>
        <p className="mt-3 text-base font-medium opacity-[var(--sds-size-stroke-border)] text-neutral-400">
          {age} years | {plan}
        </p>
      </div>
    </section>
  );
}

export default UserInfo;