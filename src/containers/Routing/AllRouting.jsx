import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../Auth/Signin";
import UserSelection from "../Auth/UserSelection";
import ForgetPassword from "../Auth/ForgetPassword";
import ChangePassword from "../Auth/ChangePassword";
import Signup from "../Auth/Signup";
import SignupSuccess from "../Auth/SignupSuccess";
import LandingPage from "../LandingPage/LandingPage";
import Layout from "../B2CAPP/Layout";
import Pricing from "../LandingPage/components/Pricing";

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/auth/signin/:type" element={<Signin />} />
      <Route path="/auth/forgot-password/:type" element={<ForgetPassword />} />
      <Route path="/auth/reset-password" element={<ChangePassword />} />
      <Route path="/reg/signup/:type" element={<Signup/>}/>
      <Route path="/reg/signup-success" element={<SignupSuccess/>} />
      <Route path="/app/*" element={<Layout />} />
    </Routes>
  );
};

export default AllRouting;
