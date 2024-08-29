import React from 'react';

function InfoRow({ label, value }) {
  return (
    <div className="flex gap-4 items-center max-w-full whitespace-nowrap text-base font-medium">
      <div className="self-stretch my-auto w-[100px]">
        {label}
      </div>
      <div className="self-stretch my-auto">
        {value}
      </div>
    </div>
  );
}

export default InfoRow;