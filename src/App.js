import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Showdown from "./pages/showdown/showdown";
import Wheel from "./pages/wheel/wheel";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/showdown" element={<Showdown />} />
        <Route path="/wheel" element={<Wheel />} />
      </Routes>
    </Router>
  );
}

export default App;
