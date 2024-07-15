import React from "react";
import "./Sponsors.css";
const Sponsors = () => {
  return (
    <div className="py-16 w-[80%] md:w-full mx-auto" id="partners">
      <section className="md:mx-32">
        <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-1 text-slate-900">
          <svg
            className="h-5 w-5 text-primary"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="20" className="fill-current" />
          </svg>

          <p className="whitespace-nowrap text-[0.5rem]">Meet our partners</p>
        </span>
        <h1 className="font-medium md:text-3xl text-xl">We have amazing sponsors</h1>
        <p className="font-normal md:w-1/2 my-3">
          Over time VisionDR has received technical, specialized and innovative
          support and partnerships from top organizations in Nigeria, Rwanda and
          Mauritus.
        </p>
      </section>
      <section className="md:mx-32 flex md:justify-between justify-center gap-4 md:mt-16 mt-4 flex-wrap md:flex-nowrap">
        <div className="p-5 custom-shadow transition-all ease-in-out duration-500 px-6">
          <div className="border-l border-l-black px-3 w-[250px]">
            <p className="font-semibold text-gray-400 md:text-lg">01</p>
            <p className="md:text-3xl text-xl font-medium">
              United Nations Development Programme (UNDP)
            </p>
            <p className="text-[0.7rem]">
              Supports sustainable development goals and provides strategic
              guidance. For VisionDR, UNDP offers strategic support to improve
              visual outcomes
            </p>
          </div>
        </div>
        <div className="p-5 custom-shadow transition-all ease-in-out duration-500 px-6 flex items-center">
          <div className="border-l border-l-black px-3 w-[250px] ">
            <p className="font-semibold text-gray-400 md:text-lg">02</p>
            <p className="md:text-3xl text-xl font-medium">MTN Foundation</p>
            <p className="text-[0.7rem] ">
              MTN Foundation has offered support to VisionDR to improve eye
              health in our society. Providing support in visibility and digital
              enhancement
            </p>
          </div>
        </div>
        <div className="p-5 custom-shadow transition-all ease-in-out duration-500 px-6 flex items-center">
          <div className="border-l border-l-black px-3 w-[250px]">
            <p className="font-semibold text-gray-400 md:text-lg">03</p>
            <p className="md:text-3xl text-xl font-medium">Sands Technologies </p>
            <p className="text-[0.7rem]">
              VisionDR has gained technical support and training for our digital
              platforms to offer our best to our users. From mid 2023, Sands
              have provided support to improve our systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
