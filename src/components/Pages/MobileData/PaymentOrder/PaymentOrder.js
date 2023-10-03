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
            <div className="dropbtn">Debit/Credit Card</div>

            <div class="dropdown-content">
              <p>Card Number</p>
              <input className="Payment_Method_Input" type="text" />
              <p>Name on Card</p>
              <input className="Payment_Method_Input" />
              <div className="Payment_Method_Expiration">
                <div>
                  <p>Expiration Date</p>
                  <input
                    className="Payment_Method_Expiration_Input"
                    type="text"
                  />
                </div>
                <div>
                  <p>Security Code</p>
                  <input className="Payment_Method_Expiration_Input" />
                </div>
              </div>
            </div>
          </div>

          <br />
          {/* <div className="Payment_Method">
            <div className="dropbtn">Cryptocurrency</div>
            <div class="dropdown-content"></div>
          </div> */}

          <div className="Payment_Method">
            <p>Cryptocurrency</p>
          </div>
          <div className="Payment_Method_PayNow_Btn">
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
