import React from "react";
import { Col, Row } from "antd";
import { BsCartXFill } from "react-icons/bs";
import { MyFevoritesContent } from "./MyFavoriteContent";
import "./MyFavorites.css";

const MyFavorites = () => {
  return (
    <div className="My_Fevorites_Comp">
      <div className="My_Fevorites">
        <h3 className="My_Fevorites_Heading">My Favorites</h3>
      </div>

      <div className="My_Favorites_Row">
        <Row gutter={[20, 50]} justify="center" style={{ margin: 0 }}>
          {MyFevoritesContent.map((data) => (
            <Col key={data.id}>
              <div className="My_Favorites_card">
                <img className="My_Favorites_Card_Image" src={data.imageUrl} />
                <p className="My_Favorites_Friendly">{data.title}</p>
                <p className="My_Favorites_Gaming">{data.Categories}</p>

                <div className="My_Favorites_Usd_btn">
                  <p className="My_Favorites_USD">{data.Rate} USD </p>
                  <span>
                    <button type="button" className="My_Favorites_add_cart">
                      <BsCartXFill />
                      &nbsp;&nbsp; Add
                    </button>
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MyFavorites;
