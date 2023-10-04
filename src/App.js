import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar1 from "./components/Navbar1/Navbar1";
import Navbar2 from "./components/Navbar2/Navbar2";
import Footer from "./components/Footer/Footer";
import MobileData from "./components/Pages/MobileData/MobileData";
import MobilySaudiCard from "./components/Pages/MobileData/MobilySaudiCard";
import Navbar3 from "./components/Navbar3/Navbar3";
import Card from "./components/Pages/MobileData/Card";
import MobilyCardRateDetails from "./components/Pages/MobilyCardRateDetails/MobilyCardRateDetails";
import PaymentOrder from "./components/Pages/MobileData/PaymentOrder/PaymentOrder";
import ConatctUs from "./components/ContactUs/ConatctUs";
import MyAccount from "./components/MyAccount/MyAccount";
import MyFavorites from "./components/MyAccount/MyFavorites";
import LoginHome from "./components/LoginPage/LoginHome";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Router>
        {/* <LoginHome /> */}

        <Routes>
          <Route path="/login" element={<LoginHome />} />
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/mobileData"
            element={
              <Layout>
                <MobileData />
              </Layout>
            }
          />
          <Route
            path="/mobilySaudiCard"
            element={
              <Layout>
                <MobilySaudiCard />
              </Layout>
            }
          />
          <Route
            path="/card"
            element={
              <Layout>
                <Card />
              </Layout>
            }
          />
          <Route
            path="/MobilyCardRateDetails"
            element={
              <Layout>
                <MobilyCardRateDetails />
              </Layout>
            }
          />
          <Route
            path="/paymentOrder"
            element={
              <Layout>
                <PaymentOrder />
              </Layout>
            }
          />
          <Route
            path="/contactUs"
            element={
              <Layout>
                <ConatctUs />
              </Layout>
            }
          />
          <Route
            path="/myAccount"
            element={
              <Layout>
                <MyAccount />
              </Layout>
            }
          />
          <Route
            path="/myFavorites"
            element={
              <Layout>
                <MyFavorites />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
