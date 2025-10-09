import React from "react";

import { PanelDocs } from "./Panel.docs";

import { Panel } from "./Panel";
import { Text } from "../Text/Text";

const meta = {
  argTypes: {
    borderless: {
      control: { type: "boolean" },
      description: "Si es verdadero, el panel no tendrá borde visible.",
    },
    children: {
      control: { type: "text" },
      description: "Contenido que se renderiza dentro del Panel. Puede incluir cualquier elemento React válido.",
    },
    isFullHeight: {
      control: { type: "boolean" },
      description: "Si es verdadero, el panel ocupará toda la altura disponible del contenedor padre.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del Panel. Acepta tokens de espaciado del sistema.",
    },
    onClick: {
      action: "clicked",
      control: { type: "none" },
      description: "Función de callback que se ejecuta cuando se hace clic en el panel. Activa estilos de interacción.",
    },
    padding: {
      control: { type: "text" },
      description: "Define el espaciado interno del Panel. Acepta tokens de espaciado del sistema.",
    },
  },
  component: Panel.Wrapper,
  parameters: {
    docs: {
      page: PanelDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Panel",
};

// Playground interactivo para probar el Panel
export const Playground = {
  args: {
    borderless: false,
    children: "Contenido del panel",
    isFullHeight: false,
    margin: "a-16",
    onClick:() => alert("Panel clicked!"),
    padding: "a-16",
  },
  render: (args) => (
    <Panel.Wrapper
      borderless={args.borderless}
      isFullHeight={args.isFullHeight}
      margin={args.margin}
      padding={args.padding}
      onClick={args.onClick}
    >
      <Text>{args.children}</Text>
    </Panel.Wrapper>
  ),
};

export default meta;