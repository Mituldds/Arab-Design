import React from "react";
import "./Trending.css";
import { BsCartXFill } from "react-icons/bs";
import { TrendingCard } from "./TrendingCardContent";
import { Col, Row } from "antd";
const Trending = () => {
  return (
    <>
      <p className="trending_giftCards">Trending Gift Cards</p>

      <Row gutter={[25, 20]} justify="center" style={{ margin: 0 }}>
        {TrendingCard.map((data) => (
          <Col className="gutter-row">
            <div className="Card_row1">
              <div className="card" key={data.id}>
                <img className="Card_Image" src={data.imageUrl} />
                <p className="Friendly">{data.title}</p>
                <p className="Gaming">{data.Categories}</p>

                <div className="Usd_btn">
                  <p className="USD">{data.Rate} USD </p>
                  <span>
                    <button type="button" className="add_cart">
                      <BsCartXFill />
                      &nbsp;&nbsp; Add
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* 
      <div className="Card_row2">
        <div className="card">
          <img className="Card_Image" src="/Images/Mask group (5).svg" />
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
        <div className="card">
          <img className="Card_Image" src="/Images/Mask group (6).svg" />
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
        <div className="card">
          <img className="Card_Image" src="/Images/Mask group (7).svg" />
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
        <div className="card">
          <img className="Card_Image" src="/Images/Mask group (8).svg" />
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
      </div>

      <div className="Card_row3">
        <div className="card">
          <img className="Card_Image" src="/Images/Mask group (3).svg" />
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
        <div className="card">
          <img className="Card_Image" src="/Images/Mask group (2).svg" />
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
        <div className="card">
          <img className="Card_Image" src="/Images/Mask group (8).svg" />
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
        <div className="card">
          <img className="Card_Image" src="/Images/Mask group (6).svg" />
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
      </div> */}
      <button className="View_all">View All</button>
    </>
  );
};

export default Trending;
