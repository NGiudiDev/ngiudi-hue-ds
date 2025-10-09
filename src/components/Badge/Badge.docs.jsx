import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const BadgeDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Badge
        </Text>

        <Text margin="b-16 x-8">
          El componente Badge es un elemento visual compacto utilizado para mostrar etiquetas, estados, notificaciones o información adicional de manera prominente. Está diseñado para ser flexible en términos de color, contenido y posicionamiento, manteniendo siempre la legibilidad y consistencia visual del Design System.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Visibilidad y Contraste
          </Text>

          <Text>
            Utiliza colores de fondo del sistema de tokens con texto contrastante para garantizar legibilidad y accesibilidad en todos los casos de uso.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Composición Interna
          </Text>

          <Text>
            Integra el componente Text internamente para aprovechar el sistema tipográfico y mantener consistencia con el resto de componentes.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Flexibilidad de Contenido
          </Text>

          <Text>
            Soporta texto, números, iconos o cualquier contenido React, adaptándose automáticamente al tamaño del contenido interno.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Espaciado Sistemático
          </Text>

          <Text>
            Utiliza el sistema de spacing unificado para padding y margin, garantizando alineación correcta con otros componentes del Design System.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Canvas />

        <Controls />

        <Text margin="b-16" type="title">
          Accesibilidad
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Contraste de Color
          </Text>
          
          <Text margin="b-8">
            Badge utiliza combinaciones de color predefinidas que cumplen con los estándares WCAG de contraste. 
            El texto blanco sobre fondos oscuros y texto oscuro sobre fondos claros garantizan legibilidad.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Semántica
          </Text>
          
          <Text margin="b-8">
            Badge renderiza como un div con display inline-flex, siendo apropiado para contenido informativo. 
            Para badges que requieren semántica específica, considera usar role o aria-label cuando sea necesario.
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>
          
          <Text margin="b-4">&bull; Usar tokens de color del tema en lugar de colores hardcodeados</Text>
          <Text margin="b-4">&bull; Mantener el contenido conciso (1-3 palabras o números cortos)</Text>
          <Text margin="b-4">&bull; Utilizar colores semánticamente correctos (success para éxito, error para errores)</Text>
          <Text margin="b-4">&bull; Agrupar badges relacionados con spacing consistente</Text>
          <Text margin="b-4">&bull; Personalizar textProps cuando necesites tipografía específica</Text>
          <Text>&bull; Combinar con otros componentes usando el sistema de spacing</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          
          <Text margin="b-4">&bull; No usar Badge para contenido largo o párrafos</Text>
          <Text margin="b-4">&bull; No combinar múltiples badges sin espaciado adecuado</Text>
          <Text margin="b-4">&bull; No usar colores que no contrasten suficientemente con el texto</Text>
          <Text margin="b-4">&bull; No crear badges demasiado pequeños que comprometan la legibilidad</Text>
          <Text>&bull; No usar Badge como botón (usar Button component en su lugar)</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};