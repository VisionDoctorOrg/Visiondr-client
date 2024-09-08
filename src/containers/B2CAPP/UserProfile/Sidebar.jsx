import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [path, setPath] = useState('');
  const [sliderPosition, setSliderPosition ] = useState("top-[0px]");

  useEffect(() => {
    // Split the pathname into parts by '/'
    const parts = location.pathname.split('/');
    // The part after the second '/' will be at index 2
    const secondPart = parts[3] || ''; // Default to empty string if not present
    setPath(secondPart);
  }, [location]);

  useEffect(() => {
    switch (path) {
      case '':
        setSliderPosition("top-[0px]");
        break;
      case 'notification':
        setSliderPosition("top-[55px]");
        break;
      case 'security':
        setSliderPosition("top-[110px]");
        break;
      case 'billing':
        setSliderPosition("top-[165px]");
        break;
      case 'additional-information':
        setSliderPosition("top-[220px]");
        break;
    }
  }, [path]);
  return (
    // <div className='flex overflow-hidden gap-2 items-center p-6 px-4 pl-5 rounded-lg bg-[#D2DBFE] bg-opacity-20 md:h-fit md:max-w-[360px] md:min-w-[270px] md:fixed'>
    //     <nav className='flex md:flex-col items-center self-stretch my-auto md:w-6 text-base font-medium whitespace-nowrap'></nav>

    // </div>
    <div className="w-[272px] h-[296px] p-6 bg-[#d2dbfe]/20 rounded-lg justify-start items-start gap-2 inline-flex">
      <div className="w-4 h-[248px] relative">
        <div className="w-4 h-[248px] left-0 top-0 absolute bg-[#8c8f98]/10 rounded-lg"></div>
        <div className={`w-2 h-8 left-[4px] ${sliderPosition} transition-all duration-500 absolute bg-[#1749fc] rounded`}></div>
      </div>
      <div className="w-48 py-[3.50px] flex-col justify-center items-start gap-[39px] inline-flex">
        <NavLink to="/app/profile/" className="self-stretch text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
          Profile
        </NavLink>
        <NavLink to="/app/profile/notification" className="self-stretch text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
          Notification{" "}
        </NavLink>
        <NavLink to="/app/profile/security" className="self-stretch text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
          Security & Disclosure
        </NavLink>
        <NavLink to="/app/profile/billing" className="self-stretch text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
          Billing
        </NavLink>
        <NavLink to="/app/profile/additional-information" className="self-stretch text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
          Additional information
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
