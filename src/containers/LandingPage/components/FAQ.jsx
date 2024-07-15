import React from "react";
import Dropdown from "./Dropdown";
const FAQ = () => {
  return (
    <div className="md:py-10 py-5" id="faq">
      <div>
        <h1 className="Md:my-10 md:text-4xl text-2xl font-medium text-center">
          Frequently asked questions (FAQs)
        </h1>
      </div>
      <div className="space-y-4 w-[90%] mx-auto py-10">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900">
            <h2 className="font-medium">
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

          <p className="mt-4 px-4 leading-relaxed text-[#295BFF]">
            VisionDR will provide online advisory sessions, comprehensive eye
            health education, and online consultations with professional eye
            care providers and technological enhancement . Our team can address
            a variety of eye conditions and ensure comprehensive eye health care
            for you and your family.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900">
            <h2 className="font-medium">When will the Webapp go Live?</h2>

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

          <p className="mt-4 px-4 leading-relaxed text-[#295BFF]">
            Our platform will go live in August 2024. Launch date will be
            communicated to you when you join the waitlist. However, educational
            eye health resources for your personalized care are available
            through our social media channels. See link when you scroll to the
            end of this page.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900">
            <h2 className="font-medium">
              How will I be able to book an online advisory session?
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

          <p className="mt-4 px-4 leading-relaxed text-[#295BFF]">
            Once the platform is live, you can log in to your account, navigate
            to the 'Advisory Sessions' section, select an option of service you
            need then you will be redirected to either an audio, Self help or
            community space
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900">
            <h2 className="font-medium">
              What type of eye health education resources will be available?
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

          <p className="mt-4 px-4 leading-relaxed text-[#295BFF]">
            We will offer a wide range of educational materials, including
            articles, videos, and infographics covering topics like eye care
            tips, common eye conditions, and preventive measures through the
            webapp when it is Live and social media accounts currently
            functional.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900">
            <h2 className="font-medium">
              Is this platform open to individuals only?
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

          <p className="mt-4 px-4 leading-relaxed text-[#295BFF]">
            VisionDR offers services to individuals to improve their
            personalized eye health lifestyle. Also, services are offered to
            organization's to improve delivery of their eye care services.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900">
            <h2 className="font-medium">
              Why should I choose VisionDoctors for my eye care?
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
          <div className="content-wrapper">
            <p className="mt-4 px-4 leading-relaxed text-[#295BFF]">
              At VisionDoctors, we prioritize your vision and well-being. We
              offer exceptional, personalized care from experienced
              professionals, utilize advanced technology for urgent advisory
              sessions, and believe in empowering you with knowledge about your
              eye health. We are committed to improving your quality of life
              through clear vision.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
