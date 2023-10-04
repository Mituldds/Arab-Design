import React from "react";
import Navbar1 from "../Navbar1/Navbar1";
import Navbar2 from "../Navbar2/Navbar2";
import Navbar3 from "../Navbar3/Navbar3";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
