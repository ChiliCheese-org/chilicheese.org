import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import amber from "@material-ui/core/colors/amber";

export default createMuiTheme({
  palette: {
    primary: {
      main: amber[500],
    },
    secondary: {
      main: purple[500],
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: "none",
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: amber[500],
        color: purple[500],
      },
    },
    MuiDialogContent: {
      root: {
        backgroundColor: amber[200],
      },
    },
    MuiDialogActions: {
      root: {
        backgroundColor: amber[500],
        color: purple[500],
      },
    },
    MuiPaper: {
      root: {
        // backgroundColor: amber[300],
      },
    },
  },
});
