import React from "react";

import { BadgeDocs } from "./Badge.docs";

import { Badge } from "./Badge";

const meta = {
  argTypes: {

  },
  component: Badge,
  parameters: {
    docs: {
      page: BadgeDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Badge",
  
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    children: "Badge",
    margin: "a-0",
    padding: "x-4 y-2",
  },
  render: (args) => (
    <Badge {...args} />
  ),
};

export default meta;