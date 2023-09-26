import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./MobilyCardRateDetails.css";
import { cartDetails } from "./Content";
import { useNavigate } from "react-router-dom";

const MobilyCardRateDetails = () => {
  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/paymentOrder");
  };
  return (
    <>
      {cartDetails.map((data) => (
        <div className="Cart_Rate_Details" key={data.id}>
          <div className="Cart_Rate_img_Content">
            <div className="Cart_Rate_Details_img">
              <img className="Cart_Rate_Details_ImgCard" src={data.ImageLink} />
            </div>

            <div className="Cart_Rate_Details_Content">
              <h2>{data.title}</h2>
              <p className="Cart_Rate_Details_Categories">{data.categories}</p>
              <p>{data.rate} USD</p>
              <p>VAT: {data.vat} USD</p>
            </div>
          </div>

          <div className="Cart_Rate_Quantity">
            <p>Quantity</p>
            <div className="Increment_Decrement">
              <button className="Inc_Dec_btn">-</button>
              <h3>2</h3>
              <button className="Inc_Dec_btn">+</button>
            </div>
          </div>
          <div className="Cart_Rate_Total">
            <p>Total</p>
            <h3>{data.total} USD</h3>
          </div>
          <div className="Cart_Rate_icon">
            <RiDeleteBin6Line className="Cart_Rate_Delete_Btn" />
          </div>
        </div>
      ))}

      <div>
        <h3 className="Cart_Rate_Discount_Coupon"> Discount Coupon</h3>
      </div>

      <div className="Cart_Rate_Discount">
        <input className="Cart_Rate_Discount_Input" />
        <button className="Cart_Rate_Discount_Btn">Apply</button>
      </div>

      <div className="Cart_Rate_Details_Total">
        <div>
          <p>Price</p>
          <p>Vat</p>
          <p className="Cart_Rate_Total_fild">Total</p>
        </div>
        <div>
          <p>480 USD</p>
          <p>0.8 USD</p>
          <p className="Cart_Rate_Total_fild">480.8 USD</p>
        </div>
      </div>

      <div className="Shopping_Checkout_btn">
        <button className="Cart_Rate_Discount_Shopping_Btn">
          {" "}
          Continue Shopping{" "}
        </button>

        <button
          className="Cart_Rate_Discount_Checkout_Btn"
          onClick={handleCheckOut}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default MobilyCardRateDetails;
