import React from "react";

import { BoxDocs } from "./Box.docs";

import { Text } from "../Text/Text";
import { Box } from "./Box";

const meta = {
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Contenido que se renderiza dentro del Box. Puede ser cualquier elemento React válido.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del Box. Acepta tokens de espaciado del sistema (ej: 'a-16', 'x-8 y-16').",
    },
    padding: {
      control: { type: "text" },
      description: "Define el espaciado interno del Box. Acepta tokens de espaciado del sistema (ej: 'a-16', 'x-8 y-16').",
    },
  },
  component: Box,
  parameters: {
    docs: {
      page: BoxDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Box",
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    children: "Contenido del Box",
    margin: "a-16",
    padding: "a-16",
  },
  render: (args) => (
    <Box {...args}>
      <Text>{args.children}</Text>
    </Box>
  ),
};

export default meta;