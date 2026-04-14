import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./landing_page/Home/Home.jsx";

import Navbar from "./landing_page/Navbar.jsx"

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Home />
      </div>
    </Router>
  );
}

export default App;
