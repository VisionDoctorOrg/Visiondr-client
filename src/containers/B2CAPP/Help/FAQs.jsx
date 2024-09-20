import React from "react";

const FAQs = () => {
  return (
    <div className="space-y-4 mx-auto py-10 md:mt-5">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg md:p-4 text-gray-900 ">
          <h2 className="md:font-bold font-medium tracking-tight text-[14px] md:text-[16px] pr-20">
            What services does VisionDoctors offer?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-3 md:px-4 leading-tight text-[16px] font-medium tracking-tight text-[#0231d9]  pr-5">
          VisionDR provides online advisory sessions, comprehensive eye health
          education, and online consultations with professional eye care
          providers and technological enhancement . Our team can address a
          variety of eye conditions and ensure comprehensive eye health care for
          you and your family.
        </p>
      </details>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg md:p-4 text-gray-900 ">
          <h2 className="md:font-bold font-medium tracking-tight text-[14px] md:text-[16px] pr-20">
            Are there eye health educational resources available?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-3 md:px-4 leading-tight text-[16px] font-medium tracking-tight text-[#0231d9]  pr-5">
          Yes, we offer a wide range of educational materials, including
          articles, videos, and infographics covering topics like eye care tips,
          common eye conditions, and preventive measures through our webapp and
          social media accounts.
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg md:p-4 text-gray-900 ">
          <h2 className="md:font-bold font-medium tracking-tight text-[14px] md:text-[16px] pr-20">
            Is this platform affordable?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-3 md:px-4 leading-tight text-[16px] font-medium tracking-tight text-[#0231d9]  pr-5">
          Yes, we offer cost-effective services designed to make eye care
          accessible for all, without compromising on quality.
        </p>
      </details>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg md:p-4 text-gray-900 ">
          <h2 className="md:font-bold font-medium tracking-tight text-[14px] md:text-[16px] pr-20">
            How can I get started?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-3 md:px-4 leading-tight text-[16px] font-medium tracking-tight text-[#0231d9]  pr-5">
          You can sign up on our platform to start accessing our advisory
          services, educational resources, and chat with a VisionDR
        </p>
      </details>
    </div>
  );
};

export default FAQs;
