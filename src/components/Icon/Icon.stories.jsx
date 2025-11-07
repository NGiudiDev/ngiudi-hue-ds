import React from "react";

import { IconDocs } from "./Icon.docs";

import { Icon } from "./Icon";

import { icons } from "../../theme/icons";

const meta = {
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Define el color del texto. Acepta tokens de color del tema (ej: 'primary.main', 'error.light').",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del ícono. Acepta tokens de espaciado.",
    },
    name: {
      control: { type: "select" },
      description: "Especifica el nombre del ícono a mostrar.",
      options: Object.keys(icons),
    },
    onClick: {
      action: "clicked",
      control: { type: "none" },
      description: "Función de callback que se ejecuta cuando se hace clic en el ícono.",
    },
    size: {
      control: { type: "select" },
      description: "Determina el tamaño del ícono.",
      options: ["minor", "major", "spot"],
    },
    spin: {
      control: { type: "boolean" },
      description: "Si es verdadero, el ícono girará continuamente.",
    },
  },
  component: Icon,
  parameters: {
    docs: {
      page: IconDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Icon",
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    color: "black.main",
    margin: "a-0",
    name: "home",
    size: "major",
    spin: false,
  },
  render: (args) => (
    <Icon {...args} />
  ),
};

export default meta;