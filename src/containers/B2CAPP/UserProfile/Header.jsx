import React from "react";
import UserInfo from "./UserInfo";
import LogoutButton from "./Logout";

const Header = () => {
  return (
    <main className="flex flex-wrap gap-10 justify-between items-end px-4 md:px-0 mt-20">
      <UserInfo
        imageSrc="/images/profile_img.png"
        name="John Doe"
        age={35}
        plan="Basic"
      />
      <LogoutButton />
    </main>
  );
};

export default Header;
