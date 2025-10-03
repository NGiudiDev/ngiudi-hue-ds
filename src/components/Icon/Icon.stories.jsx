import React from "react";

import { ThemeDS } from "../ThemeDS/ThemeDS";
import { Icon } from "../Icon/Icon";

import { icons } from "../../theme/icons";

const meta = {
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Define el color del ícono. Acepta tokens de color.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del ícono. Acepta tokens de espaciado.",
    },
    name: {
      control: { type: "text" },
      description: "Especifica el nombre del ícono de FontAwesome a mostrar.",
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
  tags: ["autodocs"],
  title: "Components/Icon",
};

export const Colors = () => {
  console.log();

  return (
    <ThemeDS>
      <div>
        <Icon color="primary" margin="r-32" size="spot" />
        <Icon color="secondary" margin="r-32" size="spot" />
        <Icon color="tertiary" size="spot" />
      </div>

      <div>
        <Icon margin="r-32" size="spot" />
        <Icon margin="r-32" size="major" />
        <Icon margin="r-32" size="minor" />
      </div>

      <div>
        <Icon name="spinner" spin />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
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
              padding: "12px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <Icon name={name} />

            <span
              style={{
                fontSize: "12px",
                marginTop: "8px",
                color: "#666",
                wordBreak: "break-word",
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

export default meta;