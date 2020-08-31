import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import amber from "@material-ui/core/colors/amber";
import VotingPanel from "../VotingPanel";
import { distance } from "../../helpers/geo";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    width: "100%",
    display: "block",
    // marginBottom: theme.spacing(1),
    // marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: amber[100],
    },
  },
  locationContainer: { display: "flex" },
  media: {
    flexBasis: "100px",
    backgroundColor: amber[700],
    borderRadius: "0.5rem",
  },
  content: {
    flex: "1",
    paddingLeft: "1rem",
  },
  meta: {
    display: "flex",
    marginBottom: "1rem",
  },
  address: {
    flex: "1",
  },
  distance: {
    flexBasis: "50px",
  },
}));

/**
 * Renders a location, for use in the LocationsWindow
 */
const Location = ({
  location,
  location: { name, address, city, state, zip, phone, lat, lng } = {},
  userLocation = {},
  onMouseOver,
}) => {
  const classes = useStyles();

  const handleMouseOver = () => {
    if (onMouseOver) {
      onMouseOver(location);
    }
  };

  return (
    <Box className={classes.root} onMouseOver={handleMouseOver}>
      <Box className={classes.locationContainer}>
        <Box className={classes.media}>Yes</Box>
        <Box className={classes.content}>
          <Box className={classes.meta}>
            <Box className={classes.address}>
              <Box className={classes.addressLine}>{name}</Box>
              <Box className={classes.addressLine}>{address}</Box>
              <Box className={classes.addressLine}>
                {city}, {state} {zip}
              </Box>
            </Box>
            <Box className={classes.distance}>
              <Typography variant="caption" display="block" gutterBottom>
                {distance({ lat, lng }, userLocation)}
              </Typography>
            </Box>
          </Box>

          <VotingPanel location={location} />
        </Box>
      </Box>
    </Box>
  );
};

Location.propTypes = {
  /**
   * The location to display in the location component
   */
  location: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    phone: PropTypes.string,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  /**
   * Callback when the Location component is moused over
   */
  onMouseOver: PropTypes.func,
};

export default Location;
