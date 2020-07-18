import React from "react";
import MapMarker from "../MapMarker";

const center = {
  lat: 59.85,
  lng: 30.33,
};

const Map = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapMarker lat={59.955413} lng={30.337844} type="My Marker" />
    </div>
  );
};

export default Map;
