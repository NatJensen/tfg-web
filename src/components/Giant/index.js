// packages
import React from "react";

// styling
import "./index.css";

/* Start of component */
const Giant = ({ location, image, name }) => {
  return (
    <div className="container-giant-comp">
      <div className="container-giant-comp-location">
        <img
          className="locationEmoji"
          src={require("../../assets/images/location_emoji.png")}
          alt={"location icon"}
        />
        <div>
          <p className="locationText">{location}</p>
        </div>
      </div>

      <div className="container-giant-comp-image">
        <img
          className="giantImageStyle"
          src={require("../../assets/images" + image)}
          alt={name}
        />
        <div className="imageTextPlacement">
          <p className="imageTextStyle">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Giant;
