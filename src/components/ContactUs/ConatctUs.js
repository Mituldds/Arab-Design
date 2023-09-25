import React from "react";
import "./ContactUs.css";

const ConatctUs = () => {
  return (
    <>
      <div className="Contact_Us"></div>

      <div className="Contact_Us_Heading">
        <h2> Conatct Us</h2>
      </div>

      <div className="Contact_Us_Form">
        <div className="Contact_Us_Content">
          <p className="Contact_Us_Lable">Full Name</p>
          <input className="Contact_Us_input" />
          <p className="Contact_Us_Lable">Email</p>
          <input className="Contact_Us_input" />
          <p className="Contact_Us_Lable">Phone Number</p>
          <input className="Contact_Us_input" />
          <p className="Contact_Us_Lable">Subject</p>
          <div className="Contact_Us_Subject">
            <p className="Contact_Us_SubName">Suggestion</p>
            <p className="Contact_Us_SubName">Quesiton</p>
            <p className="Contact_Us_SubName">Complaint</p>
            <p className="Contact_Us_SubName">Out of Stock</p>
            <p className="Contact_Us_SubName">Other</p>
          </div>
          <p className="Contact_Us_Msg">Message</p> <br />
          <textarea className="Contact_Us_Textarea"></textarea>
          <div className="Conatct_Us_Send_Btn">
            <button className="Conatct_Us_Send">Send</button>
          </div>
        </div>
        <div className="Contact_Us_Img12">
          <div className="Contact_Us_Img1">
            <img className="Contact_Us_Img2" src="/Images/SentMessageImg.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConatctUs;
