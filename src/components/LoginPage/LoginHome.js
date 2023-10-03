import React from "react";
import "./LoginHome.css";
import { BsHeart } from "react-icons/bs";
import LoginP1 from "./LoginP1";
import LoginP2 from "./LoginP2";
import LoginP3 from "./LoginP3";
import LoginP4 from "./LoginP4";
import LoginP5 from "./LoginP5";

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

      <div>
        <div>
          <img className="LoginHome_Right_Img" src="Images/Vector (1).svg" />
        </div>

        <div className="LoginHome_Page">
          <div>
            {/* <LoginP1 /> */}
            {/* <LoginP2 /> */}
            <LoginP3 />
            {/* <LoginP4 /> */}
            {/* <LoginP5 /> */}
          </div>
        </div>

        <div>
          <img className="LoginHome_Left_Img" src="Images/Vector (2).svg" />
        </div>
      </div>
    </>
  );
};

export default LoginHome;
