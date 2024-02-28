import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";

import Destinations from "./routes/Destinations";
import HolidayTypes from "./routes/HolidayTypes";
import ContactUs from "./routes/ContactUs";

import Footer from "./components/Footer";

import AboutUs from "./routes/AboutUs";
import Last from "./routes/Last";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/holiday-types" element={<HolidayTypes />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
      <Last />
    </div>
  );
}

export default App;
