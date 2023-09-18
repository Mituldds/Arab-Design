import React from "react";
import ShopNow from "./ShopNow/ShopNow";
import Box from "./Box/Box";
import "./Home.css";
import Trending from "./Trending/Trending";
import WhyChooseUs from "./WhyChooseUS/WhyChooseUs";
import Customers from "./Customers/Customers";
import StayConnected from "./StayConnected/StayConnected";

const Home = () => {
  return (
    <>
      <div className="home">
        <ShopNow />
        <Box />
        <Trending />
        <WhyChooseUs />
        <Customers />
        <StayConnected />
      </div>
    </>
  );
};

export default Home;
