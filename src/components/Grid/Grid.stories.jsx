import React from "react";

import { GridDocs } from "./Grid.docs";

import { Grid } from "./Grid";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

const meta = {
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Contenido que se renderiza dentro del Grid. Debe contener Grid.Item como hijos directos.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del Grid Container. Acepta tokens de espaciado del sistema.",
    },
    padding: {
      control: { type: "text" },
      description: "Define el espaciado interno del Grid Container. Acepta tokens de espaciado del sistema.",
    },
  },
  component: Grid.Container,
  parameters: {
    docs: {
      page: GridDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Grid",
};

// Playground interactivo para probar el Grid
export const Playground = {
  args: {
    children: "Grid items dinámicos",
    margin: "a-0",
    padding: "a-16",
  },
  render: (args) => (
    <Grid.Container margin={args.margin} padding={args.padding}>
      <Grid.Item xs={12} sm={6} md={4}>
        <Box padding="a-16">
          <Text>Item 1</Text>
        </Box>
      </Grid.Item>

      <Grid.Item xs={12} sm={6} md={4}>
        <Box padding="a-16">
          <Text>Item 2</Text>
        </Box>
      </Grid.Item>
      
      <Grid.Item xs={12} sm={12} md={4}>
        <Box padding="a-16">
          <Text>Item 3</Text>
        </Box>
      </Grid.Item>
    </Grid.Container>
  ),
};

export default meta;