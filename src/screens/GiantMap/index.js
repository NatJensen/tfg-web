// packages
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// context
import { GiantContext } from "../../context/GiantContext";

// components
import GoogleMap from "../../components/Map";

// styling
import "./index.css";

/* Start of screen */
const GiantMap = (props) => {
  const { firstname } = props.match.params;

  const { giants } = useContext(GiantContext);
  const giant = giants.find((giant) => giant.firstname === firstname);

  return (
    <div className="container-mapOfGiant">
      <h1 className="titleStyle">Map of {giant.firstname}</h1>
      <div
        className="container-mapOfGiant-map"
        style={{
          height: "65vh",
          width: "65%",
        }}
      >
        <GoogleMap latitude={giant.latitude} longitude={giant.longitude} />
      </div>

      <div className="container-mapOfGiant-buttons">
        <Button
          component={Link}
          className="buttonStyle"
          to={`/about/${giant.firstname}`}
        >
          About {giant.firstname}
        </Button>

        <Button component={Link} className="buttonStyle" to={"/giants"}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default GiantMap;
