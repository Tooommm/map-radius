import "./Map.css";

import React, { useState } from "react";

import Geocoder from "react-mapbox-gl-geocoder";
import { Input } from "semantic-ui-react";
import ReactMapGL from "react-map-gl";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_TOKEN;

const mapStyle = {
  width: "100%",
  height: 600,
};

const params = {
  country: "fr",
};

const Map = () => {
  const [adress, setAdress] = useState("70 rue Rodier 75009 Paris");
  const [state, setState] = useState({
    viewport: {
      latitude: 48.88130547828772,
      longitude: 2.3445091846329014,
      zoom: 15,
    },
  });

  const onSelected = (viewport) => {
    setState({
      viewport,
    });
  };

  const { viewport } = state;
  return (
    <div>
      <Input
        focus
        className="adress-bar"
        placeholder={adress}
        action="Search"
        onChange={(e) => setAdress(e.target.value)}
      />
      <Geocoder
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onSelected={onSelected}
        viewport={viewport}
        hideOnSelect={true}
        value=""
        queryParams={params}
      />
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v10"
        {...viewport}
        {...mapStyle}
        onViewportChange={(viewport) => setState({ viewport })}
      ></ReactMapGL>
    </div>
  );
};

export default Map;
