import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import purple from "@material-ui/core/colors/purple";

export const LocationTypes = {
  ALL: { value: "ALL", label: "All" },
  HAS_BURRITO: { value: "HAS_BURRITO", label: "Has CCB" },
  NO_BURRITO: { value: "NO_BURRITO", label: "No CCB" },
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "1rem",
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: purple[50],
    boxShadow:
      "inset 0px 2px 1px -1px rgba(0,0,0,0.2), inset 0px 1px 1px 0px rgba(0,0,0,0.14), inset 0px 1px 3px 0px rgba(0,0,0,0.12);",
  },
  locationFilter: {
    flex: "1",
  },
  controlLabel: {
    fontSize: "0.75rem",
  },
  locationsList: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

const LocationFilter = () => {
  const classes = useStyles();
  const [locationType, setLocationType] = useState(LocationTypes.ALL);
  const [onlyTacoBellData, setOnlyTacoBellData] = useState(false);

  return (
    <Box className={classes.root}>
      <FormControl className={classes.locationFilter}>
        <InputLabel id="demo-simple-select-label">Location Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={locationType}
          onChange={(e) => setLocationType(e.target.value)}
          size="small"
        >
          {Object.values(LocationTypes).map((item) => {
            const { label } = item;
            return <MenuItem value={item}>{label}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend" className={classes.controlLabel}>
          Taco Bell Data
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={onlyTacoBellData}
                onChange={() => setOnlyTacoBellData(!onlyTacoBellData)}
                name="onlyTacoBellData"
              />
            }
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default LocationFilter;
