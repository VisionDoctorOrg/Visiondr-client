import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function PlanCard({ title, price, buttonText, features, className }) {
  return (
    <div
      class={` ${className} md:h-[454px] h-fit px-6 py-5 bg-white rounded-lg border border-[#d2dbfe] flex-col justify-start items-center gap-10 inline-flex `}
    >
      <div class='flex-col justify-start items-center gap-10 flex px-2'>
        <div class='text-[#404453] text-[22px] font-medium  leading-relaxed'>
          {title}
        </div>
        <div class='text-center'>
          <span className='text-gray-950 text-4xl font-normal  leading-[43.20px]'>
            ₦
          </span>
          <span className='text-gray-950 text-4xl font-semibold  leading-[43.20px]'>
            {' '}
            {price}
          </span>
          <span className='text-[#8c8f98] text-[22px] font-medium  leading-relaxed'>
            /monthly
          </span>
        </div>
        <button class='xl:w-[300px] w-full h-[60px] p-3 rounded-lg border-2 border-[#1749fc] text-[#1749fc] justify-center items-center gap-2.5 inline-flex hover:bg-primary hover:text-white hover:border-none transition-all duration-500'>
          <div class='text-center text-[22px] font-medium  leading-relaxed'>
            {buttonText}
          </div>
          <div class='w-6 h-6 justify-center items-center flex'>
            <MdArrowOutward className='w-6 h-6 relative' />
          </div>
        </button>
        <ul class='xl:w-[300px] w-full text-gray-950 text-base font-medium leading-normal list-disc pl-6'>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PlanCard;
