import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const ButtonDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Button
        </Text>

        <Text margin="b-16 x-8">
          El componente Button es un elemento interactivo fundamental para desencadenar acciones en la interfaz. Proporciona múltiples variantes visuales, estados de carga, soporte para íconos y capacidades de personalización mientras mantiene accesibilidad y consistencia visual del Design System.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Jerarquía Visual Clara
          </Text>

          <Text>
            Ofrece tres variantes (filled, outlined, text) que establecen diferentes niveles de prominencia para organizar la importancia de las acciones en la interfaz.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Estados Interactivos
          </Text>

          <Text>
            Incluye estados claros de hover, active, disabled y loading para proporcionar feedback visual inmediato sobre la interactividad y el estado de las acciones.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Flexibilidad Funcional
          </Text>

          <Text>
            Soporta íconos, indicadores de disclosure, estados de carga, ancho completo y diferentes tipos semánticos HTML para adaptarse a múltiples casos de uso.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Accesibilidad Integrada
          </Text>

          <Text>
            Utiliza elementos button HTML semánticamente correctos con soporte para tipos de botón (button, submit, reset) y manejo adecuado de estados disabled.
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
            Semántica HTML
          </Text>
          
          <Text margin="b-8">
            Utiliza el elemento button HTML nativo con tipos semánticamente correctos (button, submit, reset) para máxima compatibilidad con tecnologías asistivas.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Estados Focusables
          </Text>
          
          <Text margin="b-8">
            Todos los botones son navegables por teclado con indicadores visuales de focus y soporte completo para Enter y Space.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Contraste Visual
          </Text>
          
          <Text margin="b-8">
            Los colores del sistema tema garantizan contraste suficiente en todos los estados para cumplir con estándares WCAG.
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>
          
          <Text key="rec-1" margin="b-4">&bull; Usar un solo botón filled por vista para mantener jerarquía clara</Text>
          <Text key="rec-2" margin="b-4">&bull; Agrupar botones relacionados con spacing consistente</Text>
          <Text key="rec-3" margin="b-4">&bull; Usar isLoading para operaciones que toman tiempo</Text>
          <Text key="rec-4" margin="b-4">&bull; Elegir íconos que refuercen el significado de la acción</Text>
          <Text key="rec-5" margin="b-4">&bull; Usar disclosure solo cuando realmente haya contenido desplegable</Text>
          <Text key="rec-6">&bull; Mantener labels claros y descriptivos de la acción</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          
          <Text key="avoid-1" margin="b-4">&bull; No usar múltiples botones filled en la misma vista</Text>
          <Text key="avoid-2" margin="b-4">&bull; No usar Button para navegación (usar links apropiados)</Text>
          <Text key="avoid-3" margin="b-4">&bull; No deshabilitar botones sin explicar por qué</Text>
          <Text key="avoid-4" margin="b-4">&bull; No usar íconos ambiguos o no relacionados con la acción</Text>
          <Text key="avoid-5" margin="b-4">&bull; No agrupar botones sin espaciado visual</Text>
          <Text key="avoid-6">&bull; No usar labels demasiado genéricos como &quot;Enviar&quot; o &quot;OK&quot;</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};