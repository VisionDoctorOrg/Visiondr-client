import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../Auth/Signin";
import UserSelection from "../Auth/UserSelection";
import ForgetPassword from "../Auth/ForgetPassword";
import ChangePassword from "../Auth/ChangePassword";
import Signup from "../Auth/Signup";
import SignupSuccess from "../Auth/SignupSuccess";

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/auth/signin/:type" element={<Signin />} />
      <Route path="/auth/forgot-password/:type" element={<ForgetPassword />} />
      <Route path="/auth/reset-password" element={<ChangePassword />} />
      <Route path="/auth" element={<UserSelection type="auth" />} />
      <Route path="/reg/signup/:type" element={<Signup/>}/>
      <Route path="/reg" element={<UserSelection type="reg" />} />
      <Route path="/reg/signup-success" element={<SignupSuccess/>} />
    </Routes>
  );
};

export default AllRouting;
