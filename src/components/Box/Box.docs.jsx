import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { ThemeProvider } from "../ThemeProvider/ThemeProvider";
import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";

export const BoxDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Box
        </Text>

        <Text margin="b-16 x-8">
          El componente Box es un contenedor fundamental que proporciona un elemento base con control de espaciado (margin y padding). Es ideal para crear layouts, agrupar contenido y establecer el espaciado entre elementos de manera consistente.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Espaciado Consistente
          </Text>

          <Text>
            Utiliza el sistema de tokens de espaciado para mantener la consistencia visual en toda la aplicación.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Flexibilidad
          </Text>

          <Text>
            Acepta cualquier contenido React como children, permitiendo la composición de interfaces complejas.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Simplicidad
          </Text>

          <Text>
            Proporciona solo las propiedades esenciales de espaciado, manteniendo la API simple y enfocada.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Semántica Neutra
          </Text>

          <Text>
            Renderiza un div sin estilos específicos, permitiendo que sea usado como contenedor genérico sin interferir con el diseño.
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
          
          <Text margin="b-4">
            &bull; Usar tokens de espaciado del sistema (&quot;a-16&quot;, &quot;x-8 y-12&quot;)
          </Text>

          <Text margin="b-4">
            &bull; Combinar con otros componentes del Design System
          </Text>
          
          <Text margin="b-4">
            &bull; Usar como contenedor neutro para layouts
          </Text>
          
          <Text>
            &bull; Aplicar margins para separación entre elementos
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          
          <Text margin="b-4">
            &bull; Aplicar estilos CSS directos (usar styled-components cuando sea necesario)
          </Text>
          
          <Text margin="b-4">
            &bull; Usar valores de spacing hardcodeados
          </Text>
          
          <Text margin="b-4">
            &bull; Anidar múltiples Box sin propósito específico
          </Text>
          
          <Text>
            &bull; Usar Box cuando un componente específico sea más apropiado
          </Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};