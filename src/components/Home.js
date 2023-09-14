import React from "react";
import Navbar1 from "./Navbar1/Navbar1";
import Navbar2 from "./Navbar2/Navbar2";
import ShopNow from "./ShopNow/ShopNow";
import Box from "./Box/Box";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar1 />
        <Navbar2 />
        <ShopNow />
        <Box />
      </div>
    </>
  );
};

export default Home;
