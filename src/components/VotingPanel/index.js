import React from "react";
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

export default VotingPanel;
