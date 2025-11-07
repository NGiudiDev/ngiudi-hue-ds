import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Box } from "../Box/Box";
import { Grid } from "../Grid/Grid";
import { IconButton } from "./IconButton";
import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const IconButtonDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          IconButton
        </Text>

        <Text margin="b-16 x-8">
          El componente IconButton es un botón circular interactivo que utiliza únicamente un ícono como representación visual. Está diseñado para acciones específicas y contextuales que no requieren texto descriptivo, proporcionando una interfaz limpia y eficiente en el uso del espacio.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Compacto y Eficiente
          </Text>

          <Text>
            Utiliza únicamente un ícono en un área circular de 38px, optimizando el espacio en interfaces densas mientras mantiene un área de interacción adecuada para accesibilidad.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Estados Visuales Claros
          </Text>

          <Text>
            Proporciona feedback visual inmediato mediante estados hover, active y disabled con cambios de color de fondo que indican claramente la interactividad del botón.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Contador Integrado
          </Text>

          <Text>
            Soporta un badge de notificación opcional en la esquina superior derecha para mostrar contadores (como notificaciones no leídas), limitando la visualización a &quot;+9&quot; para mantener la estética compacta.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Variantes de Color
          </Text>

          <Text>
            Ofrece tres variantes de color (primary, black, white) que se adaptan a diferentes fondos y contextos visuales, manteniendo contraste adecuado en todos los casos.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Canvas />

        <Controls />

        <Text margin="b-16" type="title">
          Contador de Notificaciones
        </Text>

        <Text margin="b-8 x-8">
          El IconButton puede mostrar un contador de notificaciones en la esquina superior derecha:
        </Text>

        <Panel.Wrapper margin="b-24 x-8">
          <Panel.Content>
            <Grid.Container>
              <Grid.Item padding="a-16" xs={6} md={3}>
                <Text align="center" margin="b-8" type="captionRegular">
                  Sin contador
                </Text>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <IconButton
                    count={0}
                    icon={{ name: "home" }}
                    onClick={() => {}}
                  />
                </Box>
              </Grid.Item>

              <Grid.Item padding="a-16" xs={6} md={3}>
                <Text align="center" margin="b-8" type="captionRegular">
                  1 notificación
                </Text>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <IconButton
                    count={1}
                    icon={{ name: "home" }}
                    onClick={() => {}}
                  />
                </Box>
              </Grid.Item>

              <Grid.Item padding="a-16" xs={6} md={3}>
                <Text align="center" margin="b-8" type="captionRegular">
                  5 notificaciones
                </Text>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <IconButton
                    count={5}
                    icon={{ name: "home" }}
                    onClick={() => {}}
                  />
                </Box>
              </Grid.Item>

              <Grid.Item padding="a-16" xs={6} md={3}>
                <Text align="center" margin="b-8" type="captionRegular">
                  Más de 9
                </Text>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <IconButton
                    count={15}
                    icon={{ name: "home" }}
                    onClick={() => {}}
                  />
                </Box>
              </Grid.Item>
            </Grid.Container>
          </Panel.Content>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Accesibilidad
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Semántica HTML
          </Text>
          
          <Text margin="b-8">
            Utiliza el elemento button HTML nativo con tipos semánticamente correctos (button, submit) para máxima compatibilidad con tecnologías asistivas.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Área de Interacción
          </Text>
          
          <Text margin="b-8">
            Mantiene un área de interacción de 38x38px que cumple con las recomendaciones de tamaño mínimo para touch targets (mínimo 44x44px en iOS, 48x48px en Android). Considerar aumentar el área si es necesario.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Etiquetas Descriptivas
          </Text>
          
          <Text margin="b-8">
            IMPORTANTE: Siempre agregar un atributo aria-label descriptivo al IconButton para usuarios de lectores de pantalla, ya que no tiene texto visible. Ejemplo: aria-label=&quot;Abrir menú de notificaciones&quot;.
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>
          
          <Text margin="b-4">&bull; Usar íconos universalmente reconocidos (home, search, menu, etc.)</Text>
          <Text margin="b-4">&bull; Siempre incluir aria-label descriptivo para accesibilidad</Text>
          <Text margin="b-4">&bull; Usar el contador solo para notificaciones o conteos relevantes</Text>
          <Text margin="b-4">&bull; Elegir la variante de color apropiada según el fondo</Text>
          <Text margin="b-4">&bull; Usar tooltips para aclarar la función del botón cuando sea necesario</Text>
          <Text>&bull; Deshabilitar el botón solo cuando la acción no esté disponible temporalmente</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          
          <Text margin="b-4">&bull; No usar íconos ambiguos o poco conocidos</Text>
          <Text margin="b-4">&bull; No omitir aria-label (crítico para accesibilidad)</Text>
          <Text margin="b-4">&bull; No usar el contador para información que no sea numérica</Text>
          <Text margin="b-4">&bull; No usar variantes de color con poco contraste respecto al fondo</Text>
          <Text margin="b-4">&bull; No agrupar demasiados IconButtons sin separación visual</Text>
          <Text>&bull; No usar IconButton cuando el texto sea necesario para claridad</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};