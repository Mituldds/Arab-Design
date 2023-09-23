import React from "react";
import "./PaymentOrder.css";
import { cartDetails } from "../../MobilyCardRateDetails/Content";
import { RiDeleteBin6Line } from "react-icons/ri";

const PaymentOrder = () => {
  return (
    <>
      <div className="Payment_Order">
        <div className="Payment_Method_Div">
          <div>
            <h3>Payment Method</h3>
          </div>
          <div className="Payment_Method">
            <p>Debit/Credit Card</p>
          </div>
          <br />
          <div className="Payment_Method">
            <p>Cryptocurrency</p>
          </div>
          <div>
            <button className="Payment_Method_PayNow">Pay Now</button>
          </div>
        </div>

        <div className="Payment_Order_Summary">
          <div>
            <h3>Payment Method</h3>
          </div>

          {cartDetails.map((data) => (
            <div className="Payment_Order_Card" key={data.id}>
              <div className="Payment_Order_Card_img">
                <img
                  className="Payment_Order_Card_ImgCard"
                  src={data.ImageLink}
                />
              </div>

              <div className="Payment_Order_Card_Content">
                <p className="Payment_Order_Card_Title">{data.title}</p>
                <h4 className="Payment_Order_Card_Total">{data.total} USD</h4>

                <div className="Increment_Decrement">
                  <button className="Inc_Dec_btn">-</button>
                  <h3>2</h3>
                  <button className="Inc_Dec_btn">+</button>
                </div>
              </div>

              <div className="Payment_order_Card_icon"></div>
              <RiDeleteBin6Line className="Payment_order_Card_Delete_Btn" />
              <hr />
              {/* <div>
                <p>Total</p>
                <p>480.8 USD</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PaymentOrder;
