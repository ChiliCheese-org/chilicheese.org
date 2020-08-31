import React from "react";

import VotingPanel from "../components/VotingPanel";

export default {
  title: "LocationWindow/VotingPanel",
  component: Location,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <VotingPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  /**
   * The location towards which votes will be applied
   */
  location: {
    name: "Location 1",
    address: "425 Market Street",
    city: "San Francisco",
    state: "CA",
    zip: "94710",
    phone: "415-555-1212",
  },
};
