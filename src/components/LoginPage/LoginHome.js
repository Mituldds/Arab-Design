import React, { useState } from "react";
import "./LoginHome.css";
import { BsHeart } from "react-icons/bs";
import LoginP1 from "./LoginP1";
import LoginP2 from "./LoginP2";
import LoginP3 from "./LoginP3";
import LoginP4 from "./LoginP4";
import LoginP5 from "./LoginP5";

const LoginHome = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
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
            {step === 1 && <LoginP1 />}
            {step === 2 && <LoginP2 />}
            {step === 3 && <LoginP3 />}
            {step === 4 && <LoginP4 />}
            {step === 5 && <LoginP5 />}
          </div>
        </div>
        <div>
          <img className="LoginHome_Left_Img" src="Images/Vector (2).svg" />
        </div>
      </div>
      <div className="Previous_Close">
        {step > 1 && (
          <button className="navigation_buttons" onClick={previousStep}>
            Previous
          </button>
        )}
        {step < 5 && (
          <button className="navigation_buttons" onClick={nextStep}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default LoginHome;
