import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import FilterListIcon from "@material-ui/icons/FilterList";
import Location from "../Location";
import LocationFilter from "../LocationFilter";

const useStyles = makeStyles((theme) => ({
  container: {},
  cardContent: {
    width: "400px",
    height: "80vh",
    padding: "0px",
  },
  locationsList: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

const LocationsWindow = ({ userLocation, locations, onLocationMouseOver }) => {
  const classes = useStyles();
  const [showFilters, setShowFilters] = useState(false);
  return (
    <Box className={classes.container}>
      <Card variant="outlined">
        <CardHeader
          title={<Typography variant="caption">Locations</Typography>}
          action={
            <>
              <IconButton
                aria-label="filter"
                className={classes.margin}
                onClick={() => setShowFilters(!showFilters)}
              >
                <FilterListIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
        <CardContent className={classes.cardContent}>
          <Collapse in={showFilters} timeout="auto" unmountOnExit>
            <LocationFilter />
          </Collapse>
          <Box className={classes.locationsList}>
            {locations.map((location, id) => (
              <Location
                key={id}
                location={location}
                userLocation={userLocation}
                onMouseOver={onLocationMouseOver}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LocationsWindow;
