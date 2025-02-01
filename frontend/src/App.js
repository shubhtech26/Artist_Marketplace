// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; // Import the About page component
import ShoppingPage from "./pages/ShoppingPage";
const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ShoppingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
