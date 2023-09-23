import React from "react";
import "./ContactUs.css";

const ConatctUs = () => {
  return (
    <>
      <div className="Contact_Us"></div>
      <div>
        <h2> Conatct Us</h2>
      </div>

      <div className="Contact_Us_Content">
        <label className="Contact_Us_Lable">Full Name</label>
        <br />
        <input className="Contact_Us_input" />
        <br />
        <label className="Contact_Us_Lable">Email</label>
        <br />
        <input className="Contact_Us_input" />
        <br />
        <lable className="Contact_Us_Lable">Phone Number</lable>
        <br />
        <input className="Contact_Us_input" />
        <br />
        <lable>Subject</lable>
        <br />
        <div className="Contact_Us_Subject">
          <p className="Contact_Us_SubName">Suggestion</p>
          <p className="Contact_Us_SubName">Quesiton</p>
          <p className="Contact_Us_SubName">Complaint</p>
          <p className="Contact_Us_SubName">Out of Stock</p>
          <p className="Contact_Us_SubName">Other</p>
        </div>
        <br />
        <label className="Contact_Us_Msg">Message</label> <br />
        <textarea className="Contact_Us_Textarea"></textarea>
        <br />
        <div className="Conatct_Us_Send_Btn">
          <button className="Conatct_Us_Send">Send</button>
        </div>
        <div className="Contact_Us_Img1">
          {/* <img src="/Images/Vector.svg" /> */}
        </div>
      </div>
    </>
  );
};

export default ConatctUs;
