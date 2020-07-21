import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Location from "../Location";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    top: "80px",
    left: "15px",
    zIndex: 1000,
  },
  cardContent: {
    width: "400px",
    height: "80vh",
  },
}));

const LocationsWindow = ({ userLocation, locations, onLocationMouseOver }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Card>
        <CardContent className={classes.cardContent}>
          {locations.map((location, id) => (
            <Location
              key={id}
              location={location}
              userLocation={userLocation}
              onMouseOver={onLocationMouseOver}
            />
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default LocationsWindow;
