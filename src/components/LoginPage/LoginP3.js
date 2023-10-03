import React from "react";
import "./LoginP3.css";

const LoginP3 = () => {
  return (
    <>
      <div>
        <div className="LoginP3_fields">
          <div>
            <p className="LoginP3_p">Status/residence number</p>
            <input className="LoginP3_Input" type="text" />
          </div>
          <div>
            <p className="LoginP3_p">Date of Birth</p>

            <input className="LoginP3_Input" type="date" />
          </div>
        </div>
        <div className="LoginP3_fields">
          <div>
            <p className="LoginP3_p">Full Name</p>

            <input className="LoginP3_Input" />
          </div>
          <div>
            <p className="LoginP3_p">Nationality</p>

            <input className="LoginP3_Input" type="text" />
          </div>
        </div>
        <div className="LoginP3_fields">
          <div>
            <p className="LoginP3_p">Email</p>

            <input className="LoginP3_Input" />
          </div>
          <div>
            <p className="LoginP3_p">Phone Number</p>
            <input className="LoginP3_Input" type="text" />
          </div>
        </div>
        <div className="LoginP3_cheakbox">
          <input type="checkbox" />
          <label> I have read and agreed to the terms and conditions</label>
        </div>
        <div className="LoginP3_Btn">
          <button className="LoginP3_Continue">Continue</button>
        </div>
      </div>
    </>
  );
};

export default LoginP3;
