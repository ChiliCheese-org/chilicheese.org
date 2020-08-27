import React, { useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import amber from "@material-ui/core/colors/amber";
import LocationsWindow from "../LocationsWindow";
import Splash from "../Splash";

const locations = [
  {
    id: 1,
    name: "Location 1",
    address: "1234 Main Street",
    city: "Emeryville",
    state: "California",
    zip: "94710",
    lat: 37.8501472,
    lng: -122.31000640000002,
    hasCcb: true,
  },
  {
    id: 2,
    name: "Location 2",
    address: "4321 Elm Street",
    city: "Emeryville",
    state: "California",
    zip: "94710",
    lat: 37.8401472,
    lng: -122.32000640000002,
    hasCcb: false,
  },
  {
    id: 3,
    name: "Location 3",
    address: "9999 Ninth Street",
    city: "Berkeley",
    state: "California",
    zip: "94710",
    lat: 37.8401472,
    lng: -122.33000640000002,
    hasCcb: true,
  },
];

export const ChiliCheeseMap = ({ google }) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);
  const [location, setLocation] = useState({});
  const [userLocation, setUserLocation] = useState({});
  const [mapCenter, setMapCenter] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords: { latitude, longitude } = {} } = position;
      setUserLocation({ lat: latitude, lng: longitude });
    });
  }, [setUserLocation]);

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

  const handleLocationHover = (location) => {
    setMapCenter(location);
  };

  const { id, name, address, lat, lng } = location;

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1" }}>
          <Map
            google={google}
            zoom={14}
            initialCenter={{
              lat: 37.8601472,
              lng: -122.30000640000002,
            }}
            center={mapCenter}
            onClick={handleMapClick}
            zoomControl={true}
            scaleControl={false}
            streetViewControl={false}
            panControl={false}
            rotateControl={false}
            mapTypeControl={false}
            fullscreenControl={false}
            containerStyle={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
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
              <div>{name}</div>
            </InfoWindow>
          </Map>
        </div>
        <div
          style={{
            flexBasis: "200px",
            padding: "1rem",
            backgroundColor: amber[50],
          }}
        >
          <LocationsWindow
            userLocation={userLocation}
            locations={locations}
            onLocationMouseOver={handleLocationHover}
          />
        </div>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyA2lEaT-NcNTHq07L9l6q2sAbTdFkTPpJ4",
  LoadingContainer: Splash,
})(ChiliCheeseMap);
