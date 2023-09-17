import React from "react";
import "./WhyChooseUs.css";
const WhyChooseUs = () => {
  return (
    <>
      <div className="Why_Choose_Us">
        Why
        <br />
        Choose <br />
        Us?
      </div>

      <div className="Secure_Transaction">
        <div>
          <img src="Images/Group 106.svg" />
          <p className="Secure_Wide">Secure Transactions</p>
          <p className="Secure_Wide_Content">
            Guaranteed safe and secure
            <br /> cryptocurrency gift card
            <br /> purchases
          </p>
        </div>

        <div>
          <img src="Images/Group 107.svg" />
          <p className="Secure_Wide">Wide Selection</p>
          <p className="Secure_Wide_Content">
            Choose from a wide selection
            <br /> of gift cards from popular
            <br /> retailers and brands
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
