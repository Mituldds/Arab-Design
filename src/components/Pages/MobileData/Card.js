import React from "react";
import { Col, Row } from "antd";
import { MdAddShoppingCart } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartXFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = () => {
  const navigate = useNavigate();

  const handleBuyCart = () => {
    navigate("/MobilyCardRateDetails");
  };

  return (
    <>
      <div className="Card">
        <img src="/Images/Mask group (2).svg" />
        <div className="Card_tag_Content">
          <div className="Card_Like_Btn">
            <AiOutlineHeart className="Card_Like" />
          </div>

          <div className="Card_Content">
            <h3 className="Card_Content_Stc">STC quicknet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          <div className="Card_Discount_btn">
            <h2 className="Card_Discount_Rate">120 USD</h2>

            <p className="Card_Pay">
              Pay with cryptocurrency and <b>save 10%</b>
            </p>

            <button type="button" className="Add_To_Cart_button">
              <MdAddShoppingCart />
              &nbsp;&nbsp;&nbsp;&nbsp; Add to Cart
            </button>
            <button
              type="button"
              className="Buy_Now_button"
              onClick={handleBuyCart}
            >
              <FaShoppingCart />
              &nbsp;&nbsp;&nbsp;&nbsp; Buy Now
            </button>
          </div>
        </div>

        <div>
          <div className="You_May_Also_Like">
            <h2 className="You_May_Also_Like_Heading">You May Also Like</h2>

            <Row gutter={[40, 50]} justify="center" style={{ margin: 0 }}>
              <Col>
                <div className="Mobily_Saudi_card">
                  <img
                    className="Mobily_Saudi_Card_Image"
                    src="/Images/Mask group (7).svg"
                  />
                  <p className="Mobily_Saudi_Friendly">Friendly mobile</p>
                  <p className="Mobily_Saudi_Gaming">Gaming</p>

                  <div className="Mobily_Saudi_Usd_btn">
                    <p className="Mobily_Saudi_USD">120 USD </p>
                    <span>
                      <button type="button" className="Mobily_Saudi_add_cart">
                        <BsCartXFill />
                        &nbsp;&nbsp; Add
                      </button>
                    </span>
                  </div>
                </div>
              </Col>

              <Col>
                <div className="card">
                  <img
                    className="Card_Image"
                    src="/Images/Mask group (1).svg"
                  />
                  <p className="Friendly">Friendly mobile</p>
                  <p className="Gaming">Gaming</p>

                  <div className="Usd_btn">
                    <p className="USD">120 USD </p>
                    <span>
                      <button type="button" className="add_cart">
                        <BsCartXFill />
                        &nbsp;&nbsp; Add
                      </button>
                    </span>
                  </div>
                </div>
              </Col>

              <Col>
                <div className="card">
                  <img
                    className="Card_Image"
                    src="/Images/Mask group (3).svg"
                  />
                  <p className="Friendly">Friendly mobile</p>
                  <p className="Gaming">Gaming</p>

                  <div className="Usd_btn">
                    <p className="USD">120 USD </p>
                    <span>
                      <button type="button" className="add_cart">
                        <BsCartXFill />
                        &nbsp;&nbsp; Add
                      </button>
                    </span>
                  </div>
                </div>
              </Col>

              <Col>
                <div className="card">
                  <img
                    className="Card_Image"
                    src="/Images/Mask group (8).svg"
                  />
                  <p className="Friendly">Friendly mobile</p>
                  <p className="Gaming">Gaming</p>

                  <div className="Usd_btn">
                    <p className="USD">120 USD </p>
                    <span>
                      <button type="button" className="add_cart">
                        <BsCartXFill />
                        &nbsp;&nbsp; Add
                      </button>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
