import React from "react";

import { StepsDocs } from "./Steps.docs";

import { Steps } from "./Steps";

const meta = {
  argTypes: {
    labels: {
      control: { type: "object" },
      description: "Array de strings con las etiquetas descriptivas para cada paso. Si se omite, los pasos se muestran solo con números.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del componente. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-16 y-8').",
    },
    step: {
      control: { type: "number" },
      description: "Número del paso actual en el que se encuentra el usuario (1-indexed). Los pasos menores o iguales a este valor se muestran como completados.",
    },
    steps: {
      control: { type: "number" },
      description: "Número total de pasos en el proceso. Define cuántos círculos numerados se renderizarán.",
    },
  },
  component: Steps,
  parameters: {
    docs: {
      page: StepsDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Steps",
};

// Playground interactivo para probar el Panel
export const Playground = {
  args: {
    labels: ["Vendedor", "Productos", "Envío", "Pago", "Fin"],
    margin: "a-0",
    step: 1,
    steps: 5,
  },
  render: (args) => (
    <Steps
      labels={args.labels}
      margin={args.margin}
      step={args.step}
      steps={args.steps}
    />
  ),
};

export default meta;