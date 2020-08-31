import React from "react";

import Location from "../components/Location";

export default {
  title: "LocationWindow/Location",
  component: Location,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Location {...args} />;

export const Default = Template.bind({});
Default.args = {
  location: {
    name: "Location 1",
    address: "425 Market Street",
    city: "San Francisco",
    state: "CA",
    zip: "94710",
    phone: "415-555-1212",
  },
};
