import React from "react";
import "./Navbar1.css";
import { FiUser } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { MdOutlineLanguage } from "react-icons/md";

const Navbar1 = () => {
  return (
    <>
      <div className="navbar_1">
        <div className="navbar1_title">
          <img src="/Images/Agc.svg" />
          <p>ArabGiftCards</p>
        </div>

        <div className="navbar1_icon">
          <button type="button" className="user_button">
            <FiUser />
            &nbsp;&nbsp;&nbsp;&nbsp; Admin
          </button>
          <BsHeart />
          <FaCartPlus />
          <MdOutlineLanguage />
          English
        </div>
      </div>
    </>
  );
};

export default Navbar1;
