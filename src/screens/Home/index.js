// packages
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// styling
import "./index.css";

/* Start of screen */
const Home = () => {
  return (
    <div className="container-home">
      <div className="container-home-image">
        <h1 className="titleStyle">The Forgotten Giants</h1>
        <div className="container-home-button">
          <Button component={Link} className="buttonStyle" to="/giants">
            See the giants
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
