function StepMarker({ step, last, currentStep, completed }) {
  return (
    <>
      <div
        className={` ${
          currentStep || completed ? "bg-primary" : "border border-[#d2dbfe]"
        } flex md:flex-col justify-center items-center w-6 h-6 text-white rounded-xl min-h-[24px]`}
      >
        <div
          className={` ${
            currentStep ? "text-white" : "text-[#d2dbfe]"
          } flex items-center justify-center font-normal`}
        >
          {completed ? (
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
                  d="M9.99974 15.172L19.1917 5.979L20.6067 7.393L9.99974 18L3.63574 11.636L5.04974 10.222L9.99974 15.172Z"
                  fill="white"
                />
              </g>
            </svg>
          ) : (
            step
          )}
        </div>
      </div>
      <div
        className={`my-1 max-w-full md:border-l border-b ${completed? "border-primary": "border-violet-200"}  border-solid  md:min-h-[24px] min-w-[24px] md:min-w-0 ${
          last ? "hidden" : ""
        }`}
      ></div>
    </>
  );
}

export default StepMarker;
