import React from "react";

import LocationFilter from "../components/LocationFilter";

export default {
  title: "LocationWindow/LocationFilter",
  component: LocationFilter,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <LocationFilter {...args} />;

export const Default = Template.bind({});
Default.args = {};
