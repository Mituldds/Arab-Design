import React from "react";
import "./Customers.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Customers = () => {
  return (
    <div>
      <p className="Customer">What Our Customers Are Saying</p>

      <div className="Ahemad_Customers">
        <div className="Customer_Card">
          <div className="Img_Name">
            <img
              className="Customer_Card_img"
              src="/Images/Mask group (9).svg"
              alt=""
            />
            <div>
              <p className="Ahmed_Khaled">Ahmed Khaled</p>
              <img src="/Images/Group 68.svg" />
            </div>
          </div>
          <br />
          <p>
            Great selection and simple transaction process. Seamless process.
            Will use again!
          </p>
        </div>

        <div className="Scroll_button">
          <AiOutlineArrowRight className="Scroll_button_right" />
          <br />
          <AiOutlineArrowLeft className="Scroll_button_left" />
        </div>

        <div>
          <img className="Circle_Img" src="/Images/Group 2068.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Customers;
