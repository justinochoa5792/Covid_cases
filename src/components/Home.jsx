import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div>
      <h1>Covid Cases Around the world</h1>
      <Link to="/covid">United States Covid Cases</Link>
    </div>
  );
}

export default Home;
