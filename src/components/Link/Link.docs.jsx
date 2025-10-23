import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const LinkDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Link
        </Text>

        <Text margin="b-16 x-8">
          El componente Link proporciona una forma consistente de crear enlaces navegables
          dentro del design system. Soporta diferentes estilos tipográficos, navegación
          en nueva pestaña y mantiene los estados de interacción estándar.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Accesibilidad
          </Text>
          <Text>
            Los enlaces incluyen automáticamente los atributos de seguridad necesarios
            cuando se abren en nueva pestaña (rel=&quot;noopener noreferrer&quot;).
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Consistencia Visual
          </Text>
          <Text>
            Utiliza los tokens tipográficos del sistema para mantener coherencia
            con el resto de componentes de texto.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Estados Interactivos
          </Text>
          <Text>
            Proporciona estados claros para hover, active y visited siguiendo
            las convenciones web estándar.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Canvas />
        
        <Controls />

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>
          <Text margin="b-4">&bull; Usar openInNewTab=true para enlaces externos o documentos</Text>
          <Text margin="b-4">&bull; Elegir el tipo tipográfico apropiado según el contexto</Text>
          <Text margin="b-4">&bull; Proporcionar texto descriptivo que indique el destino</Text>
          <Text margin="b-4">&bull; Usar bodySemibold para enlaces importantes o call-to-action</Text>
          <Text margin="b-4">&bull; Usar captionRegular para enlaces secundarios o de pie de página</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          <Text margin="b-4">&bull; Usar &quot;Clic aquí&quot; o texto genérico poco descriptivo</Text>
          <Text margin="b-4">&bull; Abrir enlaces internos en nueva pestaña sin motivo</Text>
          <Text margin="b-4">&bull; Usar tipos tipográficos inconsistentes con el contexto</Text>
          <Text margin="b-4">&bull; Enlaces sin href válido (usar Button para acciones)</Text>
          <Text margin="b-4">&bull; Sobrecargar una página con demasiados enlaces destacados</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};