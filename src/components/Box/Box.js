import React from "react";
import "./Box.css";
import { useNavigate } from "react-router-dom";

const Box = () => {
  const navigate = useNavigate();

  const handleMobileData = () => {
    navigate("/mobileData");
  };

  return (
    <>
      <div className="box_content">
        <p className="categoties">Categories</p>

        <div className="card_group">
          <div className="card_content1">
            <div className="card_size">
              <img src="./Images/Big-Data.svg" className="card_image"></img>
              <p className="card_title" onClick={handleMobileData}>
                Mobile & Data
              </p>
            </div>

            <div className="card_size">
              <img
                src="./Images/Screenshot_108.svg"
                className="card_image"
              ></img>
              <p className="card_title">Subscriptions</p>
            </div>

            <div className="card_size">
              <img
                src="./Images/Screenshot_109.svg"
                className="card_image"
              ></img>
              <p className="card_title">Shopping</p>
            </div>
          </div>

          <div className="card_content1">
            <div className="card_size">
              <img src="./Images/Big-Data.svg" className="card_image"></img>
              <p className="card_title">Google Play</p>
            </div>
            <div className="card_size">
              <img
                src="./Images/Screenshot_111.svg"
                className="card_image"
              ></img>
              <p className="card_title">Playstation</p>
            </div>
            <div className="card_size">
              <img
                src="./Images/Screenshot_110.svg"
                className="card_image"
              ></img>
              <p className="card_title">Gaming</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
