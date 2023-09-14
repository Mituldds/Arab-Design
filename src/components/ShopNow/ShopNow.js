import React from "react";
import "./ShopNow.css";

const ShopNow = () => {
  return (
    <>
      <div className="ShopNow_Comp">
        <div className="content">
          <p className="ShopNow_content">
            Elevate your shopping <br /> experience with gift cards <br />
            from top stores and brands!
          </p>

          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          </div>

          <button className="ShopNow_btn">Shop Now</button>
        </div>

        {/* <div className="image_top">
        <img src="/Images/Group.svg" />
        </div> */}
      </div>
    </>
  );
};

export default ShopNow;
