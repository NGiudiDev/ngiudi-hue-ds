import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Grid } from "../Grid/Grid";
import { Icon } from "./Icon";
import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

import { icons } from "../../theme/icons";

export const IconDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
          <Text margin="b-16" type="pageTitle">
            Icon
          </Text>

          <Text margin="b-16 x-8">
            Los íconos son representaciones visuales que se utilizan para comunicar las características esenciales de una acción, un objeto o un concepto específico. Deben ser simples y fácilmente identificables.
          </Text>

          <Text margin="b-24" type="title">
            Principios
          </Text>

          <Panel.Wrapper margin="b-16 x-8">
            <Text margin="b-8" type="bodySemibold">
              Legible
            </Text>

            <Text>
              Deben tener la menor cantidad de detalles posibles y comunicar la idea más básica de un concepto.
            </Text>
          </Panel.Wrapper>

          <Panel.Wrapper margin="b-16 x-8">
            <Text margin="b-8" type="bodySemibold">
              Consistente
            </Text>

            <Text>
              Un sistema de íconos debe ser consistente en su trazo, tamaño y nivel de detalles.
            </Text>
          </Panel.Wrapper>

          <Panel.Wrapper margin="b-16 x-8">
            <Text margin="b-8" type="bodySemibold">
              Escaneable
            </Text>

            <Text>
              Permiten ayudar al usuario a escanear la interfaz. En general acompañan a un texto.
            </Text>
          </Panel.Wrapper>

          <Panel.Wrapper margin="b-32 x-8">
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

          <Text margin="x-8">
            A continuación se muestra el listado completo de íconos disponibles en el sistema. Si necesitas un ícono que no está en la lista, por favor contacta al equipo de diseño.
          </Text>

          <Grid.Container padding="t-24">
            {Object.keys(icons).map((name) => (
              <Grid.Item
                align="center"
                key={`container-icon-${name}`}
                padding="a-16"
                xs={6}
                sm={4}
              >
                <Icon name={name} size="major" />

                <Text align="center" margin="t-16" type="captionRegular">
                  {name}
                </Text>
              </Grid.Item>
            ))}
          </Grid.Container>
      </Unstyled>
    </ThemeProvider>
  );
};