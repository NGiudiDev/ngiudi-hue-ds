import React from "react";

import { DividerDocs } from "./Divider.docs";

import { Divider } from "./Divider";

const meta = {
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Define el color de fondo del divider. Acepta tokens de color del tema (ej: 'primary.main', 'error.light', 'success.dark').",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del divider. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-8 y-4').",
    },
  },
  component: Divider,
  parameters: {
    docs: {
      page: DividerDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Divider",
  
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    color: "primary.main",
    margin: "a-0",
  },
  render: (args) => (
    <Divider {...args} />
  ),
};

export default meta;