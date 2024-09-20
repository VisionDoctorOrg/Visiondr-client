import React, { useContext } from "react";
import UserInfo from "./UserInfo";
import LogoutButton from "./Logout";
import { DataContext } from "./DataContext";
import { connect } from "react-redux";
import { logout } from "@/actions/auth";
import { useNavigate } from "react-router-dom";

const Header = ({userData, logout}) => {
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/auth/signin/individual");
  };
  return (
    <main className="flex flex-wrap gap-10 justify-between items-end px-4 md:px-0 mt-20">
      <UserInfo
        imageSrc={userData?.image?.url ?? "/icons/profile_pic.png"}
        name="Chibundu Israel"
        age={35}
        plan="Basic"
        dataContext={dataContext}
      />
      <LogoutButton onClick={onLogout}/>
    </main>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  userData: state.auth.user,
});

export default connect(mapStateToProps, {logout})(Header);