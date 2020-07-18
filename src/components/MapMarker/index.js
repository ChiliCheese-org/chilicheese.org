import React, { useState } from "react";

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

export default MapMarker;
