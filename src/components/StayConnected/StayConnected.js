import React from "react";
import "./StayConnected.css";
import { AiOutlineTwitter } from "react-icons/ai";
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

          <div className="Input_Product">
            <input
              className="Signup_input"
              placeholder="Enter your email for exclusive offers"
            ></input>
            <button className="Signup_input_btn">Sign Up</button>
          </div>

          <div className="Stay_icon_Group">
            <BiLogoFacebook className="Stay_Icons" />
            &nbsp;&nbsp;
            <AiOutlineTwitter className="Stay_Icons_Twitter" />
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
