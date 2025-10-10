import React from "react";

import { BadgeDocs } from "./Badge.docs";

import { Badge } from "./Badge";

const meta = {
  argTypes: {
    children: {
      control: { type: "text" },
      description: "El contenido que se mostrará dentro del badge. Puede ser texto, números o elementos React.",
    },
    color: {
      control: { type: "text" },
      description: "Define el color de fondo del badge. Acepta tokens de color del tema (ej: 'primary.main', 'error.light', 'success.dark').",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del badge. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-8 y-4').",
    },
    padding: {
      control: { type: "text" },
      description: "Define el espaciado interno del badge. Acepta tokens de espaciado del sistema (ej: 'x-4 y-2', 'a-8').",
    },
    textProps: {
      control: { type: "object" },
      description: "Propiedades que se pasan al componente Text interno. Permite personalizar tipo, color y otras propiedades del texto.",
    },
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
    color: "primary.main",
    margin: "a-0",
    padding: "x-4 y-2",
    textProps: {
      color: "white.main",
      type: "captionSemibold",
    },
  },
  render: (args) => (
    <Badge {...args} />
  ),
};

export default meta;