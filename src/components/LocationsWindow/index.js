import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { distance } from "../../helpers/geo";

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

const LocationsWindow = ({ user, locations }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Card>
        <CardContent className={classes.cardContent}>
          {locations.map(({ id, name, lat, lng }) => (
            <div key={id}>
              {name} - {distance(user, { lat, lng })}
            </div>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default LocationsWindow;
