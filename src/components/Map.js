import "mapbox-gl/dist/mapbox-gl.css";

import React, { Component } from "react";
import ReactMapboxGl, { Feature, Layer } from "react-mapbox-gl";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_TOKEN;

const MapBox = ReactMapboxGl({
  accessToken: MAPBOX_TOKEN,
});

class Map extends Component {
  render() {
    return (
      <MapBox
        style="mapbox://styles/mapbox/light-v10"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </MapBox>
    );
  }
}

export default Map;
