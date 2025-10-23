import React from "react";

import { LinkDocs } from "./Link.docs";

import { Link } from "../Link/Link";

const meta = {
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Contenido que se renderiza dentro del enlace. Puede ser cualquier elemento React válido.",
    },
    href: {
      control: { type: "text" },
      description: "URL a la que apunta el enlace. Debe ser una cadena válida.",
    },
    openInNewTab: {
      control: { type: "boolean" },
      description: "Determina si el enlace se abre en una nueva pestaña del navegador. Cuando es true, se añaden automáticamente los atributos target='_blank' y rel='noopener noreferrer' por seguridad.",
    },
    type: {
      control: { type: "text" },
      description: "Define el estilo tipográfico del enlace usando los tokens del sistema. Acepta valores como 'bodyRegular', 'bodySemibold', 'captionRegular', etc.",
    },
  },
  component: Link,
  parameters: {
    docs: {
      page: LinkDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Link",
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    children: "Este es un enlace",
    href: "https://google.com",
    openInNewTab: false,
    type: "bodyRegular",
  },
  render: (args) => (
    <Link {...args} />
  ),
};

export default meta;