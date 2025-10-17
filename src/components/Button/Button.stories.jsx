import React from "react";

import { ButtonDocs } from "./Button.docs";

import { Button } from "./Button";

const meta = {
  argTypes: {
    children: {
      control: { type: "text" },
      description: "El contenido que se mostrará dentro del botón. Generalmente texto descriptivo de la acción.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Deshabilita el botón, impidiendo la interacción del usuario y aplicando estilos visuales de estado deshabilitado.",
    },
    disclosure: {
      control: { type: "boolean" },
      description: "Muestra un ícono de flecha hacia abajo (downAngle) al final del botón, indicando que desplegará contenido adicional.",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Hace que el botón ocupe el 100% del ancho disponible de su contenedor.",
    },
    iconProps: {
      control: { type: "object" },
      description: "Propiedades que se pasan al componente Icon interno. Permite agregar un ícono al inicio del botón con opciones de personalización (name, color, size, margin).",
    },
    id: {
      control: { type: "text" },
      description: "Identificador único del botón para referencias en el DOM o pruebas automatizadas.",
    },
    isLoading: {
      control: { type: "boolean" },
      description: "Muestra un spinner de carga y oculta el contenido del botón. Útil para indicar procesos asíncronos en curso.",
    },
    kind: {
      control: { type: "select" },
      description: "Define el estilo visual del botón según su importancia en la jerarquía de acciones.",
      options: ["filled", "outlined", "text"],
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del botón. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-8 y-4').",
    },
    onClick: {
      action: "clicked",
      control: { type: "none" },
      description: "Función callback ejecutada cuando el usuario hace clic en el botón.",
    },
    type: {
      control: { type: "select" },
      description: "Define el tipo semántico del botón HTML. 'submit' envía formularios, 'reset' los resetea, 'button' es para acciones generales.",
      options: ["button", "submit", "reset"],
    },
  },
  component: Button,
  parameters: {
    docs: {
      page: ButtonDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Button",
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    children: "Button",
    disabled: false,
    disclosure: false,
    fullWidth: false,
    iconProps: {
      color: "currentColor",
      margin: "r-8",
      name: "",
      size: "minor",
    },
    id: "button-example",
    isLoading: false,
    kind: "filled",
    margin: "a-0",
    onClick: () => alert("Button clicked!"),
    type: "button",
  },
  render: (args) => (
    <Button {...args} />
  ),
};

export default meta;