import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import ThumbDownIcon from "@material-ui/icons/ThumbDownRounded";
import ThumbUpIcon from "@material-ui/icons/ThumbUpRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  upVote: { flex: "1", paddingLeft: theme.spacing(1) },
  downVote: { flex: "1", paddingRight: theme.spacing(1) },
  voteButton: {
    width: "100%",
  },
}));

/**
 * Renders voting controls used to denote whether a location has the Chili Cheese Burrito
 */
const VotingPanel = ({ location }) => {
  const classes = useStyles();
  const handleUpVote = () => {
    console.log("UpVote", location);
  };
  const handleDownVote = () => {
    console.log("DownVote", location);
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.downVote}>
        <Tooltip title="Does not have the chili cheese burrito">
          <Button
            className={classes.voteButton}
            variant="outlined"
            onClick={handleDownVote}
          >
            <ThumbDownIcon />
          </Button>
        </Tooltip>
      </Box>
      <Box className={classes.upVote}>
        <Tooltip title="Has the chili cheese burrito">
          <Button
            className={classes.voteButton}
            variant="outlined"
            onClick={handleUpVote}
          >
            <ThumbUpIcon />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

VotingPanel.propTypes = {
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
};

export default VotingPanel;
