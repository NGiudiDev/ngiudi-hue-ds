import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { ThemeDS } from "../ThemeDS/ThemeDS";
import { Panel } from "../Panel/Panel";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import { icons } from "../../theme/icons";

export const IconDocs = () => {
  return (
    <ThemeDS>
      <Unstyled>
          <Text margin="b-16" type="pageTitle">
            Icon
          </Text>

          <Text margin="b-16">
            Los íconos son representaciones visuales que se utilizan para comunicar las características esenciales de una acción, un objeto o un concepto específico. Deben ser simples y fácilmente identificables.
          </Text>

          <Text margin="b-24" type="title">
            Principios
          </Text>

          <Panel.Wrapper margin="b-16">
            <Text margin="b-8" type="bodySemibold">
              Legible
            </Text>

            <Text>
              Deben tener la menor cantidad de detalles posibles y comunicar la idea más básica de un concepto.
            </Text>
          </Panel.Wrapper>

          <Panel.Wrapper margin="b-16">
            <Text margin="b-8" type="bodySemibold">
              Consistente
            </Text>

            <Text>
              Un sistema de íconos debe ser consistente en su trazo, tamaño y nivel de detalles.
            </Text>
          </Panel.Wrapper>

          <Panel.Wrapper margin="b-16">
            <Text margin="b-8" type="bodySemibold">
              Escaneable
            </Text>

            <Text>
              Permiten ayudar al usuario a escanear la interfaz. En general acompañan a un texto.
            </Text>
          </Panel.Wrapper>

          <Panel.Wrapper margin="b-32">
            <Text margin="b-8" type="bodySemibold">
              Representativo
            </Text>

            <Text>
              Siempre que exista una convención para un concepto se debe respetar. Por ejemplo, el ícono &quot;trash&quot; para la acción &quot;delete&quot;. Para algunos conceptos no existe una convención, en esos casos se debe usar un ícono representativo.
            </Text>
          </Panel.Wrapper>

          <Text type="title">
            Propiedades
          </Text>

          <Canvas />

          <Controls />

          <Text margin="b-16" type="title">
            Listado de íconos
          </Text>

          <Text>
            A continuación se muestra el listado completo de íconos disponibles en el sistema. Si necesitas un ícono que no está en la lista, por favor contacta al equipo de diseño.
          </Text>

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
                key={`container-icon-${name}`}
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  padding: "16px",
                }}
              >
                <Icon name={name} size="major" />

                <Text align="center" margin="t-16" type="captionRegular">
                  {name}
                </Text>
              </div>
            ))}
          </div>
      </Unstyled>
    </ThemeDS>
  );
};