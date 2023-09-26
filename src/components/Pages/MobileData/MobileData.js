import { useNavigate } from "react-router-dom";
import React from "react";
import { Col, Row } from "antd";
import "./MobileData.css";
import { MobileDataContent } from "../MobileData/MobileDataContent";

const MobileData = () => {
  const navigate = useNavigate();
  const handleMobilySaudiCard = () => {
    navigate("/mobilySaudiCard");
  };

  return (
    <>
      <div className="MobileData_Comp">
        <img className="MobileData_img" src="/Images/Rectangle 69.svg" />
        <p className="MobileData_img_page">Mobile & Data</p>
      </div>

      {/* <div className="MobileData_page_card">
        <img src="/Images/Mobily.svg" />
        <p>Mobily Saudi Arabia </p>
      </div> */}

      <Row gutter={[25, 50]} justify="center" style={{ margin: 0 }}>
        {MobileDataContent.map((Data) => (
          <Col className="gutter-row">
            <div className="MobileData_page_card">
              <img src={Data.imgUrl} />
              <p
                className="MobileData_page_card_title"
                onClick={handleMobilySaudiCard}
              >
                {Data.MobileDataTitle}{" "}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MobileData;
