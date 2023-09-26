import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyAccount.css";
import "./MyFavorites.css";
import { FaEdit } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import MyFavorites from "./MyFavorites";
import OrderHistory from "./OrderHistory";

const MyAccount = () => {
  const [selectedTab, setselectedTab] = useState("Personal_Infermation");
  const navigate = useNavigate();
  // const handleMyFavorites = () => {
  //   navigate("/myFavorites");
  // };
  return (
    <>
      <div className="My_Acc_Fields_Option">
        {selectedTab == "Personal_Infermation" ? (
          <div className="My_Account_Width">
            <div className="My_Account">
              <h3 className="My_Acc_Heading">My Account</h3>
              <div className="My_Acc_Btn_icon">
                <button type="button" className="My_Acc_Edit_btn">
                  <FaEdit className="My_Acc_Edit_icon" />
                  &nbsp;&nbsp; Edit
                </button>
              </div>
            </div>
            <div className="My_Acc_Fields">
              <div className="My_Acc_Fields_Row">
                <div>
                  <p className="My_Acc_P">First Name</p>
                  <input type="text" className="My_Acc_Input" />
                </div>
                <div>
                  <p className="My_Acc_P">Last Name</p>
                  <input type="text" className="My_Acc_Input" />
                </div>
              </div>

              <div className="My_Acc_Fields_Row">
                <div>
                  <p className="My_Acc_P">Email</p>
                  <input type="email" className="My_Acc_Input" />
                </div>
                <div>
                  <p className="My_Acc_P">Mobile Number</p>
                  <input type="text" className="My_Acc_Input" />
                </div>
              </div>

              <div className="My_Acc_Fields_Row">
                <div>
                  <p className="My_Acc_P">Date Of Birth</p>
                  <input className="My_Acc_Input" />
                </div>
                <div>
                  <p className="My_Acc_P">Country</p>
                  <input type="text" className="My_Acc_Input" />
                </div>
              </div>
            </div>
          </div>
        ) : selectedTab == "My_Favorites" ? (
          <div className="My_Fevorites_Comp">
            <MyFavorites />
          </div>
        ) : selectedTab == "Order_History" ? (
          <div className="My_Fevorites_Comp">
            <OrderHistory />
          </div>
        ) : null}

        <div className="My_Acc_Menu">
          <p
            className="My_Acc_Option"
            onClick={() => setselectedTab("Personal_Infermation")}
          >
            <FiUser className="My_Acc_Option_icon" />
            &nbsp;&nbsp; Personal Infermation
          </p>

          <p
            className="My_Acc_Option"
            onClick={() => setselectedTab("My_Favorites")}
          >
            <MdFavoriteBorder className="My_Acc_Option_icon" />
            &nbsp;&nbsp; My Favorites
          </p>

          <p
            className="My_Acc_Option"
            onClick={() => setselectedTab("Order_History")}
          >
            <AiOutlineHistory className="My_Acc_Option_icon" />
            &nbsp;&nbsp; Order History
          </p>

          <p className="My_Acc_Option">
            <PiSignOutBold className="My_Acc_Option_icon" />
            &nbsp;&nbsp; Sign Out
          </p>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
