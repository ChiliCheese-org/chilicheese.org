import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Splash from "../Splash";

const locations = [
  {
    id: 1,
    name: "Location 1",
    address: "1234 Main Street",
    lat: 40.854885,
    lng: -88.081807,
    hasCcb: true,
  },
  {
    id: 2,
    name: "Location 2",
    address: "4321 Elm Street",
    lat: 40.864885,
    lng: -88.071807,
    hasCcb: false,
  },
  {
    id: 3,
    name: "Location 3",
    address: "9999 Ninth Street",
    lat: 40.844885,
    lng: -88.061807,
    hasCcb: true,
  },
];

export const ChiliCheeseMap = ({ google }) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);
  const [location, setLocation] = useState({});
  const handleMapClick = () => {
    setShowInfoWindow(false);
    setActiveMarker(null);
    setLocation({});
  };
  const handleMarkerClick = (location, marker, e) => {
    setActiveMarker(marker);
    setShowInfoWindow(true);
    setLocation(location);
  };
  const handleInfoWIndowClose = () => {
    setShowInfoWindow(false);
    setActiveMarker(null);
  };

  const { id, name, address, lat, lng } = location;

  return (
    <Map
      google={google}
      zoom={14}
      initialCenter={{
        lat: 40.854885,
        lng: -88.081807,
      }}
      onClick={handleMapClick}
      zoomControl={true}
      scaleControl={false}
      streetViewControl={false}
      panControl={false}
      rotateControl={false}
      mapTypeControl={false}
      fullscreenControl={false}
    >
      {locations.map(({ id, name, address, lat, lng }) => (
        <Marker
          key={id}
          onClick={handleMarkerClick}
          name={name}
          title={name}
          position={{
            lat,
            lng,
          }}
        />
      ))}

      <InfoWindow
        visible={showInfoWindow}
        marker={activeMarker}
        onClose={handleInfoWIndowClose}
      >
        <div>
          <h1>{name}</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyA2lEaT-NcNTHq07L9l6q2sAbTdFkTPpJ4",
  LoadingContainer: Splash,
})(ChiliCheeseMap);
