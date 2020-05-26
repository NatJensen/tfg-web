// packages
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { GiantContext } from "../../context/GiantContext";

// components
import GiantComponent from "../../components/Giant";

// styling
import "./index.css";

/* Start of screen */
const AllGiants = () => {
  const { giants } = useContext(GiantContext);

  return (
    <div className="container-allGiants">
      <h1 className="titleStyle">The Forgotten Giants</h1>
      <div className="container-allGiants-giant">
        {giants.map((giant) => (
          <Link
            className="allGiants-link"
            key={giant.id}
            to={`/map/${giant.firstname}`}
          >
            <GiantComponent
              name={giant.name}
              firstname={giant.firstname}
              location={giant.location}
              image={giant.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllGiants;
