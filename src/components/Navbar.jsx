import React, { Component } from "react";
import { Button } from "reactstrap";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Button outline color="secondary" href="/">
          Back
        </Button>
      </div>
    );
  }
}

export default Navbar;
