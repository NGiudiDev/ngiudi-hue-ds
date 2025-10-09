import React from "react";

import { ThemeProviderDocs } from "./ThemeProvider.docs";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "./ThemeProvider";

const meta = {
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Los componentes de la aplicación que necesitan acceso al tema del Design System.",
    },
  },
  component: ThemeProvider,
  parameters: {
    docs: {
      page: ThemeProviderDocs,
    },
  },
  tags: ["autodocs"],
  title: "Foundation/ThemeProvider",
};

// Playground básico
export const Playground = {
  args: {
    children: "Contenido envuelto en ThemeProvider",
  },
  render: (args) => (
    <ThemeProvider>
      <Panel.Wrapper>
        <Text type="title" margin="b-16">{args.children}</Text>
        <Text>Este contenido tiene acceso a todos los tokens del tema.</Text>
      </Panel.Wrapper>
    </ThemeProvider>
  ),
};

export default meta;