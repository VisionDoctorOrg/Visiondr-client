import * as React from "react";

function TextSection({ fileName }) {
  return (
    <div className="flex flex-col mt-3 w-full text-center">
      <p className="text-base font-semibold tracking-tight text-gray-950 ">
        {fileName ? `${fileName}` : 'Drag and drop or Browse'}
      </p>
      <p className="mt-1 text-xs leading-tight text-neutral-400 ">
        JPG. JPEG. PNG
      </p>
    </div>
  );
}

export default TextSection;