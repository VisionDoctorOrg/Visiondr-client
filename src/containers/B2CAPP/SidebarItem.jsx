import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon, label, active, className, path }) => {
  const baseClasses = "flex gap-2 items-center px-2 py-1 whitespace-nowrap text-[#404453] text-sm";
  const activeClasses = `${baseClasses} text-white bg-primary rounded`;

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${activeClasses} ${className}`
          : `${baseClasses} ${className}`
      }
      to={path}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      >
        <g id="Group">
          <path
            id="Vector"
            d={icon}
          />
        </g>
      </svg>

      <span className="self-stretch my-auto">{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
