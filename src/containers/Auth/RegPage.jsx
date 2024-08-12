import React from "react";
import './RegPage.css';

const RegPage = ({ children }) => {
  return (
    <div class="w-full min-w-full px-4 sm:px-6 lg:px-0 lg:py-10 mx-0">
      <div class="grid md:grid-cols-11 w-full">
        <div className="md:col-span-5 lg:pl-8 mx-auto py-5 lg:py-0">{children}</div>

        <div class="relative md:col-span-6 w-[720px] mx-auto md:px-6 lg:flex justify-center h-fit hidden">
          <img
            class="w-full rounded-md"
            src="/images/Auth_page.png"
            alt="Eye drop image"
          />
          <div class="p-4 bg-gradient-to-t custom-gradient-reg rounded-[10px] backdrop-blur-[60px] justify-center items-center inline-flex absolute bottom-9 mx-auto">
            <div class="w-[470px] text-white text-base leading-normal font-extralight">
              Your information is secure and will never be shared without your
              permission.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegPage;
