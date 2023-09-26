import React from "react";
import { cartDetails } from "../Pages/MobilyCardRateDetails/Content";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./OrderHistory.css";

const OrderHistory = () => {
  return (
    <>
      <div className="Order_History">
        <h3 className="Order_History_Heading">Order History</h3>
      </div>

      {cartDetails.map((data) => (
        <div className="Order_History_Details" key={data.id}>
          <div className="Order_History_img_Content">
            <div className="Order_History_Details_img">
              <img
                className="Order_History_Details_ImgCard"
                src={data.ImageLink}
              />
            </div>

            <div className="Order_History_Details_Content">
              <h2>{data.title}</h2>
              <p className="Order_History_Details_Categories">
                {data.categories}
              </p>
              <p>{data.rate} USD</p>
              <p>VAT: {data.vat} USD</p>
            </div>
          </div>

          <div className="Order_History_Quantity">
            <p>Quantity</p>
            <div className="Order_History_Increment_Decrement">
              <button className="Order_History_Inc_Dec_btn">-</button>
              <h3>2</h3>
              <button className="Order_History_Inc_Dec_btn">+</button>
            </div>
          </div>
          <div className="Order_History_Total">
            {/* <p>Total</p> */}
            <h3>Total: {data.total} USD</h3>
          </div>
          <div className="Order_History_icon">
            {/* <RiDeleteBin6Line className="Cart_Rate_Delete_Btn" /> */}
            <button className="Order_History_Buy_Again">Buy Again</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderHistory;
