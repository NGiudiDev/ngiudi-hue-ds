import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { ThemeDS } from "../ThemeDS/ThemeDS";
import { Text } from "../Text/Text";

export const IconDocs = () => {
  return (
    <Unstyled>
      <ThemeDS>
        <Text margin="b-16" type="pageTitle">
          Icon
        </Text>

        <Text margin="b-16">
          Los íconos son representaciones visuales que se utilizan para comunicar las características esenciales de una acción, un objeto o un concepto específico. Deben ser simples y fácilmente identificables.
        </Text>

        <Canvas />

         <Text margin="b-24" type="title">
          Principles
        </Text>

        <div style={{ border: "1px solid #e1e1e1", borderRadius: "8px", padding: "16px", marginBottom: "16px", backgroundColor: "#f8f9fa" }}>
          <Text margin="b-8" type="bodySemibold">
            ▪️ Legible
          </Text>

          <Text>
            Deben tener la menor cantidad de detalles posibles y comunicar la idea más básica de un concepto.
          </Text>
        </div>

        <div style={{ border: "1px solid #e1e1e1", borderRadius: "8px", padding: "16px", marginBottom: "16px", backgroundColor: "#f8f9fa" }}>
          <Text margin="b-8" type="bodySemibold">
            ▪️ Consistente
          </Text>

          <Text>
            Un sistema de íconos debe ser consistente en su trazo, tamaño y nivel de detalles.
          </Text>
        </div>

        <div style={{ border: "1px solid #e1e1e1", borderRadius: "8px", padding: "16px", marginBottom: "16px", backgroundColor: "#f8f9fa" }}>
          <Text margin="b-8" type="bodySemibold">
            ▪️ Escaneable
          </Text>

          <Text>
            Permiten ayudar al usuario a escanear la interfaz. En general acompañan a un texto.
          </Text>
        </div>

        <div style={{ border: "1px solid #e1e1e1", borderRadius: "8px", padding: "16px", marginBottom: "32px", backgroundColor: "#f8f9fa" }}>
          <Text margin="b-8" type="bodySemibold">
            ▪️ Representativo
          </Text>

          <Text>
            Siempre que exista una convención para un concepto se debe respetar. Por ejemplo, el ícono &quot;trash&quot; para la acción &quot;delete&quot;. Para algunos conceptos no existe una convención, en esos casos se debe usar un ícono representativo.
          </Text>
        </div>

        <Text type="title">
          Propiedades
        </Text>

        <Controls />
      </ThemeDS>
    </Unstyled>
  );
};