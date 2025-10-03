import React from "react";

import { IconDocs } from "./Icon.docs";

import { ThemeDS } from "../ThemeDS/ThemeDS";
import { Icon } from "../Icon/Icon";

import { icons } from "../../theme/icons";

const meta = {
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Define el color del ícono. Acepta tokens de color del tema.",
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
    name: "home",
    size: "major",
    color: "black", 
    spin: false,
    margin: "a-0",
  },
  render: (args) => (
    <ThemeDS>
      <Icon {...args} />
    </ThemeDS>
  ),
};

// Story para mostrar todos los iconos disponibles
/* export const TodosLosIconos = () => {
  return (
    <ThemeDS>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "16px",
          padding: "20px",
        }}
      >
        {Object.keys(icons).map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              textAlign: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f5f5f5";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Icon name={name} size="major" />
            <span
              style={{
                fontSize: "11px",
                marginTop: "8px",
                color: "#666",
                wordBreak: "break-word",
                fontWeight: "500",
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </ThemeDS>
  );
};
 */
export default meta;