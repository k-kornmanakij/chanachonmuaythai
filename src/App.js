import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./Components/navbar/NavBar";
import Footer from "./Components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Membership from "./pages/Membership";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import CancellationPolicy from "./pages/CancellationPolicy";
import "./styles.css";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cancellationpolicy" element={<CancellationPolicy />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
