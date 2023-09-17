import React from "react";
import Navbar1 from "./Navbar1/Navbar1";
import Navbar2 from "./Navbar2/Navbar2";
import ShopNow from "./ShopNow/ShopNow";
import Box from "./Box/Box";
import "./Home.css";
import Trending from "./Trending/Trending";
import WhyChooseUs from "./WhyChooseUS/WhyChooseUs";
import Customers from "./Customers/Customers";
import StayConnected from "./StayConnected/StayConnected";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar1 />
        <Navbar2 />
        <ShopNow />
        <Box />
        <Trending />
        <WhyChooseUs />
        <Customers />
        <StayConnected />
        <Footer />
      </div>
    </>
  );
};

export default Home;
