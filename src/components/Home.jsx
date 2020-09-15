import React from "react";
import { Button } from "reactstrap";
import "../App.css";

function Home() {
  return (
    <div className="home">
      <h1>Covid Cases Around the World</h1>
      <Button color="danger" size="sm" href="/covid" style={{ margin: "10px" }}>
        United States Covid Cases
      </Button>
      <Button
        color="danger"
        size="sm"
        href="/europe"
        style={{ margin: "10px" }}
      >
        European Covid Cases
      </Button>
    </div>
  );
}

export default Home;
