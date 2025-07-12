import React, { useState } from 'react';
import PricingNavbar from './PricingNavbar';
import PricingPlans from './PricingPlans';

const Pricing = () => {
  const [tab, setTab] = useState('individual');
  return (
    <div className='relative pt-10'>
      <PricingNavbar />
      <div className='flex flex-col items-center mt-40 gap-10 mb-10 px-6 md:px-0'>
        <div class="text-gray-950 text-5xl font-semibold font-['Plus Jakarta Sans'] leading-[57.60px]">
          Pricing
        </div>
        <div class='max-w-[800px] w-full h-12 relative'>
          <div className='w-full grid grid-cols-2 text-center'>
            <div
              className={` text-[#8c8f98] text-base font-medium font-['Plus Jakarta Sans'] leading-normal cursor-pointer ${
                tab == 'individual' ? 'text-gray-950 font-semibold' : ''
              }`}
            >
              TTTTTTTTTTTTTTTTTTTTTTTTT For
              IndividualssssssssssssssssssssssssssTTTTTTTTTTTTTTTTTTTTTTT
            </div>
            <div
              className={` text-[#8c8f98] text-base font-medium font-['Plus Jakarta Sans'] leading-normal cursor-pointer ${
                tab == 'org' ? 'text-gray-950 font-semibold' : ''
              } `}
            >
              For Enterprise
            </div>
          </div>
          <div class='max-w-[800px] w-full h-2 bg-[#8c8f98]/20 rounded flex-col justify-start items-start gap-2.5 inline-flex relative'>
            <div
              class={`max-w-[400px] lg:w-full w-1/2 h-2 absolute bg-[#1749fc] rounded duration-300 transition-all ${
                tab == 'org' ? 'right-0' : ''
              }`}
            ></div>
          </div>
        </div>
        <PricingPlans />
      </div>
    </div>
  );
};

export default Pricing;
