import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";

import React, { useEffect, useRef, useState } from "react";

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_TOKEN;

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = MAPBOX_TOKEN;

const Map = () => {
  const mapContainer = useRef();
  const [lng, setLng] = useState(2.3445091846329014);
  const [lat, setLat] = useState(48.88130547828772);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lng, lat],
      zoom: zoom,
    });
    return () => map.remove();
  }, []);

  return (
    <div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

export default Map;
