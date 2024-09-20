import React from "react";
import { MdArrowOutward } from "react-icons/md";

function LogoutButton({onClick}) {
  return (
    <button
      className="flex gap-2.5 justify-center items-center p-3 text-base font-medium text-center text-blue-600 rounded-lg border-2 border-blue-600 border-solid hover:bg-primary hover:text-white duration-300 ease-in-out transition-all"
      onClick={onClick}
    >
      <span className="self-stretch my-auto">
        Log out
      </span>
      <MdArrowOutward className="w-6 h-6 relative" />
    </button>
  );
}

export default LogoutButton;