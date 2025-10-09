import React from "react";

import { ThemeDSDocs } from "./ThemeDS.docs";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeDS } from "./ThemeDS";

const meta = {
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Los componentes de la aplicación que necesitan acceso al tema del Design System.",
    },
  },
  component: ThemeDS,
  parameters: {
    docs: {
      page: ThemeDSDocs,
    },
  },
  tags: ["autodocs"],
  title: "Foundation/ThemeDS",
};

// Playground básico
export const Playground = {
  args: {
    children: "Contenido envuelto en ThemeDS",
  },
  render: (args) => (
    <ThemeDS>
      <Panel.Wrapper>
        <Text type="title" margin="b-16">{args.children}</Text>
        <Text>Este contenido tiene acceso a todos los tokens del tema.</Text>
      </Panel.Wrapper>
    </ThemeDS>
  ),
};

export default meta;