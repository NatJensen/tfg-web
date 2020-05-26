// packages
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Highlighter from "react-highlight-words";

// context
import { GiantContext } from "../../context/GiantContext";

// data
import words from "../../data/boldWords";

// styling
import "./index.css";

/* Start of screen */
const AboutGiant = (props) => {
  const { firstname } = props.match.params;

  const { giants } = useContext(GiantContext);
  const giant = giants.find((giant) => giant.firstname === firstname);

  return (
    <div className="container-aboutGiant">
      <h1 className="titleStyle">About {giant.firstname}</h1>
      <div className="container-aboutGiant-image">
        <img
          className="aboutGiant-image"
          src={require("../../assets/images" + giant.image)}
          alt={giant.name}
        ></img>
      </div>
      <div className="container-audio">
        <audio controls className="audio-player">
          <source
            src={require("../../assets/sounds" + giant.audio)}
            type="audio/mpeg"
          />
        </audio>
      </div>
      <div className="container-aboutGiant-description">
        <Highlighter
          highlightStyle={{ fontWeight: "700", backgroundColor: "white" }}
          searchWords={words}
          textToHighlight={giant.description}
        />
      </div>
      <div className="container-aboutGiant-buttons">
        <Button
          component={Link}
          className="buttonStyle"
          to={`/map/${giant.firstname}`}
        >
          Back
        </Button>

        <Button component={Link} className="buttonStyle" to="/giants">
          More giants
        </Button>
      </div>
    </div>
  );
};

export default AboutGiant;
