import React from "react";
import "./LoginHome.css";
import { BsHeart } from "react-icons/bs";
import LoginP1 from "./LoginP1";

const LoginHome = () => {
  return (
    <>
      <div className="Login">
        <div className="Login_title">
          <img src="/Images/Agc.svg" />
          <p>ArabGiftCards</p>
        </div>
        <div className="Login_icon">
          <BsHeart />
        </div>
      </div>
      <div className="LoginHome_Page">
        <div>
          <LoginP1 />
        </div>
      </div>
    </>
  );
};

export default LoginHome;
