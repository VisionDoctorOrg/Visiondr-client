import React, { useState } from "react";
import EyeHealthSummaryCard from "./EyeHealthSummaryCard";
import SubmitButton from "./SubmitButton";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const EyeHealthSummary = ({user}) => {
  const [visionLevel, setVisionLevel] = useState(user?.visionLevel?.visionLevel);
  const [visionSaveLoading, setVisionSaveLoading] = useState(false);
  const [systolic, setSystolic] = useState(user?.bloodPressure?.systolic);
  const [diastolic, setDiastolic] = useState(user?.bloodPressure?.diastolic);
  const [bloodPressureSaveLoading, setBloodPressureSaveLoading] =
    useState(false);
  const [isVisionSubmitted, setIsVisionSubmitted] = useState(user?.visionLevel?.visionLevel);
  const [isBloodSubmitted, setIsBloodSubmitted] = useState(user?.bloodPressure?.systolic);

  const saveVisionLevel = async () => {
    const data = JSON.stringify({ visionLevel });
    setVisionSaveLoading(true);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}users/vision-level/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
            // Add any other headers your API requires
          },
        }
      );

      console.log(response.data);

      return response.data; // Assuming the response contains data you want to return
    } catch (error) {
      throw error; // Re-throw the error to be caught by the caller
    } finally {
      setVisionSaveLoading(false);
      setIsVisionSubmitted(true);
    }
  };
  const saveBloodPressure = async () => {
    const data = JSON.stringify({ systolic, diastolic });
    setBloodPressureSaveLoading(true);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}users/blood-pressure/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
            // Add any other headers your API requires
          },
        }
      );

      console.log(response.data);

      return response.data; // Assuming the response contains data you want to return
    } catch (error) {
      throw error; // Re-throw the error to be caught by the caller
    } finally {
      setBloodPressureSaveLoading(false);
      setIsBloodSubmitted(true);
    }
  };

  const onVisionLevelSave = () => {
    console.log(visionLevel);
    saveVisionLevel();
  };

  const onBloodPressureSave = () => {
    console.log(systolic, diastolic);
    saveBloodPressure();
  };

  const reenterBloodPressure = () => {
    setIsBloodSubmitted(false);
  };

  const reenterVisionLevel = () => {
    setIsVisionSubmitted(false);
  }

  const navigate = useNavigate();

  const goToRefractiveError = () => {
    navigate("/app/refractive-error");
  }

  const goToGlaucoma = () => {
    navigate("/app/glaucoma");
  }

  return (
    <div>
      <div className="text-gray-950 text-base font-medium leading-normal my-4 mt-6 pl-4 md:pl-0">
        Eye Health Summary
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <div className=" rounded-lg ">
            <EyeHealthSummaryCard title="Take the refractive error test to know your risk level" dropdownTriggerText="Take test" reenter={goToRefractiveError}>
              <div className="pl-2 justify-center items-center gap-2 flex w-full h-full">
                <NavLink to="/app/refractive-error">
                  <SubmitButton label="Take test" />
                </NavLink>
              </div>
            </EyeHealthSummaryCard>
            {/* <EyeHealthSummaryCard title="Refractive error risk level">
              <div className="pl-2 justify-start items-center gap-2 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group">
                        <path
                          id="Vector"
                          d="M11.9997 3C17.3917 3 21.8777 6.88 22.8187 12C21.8787 17.12 17.3917 21 11.9997 21C6.60766 21 2.12166 17.12 1.18066 12C2.12066 6.88 6.60766 3 11.9997 3ZM11.9997 19C14.0391 18.9996 16.0181 18.3068 17.6125 17.0352C19.207 15.7635 20.3226 13.9883 20.7767 12C20.3209 10.0133 19.2046 8.24 17.6103 6.97003C16.016 5.70005 14.038 5.00853 11.9997 5.00853C9.96136 5.00853 7.98335 5.70005 6.38904 6.97003C4.79473 8.24 3.67843 10.0133 3.22266 12C3.67676 13.9883 4.79234 15.7635 6.38681 17.0352C7.98128 18.3068 9.9602 18.9996 11.9997 19ZM11.9997 16.5C10.8062 16.5 9.6616 16.0259 8.81768 15.182C7.97377 14.3381 7.49966 13.1935 7.49966 12C7.49966 10.8065 7.97377 9.66193 8.81768 8.81802C9.6616 7.97411 10.8062 7.5 11.9997 7.5C13.1931 7.5 14.3377 7.97411 15.1816 8.81802C16.0256 9.66193 16.4997 10.8065 16.4997 12C16.4997 13.1935 16.0256 14.3381 15.1816 15.182C14.3377 16.0259 13.1931 16.5 11.9997 16.5ZM11.9997 14.5C12.6627 14.5 13.2986 14.2366 13.7674 13.7678C14.2363 13.2989 14.4997 12.663 14.4997 12C14.4997 11.337 14.2363 10.7011 13.7674 10.2322C13.2986 9.76339 12.6627 9.5 11.9997 9.5C11.3366 9.5 10.7007 9.76339 10.2319 10.2322C9.76306 10.7011 9.49966 11.337 9.49966 12C9.49966 12.663 9.76306 13.2989 10.2319 13.7678C10.7007 14.2366 11.3366 14.5 11.9997 14.5Z"
                          fill="#404453"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-center text-gray-950/60 text-xs font-medium  leading-[14.40px]">
                  Possible Myopia
                </div>
              </div>
              <img
                className="w-[154px] h-[124px] rounded-lg"
                src="/images/Refractive-error-risk-level.png"
              />
            </EyeHealthSummaryCard> */}
          </div>
          <div className=" rounded-lg ">
            <EyeHealthSummaryCard title="Take the glaucoma test to know your risk level" dropdownTriggerText="Take test" reenter={goToGlaucoma}>
              <div className="pl-2 justify-center items-center gap-2 flex w-full h-full">
                <NavLink to="/app/glaucoma">
                  <SubmitButton label="Take test" />
                </NavLink>
              </div>
            </EyeHealthSummaryCard>
            {/* <EyeHealthSummaryCard title="Glaucoma risk level">
              <div className="h-[63px] pl-2 flex-col justify-center items-start gap-2 inline-flex">
                <div className="text-center text-gray-950/60 text-xs font-medium  leading-[14.40px]">
                  No risk
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Group">
                          <path
                            id="Vector"
                            d="M12 2.5C17.523 2.5 22 6.977 22 12.5C22 18.023 17.523 22.5 12 22.5C6.477 22.5 2 18.023 2 12.5C2 6.977 6.477 2.5 12 2.5ZM12 4.5C9.87827 4.5 7.84344 5.34285 6.34315 6.84315C4.84285 8.34344 4 10.3783 4 12.5C4 14.6217 4.84285 16.6566 6.34315 18.1569C7.84344 19.6571 9.87827 20.5 12 20.5C14.1217 20.5 16.1566 19.6571 17.6569 18.1569C19.1571 16.6566 20 14.6217 20 12.5C20 10.3783 19.1571 8.34344 17.6569 6.84315C16.1566 5.34285 14.1217 4.5 12 4.5ZM12 7.5C13.0526 7.5004 14.0782 7.83297 14.9307 8.45034C15.7832 9.06771 16.4192 9.93837 16.748 10.9383C17.0767 11.9382 17.0815 13.0164 16.7617 14.0192C16.4419 15.022 15.8137 15.8984 14.9668 16.5233C14.1198 17.1483 13.0972 17.49 12.0446 17.4998C10.9921 17.5096 9.96332 17.187 9.10486 16.5779C8.24639 15.9688 7.60204 15.1043 7.26361 14.1076C6.92517 13.111 6.90991 12.0329 7.22 11.027C7.45392 11.5497 7.86027 11.9762 8.37106 12.2352C8.88184 12.4941 9.46606 12.5698 10.0259 12.4495C10.5858 12.3292 11.0874 12.0202 11.4468 11.5743C11.8061 11.1284 12.0014 10.5727 12 10C12.0001 9.51847 11.8612 9.04714 11.5999 8.64268C11.3386 8.23821 10.966 7.91781 10.527 7.72C10.993 7.577 11.487 7.5 12 7.5Z"
                            fill="#404453"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="text-center text-[#404453] text-base font-semibold  leading-normal">
                    0/ 5
                  </div>
                </div>
              </div>
              <div className="w-[149.64px] h-[115.23px] pr-[7px] justify-start items-center inline-flex">
                <div className="w-[142.64px] h-[115.23px] relative">
                  <div className="h-[82px] left-[12px] top-[2px] absolute justify-start items-end gap-1 inline-flex">
                    <div className="w-5 h-px rounded-tl-sm rounded-tr-sm border border-[#27be69]"></div>
                    <div className="w-5 h-5 bg-[#1749fc] rounded-tl-sm rounded-tr-sm border border-[#1749fc]"></div>
                    <div className="w-5 h-[41px] bg-[#fcca17] rounded-tl-sm rounded-tr-sm"></div>
                    <div className="w-5 h-[61px] bg-[#f2415a] rounded-tl-sm rounded-tr-sm"></div>
                    <div className="w-5 h-[82px] bg-[#e5102e] rounded-tl-sm rounded-tr-sm"></div>
                  </div>
                  <div className="h-[82px] left-0 top-[4px] absolute flex-col justify-end items-end gap-2 inline-flex">
                    <div className="text-center text-[#404453] text-[8px] font-normal  leading-[9.60px]">
                      4
                    </div>
                    <div className="text-center text-[#404453] text-[8px] font-normal  leading-[9.60px]">
                      3
                    </div>
                    <div className="text-center text-[#404453] text-[8px] font-normal  leading-[9.60px]">
                      2
                    </div>
                    <div className="text-center text-[#404453] text-[8px] font-normal  leading-[9.60px]">
                      1
                    </div>
                    <div className="text-center text-[#404453] text-[8px] font-normal  leading-[9.60px]">
                      0
                    </div>
                  </div>
                  <div className="w-[124.64px] h-[28.23px] left-[18px] top-[87px] absolute">
                    <div className="left-[6.43px] top-0 absolute origin-top-left rotate-[40deg] text-center text-[#404453] text-[8px] font-normal  leading-[9.60px]">
                      No
                    </div>
                    <div className="left-[28.05px] top-0 absolute origin-top-left rotate-[40deg] text-center text-[#404453] text-[8px] font-normal  leading-[9.60px]">
                      Low
                    </div>
                    <div className="left-[52.73px] top-0 absolute origin-top-left rotate-[40deg] text-center text-[#404453] text-[8px] font-normal  leading-[9.60px]">
                      Medium
                    </div>
                    <div className="left-[76.91px] top-0 absolute origin-top-left rotate-[40deg] text-center text-[#404453] text-[8px] font-normal  leading-[9.60px]">
                      High
                    </div>
                    <div className="left-[100.12px] top-0 absolute origin-top-left rotate-[40deg] text-center text-[#404453] text-[8px] font-normal  leading-[9.60px]">
                      Extreme
                    </div>
                  </div>
                </div>
              </div>
            </EyeHealthSummaryCard> */}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <div className=" rounded-lg ">
            {isBloodSubmitted ? (
              <EyeHealthSummaryCard title="Blood pressure" dropdownTriggerText="Enter blood pressure" reenter={reenterBloodPressure}>
                <div className="h-[63px] pl-2 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-center text-gray-950/60 text-xs font-medium  leading-[14.40px]">
                    Normal
                  </div>
                  <div className="flex-col justify-center items-start gap-6 flex">
                    <div className="self-stretch justify-start items-center gap-0.5 inline-flex">
                      <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="Group">
                              <path
                                id="Vector"
                                d="M16.5 3.5C19.538 3.5 22 6 22 9.5C22 16.5 14.5 20.5 12 22C10.022 20.813 4.916 18.063 2.868 13.5H7.566L8.5 11.944L11.5 16.944L13.566 13.5H17V11.5H12.434L11.5 13.056L8.5 8.056L6.434 11.5H2.21C2.074 10.863 2 10.196 2 9.5C2 6 4.5 3.5 7.5 3.5C9.36 3.5 11 4.5 12 5.5C13 4.5 14.64 3.5 16.5 3.5Z"
                                fill="#F2415A"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center text-[#404453] text-base font-semibold  leading-normal">
                        {systolic} {" / "} {diastolic}
                      </div>
                      <div className="text-center text-[#404453] text-sm font-normal  leading-[16.80px]">
                        sys
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="w-[154px] h-[124px] rounded-lg"
                  src="/images/signal_img.png"
                />
              </EyeHealthSummaryCard>
            ) : (
              <EyeHealthSummaryCard title="Input blood pressure unit" dropdownTriggerText="Enter blood pressure" reenter={reenterBloodPressure}>
                <div className="h-[63px] pl-2 flex-col justify-center items-start gap-2 inline-flex mb-10">
                  <div className="flex">
                    <img
                      className="w-[154px] h-[124px] rounded-lg"
                      src="/images/blood_pressure.svg"
                    />
                    <div className="flex bg-[#d2dbfe]/20 rounded-lg shadow p-2">
                      <div className="relative flex flex-col items-center max-w-[3rem]">
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          className="bg-gray-100 p-1 h-6 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M11.9998 11.828L9.17184 14.657L7.75684 13.243L11.9998 9L16.2428 13.243L14.8278 14.657L11.9998 11.828Z"
                              fill="#030712"
                            />
                          </svg>
                        </button>
                        <input
                          type="number"
                          id="quantity-input"
                          data-input-counter
                          aria-describedby="helper-text-explanation"
                          className="bg-white border-x-0 h-11 text-center text-gray-900 text-sm block w-full py-1 focus:border-0 focus:outline-none"
                          placeholder="999"
                          value={systolic}
                          onChange={(e) => setSystolic(e.target.value)}
                          required
                        />

                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          className="bg-gray-100  p-1 h-6"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z"
                              fill="#030712"
                            />
                          </svg>
                        </button>
                      </div>
                      <div class="text-center text-gray-950 text-base font-medium leading-normal flex items-center mx-2">
                        /
                      </div>
                      <div className="relative flex flex-col items-center max-w-[3rem]">
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          className="bg-gray-100 p-1 h-6 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M11.9998 11.828L9.17184 14.657L7.75684 13.243L11.9998 9L16.2428 13.243L14.8278 14.657L11.9998 11.828Z"
                              fill="#030712"
                            />
                          </svg>
                        </button>
                        <input
                          type="number"
                          id="quantity-input"
                          data-input-counter
                          aria-describedby="helper-text-explanation"
                          className="bg-white border-x-0 h-11 text-center text-gray-900 text-sm block w-full py-1 focus:border-0 focus:outline-none"
                          placeholder="999"
                          value={diastolic}
                          onChange={(e) => setDiastolic(e.target.value)}
                          required
                        />

                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          className="bg-gray-100  p-1 h-6"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z"
                              fill="#030712"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full my-2">
                    <SubmitButton
                      label={bloodPressureSaveLoading ? "loading" : "Save"}
                      className="w-10 mx-auto"
                      onClick={onBloodPressureSave}
                    />
                  </div>
                </div>
              </EyeHealthSummaryCard>
            )}
          </div>
          <div className=" rounded-lg ">
            {isVisionSubmitted ? (
              <EyeHealthSummaryCard title="Colour vision risk level" dropdownTriggerText="Enter vision level" reenter={reenterVisionLevel}>
                <div className="w-[74px] h-6 justify-start items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Group">
                          <path
                            id="Vector"
                            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM8 14H16V16H8V14ZM8 11C7.60218 11 7.22064 10.842 6.93934 10.5607C6.65804 10.2794 6.5 9.89782 6.5 9.5C6.5 9.10218 6.65804 8.72064 6.93934 8.43934C7.22064 8.15804 7.60218 8 8 8C8.39782 8 8.77936 8.15804 9.06066 8.43934C9.34196 8.72064 9.5 9.10218 9.5 9.5C9.5 9.89782 9.34196 10.2794 9.06066 10.5607C8.77936 10.842 8.39782 11 8 11ZM16 11C15.6022 11 15.2206 10.842 14.9393 10.5607C14.658 10.2794 14.5 9.89782 14.5 9.5C14.5 9.10218 14.658 8.72064 14.9393 8.43934C15.2206 8.15804 15.6022 8 16 8C16.3978 8 16.7794 8.15804 17.0607 8.43934C17.342 8.72064 17.5 9.10218 17.5 9.5C17.5 9.89782 17.342 10.2794 17.0607 10.5607C16.7794 10.842 16.3978 11 16 11Z"
                            fill="#27BE69"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="text-center text-gray-950/60 text-xs font-medium  leading-[14.40px]">
                    {visionLevel}
                  </div>
                </div>
                <img
                  className="w-[154px] h-[124px] rounded-lg"
                  src="/images/signal_img.png"
                />
              </EyeHealthSummaryCard>
            ) : (
              <EyeHealthSummaryCard title="Select your colour vision level"  dropdownTriggerText="Enter vision level" reenter={reenterVisionLevel}>
                <div className="w-full justify-start items-center gap-2 inline-flex flex-col">
                  <div className="w-full pl-2 h-20">
                    <div className="w-full flex gap-2">
                      <input
                        type="radio"
                        id="normal"
                        name="color-vision"
                        value="Normal"
                        checked={visionLevel == "Normal"}
                        onChange={(e) => setVisionLevel(e.target.value)}
                      />
                      <label htmlFor="normal">Normal</label>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        id="abnormal"
                        name="color-vision"
                        value="Abnormal"
                        checked={visionLevel == "Abnormal"}
                        onChange={(e) => setVisionLevel(e.target.value)}
                      />
                      <label htmlFor="abnormal">Abnormal</label>
                    </div>
                  </div>
                  <div className="w-full">
                    <SubmitButton
                      label={visionSaveLoading ? "loading" : "Save"}
                      className="mx-auto w-fit"
                      onClick={onVisionLevelSave}
                    />
                  </div>
                </div>
              </EyeHealthSummaryCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  user: state.auth.user,
});

export default connect(mapStateToProps)(EyeHealthSummary); ;
