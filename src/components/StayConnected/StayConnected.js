import React from "react";
import "./StayConnected.css";
import { FiFacebook } from "react-icons/fi";
import { BiLogoFacebook } from "react-icons/bi";

import { FaInstagram, FaTwitter } from "react-icons/fa";

const StayConnected = () => {
  return (
    <>
      <div className="Stay_Connected">
        <div>
          <div>
            <p className="Stay_Connected_tag">Stay Connected</p>
          </div>

          {/* <div className="Input_Product"> */}
          <input
            type="button"
            className="Signup_input"
            placeholder="Enter your email for exclusive offers"
          ></input>

          {/* </div> */}

          <div className="Stay_icon_Group">
            <BiLogoFacebook className="Stay_Icons" />
            {/* <FiFacebook className="Stay_Icons" /> */}
            &nbsp;&nbsp;
            <FaTwitter className="Stay_Icons_Twitter" />
            <FaInstagram className="Stay_Icons_Instagram" />
          </div>
        </div>

        <div>
          <p className="Over_Products">Over 10,000 products</p>
        </div>
      </div>
    </>
  );
};

export default StayConnected;
