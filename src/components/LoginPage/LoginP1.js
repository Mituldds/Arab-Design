import React from "react";
import "./LoginP1.css";
import { useNavigate } from "react-router-dom";

const LoginP1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div>
          <p className="Loginp1_heading">Email or Phone Number</p>
          <input
            className="Loginp1_Input"
            placeholder="enter your email or phone number "
          />
        </div>
        <div className="Loginp1_Password">
          <p className="Loginp1_heading">Password</p>
          <input className="Loginp1_Input" placeholder="enter your password" />
        </div>
        <p className="Login_forget">Forgot Password?</p>

        <div className="Loginp1_btn">
          <button className="Loginp1_Continue">Continue</button>
        </div>
        <div className="Loginp1_btn">
          <button className="Loginp1_Continue_With">Continue with</button>
        </div>
      </div>
    </>
  );
};

export default LoginP1;
