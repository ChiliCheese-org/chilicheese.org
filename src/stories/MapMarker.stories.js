import React from "react";

import MapMarker from "../components/MapMarker";

export default {
  title: "Map/MapMarker",
  component: MapMarker,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <MapMarker {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "unknown",
};
