import React from "react";
import "./MobilySaudiCard.css";
import { Button, Col, Dropdown, Row } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { BsCartXFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { TrendingCard } from "../../Trending/TrendingCardContent";

const MobilySaudiCard = () => {
  const navigate = useNavigate();

  const handleCard = () => {
    navigate("/card");
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          //   href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          //   href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          //   href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  return (
    <>
      <div className="Mobily_Saudi_Arabia">
        <div className="Mobily_Saudi_img_Name">
          <img className="Mobily" src="/Images/Mobily.svg" />
          <h1 className="Mobily_Saudi">Mobily-Saudi Arabia</h1>
        </div>

        <div>
          <Dropdown
            className="SortBy_Dropdown"
            menu={{
              items,
            }}
            placement="bottomLeft"
          >
            {/* <div className="SortBy_btn"> */}
            <Button>
              Sort By
              <IoIosArrowDown className="SortBy_Icon" />
            </Button>
            {/* </div> */}
          </Dropdown>
        </div>
      </div>

      <div className="Mobily_Saudi_Row">
        <Row gutter={[40, 50]} justify="center" style={{ margin: 0 }}>
          {TrendingCard.map((data) => (
            <Col key={data.id}>
              <div className="Mobily_card">
                <img
                  className="Mobily_Card_Image"
                  src={data.imageUrl}
                  onClick={handleCard}
                />
                <p className="Mobily_Friendly">{data.title}</p>
                <p className="Mobily_Gaming">{data.Categories}</p>

                <div className="Mobily_Usd_btn">
                  <p className="Mobily_USD">{data.Rate} USD </p>
                  <span>
                    <button type="button" className="Mobily_add_cart">
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

      {/* <Col>
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
          </Col>

          <Col>
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
          </Col>

          <Col>
            <div className="card">
              <img className="Card_Image" src="/Images/Mask group (9).svg" />
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
          </Col>

          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
            <div className="card">
              <img className="Card_Image" src="/Images/Mask group (9).svg" />
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
              <img className="Card_Image" src="/Images/Mask group (1).svg" />
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
            <div className="card">
              <img className="Card_Image" src="/Images/Mask group (9).svg" />
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
              <img className="Card_Image" src="/Images/Mask group (1).svg" />
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
          </Col>

          <Col>
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
          </Col> */}
    </>
  );
};

export default MobilySaudiCard;
