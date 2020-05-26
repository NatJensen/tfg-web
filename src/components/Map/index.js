// packages
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

/* Start of component */
class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
    };
  }

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        initialCenter={{ lat: this.props.latitude, lng: this.state.longitude }}
      >
        <Marker
          position={{ lat: this.props.latitude, lng: this.state.longitude }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_KEY,
})(GoogleMap);
