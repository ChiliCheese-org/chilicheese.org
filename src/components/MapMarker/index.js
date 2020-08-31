import React, { useState } from "react";
import PropTypes from "prop-types";

const MapMarkers = {
  UNKNOWN: "unknown",
  HAS_CCB: "has_ccb",
  NO_CCB: "no_ccb",
};

/**
 * Renders a MapMarker denoting a location
 */
const MapMarker = ({ type, lat, lng, setCenter }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (setCenter) {
      setCenter({ lat, lng });
    }

    setExpanded(true);
  };

  return <div onClick={handleClick}>Expanded {expanded}</div>;
};

MapMarker.propTypes = {
  /**
   * The type of location that the MapMarker denotes
   */
  type: PropTypes.oneOf(Object.values(MapMarkers)),
  /**
   * The latitude coordinates of the location
   */
  lat: PropTypes.number,
  /**
   * The longitude coordinates of the location
   */
  lng: PropTypes.number,
  /**
   * Callback function to be executed when the MapMarker is clicked (for centering the MapMarker)
   */
  setCenter: PropTypes.func,
};

export default MapMarker;
