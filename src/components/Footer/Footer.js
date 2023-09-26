import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const navigate = useNavigate();
  const handleContactUs = () => {
    navigate("/contactUs");
  };

  return (
    <>
      <div className="Footer">
        <div className="Payment_to_Policy">
          <div className="Payment_Methods">
            <h4>Payment Methods</h4>
            <div className="Payment_method_Img">
              <div className="Pay_Visa">
                <img src="/Images/Group 2057.svg" />
                <br />
                <img src="/Images/Group 2055.svg" />
                <br />

                <img src="/Images/Group 2053.svg" />
              </div>
              <div className="Stc_pay">
                <img src="/Images/Group 2056.svg" />
                <br />
                <img src="/Images/Group 2054.svg" />
                <br />
                <img src="/Images/Group 2090.svg" />
              </div>
            </div>
          </div>
          <div className="My_Account_footer">
            <h4>My Account</h4>
            <p>Log In</p>
            <p>Sign Up</p>
          </div>

          <div className="">
            <h4>Information</h4>
            <p>About Us</p>
            <p onClick={handleContactUs}>Contact Us</p>
          </div>

          <div>
            <h4>Policies</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Payment Policy</p>
            <p>Cookie Policy</p>
          </div>

          <div className="Footer_Icon">
            <p className="Footer_Icon_Location">
              <HiOutlineLocationMarker fontSize={28} />
              <span>
                Lorem ipsum dolor sit amit <br />
                conectueteur
              </span>
              <br />
            </p>

            <p className="Footer_Icon_Call">
              <TbPhoneCall fontSize={28} />
              <span>0120 8456 7898</span>
            </p>
            <p className="Footer_Icon_Mail">
              <FiMail fontSize={28} />
              <span>support@web.com</span>
            </p>
          </div>
        </div>

        <div className="Footer_Input">
          <input
            className="Footer_Signup_input"
            placeholder="Enter your email for exclusive offers"
          ></input>
          <button className="Footer_Signup_input_btn">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
