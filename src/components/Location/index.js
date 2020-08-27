import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import ThumbDownIcon from "@material-ui/icons/ThumbDownRounded";
import ThumbUpIcon from "@material-ui/icons/ThumbUpRounded";
import amber from "@material-ui/core/colors/amber";
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
      backgroundColor: amber[50],
    },
  },
  locationContainer: { display: "flex", marginBottom: theme.spacing(2) },
  icon: {
    flexBasis: "50px",
  },
  address: {
    flex: "1",
  },
  distance: {
    flexBasis: "50px",
  },
  votingContainer: {
    display: "flex",
  },
  upVote: { flex: "1", paddingLeft: theme.spacing(1) },
  downVote: { flex: "1", paddingRight: theme.spacing(1) },
  voteButton: {
    width: "100%",
  },
}));

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
        <Box className={classes.icon}></Box>
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
      <Box className={classes.votingContainer}>
        <Box className={classes.downVote}>
          <Tooltip title="Does not have the chili cheese burrito">
            <Button className={classes.voteButton} variant="outlined">
              <ThumbDownIcon />
            </Button>
          </Tooltip>
        </Box>
        <Box className={classes.upVote}>
          <Tooltip title="Has the chili cheese burrito">
            <Button className={classes.voteButton} variant="outlined">
              <ThumbUpIcon />
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Location;
