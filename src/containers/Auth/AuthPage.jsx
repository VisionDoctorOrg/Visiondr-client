import React from "react";

const AuthPage = ({ children }) => {
  return (
    <div class="w-full min-w-full px-4 sm:px-6 lg:px-0 lg:py-10 mx-0">
      <div class="grid lg:grid-cols-11 w-full">
        <div className="lg:col-span-5 lg:w-[400px] w-full mx-auto py-5 lg:py-0">
          {children}
        </div>

        <div class="relative lg:col-span-6 w-[720px] mx-auto lg:px-6 hidden lg:block">
          <img
            class="w-full rounded-lg"
            src="/images/Auth_page.png"
            alt="Eye drop image"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
