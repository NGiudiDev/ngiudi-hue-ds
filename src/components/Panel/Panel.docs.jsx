import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "./Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const PanelDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Panel
        </Text>

        <Text margin="b-16 x-8">
          El componente Panel proporciona un contenedor versátil con fondo, borde y espaciado para agrupar y organizar contenido. Utiliza el patrón de composición con <Text as="span" type="bodySemibold">Panel.Wrapper</Text> y <Text as="span" type="bodySemibold">Panel.Footer</Text> para crear interfaces estructuradas y visualmente consistentes.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Separación visual
          </Text>

          <Text>
            Crea separaciones claras entre diferentes secciones de contenido mediante fondos y bordes consistentes.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Interactividad opcional
          </Text>

          <Text>
            Puede funcionar como contenedor estático o como elemento interactivo con feedback visual para clicks.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Flexibilidad de layout
          </Text>

          <Text>
            Soporta contenido de altura variable y puede expandirse para ocupar toda la altura disponible cuando sea necesario.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Composición modular
          </Text>

          <Text>
            El footer opcional permite crear layouts estructurados con contenido principal y elementos secundarios claramente diferenciados.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Canvas />

        <Controls />

        <Text margin="b-16" type="title">
          Componentes
        </Text>

        <Text margin="b-16" type="bodySemibold">
          Panel.Wrapper
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8">
            Contenedor principal que define el área del panel con fondo, borde y espaciado.
          </Text>
          
          <Text type="captionSemibold" margin="b-4">
            Props disponibles:
          </Text>
          
          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">children</Text>: Contenido del panel
          </Text>
          
          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">borderless</Text>: Elimina el borde (default: false)
          </Text>
          
          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">isFullHeight</Text>: Ocupa toda la altura disponible (default: false)
          </Text>
          
          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">onClick</Text>: Función de click (activa estilos interactivos)
          </Text>
          
          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">margin</Text>: Espaciado externo (default: &quot;a-0&quot;)
          </Text>
          
          <Text type="captionRegular">
            &bull; <Text as="span" type="captionSemibold">padding</Text>: Espaciado interno (default: &quot;a-16&quot;)
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="bodySemibold">
          Panel.Footer
        </Text>

        <Panel.Wrapper margin="b-24 x-8">
          <Text margin="b-8">
            Sección opcional que se posiciona automáticamente en la parte inferior del panel.
          </Text>
          
          <Text type="captionSemibold" margin="b-4">
            Props disponibles:
          </Text>

          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">children</Text>: Contenido del footer
          </Text>
          
          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">margin</Text>: Espaciado externo (default: &quot;a-0&quot;)
          </Text>
          
          <Text type="captionRegular">
            &bull; <Text as="span" type="captionSemibold">padding</Text>: Espaciado interno (default: &quot;a-0&quot;)
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>

          <Text margin="b-4">
            &bull; Usar Panel.Wrapper para agrupar contenido relacionado
          </Text>

          <Text margin="b-4">
            &bull; Aplicar onClick solo cuando el panel completo sea interactivo
          </Text>

          <Text margin="b-4">
            &bull; Usar Panel.Footer para acciones o información secundaria
          </Text>

          <Text margin="b-4">
            &bull; Combinar con Grid para layouts responsivos
          </Text>
            
          <Text margin="b-4">
            &bull; Usar isFullHeight en contenedores de altura fija
          </Text>

          <Text>
            &bull; Mantener consistencia en el uso de borderless según el contexto
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          
          <Text margin="b-4">
            &bull; No anidar Panel.Wrapper dentro de Panel.Wrapper sin propósito claro
          </Text>
          
          <Text margin="b-4">
            &bull; No usar onClick para elementos específicos dentro del panel (usar botones)
          </Text>
          
          <Text margin="b-4">
            &bull; No aplicar estilos CSS directos al Panel (usar props del componente)
          </Text>
          
          <Text margin="b-4">
            &bull; No usar Panel para layouts simples donde Box sería suficiente
          </Text>
          
          <Text>
            &bull; No sobrecargar el Panel con demasiado contenido sin estructura
          </Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};