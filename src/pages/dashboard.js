import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="main">
      <Link to="/showdown">Showdown</Link>
      <br />
      <Link to="/wheel">Wheel</Link>
    </div>
  );
};

export default Dashboard;
