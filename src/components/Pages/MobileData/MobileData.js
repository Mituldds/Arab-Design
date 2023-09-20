import { useNavigate } from "react-router-dom";
import React from "react";
import { Col, Row } from "antd";
import "./MobileData.css";

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
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Mobily.svg" />
            <p
              className="MobileData_page_card_title"
              onClick={handleMobilySaudiCard}
            >
              Mobily Saudi Arabia{" "}
            </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Stc_Bahrain_logo.svg" />
            <p className="MobileData_page_card_title">STC Bahrin </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/downloadEtislat.svg" />
            <p className="MobileData_page_card_title">Etisalat UAE </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/7030 1.svg" />
            <p className="MobileData_page_card_title">Zain Saudi Arabia </p>
          </div>
        </Col>

        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Mobily.svg" />
            <p className="MobileData_page_card_title">Mobily Saudi Arabia </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Stc_Bahrain_logo.svg" />
            <p
              className="MobileData_page_card_title"
              MobileData_page_card_title
            >
              STC Bahrin{" "}
            </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/downloadEtislat.svg" />
            <p
              className="MobileData_page_card_title"
              MobileData_page_card_title
            >
              Etisalat UAE{" "}
            </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/7030 1.svg" />
            <p
              className="MobileData_page_card_title"
              MobileData_page_card_title
            >
              Zain Saudi Arabia{" "}
            </p>
          </div>
        </Col>

        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Mobily.svg" />
            <p
              className="MobileData_page_card_title"
              MobileData_page_card_title
            >
              Mobily Saudi Arabia{" "}
            </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Stc_Bahrain_logo.svg" />
            <p
              className="MobileData_page_card_title"
              MobileData_page_card_title
            >
              STC Bahrin{" "}
            </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/downloadEtislat.svg" />
            <p
              className="MobileData_page_card_title"
              MobileData_page_card_title
            >
              Etisalat UAE{" "}
            </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/7030 1.svg" />
            <p
              className="MobileData_page_card_title"
              MobileData_page_card_title
            >
              Zain Saudi Arabia{" "}
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MobileData;
