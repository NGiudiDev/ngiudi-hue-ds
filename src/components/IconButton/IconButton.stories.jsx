import React from "react";

import { IconButtonDocs } from "./IconButton.docs";

import { IconButton } from "./IconButton";

const meta = {
  argTypes: {
    color: {
      control: { type: "select" },
      description: "Define el color del ícono.",
      options: ["black", "primary", "white"],
    },
    count: {
      control: { type: "number" },
      description: "Número que se muestra como contador en el botón (opcional).",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desactiva el botón cuando se establece en true.",
    },
    icon: {
      control: { type: "object" },
      description: "Objeto que define el ícono a mostrar (nombre y tamaño).",
    },
    id: {
      control: { type: "text" },
      description: "Identificador único para el botón.",
    },
    margin: {
      control: { type: "text" },
      description: "Define los márgenes alrededor del botón.",
    },
    onClick: {
      action: "clicked",
      description: "Función que se ejecuta al hacer clic en el botón.",
    },
    type: {
      control: { type: "select" },
      description: "Define el tipo de botón: 'button' o 'submit'.",
      options: ["button", "submit"],
    },
  },
  component: IconButton,
  parameters: {
    docs: {
      page: IconButtonDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/IconButton",
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    color: "primary",
    count: 0,
    disabled: false,
    icon: { name: "home", size: "major" },
    margin: "a-0",
    onClick: () => {
      alert("IconButton clicked!");
    },
    type: "button",
  },
  render: (args) => (
    <IconButton {...args} />
  ),
};

export default meta;