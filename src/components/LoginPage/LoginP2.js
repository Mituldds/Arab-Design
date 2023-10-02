import React from "react";
import "./LoginP2.css";

const LoginP2 = () => {
  return (
    <>
      <div>
        <div>
          <p>Status/residence number</p>
          <input className="Loginp2_Input" />
        </div>
        <div className="Loginp2_btn">
          <button className="Loginp2_GoTo">Go to</button>
        </div>
      </div>
    </>
  );
};

export default LoginP2;
