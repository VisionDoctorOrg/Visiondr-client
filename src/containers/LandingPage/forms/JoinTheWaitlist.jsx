import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Loader2 } from "lucide-react"
import { isValidNumber } from 'libphonenumber-js';
import axiosInstance from './axiosInstance';
import '../styles/JoinTheWaitList.css'
const JoinTheWaitlist = ({onFocus, onBlur}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const [isOrg, setIsOrg] = useState(false);
  const [isIndividual, setIsIndividual] = useState(false);

  const partyClicked = (party) => {
    if (party == "org") {
      setIsOrg(true);
      setIsIndividual(false);
    } else {
      setIsIndividual(true);
      setIsOrg(false);
    }
  };

  const [screen, setScreen] = useState(0);


  useEffect(() => {
    if (isIndividual) {
      setScreen(1);
    }
  }, [isIndividual]);

  useEffect(() => {
    if (isOrg) {
      setScreen(1);
    }
  }, [isOrg]);

  const handleKeyDownEmail = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if(isValidEmail(email))
      setScreen(screen + 1);
    }
  };
  const handleKeyDownName = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if(fullName != "")
      setScreen(screen + 1);
    }
  };
  const handleKeyDownOrgName = (event) => {
    if (event.key === 'Enter') {
      // event.preventDefault();
      if(orgName != "")
      setScreen(screen + 1);
    }
  };

  function isValidEmail(email) {
    // Define the regular expression pattern for a valid email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Test the email against the pattern
    return emailPattern.test(email);
  }

  const formRef = useRef(null);
  


  const triggerFormValidation = () => {
    if (formRef.current) {
      formRef.current.reportValidity();
    }
  };

  const formPost = async () => {
    setIsLoading(true);
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const phone = phoneNumber;
      const organizationName = orgName;
      const type = isIndividual? "Individual": "Organization";
  
      const body = JSON.stringify({ fullName, email, phone, organizationName, type });
  
      try {
        const res = await axiosInstance.post(`waitlist/create/`, body, config);
        setScreen(4);
      } catch (err) {
        if(err.response && err.response.status == 409){
          setScreen(5);
        }
        else{
          setScreen(6);
        }
      
      } finally{
        setIsLoading(false);
      }
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    await formPost();
    
  };
  return (
    <div className={`px-4 w-[72%] mx-auto ${screen == 4 ? "bg-gif": ""} `}>
      <h3 className={`text-[22px] mt-5 transition-all duration-300 ${screen == 0? " px-[2%]":""} ${screen > 3 ? "hidden": ""}`}>
        Be the first to know when we launch!
      </h3>
      <p className={`flex justify-between text-[14px] font-thin text-gray-300 my-2 transition-all duration-300 ${screen == 0? " px-[2%]":""} ${screen > 3 ? "hidden": ""}`}>
        <span>Help us tailor your needs better, in just 4 steps</span> <span className="text-[16px] text-slate-50">{screen + 1}/4</span>
      </p>
      <div className={`flex gap-3 w-full my-8  `}>
        <form onSubmit={(e) => handleSubmit(e)} className="w-full min-h-[150px] flex flex-col justify-center" ref={formRef}>
          <div className={` ${screen == 0 ? "" : "hidden"}`}>
            <div className="flex justify-between md:gap-16 gap-4 my-2">
              <div
                className={`relative h-[140px] w-[300px] border-2 rounded-md flex justify-center items-center flex-col party cursor-pointer bg-white text-black ${
                  isIndividual ? "border-primary" : ""
                } `}
                onClick={() => partyClicked("Individual")}
              >
                <img
                  src="/images/Star 6.png"
                  className={`absolute top-2 left-8 ${
                    isIndividual ? "" : "hidden"
                  }`}
                />
                <img
                  src="/images/Star 6.png"
                  className={`absolute bottom-5 left-12 ${
                    isIndividual ? "" : "hidden"
                  } `}
                />
                <img
                  src="/images/Star 6.png"
                  className={`absolute top-5 right-5 ${
                    isIndividual ? "" : "hidden"
                  } `}
                />
                <img
                  src="/images/Star 6.png"
                  className={`absolute top-15 right-12 ${
                    isIndividual ? "" : "hidden"
                  } `}
                />
                <img
                  src="/images/Star 6.png"
                  className={`absolute bottom-5 right-8 ${
                    isIndividual ? "" : "hidden"
                  } `}
                />

                <div className="flex -space-x-2">
                  <img src="/images/Group_indiv.png" className="h-10"/>
                </div>
                <p className="text-[12px] md:text-[16px] mt-3 font-medium">I'm an individual</p>
              </div>
              <div
                className={` relative h-[140px] w-[300px] border-2 rounded-md flex justify-center items-center flex-col party cursor-pointer bg-white text-black ${
                  isOrg ? "border-primary" : ""
                }`}
                onClick={() => partyClicked("org")}
              >
                <img
                  src="/images/Star 6.png"
                  className={`absolute top-2 left-8 ${isOrg ? "" : "hidden"}`}
                />
                <img
                  src="/images/Star 6.png"
                  className={`absolute bottom-5 left-12 ${
                    isOrg ? "" : "hidden"
                  } `}
                />
                <img
                  src="/images/Star 6.png"
                  className={`absolute top-5 right-5 ${isOrg ? "" : "hidden"} `}
                />
                <img
                  src="/images/Star 6.png"
                  className={`absolute top-15 right-12 ${
                    isOrg ? "" : "hidden"
                  } `}
                />
                <img
                  src="/images/Star 6.png"
                  className={`absolute bottom-5 right-8 ${
                    isOrg ? "" : "hidden"
                  } `}
                />
                <div className="flex -space-x-2">
                  <img src="/images/Group_org.png" alt="" className="h-10"/>
                </div>
                <p className="text-[12px] md:text-[16px] mt-3 font-medium">
                  I'm an Organization
                </p>
              </div>
            </div>
          </div>
          <div className={`flex gap-3 w-full mb-8 ${screen == 1 && isIndividual? "" : "hidden"} `}>
            <label
              htmlFor="fullName"
              className=" relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
            >
              <input
                type="text"
                id="fullName"
                placeholder="Full Name "
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                required={isIndividual}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onKeyDown={handleKeyDownName}
                autoComplete="off"
                onFocus={onFocus}
                onBlur={onBlur}
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Full Name *
              </span>
            </label>
            <button
              className={cn("hover:border-white hover:bg-primary/75 border-2 border-primary bg-primary h-[48px] w-[140px] text-[16px] disabled:bg-[#d2dbfe] disabled:border-0 disabled:text-[#8c8f98] rounded-[8px]")}
              onClick={() => setScreen(2)}
              disabled={fullName == ""}
              type="button"
            >
              Next
            </button>
          </div>
          <div className={`flex flex-col gap-3 w-full justify-around h-[250px] mb-8 ${screen == 1 && isOrg ? "" : "hidden"} `}>
            <label
              htmlFor="fullName1"
              className=" relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
            >
              <input
                type="text"
                id="fullName1"
                placeholder="Full Name "
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                required={isOrg}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="off"
                onFocus={onFocus}
                onBlur={onBlur}
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Full Name *
              </span>
            </label>
            <label
              htmlFor="orgname"
              className=" relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
            >
              <input
                type="text"
                id="orgname"
                placeholder="Organization Name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                required={isOrg}
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                onKeyDown={handleKeyDownOrgName}
                onFocus={onFocus}
                onBlur={onBlur}
                autoComplete="off"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Organization Name *
              </span>
            </label>
            <button
              className={cn("hover:border-white hover:bg-primary/75 border-2 border-primary bg-primary h-[48px] w-[140px] text-[16px] disabled:bg-[#d2dbfe] disabled:border-0 disabled:text-[#8c8f98] rounded-[8px]")}
              onClick={() => setScreen(2)}
              disabled={fullName == "" || orgName == ""}
              type="submit"
            >
              Next
            </button>
          </div>
          <div className={`flex gap-3 w-full mb-8 ${screen == 2 ? "" : "hidden"} `}>
            <label
              htmlFor="email5"
              className=" relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
            >
              <input
                type="email"
                id="email5"
                placeholder="Email"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  triggerFormValidation();

                }}
                onKeyDown={handleKeyDownEmail}
                onFocus={onFocus}
                onBlur={onBlur}
                autoComplete="off"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Email *
              </span>
            </label>
            <button             
              className={cn("hover:border-white hover:bg-primary/75 border-2 border-primary bg-primary h-[48px] w-[140px] text-[16px] disabled:bg-[#d2dbfe] disabled:border-0 disabled:text-[#8c8f98] rounded-[8px]")}
              onClick={() => {setScreen(3)}}
              disabled={email == "" || !isValidEmail(email)}
              type="button"
            >
              Next
            </button>
          </div>
          <div className={`flex gap-3 w-full mb-8 ${screen == 3 ? "" : "hidden"} `}>
            <label
              htmlFor="phoneNo"
              className=" relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
            >
              <input
                type="tel"
                id="phoneNo"
                placeholder="Phone number"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                autoComplete="off"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Phone Number
              </span>
            </label>
            <Button
              type="submit"
              disabled={isLoading}
              className={cn("hover:border-white border-2 border-primary h-[48px] w-[140px] px-2 text-[16px] disabled:bg-white disabled:border-0 disabled:text-gray-500")}
            >
              Finish <MdArrowOutward className={` ${isLoading? "hidden": ""} ml-2 h-4 w-4 `} /><Loader2 className={` ${isLoading? "": "hidden"}  ml-2 h-4 w-4 animate-spin`} />
            </Button>
          </div>
          <div className={`flex gap-3 w-full mb-8 h-full justify-center items-center min-h-[200px] ${screen == 4 ? "" : "hidden"} `}>
              <h1 className="text-[28px] font-medium">Thank you for joining our waitlist!</h1>
          </div>
          <div className={`flex gap-3 w-full mb-8 h-full justify-center items-center min-h-[200px] ${screen == 5 ? "" : "hidden"} `}>
              <h1 className="text-[28px] font-medium">You have already joined our waitlist</h1>
          </div>
          <div className={`flex gap-3 w-full mb-8 h-full justify-center items-center min-h-[200px] ${screen == 6 ? "" : "hidden"} `}>
              <h1 className="text-[28px] font-medium">An error occured please try again.</h1>
          </div>

        </form>
      </div>
    </div>
  );
};

export default JoinTheWaitlist;
