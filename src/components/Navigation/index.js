import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  container: {
    // position: "absolute",
    zIndex: 1000,
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuSection: {
    flexGrow: 1,
    textAlign: "center",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionSocial: {},
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    height: "35px",
  },
  icon: {
    color: theme.palette.secondary.main,
  },
}));

export default function PrimaryAppBar() {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = React.useState(false);
  const descriptionElementRef = React.useRef(null);

  const handleClickOpen = (e) => {
    console.log("Here!", openDialog);
    e.preventDefault();
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const openExternalLink = (url) => {};

  return (
    <>
      <Box data-chilicheese="navigation" className={classes.container}>
        <Box className={classes.grow}>
          <AppBar position="relative">
            <Toolbar>
              <Box className={classes.menuSection}>
                <Link color="secondary" href="#" onClick={handleClickOpen}>
                  About
                </Link>
              </Box>
              <Box className={classes.menuSection}>
                <Link color="secondary" href="#" onClick={handleClickOpen}>
                  FAQ
                </Link>
              </Box>
              <Box className={classes.menuSection}>
                <img
                  className={classes.logo}
                  src="images/logo-50.png"
                  alt="ChiliCheese.org"
                />
              </Box>
              <Box className={classes.menuSection}>
                <Link color="secondary" href="#" onClick={handleClickOpen}>
                  Press
                </Link>
              </Box>
              <Box className={classes.menuSection}>
                <Box className={classes.sectionSocial}>
                  <Tooltip title="Follow us on Twitter">
                    <IconButton
                      aria-label="follow us on twitter"
                      color="inherit"
                      onClick={openExternalLink(
                        "https://twitter.com/ChiliCheese_"
                      )}
                    >
                      <TwitterIcon className={classes.icon} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Join us on Facebook">
                    <IconButton
                      aria-label="join us on facebook"
                      color="inherit"
                      onClick={openExternalLink(
                        "https://www.facebook.com/TheChiliCheeseBurrito"
                      )}
                    >
                      <FacebookIcon className={classes.icon} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Help us improve on GitHub">
                    <IconButton
                      aria-label="contribute on github"
                      color="inherit"
                      onClick={openExternalLink(
                        "https://github.com/ChiliCheese-org/chilicheese.org"
                      )}
                    >
                      <GitHubIcon className={classes.icon} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
      <Dialog open={openDialog} onClose={handleClose} scroll="paper">
        <DialogTitle id="scroll-dialog-title">
          About ChiliCheese.org
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
