import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"
import NavTab from "./NavTab";
import Footer from "./Footer";

function App() {
  return (
    <Router>

      <NavTab />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
