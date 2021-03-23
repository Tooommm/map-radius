import "./Map.css";

import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import Geocoder from "react-mapbox-gl-geocoder";
import { Input } from "semantic-ui-react";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_TOKEN;

const mapStyle = {
  width: "100%",
  height: 600,
};

const params = {
  country: "fr",
};

const Map = () => {
  const [adress, setAdress] = useState(undefined);
  const [state, setState] = useState({
    viewport: {
      latitude: 48.88130547828772,
      longitude: 2.3445091846329014,
      zoom: 15,
    },
    tempMarker: null,
    markers: [],
  });

  const onSelected = (viewport, item) => {
    setState({
      viewport,
      tempMarker: {
        name: item.place_name,
        longitude: item.center[0],
        latitude: item.center[1],
      },
    });
  };

  const { viewport, tempMarker } = state;
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
      >
        {tempMarker && (
          <Marker
            longitude={tempMarker.longitude}
            latitude={tempMarker.latitude}
          >
            <div className="marker temporary-marker">
              <span></span>
            </div>
          </Marker>
        )}
      </ReactMapGL>
    </div>
  );
};

export default Map;
