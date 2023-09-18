import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar1 from "./components/Navbar1/Navbar1";
import Navbar2 from "./components/Navbar2/Navbar2";
import Footer from "./components/Footer/Footer";
import MobileData from "./components/Pages/MobileData";
function App() {
  return (
    <>
      <Router>
        <Navbar1 />
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobileData" element={<MobileData />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
