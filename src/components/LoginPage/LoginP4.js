import React from "react";
import "./LoginP4.css";

const LoginP4 = () => {
  return (
    <>
      <div className="LoginP4_Auth">
        <p className="LoginP4_verification">
          A verification code was sent to your phone number +966***1234
        </p>
        <div className="LoginP4_Auth_Main">
          <div className="LoginP4_Auth_Digit"></div>
          <div className="LoginP4_Auth_Digit"></div>
          <div className="LoginP4_Auth_Digit"></div>
          <div className="LoginP4_Auth_Digit"></div>
          <div className="LoginP4_Auth_Digit"></div>
          <div className="LoginP4_Auth_Digit"></div>
        </div>
        <p className="LoginP4_verification_P">
          The verification code expires in 01:58
        </p>
        <div className="LoginP4_Btn">
          <button className="LoginP4_Verify">Verify</button>
        </div>
      </div>
    </>
  );
};

export default LoginP4;
