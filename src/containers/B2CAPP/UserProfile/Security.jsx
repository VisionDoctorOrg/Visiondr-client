import React from "react";

const Security = () => {
  return (
    <section className="flex flex-col p-6 rounded-lg border border-violet-200 border-solid w-full text-gray-950 max-md:px-5">
      <header className="flex flex-col w-full max-md:max-w-full">
        <h2 className="text-base font-semibold tracking-tight max-md:max-w-full">
          Security
        </h2>
      </header>
      <div className="flex flex-col mt-5 w-full text-base font-medium max-w-[812px] max-md:max-w-full">
        <div class=" md:h-[202px] p-6 border border-[#d2dbfe] flex-col justify-start items-start gap-6 inline-flex">
          <div class="w-full md:h-[45px] flex-col justify-start items-start gap-1 flex">
            <div class="text-center text-[#404453] text-sm font-medium font-['Plus Jakarta Sans'] leading-[16.80px]">
              Password
            </div>
            <div class="self-stretch justify-between items-center inline-flex gap-2">
              <div class=" text-[#8c8f98] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                Set a unique password to protect your account.
              </div>
              <div class=" text-[#1749fc] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                Change Password
              </div>
            </div>
          </div>
          <div class="w-full h-[85px] flex-col justify-start items-start gap-2 flex">
            <div class="text-center text-[#404453] text-sm font-medium font-['Plus Jakarta Sans'] leading-[16.80px]">
              Verification
            </div>
            <div class="self-stretch h-[60px] flex-col justify-start items-start gap-3 flex">
              <div class="self-stretch justify-between items-center inline-flex">
                <div class="text-center text-[#8c8f98] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                  Email address
                </div>
                <div class="justify-start items-center gap-2 flex">
                  <div class="text-center text-[#8c8f98] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                    Verified
                  </div>
                  <div class="w-6 h-6 justify-center items-center flex">
                    <div class="w-6 h-6 relative"></div>
                  </div>
                </div>
              </div>
              <div class="self-stretch justify-between items-center inline-flex">
                <div class="text-center text-[#8c8f98] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                  Phone number
                </div>
                <div class="text-center text-[#1749fc] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                  Action Required
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="flex flex-col w-full mt-5 max-md:max-w-full">
        <h2 className="text-base font-semibold tracking-tight max-md:max-w-full">
          Disclosure
        </h2>
      </header>
      <div className="flex flex-col mt-5 w-full text-base font-medium max-w-[812px] max-md:max-w-full">
        <div class=" h-[120px] p-6 border border-[#d2dbfe] flex-col justify-start items-start gap-6 inline-flex">
          <div class="self-stretch justify-between items-center inline-flex">
            <div class="text-center text-[#404453] text-sm font-medium font-['Plus Jakarta Sans'] leading-[16.80px]">
              Privacy Policy
            </div>
            <div class="text-center text-[#1749fc] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
              View
            </div>
          </div>
          <div class="self-stretch justify-between items-center inline-flex">
            <div class="text-center text-[#404453] text-sm font-medium font-['Plus Jakarta Sans'] leading-[16.80px]">
              Term of service
            </div>
            <div class="text-center text-[#1749fc] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
              View
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
