import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const DividerDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Divider
        </Text>

        <Text margin="b-16 x-8">
          El componente Divider es un elemento visual utilizado para crear separaciones claras entre secciones de contenido. Proporciona una línea horizontal que ayuda a organizar la información y mejorar la legibilidad, manteniendo la coherencia visual del Design System a través de tokens de color y espaciado.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Separación Visual
          </Text>

          <Text>
            Proporciona una separación clara y sutil entre secciones de contenido, mejorando la organización visual sin crear disrupciones abruptas.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Consistencia Cromática
          </Text>

          <Text>
            Utiliza tokens de color del sistema tema para mantener coherencia visual y permitir adaptación a diferentes contextos y estados.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Espaciado Sistemático
          </Text>

          <Text>
            Integra el sistema de spacing unificado para controlar la distancia con elementos adyacentes de manera precisa y consistente.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Semántica HTML
          </Text>

          <Text>
            Utiliza el elemento HTML hr (horizontal rule) semánticamente correcto, proporcionando significado estructural además del aspecto visual.
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
            Divider utiliza el elemento hr (horizontal rule) que tiene significado semántico nativo para separar contenido temáticamente relacionado.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Lectores de Pantalla
          </Text>
          
          <Text margin="b-8">
            Los lectores de pantalla reconocen automáticamente el elemento hr como un separador, proporcionando contexto de navegación a usuarios con discapacidades visuales.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Contraste Visual
          </Text>
          
          <Text margin="b-8">
            Los tokens de color del sistema garantizan suficiente contraste para que el divider sea perceptible sin ser intrusivo.
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>
          
          <Text margin="b-4">&bull; Usar tokens de color del tema para mantener consistencia</Text>
          <Text margin="b-4">&bull; Aplicar espaciado simétrico (y-8, y-16) para separaciones balanceadas</Text>
          <Text margin="b-4">&bull; Usar colores sutiles (black.surface, black.lowEmphasis) para separaciones generales</Text>
          <Text margin="b-4">&bull; Reservar colores de acento para divisores temáticos o decorativos</Text>
          <Text margin="b-4">&bull; Mantener consistencia en el espaciado dentro de la misma interfaz</Text>
          <Text>&bull; Considerar la jerarquía visual al elegir grosor visual (color)</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          
          <Text margin="b-4">&bull; No usar divisores innecesarios que creen ruido visual</Text>
          <Text margin="b-4">&bull; No combinar múltiples colores de divider en la misma sección</Text>
          <Text margin="b-4">&bull; No usar espaciado inconsistente entre divisores similares</Text>
          <Text margin="b-4">&bull; No usar colores de alta saturación para separaciones sutiles</Text>
          <Text margin="b-4">&bull; No omitir espaciado cuando el divider necesita respirar</Text>
          <Text>&bull; No usar divider como elemento decorativo primario</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};