import React from "react";

import { TextDocs } from "./Text.docs";

import { Text } from "./Text";

import { typography } from "../../theme/typography";

const meta = {
  argTypes: {
    align: { 
      control: { type: "select" },
      description: "Define la alineación horizontal del texto.",
      options: ["start", "center", "end"],
    },
    as: {
      control: { type: "select" },
      description: "Especifica el elemento HTML que se renderizará.",
      options: ["p", "span", "label", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    children: {
      control: { type: "text" },
      description: "El contenido de texto que se mostrará. Es requerido.",
    },
    color: {
      control: { type: "text" },
      description: "Define el color del texto. Acepta tokens de color del tema (ej: 'primary.main', 'error.light').",
    },
    decoration: {
      control: { type: "select" },
      description: "Aplica decoración al texto.",
      options: ["none", "underline", "line-through"],
    },
    htmlFor: {
      control: { type: "text" },
      description: "Atributo 'for' para elementos label. Solo funciona cuando as='label'.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del texto. Acepta tokens de espaciado del sistema.",
    },
    padding: {
      control: { type: "text" },
      description: "Define el espaciado interno del texto. Acepta tokens de espaciado del sistema.",
    },
    type: {
      control: { type: "select" },
      description: "Especifica el estilo tipográfico a aplicar desde el sistema de tipografía.",
      options: Object.keys(typography),
    },
  },
  component: Text,
  parameters: {
    docs: {
      page: TextDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Text",
};

// Playground interactivo para probar el Text
export const Playground = {
  args: {
    children: "Texto de ejemplo para probar",
    type: "bodyRegular",
    color: "black",
    align: "start",
    as: "p",
    decoration: "none",
    margin: "a-0",
    padding: "a-0",
  },
  render: (args) => (
    <Text
      type={args.type}
      color={args.color}
      align={args.align}
      as={args.as}
      decoration={args.decoration}
      margin={args.margin}
      padding={args.padding}
      htmlFor={args.htmlFor}
    >
      {args.children}
    </Text>
  ),
};

export default meta;