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

function App() {
  return (
    <>
      <Router>
        <Navbar1 />
        <Navbar2 />
        <Navbar3 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobileData" element={<MobileData />} />
          <Route path="/mobilySaudiCard" element={<MobilySaudiCard />} />
          <Route path="/card" element={<Card />} />
          <Route
            path="/MobilyCardRateDetails"
            element={<MobilyCardRateDetails />}
          />
          <Route path="/paymentOrder" element={<PaymentOrder />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
