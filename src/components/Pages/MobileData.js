import React from "react";
import "./MobileData.css";
import { Col, Row } from "antd";

const MobileData = () => {
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

      <Row gutter={[20, 20]} justify="center" style={{ margin: 0 }}>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Mobily.svg" />
            <p>Mobily Saudi Arabia </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Stc_Bahrain_logo.svg" />
            <p>STC Bahrin </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/downloadEtislat.svg" />
            <p>Etisalat UAE </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/7030 1.svg" />
            <p>Zain Saudi Arabia </p>
          </div>
        </Col>

        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Mobily.svg" />
            <p>Mobily Saudi Arabia </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Stc_Bahrain_logo.svg" />
            <p>STC Bahrin </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/downloadEtislat.svg" />
            <p>Etisalat UAE </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/7030 1.svg" />
            <p>Zain Saudi Arabia </p>
          </div>
        </Col>

        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Mobily.svg" />
            <p>Mobily Saudi Arabia </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/Stc_Bahrain_logo.svg" />
            <p>STC Bahrin </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/downloadEtislat.svg" />
            <p>Etisalat UAE </p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="MobileData_page_card">
            <img src="/Images/7030 1.svg" />
            <p>Zain Saudi Arabia </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MobileData;
