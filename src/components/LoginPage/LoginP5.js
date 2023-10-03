import React from "react";
import "./LoginP5.css";

const LoginP5 = () => {
  return (
    <>
      <div className="LoginP5_Auth">
        <p className="LoginP5_verification">
          A verification code was sent to your phone number +966***1234
        </p>
        <div className="LoginP5_Auth_Main">
          <div className="LoginP5_Auth_Digit"></div>
          <div className="LoginP5_Auth_Digit"></div>
          <div className="LoginP5_Auth_Digit"></div>
          <div className="LoginP5_Auth_Digit"></div>
          <div className="LoginP5_Auth_Digit"></div>
          <div className="LoginP5_Auth_Digit"></div>
        </div>
        <p className="LoginP5_verification_P">
          The verification code expires in 01:58
        </p>
        <div className="LoginP5_Btn">
          <button className="LoginP5_Verify">Verify</button>
        </div>
      </div>
    </>
  );
};

export default LoginP5;
